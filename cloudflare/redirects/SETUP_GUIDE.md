# 🔄 دليل إعداد التحويل — prokr.com → prokr.co عبر Cloudflare

## المتطلبات
- حساب Cloudflare (الخطة المجانية كافية)
- وصول لإدارة DNS لنطاق prokr.com

---

## الخطوة 1: إضافة prokr.com في Cloudflare

1. ادخل [dash.cloudflare.com](https://dash.cloudflare.com)
2. اضغط **"Add a site"**
3. أدخل `prokr.com`
4. اختر خطة **Free**
5. Cloudflare سيعرض nameservers جديدة

### إعداد DNS
أضف سجل A وهمي فقط (للتفعيل):

| النوع | الاسم | المحتوى | البروكسي | TTL |
|-------|-------|---------|---------|-----|
| A | prokr.com | 192.0.2.1 | ☁️ Proxied | Auto |
| CNAME | www | prokr.com | ☁️ Proxied | Auto |

> ⚠️ العنوان `192.0.2.1` هو عنوان وهمي (RFC 5737) — لن يخدم أي محتوى.
> Cloudflare سيعترض الطلب ويحوّله قبل أن يصل لهذا العنوان.

### تحديث Nameservers
1. اذهب لمسجل النطاق (GoDaddy / Namecheap / إلخ)
2. غيّر الـ nameservers إلى ما يقدمه Cloudflare
3. انتظر 5-30 دقيقة للنشر

### إعداد SSL
1. **SSL/TLS** → **Overview** → اختر **Full**
2. **SSL/TLS** → **Edge Certificates** → فعّل **Always Use HTTPS**

---

## الخطوة 2: رفع Bulk Redirects

### 2.1 إنشاء Redirect List

1. اذهب إلى **Rules** → **Redirect Rules** (القائمة الجانبية)
2. اضغط على تبويب **"Bulk Redirects"**
3. اضغط **"Create Bulk Redirect List"**
4. سمّ القائمة: `prokr-com-to-co`
5. اضغط **"Upload CSV"**
6. ارفع الملف: `cloudflare/redirects/bulk-redirects.csv`
7. راجع المعاينة — يجب أن تظهر **2,015 إدخال**
8. اضغط **"Save"**

### 2.2 إنشاء Bulk Redirect Rule

1. من صفحة **Bulk Redirects** → اضغط **"Create Bulk Redirect Rule"**
2. سمّ القاعدة: `prokr.com → prokr.co migration`
3. اختر القائمة: `prokr-com-to-co`
4. اضغط **"Save and Deploy"**

---

## الخطوة 3: إضافة Catch-all Rule

هذه قاعدة تلتقط أي رابط لم يُغطى في الـ Bulk List:

1. اذهب إلى **Rules** → **Redirect Rules** → تبويب **"Single Redirects"**
2. اضغط **"Create Rule"**
3. أدخل:
   - **Rule name**: `prokr.com catch-all`
   - **When incoming requests match**:
     - Field: `Hostname`
     - Operator: `equals`
     - Value: `prokr.com`
   - **Then**:
     - Type: `Static`
     - URL: `https://prokr.co/corporate/acquisition`
     - Status code: `301`
     - ✅ Preserve query string: No
4. اضغط **"Deploy"**

### إضافة قاعدة www أيضاً:
كرر نفس الخطوة لكن مع:
- Value: `www.prokr.com`
- URL: `https://prokr.co/corporate/acquisition`

---

## الخطوة 4: التحقق

### اختبار سريع
```bash
# الصفحة الرئيسية
curl -sI https://prokr.com/ | grep -i "location"
# يجب أن يظهر: location: https://prokr.co/

# صفحة مدينة
curl -sI https://prokr.com/saudi/riyadh | grep -i "location"  
# يجب أن يظهر: location: https://prokr.co/riyadh

# خدمة في مدينة
curl -sI https://prokr.com/saudi/jeddah/cleaning/deep-cleaning | grep -i "location"
# يجب أن يظهر: location: https://prokr.co/jeddah/deep-cleaning

# صفحة ثابتة
curl -sI https://prokr.com/about | grep -i "location"
# يجب أن يظهر: location: https://prokr.co/about-us

# مدونة
curl -sI https://prokr.com/blog | grep -i "location"
# يجب أن يظهر: location: https://prokr.co/blog
```

### اختبار شامل (20 عينة)
```bash
urls=(
  "https://prokr.com/"
  "https://prokr.com/about"
  "https://prokr.com/contact"
  "https://prokr.com/privacy"
  "https://prokr.com/terms"
  "https://prokr.com/saudi/riyadh"
  "https://prokr.com/saudi/jeddah/pest-control/termites"
  "https://prokr.com/saudi/dammam/cleaning"
  "https://prokr.com/saudi/khobar/leaks-plumbing"
  "https://prokr.com/saudi/buraydah/moving"
  "https://prokr.com/pricing/ac/riyadh"
  "https://prokr.com/deals/pest-control/jeddah"
  "https://prokr.com/faq/cleaning/makkah"
  "https://prokr.com/emergency/leaks-plumbing/dammam"
  "https://prokr.com/blog"
  "https://prokr.com/blog/best-pest-control-methods-saudi-arabia"
  "https://prokr.com/services/moving"
  "https://prokr.com/coverage"
  "https://prokr.com/providers"
  "https://prokr.com/saudi"
)

for url in "${urls[@]}"; do
  redirect=$(curl -sI "$url" | grep -i "^location:" | awk '{print $2}' | tr -d '\r')
  echo "$url → $redirect"
done
```

---

## الخطوة 5: إعداد Google Search Console

> ⚠️ مهم جداً لنقل SEO equity

1. ادخل [Google Search Console](https://search.google.com/search-console)
2. أضف property جديد لـ `prokr.com` (إن لم يكن موجوداً)
3. اذهب إلى **Settings** → **Change of Address**
4. اختر `prokr.co` كالموقع الجديد
5. أكّد التحويل

---

## ملاحظات مهمة

- ✅ **الترتيب مهم**: Bulk Redirects تُنفّذ **قبل** Single Redirect Rules
- ✅ **301 دائم**: جميع التحويلات 301 (permanent) لنقل link equity
- ✅ **لا تحذف القواعد**: أبقِ التحويلات نشطة **12+ شهر** على الأقل
- ✅ **راقب 404**: تحقق من Search Console أسبوعياً لأول 3 أشهر

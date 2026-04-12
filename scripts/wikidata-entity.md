# Wikidata Entity — Prokr.co

## Entity Data (Ready to paste into wikidata.org)

### Labels
- **Arabic (ar)**: دليل بروكر للخدمات المنزلية
- **English (en)**: Prokr Home Services Directory

### Descriptions
- **Arabic (ar)**: أكبر دليل إلكتروني للخدمات المنزلية في المملكة العربية السعودية
- **English (en)**: Largest online home services directory in Saudi Arabia

### Aliases
- **Arabic**: بروكر, شبكة بروكر, Prokr.co
- **English**: Prokr, Prokr.co, Prokr Directory

### Statements (Properties)
| Property | Value |
|----------|-------|
| P31 (instance of) | Q35127 (website) |
| P17 (country) | Q851 (Saudi Arabia) |
| P856 (official website) | https://prokr.co |
| P571 (inception) | 2024 |
| P407 (language) | Q13955 (Arabic) |
| P31 (instance of) | Q1002697 (business directory) |
| P452 (industry) | Q7397 (software) |
| P2002 (Twitter username) | prokr_sa |
| P2003 (Instagram username) | prokr_sa |
| P2013 (Facebook ID) | prokr.sa |

---

## After Creating the Entity

Once you create the Wikidata entity and get the Q-ID (e.g., Q123456789):

### Step 1: Update `ProkrOrganizationJsonLd.tsx`

Find this line in `src/components/schema/ProkrOrganizationJsonLd.tsx`:

```
// Wikidata will be added here after entity creation
```

Replace with:
```
'https://www.wikidata.org/wiki/Q123456789',
```

### Step 2: Rebuild & Deploy
```bash
npm run build && git add -A && git commit -m "feat(seo): Wikidata Q-ID integration" && git push
```

---

## How to Create on Wikidata

1. Go to https://www.wikidata.org/wiki/Special:NewItem
2. Fill in the Labels, Descriptions, Aliases from above
3. Click "Create"
4. Add each Statement from the table above
5. Copy the Q-ID from the URL
6. Come back and update the code as described above

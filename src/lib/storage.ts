import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

/**
 * Generate a unique short code for advertiser URLs
 * @param length Length of the code (default: 6)
 * @returns Random alphanumeric string
 */
export function generateShortCode(length = 6): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

/**
 * Upload a file to Firebase Storage (for authenticated users)
 * @param file The file to upload
 * @param path The storage path (e.g., 'logos/company-name')
 * @returns Download URL of the uploaded file
 */
export async function uploadFile(file: File, path: string): Promise<string> {
    try {
        // Create a unique filename with timestamp
        const timestamp = Date.now();
        const extension = file.name.split('.').pop() || 'jpg';
        const filename = `${path}-${timestamp}.${extension}`;

        // Create storage reference
        const storageRef = ref(storage, `advertisers/${filename}`);

        // Upload the file
        const snapshot = await uploadBytes(storageRef, file);

        // Get the download URL
        const downloadURL = await getDownloadURL(snapshot.ref);

        return downloadURL;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw new Error('فشل رفع الملف. يرجى المحاولة مرة أخرى.');
    }
}

/**
 * Upload a file to public requests folder (no auth required)
 * @param file The file to upload
 * @param requestId Unique identifier for the request
 * @param index File index (for gallery images)
 * @returns Download URL of the uploaded file
 */
export async function uploadPublicFile(file: File, requestId: string, index: number = 0): Promise<string> {
    try {
        // Create a unique filename with timestamp
        const timestamp = Date.now();
        const extension = file.name.split('.').pop() || 'jpg';
        const filename = `${requestId}/${index}-${timestamp}.${extension}`;

        // Create storage reference in requests folder (public)
        const storageRef = ref(storage, `requests/${filename}`);

        // Upload the file
        const snapshot = await uploadBytes(storageRef, file);

        // Get the download URL
        const downloadURL = await getDownloadURL(snapshot.ref);

        return downloadURL;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw new Error('فشل رفع الملف. يرجى المحاولة مرة أخرى.');
    }
}

/**
 * Upload a logo to Firebase Storage (authenticated)
 * @param file The logo file
 * @param businessName The business name for path generation
 * @returns Download URL of the uploaded logo
 */
export async function uploadLogo(file: File, businessName: string): Promise<string> {
    const safeName = businessName.replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, '-').substring(0, 50);
    return uploadFile(file, `logos/${safeName}`);
}

/**
 * Upload a logo to public requests folder (no auth required)
 * @param file The logo file
 * @param requestId Unique identifier for the request
 * @returns Download URL of the uploaded logo
 */
export async function uploadPublicLogo(file: File, requestId: string): Promise<string> {
    return uploadPublicFile(file, requestId, 0);
}

/**
 * Upload multiple gallery images (authenticated)
 * @param files Array of files to upload
 * @param businessName The business name for path generation
 * @returns Array of download URLs
 */
export async function uploadGallery(files: File[], businessName: string): Promise<string[]> {
    const safeName = businessName.replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, '-').substring(0, 50);
    const uploadPromises = files.map((file, index) =>
        uploadFile(file, `gallery/${safeName}/${index}`)
    );
    return Promise.all(uploadPromises);
}

/**
 * Upload multiple gallery images to public requests folder (no auth required)
 * @param files Array of files to upload
 * @param requestId Unique identifier for the request
 * @returns Array of download URLs
 */
export async function uploadPublicGallery(files: File[], requestId: string): Promise<string[]> {
    const uploadPromises = files.map((file, index) =>
        uploadPublicFile(file, requestId, index + 1) // Start from 1 (0 is logo)
    );
    return Promise.all(uploadPromises);
}

/**
 * Validate file before upload
 * @param file File to validate
 * @param maxSizeMB Maximum size in MB
 * @param allowedTypes Allowed MIME types
 */
export function validateFile(
    file: File,
    maxSizeMB = 5,
    allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
): { valid: boolean; error?: string } {
    // Check file size
    const maxBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxBytes) {
        return { valid: false, error: `حجم الملف يتجاوز ${maxSizeMB} ميجابايت` };
    }

    // Check file type
    if (!allowedTypes.includes(file.type)) {
        return { valid: false, error: 'نوع الملف غير مدعوم. يرجى استخدام JPG, PNG, أو WebP' };
    }

    return { valid: true };
}


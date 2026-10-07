/**
 * Automatically detects any images in localStorage and posts them to
 * the development server so they are written directly to public/images/
 * and src/data/customImages.json as physical project files.
 */
export async function autoSyncImagesToFiles(): Promise<number> {
  if (typeof window === 'undefined') return 0;

  try {
    const keys = Object.keys(localStorage).filter(
      (k) => k.startsWith('buoho_') || k === 'buoho_district_custom_logo'
    );
    if (keys.length === 0) return 0;

    const payload: Record<string, string> = {};
    for (const key of keys) {
      const val = localStorage.getItem(key);
      if (val && val.startsWith('data:image/')) {
        payload[key] = val;
      }
    }

    const imageCount = Object.keys(payload).length;
    if (imageCount === 0) return 0;

    const res = await fetch('/api/sync-images', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = await res.json();
      console.log(`[Image Sync] Successfully saved ${data.savedCount || imageCount} image(s) to project files.`);
      return data.savedCount || imageCount;
    }
  } catch (err) {
    // Silent fail in production or standalone environments
    console.debug('[Image Sync] Dev server sync endpoint unavailable or in static mode', err);
  }

  return 0;
}

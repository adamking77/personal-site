export async function fetchPayloadPage(slug: string) {
  const apiUrl = `https://payload-cms-7e43.onrender.com/api/pages?where[slug][equals]=${slug}`;
  const res = await fetch(apiUrl);
  if (!res.ok) return null;
  const data = await res.json();
  return data.docs && data.docs.length > 0 ? data.docs[0] : null;
} 
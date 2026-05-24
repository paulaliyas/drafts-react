import type { StrapiListResponse, StrapiPage } from '@/types/strapi';

// ── Environment ───────────────────────────────────────────────────────────────
// .env.local:
//   NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
//   STRAPI_API_TOKEN=your_token_here
//   USE_STRAPI_MOCK=true          ← set this to skip the network and use mock JSON

const STRAPI_BASE  = process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337';
const API_TOKEN    = process.env.STRAPI_API_TOKEN ?? '';
const USE_MOCK     = process.env.USE_STRAPI_MOCK === 'true';

// ── Mock registry ─────────────────────────────────────────────────────────────
// Add a new entry here when you add a new mock file under src/mocks/.
const MOCKS: Record<string, () => Promise<StrapiListResponse<StrapiPage>>> = {
  home: () => import('@/mocks/home.json').then((m) => m.default as StrapiListResponse<StrapiPage>),
};

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Converts a relative Strapi media path (/uploads/…) to an absolute URL.
 * Pass-through for URLs that are already absolute.
 */
export function strapiImageUrl(url: string | null | undefined): string {
  if (!url) return '';
  return url.startsWith('http') ? url : `${STRAPI_BASE}${url}`;
}

async function fetchStrapi<T>(path: string): Promise<T> {
  const res = await fetch(`${STRAPI_BASE}/api${path}`, {
    headers: API_TOKEN ? { Authorization: `Bearer ${API_TOKEN}` } : {},
    next: { revalidate: 60 }, // ISR — revalidate every 60 s
  });
  if (!res.ok) throw new Error(`Strapi ${path} → ${res.status}`);
  return res.json() as Promise<T>;
}

// ── Public API ────────────────────────────────────────────────────────────────

export function getPageBySlug(slug: string): Promise<StrapiListResponse<StrapiPage>> {
  if (USE_MOCK) {
    const loader = MOCKS[slug];
    if (!loader) throw new Error(`[mock] No mock file for slug: "${slug}"`);
    return loader();
  }
  return fetchStrapi<StrapiListResponse<StrapiPage>>(
    `/pages?filters[slug][$eq]=${slug}&populate=deep`,
  );
}

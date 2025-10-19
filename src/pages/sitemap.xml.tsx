import type { GetServerSideProps } from 'next';

const BASE_URL = 'https://kotobuki-apartment-site.vercel.app';

const createSitemapXml = () => {
  const lastModified = new Date().toISOString();
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${BASE_URL}</loc>
      <lastmod>${lastModified}</lastmod>
    </url>
    <url>
      <loc>${BASE_URL}/access</loc>
      <lastmod>${lastModified}</lastmod>
    </url>
    <url>
      <loc>${BASE_URL}/vacancy</loc>
      <lastmod>${lastModified}</lastmod>
    </url>
  </urlset>`;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'stale-while-revalidate, s-maxage=3600');
  res.write(createSitemapXml());
  res.end();

  return {
    props: {},
  };
};

export default function SitemapXml() {
  return null;
}

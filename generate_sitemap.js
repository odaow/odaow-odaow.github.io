
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://nebras-bim.com';
const ROOT_DIR = process.cwd();
const PAGES_DIR = path.join(ROOT_DIR, 'pages');

const routes = [
  { path: '/', file: 'Home.tsx', priority: '1.0' },
  { path: '/about', file: 'About.tsx', priority: '0.8' },
  { path: '/services', file: 'Services.tsx', priority: '0.8' },
  { path: '/projects', file: 'Projects.tsx', priority: '0.8' },
  { path: '/lab', file: 'Lab.tsx', priority: '0.8' },
  { path: '/contact', file: 'Contact.tsx', priority: '0.8' },
];

function getFileDate(filename) {
  try {
    const stats = fs.statSync(path.join(PAGES_DIR, filename));
    return stats.mtime.toISOString().split('T')[0];
  } catch (e) {
    console.error(`Error reading file ${filename}:`, e);
    return new Date().toISOString().split('T')[0]; // Fallback to today
  }
}

function getProjectIds() {
  try {
    const content = fs.readFileSync(path.join(ROOT_DIR, 'constants.ts'), 'utf8');
    const matches = content.matchAll(/id:\s*['"]([^'"]+)['"]/g);
    const ids = [];
    // We need to filter for project IDs specifically. 
    // Looking at constants.ts, DEFAULT_PROJECTS is the array we want.
    // Let's extract the DEFAULT_PROJECTS block first to be safe.
    const projectBlock = content.split('export const DEFAULT_PROJECTS')[1].split('export const')[0];
    
    for (const match of projectBlock.matchAll(/id:\s*['"]([^'"]+)['"]/g)) {
      ids.push(match[1]);
    }
    return ids;
  } catch (e) {
    console.error('Error reading constants.ts:', e);
    return [];
  }
}

function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Static routes
  for (const route of routes) {
    const lastmod = getFileDate(route.file);
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${route.path === '/' ? '' : route.path}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  }

  // Project routes
  const projectIds = getProjectIds();
  const projectDetailDate = getFileDate('ProjectDetail.tsx');
  
  for (const id of projectIds) {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}/projects/${id}</loc>\n`;
    xml += `    <lastmod>${projectDetailDate}</lastmod>\n`;
    xml += `    <priority>0.6</priority>\n`;
    xml += '  </url>\n';
  }

  xml += '</urlset>';

  fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'), xml);
  console.log('sitemap.xml generated successfully');
}

generateSitemap();

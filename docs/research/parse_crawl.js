const fs = require('fs');

const data = JSON.parse(fs.readFileSync('zbn_crawl_full.json', 'utf8'));

console.log('=== ZBN WEBSITE CRAWL ANALYSIS ===\n');
console.log('Total Pages Crawled:', data.data.length);
console.log('Credits Used:', data.creditsUsed);
console.log('\n=== PAGE LIST ===\n');

const pages = data.data.map((page, index) => ({
  index: index + 1,
  url: page.metadata.sourceURL || page.metadata.url,
  title: page.metadata.title,
  description: page.metadata.ogDescription?.substring(0, 100) || 'No description'
}));

pages.forEach(page => {
  console.log(`${page.index}. ${page.title}`);
  console.log(`   URL: ${page.url}`);
  console.log(`   Description: ${page.description}...`);
  console.log('');
});

console.log('\n=== UNIQUE IMAGES ===\n');

// Extract unique image URLs
const imageSet = new Set();
data.data.forEach(page => {
  const html = page.html || '';
  const imgMatches = html.matchAll(/src="(https:\/\/bbf1mix\.myrdbx\.io\/wp-content\/uploads\/[^"]+)"/g);
  for (const match of imgMatches) {
    imageSet.add(match[1]);
  }
});

const images = Array.from(imageSet).sort();
console.log(`Found ${images.length} unique images:\n`);
images.forEach((img, index) => {
  const filename = img.split('/').pop();
  console.log(`${index + 1}. ${filename}`);
  console.log(`   ${img}`);
});

// Save to files
fs.writeFileSync('pages_list.json', JSON.stringify(pages, null, 2));
fs.writeFileSync('images_list.json', JSON.stringify(images, null, 2));

console.log('\n\n✅ Saved to: pages_list.json and images_list.json');

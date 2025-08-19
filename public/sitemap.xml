const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://bochuanvn.com' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  sitemap.pipe(writeStream);

  // Các trang tĩnh
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.7 });
  sitemap.write({ url: '/products', changefreq: 'weekly', priority: 0.9 });
  sitemap.write({ url: '/services', changefreq: 'monthly', priority: 0.7 });
  sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.6 });

  // Nếu bạn có danh sách sản phẩm cụ thể, bạn có thể thêm thủ công như:
  // sitemap.write({ url: '/products/ten-san-pham-1' });

  sitemap.end();
  await streamToPromise(sitemap);
  console.log('✅ Sitemap đã tạo xong!');
})();

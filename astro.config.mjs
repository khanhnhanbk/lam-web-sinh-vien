// Cấu hình Astro: trang tĩnh, Tailwind qua plugin Vite.
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Link thật của trang, dùng cho link tuyệt đối của ảnh xem trước (og:image). Đổi khi dời host hoặc có tên miền.
  site: 'https://lam-web-sinh-vien.vercel.app',
  // Nhét CSS thẳng vào HTML: trang tải trong 1 lượt, không chờ thêm file CSS.
  // format 'file': trang mẫu ra đúng /mau-gia-su.html như link cũ.
  build: { inlineStylesheets: 'always', format: 'file' },
  vite: { plugins: [tailwindcss()] },
});

# lam-web-sinh-vien

Trang bán gói "làm web cá nhân cho sinh viên" của Novian. Astro + Tailwind CSS 4, cùng theme với trang giáo viên và portfolio (xanh rêu #1f6f5c + vàng #f2c14e, Be Vietnam Pro, sáng/tối).

## Chạy

```bash
npm i -g pnpm   # nếu máy chưa có pnpm
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # ra thư mục dist/
```

## Sửa nội dung

- Chữ, giá, gói, trang mẫu: `src/data/noi-dung.json`
- Màu, kính mờ, icon động: `src/styles/global.css`
- Ảnh xem trước khi dán link (Zalo/Facebook): `public/og.jpg` (1200×630)
- Trang mẫu cũ (HTML tĩnh, chưa chuyển): `public/mau-gia-su.html`, `public/mau-thuc-tap.html`
- Hồ sơ năng lực PDF: `public/ho-so-nang-luc.pdf`

## Deploy

`wrangler.jsonc` đã sẵn cho Cloudflare Workers (có `"previews": {}` để mỗi PR có link xem trước), giống repo trang-giao-vien. Mọi thay đổi đi qua pull request kèm ảnh chụp.

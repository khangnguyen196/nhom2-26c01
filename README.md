# Website Nhóm 2 – 26C01 – Kỹ năng mềm

Website tĩnh (HTML/CSS/JS), không cần cài đặt gì. Mở `index.html` bằng trình duyệt là xem được.

## Cấu trúc

| File | Trang |
|---|---|
| `index.html` | Trang chủ |
| `thanh-vien.html` | Thành viên (5 thẻ) |
| `thanh-vien-chi-tiet.html?id=khang` | Trang riêng từng thành viên (`khang`, `thanh`, `niem`, `an`, `bang`) |
| `hoat-dong.html` | Hoạt động |
| `noi-quy.html` | Nội quy nhóm |
| `de-an.html` | Đề án |
| `san-pham.html` | Sản phẩm |
| `tai-lieu.html` | Tài liệu |

- `assets/js/data.js` — **toàn bộ nội dung website**. Chỉ cần sửa file này.
- `assets/js/main.js` — dựng giao diện từ `data.js` (thường không cần sửa).
- `assets/css/style.css` — màu sắc, phông chữ. Đổi màu ở các biến `--blue`, `--yellow` đầu file.
- `assets/img/` — logo, ảnh tập thể, ảnh thành viên (`members/`).
- `assets/docs/` — hợp đồng nhóm (bản đã che số điện thoại), biên bản họp, slide PDF…

## Cập nhật nội dung

**Thay logo / ảnh:** chép ảnh mới vào `assets/img/` rồi sửa đường dẫn trong `data.js`
(`group.logo`, `group.groupPhoto`, `members[].photo`). Ảnh chân dung nên **vuông, cùng kích thước** (ví dụ 600×600).

**Giới thiệu thành viên:** điền `bio` (3–4 câu) và thêm từng dòng vào `contributions` khi có đóng góp mới.
Email chỉ hiện khi điền `email` **và** đặt `showEmail: true` (khi thành viên đồng ý).

**Đăng bài Hoạt động sau mỗi buổi họp:** trong `activities`, chép một khối `{ ... }`, sửa ngày (`"2026-10-23"`), tuần, loại,
tiêu đề, tóm tắt, kết quả và ảnh (`photos: ["assets/img/activities/tuan2-1.jpg"]`). Bài mới tự lên đầu.
Xóa bài mẫu tuần 1 khi đã có bài thật.

**Hợp đồng nhóm:** file gốc `Nhom2_BB THANH LAP NHOM (2).pdf` có **số điện thoại và email** — không đăng trực tiếp.
Xuất một bản đã che các thông tin đó, lưu vào `assets/docs/hop-dong-nhom.pdf`, rồi điền `rules.contract`.

**Sản phẩm (tuần 8):** dán link YouTube vào `products.youtube`, ảnh poster vào `products.poster`,
link Google Slides (Tệp → Chia sẻ → Xuất bản lên web) vào `products.slides`.

## Xem thử trên máy

Mở thẳng `index.html`, hoặc chạy server tĩnh rồi vào http://localhost:8000:

```bash
python -m http.server 8000
```

## Đưa lên GitHub Pages

1. Tạo repository mới trên GitHub (ví dụ `nhom2-26c01`), để **Public**.
2. Tải toàn bộ thư mục lên (trừ file `.docx` và file hợp đồng gốc có số điện thoại).
3. Vào **Settings → Pages → Branch: `main` / root → Save**.
4. Sau 1–2 phút website có ở `https://<tên-github>.github.io/nhom2-26c01/` — ghi link này vào báo cáo (mục Sản phẩm).

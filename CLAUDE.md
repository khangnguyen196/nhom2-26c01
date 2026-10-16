# CLAUDE.md – Website Nhóm 2 (26C01 – Kỹ năng mềm)

Website giới thiệu nhóm và lưu quá trình làm đồ án cuối kỳ môn Kỹ năng mềm, lớp 26C01, HK1 2026–2027,
GV Đặng Hoài Thương. Người phụ trách website: Nguyễn Đoàn Ngọc Khang. Website được cộng 10% điểm bonus.

- Website: https://khangnguyen196.github.io/nhom2-26c01/
- Repo: `khangnguyen196/nhom2-26c01` (public). GitHub Pages build từ nhánh `main`, thư mục gốc; push là tự cập nhật sau 1–2 phút.
- README.md là hướng dẫn cho thành viên nhóm; file này dành cho Claude.

## Kiến trúc

HTML/CSS/JS thuần, **không build, không framework, không npm**. Đừng thêm công cụ build.

- Các file `*.html` ở gốc là khung giống hệt nhau, chỉ khác `<title>` và `<body data-page="...">`
  (`home`, `members`, `member`, `activities`, `rules`, `project`, `products`, `docs`). Không viết nội dung vào HTML.
- `assets/js/data.js` – `window.SITE`, **nguồn nội dung duy nhất** (`group`, `members`, `activities`, `rules`, `project`, `products`, `documents`). Sửa nội dung ở đây.
- `assets/js/main.js` – dựng header/menu/footer và từng trang từ `window.SITE`:
  - `NAV`: 7 mục menu, giữ đúng thứ tự (Trang chủ, Thành viên, Hoạt động, Nội quy nhóm, Đề án, Sản phẩm, Tài liệu).
  - `PAGES`: map `data-page` → hàm `pageXxx()` trả về chuỗi HTML.
  - Luôn bọc dữ liệu bằng `esc()` khi chèn vào HTML. Dùng `text()` / `list()` để chuỗi/mảng rỗng hiện "Đang cập nhật…".
  - `thanh-vien-chi-tiet.html?id=<id>` lấy thành viên theo `members[].id`; id sai hiện thông báo, không trắng trang.
- Script nạp bằng thẻ `<script>` (không `fetch`) để mở trực tiếp `index.html` qua `file://` vẫn chạy.
- `assets/css/style.css` – biến màu `--blue #1E4FA3`, `--blue-dark`, `--yellow #F5B700` (màu theo logo); phông Be Vietnam Pro (Google Fonts).
- `assets/img/` – logo, ảnh tập thể, `members/<id>.*` (hiện là SVG tạm). `assets/docs/` – PDF đăng công khai.

## Tác vụ thường gặp

- **Thêm bài Hoạt động:** thêm object vào `activities` với `date` (`YYYY-MM-DD`), `week`, `type`, `title`, `summary`, `results[]`, `photos[]`. Trang tự sắp xếp mới nhất lên đầu; nút lọc theo `type` tự hiện khi có ≥2 loại. Xóa bài mẫu tuần 1 khi có bài thật.
- **Thay ảnh:** chép file vào `assets/img/`, sửa đường dẫn trong `data.js`. Chân dung phải vuông, cùng kích thước.
- **Sản phẩm (tuần 8):** `products.youtube` (link YouTube bất kỳ dạng), `products.poster`, `products.slides` (link Google Slides tự đổi sang `/embed`, hoặc PDF).
- **Thêm trang:** tạo HTML khung giống các trang khác + hàm trong `PAGES`; menu tối đa 7 mục nên cân nhắc trước khi thêm vào `NAV`.

## Quy tắc bắt buộc

- **Không đăng số điện thoại.** Email trường chỉ hiện khi thành viên đồng ý (`showEmail: true`); mặc định để `email: ""`.
- **Không commit** `Yeu_cau_website_nhom_2.docx` và `Nhom2_BB THANH LAP NHOM (2).pdf` (hợp đồng gốc có SĐT + email) – đã có trong `.gitignore`. Hợp đồng đăng lên (`rules.contract`) phải là bản đã che.
- **Không bịa nội dung** (đề tài, giới thiệu bản thân, đóng góp, khẩu hiệu, ngày họp). Chưa có thì để trống cho website hiện "Đang cập nhật…".
- Theo file yêu cầu: logo ở đầu mọi trang; footer "Nhóm 2 – 26C01 – FIT@HCMUS"; tối đa 2–3 màu chính; hiển thị tốt trên điện thoại; tiếng Việt có dấu, đúng chính tả, lịch sự; mỗi trang có tiêu đề rõ ràng.

## Tài liệu nguồn (chỉ có trên máy, không có trên repo)

- `Yeu_cau_website_nhom_2.docx` – yêu cầu 7 trang, phân công theo tuần, **checklist mục 8** để rà trước khi nộp.
- `Nhom2_BB THANH LAP NHOM (2).pdf` – hợp đồng nhóm; nội dung trang Nội quy (`rules` trong `data.js`) lấy từ đây.

## Chạy và kiểm tra

- Chạy thử: `python -m http.server 8000` (đã có cấu hình preview `web-nhom2` trong `.claude/launch.json`).
- Kiểm tra cả desktop và viewport mobile 375px: menu hamburger mở được, không cuộn ngang, ảnh không méo, console không lỗi.
- Trước khi commit, lệnh sau phải không ra kết quả:
  `git grep --cached -nE '0[0-9]{9}|@clc\.fitus'`

## Git

- Người commit đã cài cục bộ cho repo: `khangnguyen196` + email noreply của GitHub. Không đổi cấu hình git toàn máy.
- Commit message tiếng Việt, ngắn gọn. Push `main` để cập nhật website.

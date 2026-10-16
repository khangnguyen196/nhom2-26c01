/*
 * ============================================================
 *  DỮ LIỆU WEBSITE NHÓM 2
 *  Mọi nội dung trên website đều lấy từ file này.
 *  Muốn cập nhật nội dung: chỉ cần sửa file này rồi lưu lại.
 *  - Chữ để trong dấu nháy "..."; nhớ giữ dấu phẩy giữa các mục.
 *  - Để trống ("") thì website hiện "Đang cập nhật".
 *  - KHÔNG đăng số điện thoại cá nhân.
 * ============================================================
 */
window.SITE = {
  /* ---------- Thông tin chung (Trang chủ) ---------- */
  group: {
    name: "Nhóm 2",
    slogan: "", // Câu khẩu hiệu của nhóm, ví dụ: "Cùng nhau – Chung sức – Thành công"
    className: "26C01",
    subject: "Kỹ năng mềm",
    lecturer: "Đặng Hoài Thương",
    semester: "HK1 2026–2027",
    school: "Trường Đại học Khoa học Tự nhiên – ĐHQG-HCM",
    faculty: "Khoa Công nghệ Thông tin",
    intro:
      "Nhóm 2 gồm 5 thành viên lớp 26C01, cùng thực hiện đồ án cuối kỳ môn Kỹ năng mềm. " +
      "Website này giới thiệu nhóm và lưu lại toàn bộ quá trình làm đồ án: từ hợp đồng nhóm, " +
      "các buổi họp, ý tưởng đề án cho đến sản phẩm cuối cùng.",
    groupPhoto: "assets/img/group.svg", // Thay bằng ảnh thật, ví dụ "assets/img/group.jpg"
    logo: "assets/img/logo.svg"
  },

  /* ---------- Thành viên ----------
   * id: dùng trong đường dẫn (thanh-vien-chi-tiet.html?id=...), không dấu, không khoảng trắng.
   * photo: ảnh chân dung vuông (1:1), các ảnh nên cùng kích thước.
   * email/showEmail: chỉ hiện email khi thành viên đồng ý (showEmail: true).
   */
  members: [
    {
      id: "khang",
      name: "Nguyễn Đoàn Ngọc Khang",
      mssv: "26127201",
      role: "Ý tưởng, kế hoạch, website nhóm",
      tasks: ["Ý tưởng đồ án", "Kế hoạch thực hiện", "Website nhóm: dựng khung, đăng nội dung Đề án, Hoạt động, Tài liệu, Sản phẩm"],
      photo: "assets/img/members/khang.svg",
      bio: "",
      contributions: [],
      email: "",
      showEmail: false
    },
    {
      id: "thanh",
      name: "Trương Chí Thành",
      mssv: "26127428",
      role: "Video (kịch bản, quay, dựng)",
      tasks: ["Video: kịch bản, quay, dựng", "Gửi link video cho trang Sản phẩm (tuần 8)"],
      photo: "assets/img/members/thanh.svg",
      bio: "",
      contributions: [],
      email: "",
      showEmail: false
    },
    {
      id: "niem",
      name: "Nguyễn Phạm Hoài Niệm",
      mssv: "26127345",
      role: "Slide",
      tasks: ["Slide trình bày", "Gửi slide cho trang Sản phẩm (tuần 8)"],
      photo: "assets/img/members/niem.svg",
      bio: "",
      contributions: [],
      email: "",
      showEmail: false
    },
    {
      id: "an",
      name: "Nguyễn Lê Duy An",
      mssv: "26127005",
      role: "Poster",
      tasks: ["Poster", "Gửi logo nhóm cho website (tuần 1)", "Gửi poster cho trang Sản phẩm (tuần 8)"],
      photo: "assets/img/members/an.svg",
      bio: "",
      contributions: [],
      email: "",
      showEmail: false
    },
    {
      id: "bang",
      name: "Đỗ Cao Khánh Băng",
      mssv: "26127034",
      role: "Báo cáo tiến độ",
      tasks: ["Báo cáo tiến độ", "Gửi ảnh và tóm tắt tiến độ sau mỗi buổi họp cho trang Hoạt động"],
      photo: "assets/img/members/bang.svg",
      bio: "",
      contributions: [],
      email: "",
      showEmail: false
    }
  ],

  /* ---------- Hoạt động ----------
   * Thêm bài mới bằng cách chép một khối { ... } và sửa nội dung.
   * Website tự sắp xếp bài mới nhất lên trên theo "date" (năm-tháng-ngày).
   * type: "Họp nhóm" | "Thực hành trên lớp" | "Khảo sát" | "Quay video" | ...
   */
  activities: [
    // Chưa có bài: chờ biên bản + ảnh từ Băng. Chép khối mẫu dưới đây (bỏ dấu //) khi có buổi họp thật.
    // {
    //   date: "2026-10-18",            // ngày họp thật, dạng năm-tháng-ngày
    //   week: 1,
    //   type: "Họp nhóm",
    //   title: "Tiêu đề buổi họp",
    //   summary: "Tóm tắt nội dung chính từ biên bản họp.",
    //   results: ["Kết quả 1", "Kết quả 2"],
    //   photos: ["assets/img/activities/tuan1-1.jpg", "assets/img/activities/tuan1-2.jpg"]
    // }
  ],

  /* ---------- Nội quy nhóm ---------- */
  /* Nội dung lấy từ Hợp đồng thành lập nhóm (Nhom2_BB THANH LAP NHOM.pdf). */
  rules: {
    goal: "Qua môn", // Mục tiêu nhóm
    principles: [
      { title: "Tham gia đầy đủ", text: "Tham gia đầy đủ các buổi họp nhóm. Nếu vắng phải báo trước ít nhất 12 giờ và có lý do chính đáng." },
      { title: "Đúng giờ", text: "Có mặt đúng giờ; trễ quá 10 phút tính là đi trễ." },
      { title: "Đúng hạn, đúng yêu cầu", text: "Hoàn thành phần việc được giao đúng hạn và đúng yêu cầu đã thống nhất." },
      { title: "Tôn trọng", text: "Tôn trọng ý kiến của mọi người; góp ý trên tinh thần xây dựng, không công kích cá nhân." },
      { title: "Biểu quyết đa số", text: "Quyết định chung theo biểu quyết đa số; nếu số phiếu ngang nhau, nhóm trưởng quyết định." },
      { title: "Giải quyết mâu thuẫn", text: "Mâu thuẫn được giải quyết trực tiếp trong buổi họp; không giải quyết được thì nhờ giảng viên hỗ trợ." },
      { title: "Chủ động báo khó khăn", text: "Chủ động báo khi gặp khó khăn để nhóm kịp hỗ trợ, không để đến sát hạn chót." },
      { title: "Trung thực", text: "Trung thực trong học tập: không sao chép, đạo văn; ghi rõ nguồn tài liệu tham khảo." }
    ],
    communicationIntro: "Nhóm họp định kỳ mỗi tuần một buổi và trao đổi hằng ngày qua nhóm chat chung.",
    communication: [
      { label: "Kênh trao đổi chính", value: "Nhóm Zalo / Messenger: Nhóm 2" },
      { label: "Họp trực tuyến", value: "Google Meet / Zoom" },
      { label: "Lưu trữ tài liệu", value: "Thư mục Google Drive chung của nhóm" },
      { label: "Phân công và theo dõi tiến độ", value: "Google Sheets" },
      { label: "Lịch họp định kỳ", value: "Cuối tuần, mỗi tuần 1 buổi" },
      { label: "Thời gian phản hồi tin nhắn", value: "Trong vòng 12 giờ; việc gấp trong vòng 2 giờ" },
      { label: "Báo cáo tiến độ", value: "Mỗi thành viên cập nhật trước mỗi buổi họp" },
      { label: "Biên bản họp", value: "Thư ký ghi và gửi lên nhóm chat sau mỗi buổi họp" }
    ],
    rewardNote: "Điểm thưởng và điểm phạt được cộng hoặc trừ vào điểm đánh giá thành viên cuối môn (thang 10). Thư ký ghi nhận mỗi lần thưởng, phạt vào biên bản họp.",
    rewards: [
      { item: "Hoàn thành nhiệm vụ trước hạn, chất lượng tốt", value: "+0,5 điểm" },
      { item: "Đóng góp ý tưởng được nhóm chọn sử dụng", value: "+0,5 điểm" },
      { item: "Chủ động hỗ trợ thành viên khác hoàn thành việc", value: "+0,5 điểm" },
      { item: "Tham dự đầy đủ và đúng giờ tất cả buổi họp", value: "+1 điểm" }
    ],
    penalties: [
      { item: "Đi họp trễ quá 10 phút", value: "Lần 1 nhắc nhở; từ lần 2 trừ 0,5 điểm" },
      { item: "Vắng họp không báo trước", value: "Trừ 1 điểm" },
      { item: "Nộp phần việc trễ hạn", value: "Trừ 1 điểm mỗi lần" },
      { item: "Không hoàn thành phần việc được giao", value: "Trừ 2 điểm; nhóm phân công lại" },
      { item: "Vi phạm từ 3 lần trở lên", value: "Báo giảng viên, xem xét loại tên khỏi bài nhóm" }
    ],
    criteriaNote: "Mỗi thành viên được chấm trên thang 10 theo 5 tiêu chí dưới đây, sau đó cộng hoặc trừ điểm thưởng phạt. Cả nhóm cùng chấm chéo và lấy điểm trung bình.",
    criteria: [
      { name: "Hoàn thành nhiệm vụ", desc: "Nộp đúng hạn, đúng yêu cầu được giao", weight: "30%" },
      { name: "Chất lượng đóng góp", desc: "Nội dung chính xác, ý tưởng có giá trị", weight: "25%" },
      { name: "Mức độ tham gia", desc: "Dự họp đầy đủ, đúng giờ", weight: "20%" },
      { name: "Tinh thần hợp tác", desc: "Hỗ trợ, tôn trọng, giao tiếp tốt", weight: "15%" },
      { name: "Tính chủ động", desc: "Tự đề xuất ý tưởng, nhận việc", weight: "10%" }
    ],
    commitment: "Các thành viên đã đọc, thống nhất và cam kết thực hiện đúng các điều khoản trên từ ngày ký đến khi kết thúc môn học. Mọi thay đổi phải được đa số thành viên đồng ý và ghi vào biên bản họp.",
    // Bản hợp đồng có chữ ký ĐÃ CHE số điện thoại và email (tạo từ file gốc, file gốc KHÔNG đưa lên).
    contract: "assets/docs/hop-dong-nhom.pdf",
    contractImages: [
      "assets/docs/hop-dong-nhom-1.jpg",
      "assets/docs/hop-dong-nhom-2.jpg",
      "assets/docs/hop-dong-nhom-3.jpg",
      "assets/docs/hop-dong-nhom-4.jpg"
    ]
  },

  /* ---------- Đề án ---------- */
  project: {
    title: "",    // Tên đề tài
    problem: "",  // Vấn đề cần giải quyết
    idea: "",     // Ý tưởng sản phẩm
    message: "",  // Thông điệp của nhóm
    mindmap: "",  // Ảnh sơ đồ tư duy, ví dụ "assets/img/so-do-tu-duy.png"
    // Bảng kế hoạch và tiến độ thực hiện ĐỒ ÁN – chờ Khang chốt (tuần 3).
    // Mẫu: { week: "3", task: "Chốt ý tưởng", owner: "Cả nhóm", status: "Đã xong" }
    plan: [],
    // Kế hoạch xây dựng website (mục 7 file yêu cầu). Cập nhật cột status khi có thay đổi.
    websitePlan: [
      { week: "1", task: "Chọn công cụ, dựng khung 7 trang, Trang chủ, Nội quy nhóm, gắn logo", owner: "Khang; An gửi logo", status: "Đã xong khung; chờ logo thật" },
      { week: "1–2", task: "Thu thập ảnh và giới thiệu của từng người, làm trang Thành viên", owner: "Khang; mọi thành viên gửi tư liệu", status: "Đã dựng trang; chờ ảnh và giới thiệu" },
      { week: "3", task: "Đăng nội dung trang Đề án sau khi chốt ý tưởng và kế hoạch", owner: "Khang", status: "Chờ chốt ý tưởng" },
      { week: "Hằng tuần", task: "Đăng bài Hoạt động sau mỗi buổi họp, cập nhật trang Tài liệu", owner: "Khang; Băng gửi ảnh và tóm tắt tiến độ", status: "Chờ biên bản và ảnh" },
      { week: "8", task: "Đăng video, poster, slide lên trang Sản phẩm; kiểm tra toàn bộ website", owner: "Khang; Thành gửi link video, An gửi poster, Niệm gửi slide", status: "Chưa đến hạn" }
    ]
  },

  /* ---------- Sản phẩm ---------- */
  products: {
    youtube: "", // Link video YouTube, ví dụ "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    poster: "",  // Ảnh poster, ví dụ "assets/img/poster.jpg"
    slides: ""   // Link Google Slides (Chia sẻ > Xuất bản lên web > Nhúng) hoặc file PDF "assets/docs/slide.pdf"
  },

  /* ---------- Tài liệu ---------- */
  documents: {
    drive: "", // Link thư mục Google Drive chung (đã chia sẻ quyền xem)
    minutes: [
      // { date: "2026-10-16", title: "Biên bản họp tuần 1", link: "https://drive.google.com/..." }
    ],
    references: [
      // { title: "Tên tài liệu", source: "Tác giả / Nhà xuất bản / Website", link: "https://..." }
    ]
  }
};

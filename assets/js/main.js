/*
 * Dựng header, menu, footer và nội dung từng trang từ window.SITE (data.js).
 * Thường không cần sửa file này — nội dung nằm ở data.js.
 */
(function () {
  "use strict";

  var S = window.SITE;
  var G = S.group;

  var NAV = [
    { id: "home", href: "index.html", label: "Trang chủ" },
    { id: "members", href: "thanh-vien.html", label: "Thành viên" },
    { id: "activities", href: "hoat-dong.html", label: "Hoạt động" },
    { id: "rules", href: "noi-quy.html", label: "Nội quy nhóm" },
    { id: "project", href: "de-an.html", label: "Đề án" },
    { id: "products", href: "san-pham.html", label: "Sản phẩm" },
    { id: "docs", href: "tai-lieu.html", label: "Tài liệu" }
  ];

  var PENDING = '<span class="placeholder">Đang cập nhật…</span>';

  /* ---------- Tiện ích ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function text(s) { return s ? esc(s) : PENDING; }
  function list(items, cls) {
    if (!items || !items.length) return "<p>" + PENDING + "</p>";
    return '<ul class="' + (cls || "list-check") + '">' +
      items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
  }
  function formatDate(iso) {
    var p = String(iso || "").split("-");
    return p.length === 3 ? p[2] + "/" + p[1] + "/" + p[0] : esc(iso);
  }
  function isPdf(url) { return /\.pdf($|\?)/i.test(url || ""); }
  function youtubeId(url) {
    var m = String(url || "").match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
    return m ? m[1] : "";
  }
  function slidesEmbed(url) {
    if (!url) return "";
    if (/docs\.google\.com\/presentation/.test(url)) {
      return url.replace(/\/(edit|pub|preview)[^]*$/, "") + "/embed?start=false&loop=false";
    }
    return url;
  }
  function emptyBox(msg) { return '<div class="embed-empty">' + esc(msg) + "</div>"; }

  /* ---------- Khung chung ---------- */
  function renderHeader(active) {
    var links = NAV.map(function (n) {
      return '<li><a href="' + n.href + '"' + (n.id === active ? ' aria-current="page"' : "") + ">" + n.label + "</a></li>";
    }).join("");
    return '<header class="site-header"><div class="container">' +
      '<a class="brand" href="index.html"><img src="' + esc(G.logo) + '" alt="Logo ' + esc(G.name) + '">' +
      "<span><strong>" + esc(G.name) + "</strong><small>" + esc(G.className) + " · " + esc(G.subject) + "</small></span></a>" +
      '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">☰ Menu</button>' +
      '<nav class="nav" id="site-nav" aria-label="Menu chính"><ul>' + links + "</ul></nav>" +
      "</div></header>";
  }

  function renderFooter() {
    return '<footer class="site-footer"><div class="container">' +
      "<p><strong>Nhóm 2 – 26C01 – FIT@HCMUS</strong></p>" +
      '<p class="small">' + esc(G.subject) + " · GV " + esc(G.lecturer) + " · " + esc(G.semester) + "</p>" +
      "</div></footer>";
  }

  function pageHead(title, sub) {
    return '<div class="page-head"><div class="container"><h1>' + esc(title) + "</h1>" +
      (sub ? "<p>" + esc(sub) + "</p>" : "") + "</div></div>";
  }

  function wrap(inner) { return '<main><div class="container">' + inner + "</div></main>"; }

  /* ---------- Trang chủ ---------- */
  function pageHome() {
    var hero = '<section class="hero"><div class="container"><div>' +
      '<img class="hero-logo" src="' + esc(G.logo) + '" alt="Logo ' + esc(G.name) + '">' +
      "<h1>" + esc(G.name) + "</h1>" +
      '<p class="slogan">' + (G.slogan ? esc(G.slogan) : "Câu khẩu hiệu của nhóm – đang cập nhật") + "</p>" +
      '<a class="btn" href="thanh-vien.html">Gặp gỡ thành viên</a></div>' +
      '<img class="group-photo" src="' + esc(G.groupPhoto) + '" alt="Ảnh tập thể ' + esc(G.name) + '">' +
      "</div></section>";

    var info = '<section class="grid grid-2">' +
      '<div class="card"><h2>Thông tin chung</h2><table class="info-table"><tbody>' +
      "<tr><th>Tên nhóm</th><td>" + esc(G.name) + "</td></tr>" +
      "<tr><th>Lớp</th><td>" + esc(G.className) + "</td></tr>" +
      "<tr><th>Môn học</th><td>" + esc(G.subject) + "</td></tr>" +
      "<tr><th>Giảng viên</th><td>" + esc(G.lecturer) + "</td></tr>" +
      "<tr><th>Học kỳ</th><td>" + esc(G.semester) + "</td></tr>" +
      "<tr><th>Đơn vị</th><td>" + esc(G.faculty) + "<br>" + esc(G.school) + "</td></tr>" +
      "</tbody></table></div>" +
      '<div class="card"><h2>Giới thiệu nhóm</h2><p>' + text(G.intro) + "</p>" +
      "<h3>Đề tài của nhóm</h3><p>" +
      (S.project.title ? "<strong>" + esc(S.project.title) + "</strong>" + (S.project.idea ? " – " + esc(S.project.idea) : "") : PENDING) +
      '</p><a class="btn btn-outline" href="de-an.html">Xem trang Đề án →</a></div>' +
      "</section>";

    var members = '<section><h2>Thành viên</h2>' + memberGrid() + "</section>";
    return hero + wrap(info + members);
  }

  /* ---------- Thành viên ---------- */
  function memberGrid() {
    return '<div class="member-grid">' + S.members.map(function (m) {
      return '<a class="member-card" href="thanh-vien-chi-tiet.html?id=' + encodeURIComponent(m.id) + '">' +
        '<img src="' + esc(m.photo) + '" alt="Ảnh chân dung ' + esc(m.name) + '" loading="lazy">' +
        '<div class="body"><h3>' + esc(m.name) + '</h3><div class="mssv">MSSV ' + esc(m.mssv) + "</div>" +
        '<div class="role">' + esc(m.role) + "</div></div></a>";
    }).join("") + "</div>";
  }

  function pageMembers() {
    return pageHead("Thành viên", "5 thành viên của Nhóm 2. Bấm vào từng thẻ để xem trang chi tiết.") +
      wrap(memberGrid());
  }

  function pageMember() {
    var id = new URLSearchParams(location.search).get("id");
    var idx = -1;
    S.members.forEach(function (m, i) { if (m.id === id) idx = i; });
    if (idx < 0) {
      document.title = "Không tìm thấy thành viên – " + G.name;
      return pageHead("Không tìm thấy thành viên", "") +
        wrap('<div class="card"><p>Đường dẫn không đúng hoặc thành viên không tồn tại.</p>' +
          '<a class="btn" href="thanh-vien.html">← Về trang Thành viên</a></div>');
    }
    var m = S.members[idx];
    var prev = S.members[(idx - 1 + S.members.length) % S.members.length];
    var next = S.members[(idx + 1) % S.members.length];
    document.title = m.name + " – Thành viên – " + G.name;

    var email = m.showEmail && m.email
      ? '<tr><th>Email</th><td><a href="mailto:' + esc(m.email) + '">' + esc(m.email) + "</a></td></tr>" : "";

    var body = '<div class="profile">' +
      '<img class="portrait" src="' + esc(m.photo) + '" alt="Ảnh chân dung ' + esc(m.name) + '">' +
      '<div class="grid">' +
      '<div class="card"><table class="info-table"><tbody>' +
      "<tr><th>Họ và tên</th><td><strong>" + esc(m.name) + "</strong></td></tr>" +
      "<tr><th>MSSV</th><td>" + esc(m.mssv) + "</td></tr>" +
      "<tr><th>Vai trò chính</th><td>" + esc(m.role) + "</td></tr>" + email +
      "</tbody></table></div>" +
      '<div class="card"><h2>Giới thiệu bản thân</h2><p>' + text(m.bio) + "</p></div>" +
      '<div class="card"><h2>Phần việc phụ trách</h2>' + list(m.tasks) + "</div>" +
      '<div class="card"><h2>Những việc đã đóng góp</h2>' + list(m.contributions) + "</div>" +
      "</div></div>" +
      '<nav class="member-nav" aria-label="Chuyển thành viên">' +
      '<a class="btn btn-outline" href="thanh-vien-chi-tiet.html?id=' + encodeURIComponent(prev.id) + '">← ' + esc(prev.name) + "</a>" +
      '<a class="btn btn-outline" href="thanh-vien-chi-tiet.html?id=' + encodeURIComponent(next.id) + '">' + esc(next.name) + " →</a></nav>";

    return pageHead(m.name, m.role) + wrap(body);
  }

  /* ---------- Hoạt động ---------- */
  function pageActivities() {
    var posts = S.activities.slice().sort(function (a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : 0; });
    var types = [];
    posts.forEach(function (p) { if (types.indexOf(p.type) < 0) types.push(p.type); });

    var filters = types.length > 1
      ? '<div class="filters" role="group" aria-label="Lọc theo loại hoạt động">' +
        '<button type="button" data-type="" aria-pressed="true">Tất cả</button>' +
        types.map(function (t) { return '<button type="button" data-type="' + esc(t) + '" aria-pressed="false">' + esc(t) + "</button>"; }).join("") +
        "</div>" : "";

    var items = posts.length ? posts.map(function (p) {
      var photos = p.photos && p.photos.length
        ? '<div class="post-photos">' + p.photos.map(function (src, i) {
            return '<img src="' + esc(src) + '" alt="Ảnh minh chứng ' + (i + 1) + " – " + esc(p.title) + '" loading="lazy">';
          }).join("") + "</div>"
        : '<p class="placeholder">Ảnh minh chứng đang cập nhật.</p>';
      return '<article class="card post" data-type="' + esc(p.type) + '">' +
        '<div class="meta"><span class="tag tag-blue">Tuần ' + esc(p.week) + '</span><span class="tag">' + esc(p.type) + "</span>" +
        "<span>" + formatDate(p.date) + "</span></div>" +
        "<h2>" + esc(p.title) + "</h2><p>" + text(p.summary) + "</p>" +
        (p.results && p.results.length ? "<h3>Kết quả</h3>" + list(p.results) : "") +
        photos + "</article>";
    }).join("") : '<div class="card"><p>' + PENDING + "</p></div>";

    return pageHead("Hoạt động", "Nhật ký các buổi họp, buổi thực hành trên lớp, khảo sát, quay video… Bài mới nhất ở trên cùng.") +
      wrap(filters + '<div class="timeline">' + items + "</div>");
  }

  function bindFilters() {
    var box = document.querySelector(".filters");
    if (!box) return;
    box.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;
      var type = btn.getAttribute("data-type");
      box.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
      document.querySelectorAll(".post").forEach(function (p) {
        p.hidden = !!type && p.getAttribute("data-type") !== type;
      });
    });
  }

  /* ---------- Nội quy ---------- */
  function pageRules() {
    var R = S.rules;
    function pairTable(rows, h1, h2) {
      return '<div class="table-wrap"><table class="data-table"><thead><tr><th>' + h1 + "</th><th>" + h2 + "</th></tr></thead><tbody>" +
        rows.map(function (r) { return "<tr><td>" + esc(r.item) + "</td><td><strong>" + esc(r.value) + "</strong></td></tr>"; }).join("") +
        "</tbody></table></div>";
    }
    var goal = R.goal ? '<p class="note"><strong>Mục tiêu nhóm:</strong> ' + esc(R.goal) + "</p>" : "";
    var principles = '<section><h2>' + R.principles.length + ' nguyên tắc làm việc nhóm</h2><ol class="rules">' +
      R.principles.map(function (p) { return "<li><strong>" + esc(p.title) + "</strong>" + esc(p.text) + "</li>"; }).join("") +
      "</ol></section>";
    var comm = '<section class="card"><h2>Kế hoạch giao tiếp</h2>' +
      (R.communicationIntro ? "<p>" + esc(R.communicationIntro) + "</p>" : "") +
      '<table class="info-table"><tbody>' +
      R.communication.map(function (c) { return "<tr><th>" + esc(c.label) + "</th><td>" + text(c.value) + "</td></tr>"; }).join("") +
      "</tbody></table></section>";
    var rp = "<section><h2>Quy tắc thưởng và phạt</h2>" +
      (R.rewardNote ? "<p>" + esc(R.rewardNote) + "</p>" : "") +
      '<div class="grid grid-2">' +
      "<div><h3>Thưởng</h3>" + pairTable(R.rewards, "Hành vi", "Hình thức thưởng") + "</div>" +
      "<div><h3>Phạt</h3>" + pairTable(R.penalties, "Vi phạm", "Mức phạt") + "</div></div></section>";
    var crit = "<section><h2>Tiêu chí đánh giá thành viên cuối môn</h2>" +
      (R.criteriaNote ? "<p>" + esc(R.criteriaNote) + "</p>" : "") +
      '<div class="table-wrap"><table class="data-table"><thead><tr><th>Tiêu chí</th><th>Mô tả</th><th>Trọng số</th></tr></thead><tbody>' +
      R.criteria.map(function (c) {
        return "<tr><td><strong>" + esc(c.name) + "</strong></td><td>" + esc(c.desc) + "</td><td>" + esc(c.weight) + "</td></tr>";
      }).join("") + "</tbody></table></div></section>";
    var commit = R.commitment ? '<section class="card"><h2>Cam kết</h2><p>' + esc(R.commitment) + "</p></section>" : "";
    var contract = '<section><h2>Hợp đồng thành lập nhóm</h2>' +
      (R.contract
        ? (isPdf(R.contract)
          ? '<div class="embed embed-tall"><iframe src="' + esc(R.contract) + '" title="Hợp đồng nhóm"></iframe></div>' +
            '<p><a href="' + esc(R.contract) + '" target="_blank" rel="noopener">Mở hợp đồng trong tab mới</a></p>'
          : '<img src="' + esc(R.contract) + '" alt="Hợp đồng nhóm có chữ ký" style="border-radius:14px">')
        : emptyBox("Bản hợp đồng có chữ ký sẽ được đăng tại đây (đã che số điện thoại).")) +
      "</section>";
    return pageHead("Nội quy nhóm", "Hợp đồng thành lập nhóm: nguyên tắc làm việc, kế hoạch giao tiếp, thưởng phạt và tiêu chí đánh giá.") +
      wrap(goal + principles + comm + rp + crit + commit + contract);
  }

  /* ---------- Đề án ---------- */
  function pageProject() {
    var P = S.project;
    var overview = '<section class="grid grid-2">' +
      '<div class="card"><h2>Tên đề tài</h2><p>' + text(P.title) + "</p>" +
      "<h3>Vấn đề cần giải quyết</h3><p>" + text(P.problem) + "</p></div>" +
      '<div class="card"><h2>Ý tưởng sản phẩm</h2><p>' + text(P.idea) + "</p>" +
      "<h3>Thông điệp của nhóm</h3><p>" + text(P.message) + "</p></div></section>";
    var mindmap = "<section><h2>Sơ đồ tư duy</h2>" +
      (P.mindmap ? '<img src="' + esc(P.mindmap) + '" alt="Sơ đồ tư duy đề án" style="border-radius:14px;background:#fff">'
        : emptyBox("Sơ đồ tư duy sẽ được đăng sau khi nhóm chốt ý tưởng.")) + "</section>";
    var plan = '<section><h2>Bảng kế hoạch và tiến độ</h2><div class="table-wrap"><table class="data-table">' +
      "<thead><tr><th>Tuần</th><th>Công việc</th><th>Người thực hiện</th><th>Tiến độ</th></tr></thead><tbody>" +
      P.plan.map(function (r) {
        return "<tr><td>" + esc(r.week) + "</td><td>" + esc(r.task) + "</td><td>" + esc(r.owner) + "</td><td>" + text(r.status) + "</td></tr>";
      }).join("") + "</tbody></table></div></section>";
    return pageHead("Đề án", "Ý tưởng, sơ đồ tư duy, thông điệp và kế hoạch thực hiện đồ án cuối kỳ.") +
      wrap(overview + mindmap + plan);
  }

  /* ---------- Sản phẩm ---------- */
  function pageProducts() {
    var P = S.products;
    var vid = youtubeId(P.youtube);
    var video = "<section><h2>Video</h2>" +
      (vid ? '<div class="embed"><iframe src="https://www.youtube-nocookie.com/embed/' + vid +
        '" title="Video của Nhóm 2" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        : emptyBox("Video (tối đa 5 phút) sẽ được đăng vào cuối kỳ.")) + "</section>";
    var poster = '<div><h2>Poster</h2>' +
      (P.poster ? '<a class="poster" href="' + esc(P.poster) + '" target="_blank" rel="noopener"><img src="' + esc(P.poster) + '" alt="Poster của Nhóm 2"></a>'
        : emptyBox("Poster sẽ được đăng vào cuối kỳ.")) + "</div>";
    var slides = "<div><h2>Slide trình bày</h2>" +
      (P.slides ? '<div class="embed"><iframe src="' + esc(slidesEmbed(P.slides)) + '" title="Slide trình bày" allowfullscreen></iframe></div>'
        : emptyBox("Slide sẽ được đăng vào cuối kỳ.")) + "</div>";
    return pageHead("Sản phẩm", "Video, poster và slide trình bày của nhóm.") +
      wrap(video + '<section class="grid grid-2">' + poster + slides + "</section>");
  }

  /* ---------- Tài liệu ---------- */
  function pageDocs() {
    var D = S.documents;
    var drive = '<section class="card"><h2>Thư mục Google Drive chung</h2>' +
      (D.drive ? '<p><a class="btn" href="' + esc(D.drive) + '" target="_blank" rel="noopener">Mở thư mục Drive của nhóm</a></p>'
        : "<p>" + PENDING + "</p>") +
      '<p class="placeholder">Thư mục đã chia sẻ quyền xem cho giảng viên.</p></section>';
    var minutes = D.minutes.slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    var mins = '<section><h2>Biên bản họp nhóm</h2>' +
      (minutes.length ? '<div class="table-wrap"><table class="data-table"><thead><tr><th>Ngày</th><th>Biên bản</th></tr></thead><tbody>' +
        minutes.map(function (m) {
          return "<tr><td>" + formatDate(m.date) + "</td><td>" + (m.link
            ? '<a href="' + esc(m.link) + '" target="_blank" rel="noopener">' + esc(m.title) + "</a>" : esc(m.title)) + "</td></tr>";
        }).join("") + "</tbody></table></div>"
        : '<div class="card"><p>' + PENDING + "</p></div>") + "</section>";
    var refs = '<section class="card"><h2>Tài liệu tham khảo</h2>' +
      (D.references.length ? "<ol>" + D.references.map(function (r) {
        var t = r.link ? '<a href="' + esc(r.link) + '" target="_blank" rel="noopener">' + esc(r.title) + "</a>" : esc(r.title);
        return "<li>" + t + (r.source ? " – <em>" + esc(r.source) + "</em>" : "") + "</li>";
      }).join("") + "</ol>" : "<p>" + PENDING + "</p>") + "</section>";
    return pageHead("Tài liệu", "Thư mục chung, biên bản họp định kỳ và tài liệu tham khảo (ghi rõ nguồn).") +
      wrap(drive + mins + refs);
  }

  /* ---------- Khởi chạy ---------- */
  var PAGES = {
    home: pageHome, members: pageMembers, member: pageMember, activities: pageActivities,
    rules: pageRules, project: pageProject, products: pageProducts, docs: pageDocs
  };

  var page = document.body.getAttribute("data-page") || "home";
  var active = page === "member" ? "members" : page;
  var content = (PAGES[page] || pageHome)();
  document.getElementById("app").innerHTML = renderHeader(active) + content + renderFooter();

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  if (page === "activities") bindFilters();
})();

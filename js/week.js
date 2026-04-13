/**
 * week.html 用スクリプト
 * URLパラメータ ?course=game1&week=1 を読み取ってページを描画します。
 */

(function () {
  const params = new URLSearchParams(window.location.search);
  const courseKey = params.get("course"); // "game1" or "game2"
  const weekNum = parseInt(params.get("week"), 10);

  const course = SITE_DATA[courseKey];
  if (!course) { document.body.innerHTML = "<p>コースが見つかりません。</p>"; return; }

  const weekData = course.weeks.find(w => w.week === weekNum);
  if (!weekData) { document.body.innerHTML = "<p>該当するコマが見つかりません。</p>"; return; }

  const isGame2 = courseKey === "game2";
  const colorClass = isGame2 ? "game2" : "";
  const prevWeek = weekNum > 1 ? weekNum - 1 : null;
  const nextWeek = weekNum < 15 ? weekNum + 1 : null;

  // <title>
  document.title = `第${weekNum}回：${weekData.title} | ${course.title} | 名古屋音楽大学`;

  // ヘッダー
  document.getElementById("header-site-title").textContent = "名古屋音楽大学";
  document.getElementById("header-page-title").textContent = `${course.title} — 第${weekNum}回`;

  // パンくず
  document.getElementById("breadcrumb").innerHTML =
    `<a href="index.html">トップ</a><span>›</span>` +
    `<a href="${courseKey}.html">${course.title}（${course.semester}）</a><span>›</span>` +
    `第${weekNum}回`;

  // 週ヘッダー
  const wh = document.getElementById("week-header");
  wh.className = `week-header ${colorClass}`;
  document.getElementById("week-label").textContent = `${course.title}（${course.semester}）`;
  document.getElementById("week-title").textContent = `第${weekNum}回：${weekData.title}`;
  if (weekData.description) {
    document.getElementById("week-description").textContent = weekData.description;
  }

  // スライド
  const slidesCard = document.getElementById("slides-card");
  if (weekData.slides && weekData.slides.length > 0) {
    const ul = slidesCard.querySelector("ul");
    ul.innerHTML = weekData.slides.map(s =>
      `<li><a href="${s.url}" target="_blank">${s.label}</a></li>`
    ).join("");
  } else {
    slidesCard.querySelector("ul").innerHTML =
      `<li><span class="empty-message">スライドは準備中です</span></li>`;
  }

  // Unityプロジェクト
  const projectCard = document.getElementById("project-card");
  if (weekData.project && weekData.project.length > 0) {
    const ul = projectCard.querySelector("ul");
    ul.innerHTML = weekData.project.map(p =>
      `<li><a href="${p.url}">${p.label}</a></li>`
    ).join("");
  } else {
    projectCard.querySelector("ul").innerHTML =
      `<li><span class="empty-message">配布ファイルはありません</span></li>`;
  }

  // 課題
  const assignCard = document.getElementById("assignment-card");
  if (weekData.assignment) {
    assignCard.querySelector(".assignment-box .content").textContent = weekData.assignment;
    if (weekData.deadline) {
      assignCard.querySelector(".deadline").textContent = `締切：${weekData.deadline}`;
    } else {
      assignCard.querySelector(".deadline").style.display = "none";
    }
  } else {
    assignCard.querySelector(".assignment-box").innerHTML =
      `<span class="empty-message">課題は準備中です</span>`;
  }

  // 前後ナビ
  const prevLink = document.getElementById("nav-prev");
  const nextLink = document.getElementById("nav-next");

  if (prevWeek) {
    prevLink.href = `week.html?course=${courseKey}&week=${prevWeek}`;
    prevLink.textContent = `← 第${prevWeek}回`;
  } else {
    prevLink.classList.add("disabled");
    prevLink.textContent = "← 前のコマ";
  }

  if (nextWeek) {
    nextLink.href = `week.html?course=${courseKey}&week=${nextWeek}`;
    nextLink.textContent = `第${nextWeek}回 →`;
  } else {
    nextLink.classList.add("disabled");
    nextLink.textContent = "次のコマ →";
  }
})();

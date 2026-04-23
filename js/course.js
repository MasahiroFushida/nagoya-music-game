/**
 * game1.html / game2.html 用スクリプト
 * URLのファイル名からコースキーを判定して一覧を描画します。
 */

(function () {
  const path = window.location.pathname;
  const courseKey = path.includes("game2") ? "game2" : "game1";
  const course = SITE_DATA[courseKey];
  if (!course) return;

  const isGame2 = courseKey === "game2";
  const colorClass = isGame2 ? "game2" : "";

  // <title>
  document.title = `${course.title} | 名古屋音楽大学`;

  // ヘッダー
  document.getElementById("header-site-title").textContent = "名古屋音楽大学";
  document.getElementById("header-page-title").textContent = course.title;

  // パンくず
  document.getElementById("breadcrumb").innerHTML =
    `<a href="index.html">トップ</a><span>›</span>${course.title}（${course.semester}）`;

  // コースヘッダー
  const ch = document.getElementById("course-header");
  ch.className = `course-header ${colorClass}`;
  document.getElementById("course-title").textContent = course.title;
  document.getElementById("course-semester").textContent = course.semester;
  document.getElementById("course-description").textContent = course.description;

  // 週一覧
  const list = document.getElementById("week-list");
  list.innerHTML = course.weeks.map(w => {
    const hasSlides = w.slides && w.slides.length > 0;
    const hasProject = w.project && w.project.length > 0;
    const hasAssignment = !!w.assignment;

    const slideUrl = hasSlides ? w.slides[0].url : '';
    const disabledClass = isGame2 ? 'disabled' : '';
    return `
      <div class="week-item ${colorClass}">
        <span class="week-num">第${w.week}回</span>
        <span class="week-title">
          <a href="week.html?course=${courseKey}&week=${w.week}" class="${disabledClass}">${w.title}</a>
        </span>
        <span class="week-icons">
          <span class="icon-badge ${hasSlides ? 'active clickable' : ''}" ${hasSlides ? `data-slide-url="${slideUrl}"` : ''}>スライド</span>
          <span class="icon-badge ${hasProject ? 'active project clickable' : ''}" ${hasProject ? `data-project-url="${w.project[0].url}"` : ''}>配布</span>
          <span class="icon-badge ${hasAssignment ? 'active clickable assignment' : ''}" ${hasAssignment ? `data-course="${courseKey}" data-week="${w.week}"` : ''}>課題</span>
        </span>
      </div>
    `;
  }).join("");

  // スライド＆課題バッジのクリック機能
  document.querySelectorAll(".icon-badge.clickable").forEach(badge => {
    badge.addEventListener("click", () => {
      if (badge.getAttribute("data-project-url")) {
        window.open(badge.getAttribute("data-project-url"), "_blank");
      } else if (badge.getAttribute("data-slide-url")) {
        const url = badge.getAttribute("data-slide-url");
        if (url) window.location.href = url;
      } else if (badge.getAttribute("data-course")) {
        const course = badge.getAttribute("data-course");
        const week = badge.getAttribute("data-week");
        if (course && week) window.location.href = `week.html?course=${course}&week=${week}`;
      }
    });
  });
})();

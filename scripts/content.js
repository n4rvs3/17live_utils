// react製のサイトで、動的に生成される要素を検索する
setInterval(() => {
  const profile = document.querySelector(
    ".StreamerInfo__StreamerInfoWrapper-sc-1uvbjnu-3"
  );
  if (profile) {
    profile.style.maxHeight = "90%";
    profile.style.height = "max-content";
    clearInterval(); // 要素が見つかったらintervalを停止
  }
}, 100); // 100ミリ秒ごとに検索

setInterval(() => {
  const recommend = document.querySelector(
    ".SuggestedPanel__PanelWrapper-sc-k6y6gs-0"
  );
  if (recommend) {
    recommend.style.display = "none";
    clearInterval();
  }
}, 100);

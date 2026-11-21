/* English-first project navigation with an explicit, remembered language choice.
   项目导航默认英文，保留链接指定的语言与用户的主动选择。 */
(function () {
  'use strict';
  var root = document.documentElement;
  function applyLanguage(language, updateAddress) {
    root.dataset.lang = language;
    root.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = document.body.dataset[language === 'zh' ? 'titleZh' : 'titleEn'];
    document.querySelectorAll('[data-language]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    document.querySelectorAll('[data-label-en]').forEach(function (element) {
      element.setAttribute('aria-label', language === 'zh' ? element.dataset.labelZh : element.dataset.labelEn);
    });
    document.querySelectorAll('[data-project-link]').forEach(function (link) {
      var target = new URL(link.getAttribute('href'), location.href);
      target.searchParams.set('lang', language);
      link.setAttribute('href', target.pathname + target.search + target.hash);
    });
    try { localStorage.setItem('project-sites-language', language); } catch (error) {}
    if (updateAddress) {
      var address = new URL(location.href);
      address.searchParams.set('lang', language);
      history.replaceState(null, '', address.pathname + address.search + address.hash);
    }
  }
  document.querySelectorAll('[data-language]').forEach(function (button) {
    button.addEventListener('click', function () { applyLanguage(button.dataset.language, true); });
  });
  applyLanguage(root.dataset.lang, false);
  root.dataset.ready = 'true';
}());

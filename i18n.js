const defaultLang = "fr";
const translations = {
  fr: {},
};

const translationTargets = [
  { selector: "[data-i18n]", key: "i18n", attr: "text" },
  { selector: "[data-i18n-html]", key: "i18nHtml", attr: "html" },
  { selector: "[data-i18n-placeholder]", key: "i18nPlaceholder", attr: "placeholder" },
  { selector: "[data-i18n-title]", key: "i18nTitle", attr: "title" },
];

const captureDefaults = () => {
  translationTargets.forEach((target) => {
    document.querySelectorAll(target.selector).forEach((element) => {
      const datasetKey = `default${target.key[0].toUpperCase()}${target.key.slice(1)}`;
      if (element.dataset[datasetKey]) {
        return;
      }

      if (target.attr === "text") {
        element.dataset[datasetKey] = element.textContent.trim();
      } else if (target.attr === "html") {
        element.dataset[datasetKey] = element.innerHTML.trim();
      } else {
        element.dataset[datasetKey] = element.getAttribute(target.attr) || "";
      }
    });
  });
};

const resolveValue = (mapping, key, fallback) => {
  if (mapping && Object.prototype.hasOwnProperty.call(mapping, key)) {
    return mapping[key];
  }
  return fallback;
};

const applyTranslations = (lang) => {
  const activeLang = lang || defaultLang;
  const mapping = translations[activeLang] || {};

  translationTargets.forEach((target) => {
    document.querySelectorAll(target.selector).forEach((element) => {
      const key = element.dataset[target.key];
      const datasetKey = `default${target.key[0].toUpperCase()}${target.key.slice(1)}`;
      const fallback = element.dataset[datasetKey] || "";
      const value = resolveValue(mapping, key, fallback);

      if (target.attr === "text") {
        element.textContent = value;
      } else if (target.attr === "html") {
        element.innerHTML = value;
      } else {
        element.setAttribute(target.attr, value);
      }
    });
  });

  document.documentElement.lang = activeLang;
};

document.addEventListener("DOMContentLoaded", () => {
  captureDefaults();
});

window.i18n = {
  defaultLang,
  translations,
  applyTranslations,
};

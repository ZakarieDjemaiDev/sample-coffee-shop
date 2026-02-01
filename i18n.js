const defaultLang = "fr";
const translations = {
  fr: {},
  en: {
    "meta.title": "CafeMNS - Neighborhood cafe in France",
    "nav.concept": "Concept",
    "nav.menu": "Menu",
    "nav.ambiance": "Ambience",
    "nav.contact": "Contact",
    "nav.order": "Order",
    "hero.eyebrow": "New coffee shop in France",
    "hero.title": "The cafe that elevates your breaks.",
    "hero.lead":
      "CafeMNS blends French craft, responsible beans, and a chic urban vibe. A local alternative to big chains, with a simple, trendy signature.",
    "hero.cta.menu": "Explore the menu",
    "hero.cta.addresses": "See our locations",
    "hero.highlight.recipes": "house recipes",
    "hero.highlight.roast": "artisan roasting",
    "hero.highlight.hours": "non-stop service",
    "special.title": "Drink of the month",
    "special.name": "Salted caramel mocha",
    "special.description": "Rich chocolate, salted caramel, whole milk. Available hot or iced.",
    "special.cta": "I want it",
    "concept.title": "The concept",
    "concept.subtitle": "A French coffee experience, simple and inspired.",
    "concept.item1.title": "Responsible beans",
    "concept.item1.body":
      "Traceable origins, transparent sourcing, and a short supply chain with partner roasters.",
    "concept.item2.title": "Urban design",
    "concept.item2.body":
      "Natural materials, soft light, and curated playlists to turn your break into a ritual.",
    "concept.item3.title": "Creative recipes",
    "concept.item3.body":
      "Signature coffees, cold drinks, and seasonal treats, all made on site every morning.",
    "menu.title": "Menu",
    "menu.subtitle": "The best of our essentials.",
    "menu.item.espresso.title": "Signature espresso",
    "menu.item.espresso.body": "Bold, dark chocolate, caramel.",
    "menu.item.flat.title": "Vanilla flat white",
    "menu.item.flat.body": "Bourbon vanilla, micro-foam.",
    "menu.item.cold.title": "Citrus cold brew",
    "menu.item.cold.body": "Slow brew, orange zest.",
    "menu.item.matcha.title": "Coconut matcha",
    "menu.item.matcha.body": "Uji matcha, fresh coconut milk.",
    "menu.item.chai.title": "Spiced chai latte",
    "menu.item.chai.body": "Cinnamon, cardamom, ginger.",
    "menu.item.cookie.title": "Fudgy cookie",
    "menu.item.cookie.body": "Dark chocolate, sea salt.",
    "testimonials.title": "Testimonials",
    "testimonials.subtitle": "They chose CafeMNS.",
    "testimonials.quote1":
      "The flat white is flawless and the atmosphere is perfect for a break between meetings.",
    "testimonials.quote2":
      "Creative recipes without the fuss. The citrus cold brew has become my Friday ritual.",
    "testimonials.quote3":
      "You can feel the care in every detail, from the playlist to the gooey cookie. The welcome is top-notch.",
    "ambience.title": "Ambience",
    "ambience.subtitle": "A place that breathes Parisian energy.",
    "ambience.body":
      "Velvet banquettes, travertine bar, XXL plants, and quiet corners to work. CafeMNS is built for busy mornings and creative afternoons.",
    "ambience.cta": "See the gallery",
    "ambience.stats.cities": "cities in France",
    "ambience.stats.addresses": "bright locations",
    "ambience.stats.rating": "average rating",
    "contact.title": "Contact",
    "contact.subtitle": "Let's talk coffee, projects, or private events.",
    "contact.body":
      "A question, a business request, or feedback from your visit? Write to us, we'll reply quickly.",
    "contact.mapTitle": "Find us",
    "contact.mapFrameTitle": "CafeMNS Paris",
    "contact.address": "18 rue des Fleurs, 75002 Paris",
    "contact.form.title": "Contact us",
    "contact.form.firstName": "First name",
    "contact.form.lastName": "Last name",
    "contact.form.email": "Email",
    "contact.form.message": "Your message",
    "contact.form.submit": "Send",
    "footer.address": "18 rue des Fleurs, 75002 Paris<br />hello@cafemns.fr · 01 84 20 30 40",
    "footer.concept": "Concept",
    "footer.menu": "Menu",
    "footer.ambiance": "Ambience",
    "footer.instagram": "Instagram",
    "footer.note": "© 2026 CafeMNS. All rights reserved.",
  },
  de: {
    "meta.title": "CafeMNS - Nachbarschaftscafé in Frankreich",
    "nav.concept": "Konzept",
    "nav.menu": "Menü",
    "nav.ambiance": "Ambiente",
    "nav.contact": "Kontakt",
    "nav.order": "Bestellen",
    "hero.eyebrow": "Neuer Coffee-Shop in Frankreich",
    "hero.title": "Der Kaffee, der Ihre Pausen aufwertet.",
    "hero.lead":
      "CafeMNS verbindet französisches Handwerk, verantwortungsvolle Bohnen und eine urbane, schicke Atmosphäre. Eine lokale Alternative zu großen Ketten, mit einer schlichten, trendigen Handschrift.",
    "hero.cta.menu": "Menü entdecken",
    "hero.cta.addresses": "Unsere Adressen sehen",
    "hero.highlight.recipes": "hausgemachte Rezepte",
    "hero.highlight.roast": "handwerkliche Röstung",
    "hero.highlight.hours": "durchgehend geöffnet",
    "special.title": "Spezialität des Monats",
    "special.name": "Mocha mit Salzkaramell",
    "special.description": "Kräftige Schokolade, Salzkaramell, Vollmilch. Heiß oder eisgekühlt.",
    "special.cta": "Ich will ihn",
    "concept.title": "Das Konzept",
    "concept.subtitle": "Ein französisches Kaffeeerlebnis, einfach und inspiriert.",
    "concept.item1.title": "Verantwortungsvolle Bohnen",
    "concept.item1.body":
      "Nachverfolgbare Herkunft, transparente Beschaffung und kurze Lieferketten mit Partner-Röstereien.",
    "concept.item2.title": "Urbanes Design",
    "concept.item2.body":
      "Natürliche Materialien, sanftes Licht und kuratierte Playlists, die Ihre Pause zum Ritual machen.",
    "concept.item3.title": "Kreative Rezepte",
    "concept.item3.body":
      "Signature-Kaffees, kalte Drinks und saisonale Leckereien, jeden Morgen vor Ort zubereitet.",
    "menu.title": "Menü",
    "menu.subtitle": "Das Beste unserer Klassiker.",
    "menu.item.espresso.title": "Signature Espresso",
    "menu.item.espresso.body": "Kräftig, dunkle Schokolade, Karamell.",
    "menu.item.flat.title": "Vanille Flat White",
    "menu.item.flat.body": "Bourbon-Vanille, Mikro-Schaum.",
    "menu.item.cold.title": "Citrus Cold Brew",
    "menu.item.cold.body": "Langsam extrahiert, Orangenzeste.",
    "menu.item.matcha.title": "Kokos Matcha",
    "menu.item.matcha.body": "Uji-Matcha, frische Kokosmilch.",
    "menu.item.chai.title": "Gewürz-Chai-Latte",
    "menu.item.chai.body": "Zimt, Kardamom, Ingwer.",
    "menu.item.cookie.title": "Schmelzender Cookie",
    "menu.item.cookie.body": "Dunkle Schokolade, Meersalz.",
    "testimonials.title": "Stimmen",
    "testimonials.subtitle": "Sie haben CafeMNS gewählt.",
    "testimonials.quote1":
      "Der Flat White ist perfekt und die Atmosphäre ideal für eine Pause zwischen Terminen.",
    "testimonials.quote2":
      "Kreative Rezepte ohne Schnickschnack. Der Citrus Cold Brew ist mein Freitagsritual geworden.",
    "testimonials.quote3":
      "Man spürt die Liebe zum Detail, von der Playlist bis zum fudgy Cookie. Der Empfang ist top.",
    "ambience.title": "Ambiente",
    "ambience.subtitle": "Ein Ort mit pariser Energie.",
    "ambience.body":
      "Samtbänke, Travertin-Bar, XXL-Pflanzen und ruhige Ecken zum Arbeiten. CafeMNS ist für hektische Morgen und kreative Nachmittage gemacht.",
    "ambience.cta": "Zur Galerie",
    "ambience.stats.cities": "Städte in Frankreich",
    "ambience.stats.addresses": "helle Standorte",
    "ambience.stats.rating": "Durchschnittsbewertung",
    "contact.title": "Kontakt",
    "contact.subtitle": "Sprechen wir über Kaffee, Projekte oder Privat-Events.",
    "contact.body":
      "Eine Frage, eine Anfrage oder Feedback zu Ihrem Besuch? Schreiben Sie uns, wir antworten schnell.",
    "contact.mapTitle": "Uns finden",
    "contact.mapFrameTitle": "CafeMNS Paris",
    "contact.address": "18 rue des Fleurs, 75002 Paris",
    "contact.form.title": "Kontakt aufnehmen",
    "contact.form.firstName": "Vorname",
    "contact.form.lastName": "Nachname",
    "contact.form.email": "E-Mail",
    "contact.form.message": "Ihre Nachricht",
    "contact.form.submit": "Senden",
    "footer.address": "18 rue des Fleurs, 75002 Paris<br />hello@cafemns.fr · 01 84 20 30 40",
    "footer.concept": "Konzept",
    "footer.menu": "Menü",
    "footer.ambiance": "Ambiente",
    "footer.instagram": "Instagram",
    "footer.note": "© 2026 CafeMNS. Alle Rechte vorbehalten.",
  },
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

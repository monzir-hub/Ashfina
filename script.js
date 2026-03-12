const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const revealItems = document.querySelectorAll(".reveal");
const languageButtons = document.querySelectorAll("[data-lang-trigger]");
const translatableNodes = document.querySelectorAll("[data-i18n]");

const translations = {
  en: {
    navHome: "Home",
    navAbout: "About Us",
    navProducts: "Products",
    navQuality: "Quality",
    navContact: "Contact",
    heroEyebrow: "Advancing Healthcare in Sudan",
    heroTitle: "Advancing Healthcare Through Pharmaceutical Excellence",
    heroText:
      "ASHFINA Pharmaceuticals is a leading pharmaceutical manufacturing company based in Khartoum, Sudan, committed to producing high-quality medications that improve lives.",
    heroPrimaryCta: "Our Products",
    heroSecondaryCta: "Contact Us",
    aboutEyebrow: "Company Profile",
    aboutTitle: "A strong pharmaceutical identity shaped for confidence.",
    aboutCard1Title: "Manufacturing Focus",
    aboutCard1Text:
      "Ashfina is positioned as a pharmaceutical manufacturing company that values structured production, clear operating discipline, and a professional market presence.",
    aboutCard2Title: "Regional Relevance",
    aboutCard2Text:
      "Based in Khartoum, Ashfina is presented to support healthcare supply chains with dependable manufacturing communication and a serious institutional image.",
    aboutCard3Title: "Brand Character",
    aboutCard3Text:
      "The visual system combines cobalt blue, clean ivory, and geometric typography to reflect precision, credibility, and clarity.",
    manufacturingEyebrow: "Product Portfolio",
    manufacturingTitle: "Operational messaging designed for a serious healthcare audience.",
    manufacturingText:
      "The website positions Ashfina as a disciplined manufacturer with a professional tone suitable for partners, distributors, institutions, and procurement-focused visitors.",
    feature1Title: "Structured Production Story",
    feature1Text: "Clear language around process consistency, organization, and dependable output.",
    feature2Title: "Institutional Presentation",
    feature2Text: "A visual design that feels credible for healthcare, business, and regulatory-facing audiences.",
    feature3Title: "Regional Identity",
    feature3Text: "Strong location anchoring in Khartoum with bilingual details for local and international visitors.",
    qualityEyebrow: "Quality Outlook",
    qualityTitle: "Professional communication around care, consistency, and responsibility.",
    quality1Title: "Precision",
    quality1Text: "Design language and content emphasize rigorous attention to process and professional execution.",
    quality2Title: "Trust",
    quality2Text: "The site creates a calm, reliable tone that supports confidence in a pharmaceutical manufacturer.",
    quality3Title: "Clarity",
    quality3Text: "Bilingual address information and simplified navigation make the company easy to understand and reach.",
    locationEyebrow: "Contact",
    locationTitle: "Khartoum headquarters with a clear local presence.",
    locationText:
      "Ashfina is presented with a grounded Khartoum address to support trust, accessibility, and a professional regional footprint.",
    locationCompanyLabel: "Company",
    locationCompanyValue: "Ashfina",
    locationCityLabel: "City",
    locationCityValue: "Khartoum, Sudan",
    locationAddressLabel: "Address",
    locationAddressValue: "Khartoum - Burri - Alsafa 1, Building 424",
    locationArabicLabel: "Arabic Address",
    locationArabicValue: "الخرطوم - بري - حي الصفا 1 - بناية 424",
    footerTaglineLong: "Empowering health through uncompromising pharmaceutical excellence.",
    footerContactTitle: "Contact Us",
    footerAddressLong: "Khartoum - Burri - Alsafa 1, Building 424, Sudan",
    footerEmail: "info@ashfina.com",
    footerPhone: "+249 (0) 123 456 789",
    footerCopyright: "© 2026 Ashfina Pharmaceuticals. All rights reserved.",
    brandSubtitle: "Pharmaceuticals",
    langArabic: "العربية",
  },
  ar: {
    navHome: "الرئيسية",
    navAbout: "من نحن",
    navProducts: "المنتجات",
    navQuality: "الجودة",
    navContact: "تواصل معنا",
    heroEyebrow: "نرتقي بالرعاية الصحية في السودان",
    heroTitle: "الارتقاء بالرعاية الصحية عبر التميز الدوائي",
    heroText:
      "أشفينا للأدوية شركة رائدة في التصنيع الدوائي مقرها الخرطوم، السودان، وملتزمة بإنتاج أدوية عالية الجودة تسهم في تحسين حياة الناس.",
    heroPrimaryCta: "منتجاتنا",
    heroSecondaryCta: "تواصل معنا",
    aboutEyebrow: "نبذة عن الشركة",
    aboutTitle: "هوية دوائية قوية صممت لتعزيز الثقة.",
    aboutCard1Title: "تركيز التصنيع",
    aboutCard1Text:
      "تظهر أشفينا كشركة تصنيع دوائي تقدر الإنتاج المنظم والانضباط التشغيلي الواضح والحضور المهني في السوق.",
    aboutCard2Title: "الأهمية الإقليمية",
    aboutCard2Text:
      "انطلاقاً من الخرطوم، تقدم أشفينا بصورة تدعم سلاسل الإمداد الصحي بخطاب تصنيعي موثوق وصورة مؤسسية جادة.",
    aboutCard3Title: "شخصية العلامة",
    aboutCard3Text:
      "يجمع النظام البصري بين الأزرق الكوبالت والعاجي النظيف والطباعة الهندسية ليعكس الدقة والمصداقية والوضوح.",
    manufacturingEyebrow: "المنتجات",
    manufacturingTitle: "رسالة تشغيلية مصممة لجمهور صحي جاد ومحترف.",
    manufacturingText:
      "يضع الموقع أشفينا كشركة تصنيع منضبطة بنبرة مهنية مناسبة للشركاء والموزعين والمؤسسات والزوار المعنيين بالمشتريات.",
    feature1Title: "سردية إنتاج منظمة",
    feature1Text: "لغة واضحة حول اتساق العمليات والتنظيم والقدرة على تقديم مخرجات يمكن الاعتماد عليها.",
    feature2Title: "عرض مؤسسي",
    feature2Text: "تصميم بصري يمنح إحساساً بالمصداقية أمام جمهور الرعاية الصحية والأعمال والجهات التنظيمية.",
    feature3Title: "هوية إقليمية",
    feature3Text: "ارتباط قوي بالموقع في الخرطوم مع تفاصيل ثنائية اللغة للزوار المحليين والدوليين.",
    qualityEyebrow: "منظور الجودة",
    qualityTitle: "تواصل مهني يرتكز على العناية والاتساق والمسؤولية.",
    quality1Title: "الدقة",
    quality1Text: "تؤكد اللغة والتصميم على الاهتمام الصارم بالعمليات والتنفيذ المهني.",
    quality2Title: "الثقة",
    quality2Text: "يمنح الموقع نبرة هادئة وموثوقة تدعم الثقة في الشركة المصنعة للأدوية.",
    quality3Title: "الوضوح",
    quality3Text: "تجعل معلومات العنوان ثنائية اللغة والتنقل المبسط الشركة أسهل فهماً والوصول إليها.",
    locationEyebrow: "تواصل معنا",
    locationTitle: "مقر في الخرطوم بحضور محلي واضح.",
    locationText:
      "تعرض أشفينا بعنوان واضح في الخرطوم لدعم الثقة وسهولة الوصول وبصمة إقليمية مهنية.",
    locationCompanyLabel: "الشركة",
    locationCompanyValue: "أشفينا",
    locationCityLabel: "المدينة",
    locationCityValue: "الخرطوم، السودان",
    locationAddressLabel: "العنوان",
    locationAddressValue: "Khartoum - Burri - Alsafa 1, Building 424",
    locationArabicLabel: "العنوان بالعربية",
    locationArabicValue: "الخرطوم - بري - حي الصفا 1 - بناية 424",
    footerTaglineLong: "نعزز الصحة من خلال تميز دوائي صارم لا يساوم على الجودة.",
    footerContactTitle: "تواصل معنا",
    footerAddressLong: "الخرطوم - بري - الصفا 1 - بناية 424، السودان",
    footerEmail: "info@ashfina.com",
    footerPhone: "+249 (0) 123 456 789",
    footerCopyright: "© 2026 أشفينا للأدوية. جميع الحقوق محفوظة.",
    brandSubtitle: "للأدوية",
    langArabic: "English",
  },
};

function applyLanguage(lang) {
  const selected = translations[lang] ? lang : "en";

  document.documentElement.lang = selected;
  document.documentElement.dir = selected === "ar" ? "rtl" : "ltr";

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[selected][key]) {
      node.textContent = translations[selected][key];
    }
  });

  languageButtons.forEach((button) => {
    button.classList.add("is-active");
    button.setAttribute("aria-pressed", String(selected === "ar"));
  });

  window.localStorage.setItem("ashfina-language", selected);
}

if (navToggle && header) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    header.classList.toggle("menu-open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header?.classList.remove("menu-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "ar" ? "en" : "ar";
    applyLanguage(nextLanguage);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => observer.observe(item));

const initialLanguage =
  new URLSearchParams(window.location.search).get("lang") ||
  window.localStorage.getItem("ashfina-language") ||
  "en";

applyLanguage(initialLanguage);

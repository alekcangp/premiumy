const translations = {
  en: {
    pageTitle: 'Premiumy | Natural Products in Giza',
    navAbout: 'About',
    navGallery: 'Gallery',
    navContact: 'Contact',
    heroEyebrow: 'Premium Quality',
    heroHeading: 'Crafted with love, sourced from tradition.',
    heroText: 'Explore our curated selection of premium items, fresh ingredients, and quality products from the heart of Giza.',
    heroGallery: 'Browse the Gallery',
    heroContact: 'Find Us',
    aboutEyebrow: 'About Premiumy',
    aboutHeading: 'Fresh products, crafted with care.',
    aboutText1: 'Premiumy brings premium natural products to the heart of Giza. Every item is prepared with locally sourced ingredients, honest quality, and a passion for excellence.',
    aboutText2: 'Our collection celebrates Egyptian taste, seasonal harvests, and premium products that feel both delicious and nourishing.',
    stat1: 'Happy customers',
    stat2: 'Fresh ingredients',
    stat3: 'Support via WhatsApp',
    galleryEyebrow: 'Gallery',
    galleryHeading: 'Premium products and fresh quality.',
    contactEyebrow: 'Visit Premiumy',
    contactHeading: 'Find our shop in Giza',
    contactText: 'شارع مصرف جلال, King Faisal St, Giza Governorate 12555, Egypt',
    whatsapp: 'Chat on WhatsApp',
    call: 'Call +20 11 4030 2996',
    reviews: 'View Google Maps profile',
    footer: 'Premiumy 🌿 — natural products in Giza.',
    footerLink: 'Back to top',
  },
  ar: {
    pageTitle: 'بريميومي | منتجات طبيعية في الجيزة',
    navAbout: 'حول',
    navGallery: 'المعرض',
    navContact: 'اتصل',
    heroEyebrow: 'جودة مميزة',
    heroHeading: 'مصنوع بحب، مستمد من التقاليد.',
    heroText: 'اكتشف تشكيلتنا المختارة من المنتجات المميزة والمكونات الطازجة والعناصر عالية الجودة من قلب الجيزة.',
    heroGallery: 'تصفح المعرض',
    heroContact: 'تواصل معنا',
    aboutEyebrow: 'عن بريميومي',
    aboutHeading: 'منتجات طازجة، محضّرة بعناية.',
    aboutText1: 'يقدم بريميومي منتجات طبيعية مميّزة في قلب الجيزة. تُحضّر كل منتجاتنا بمكونات محلية، جودة صادقة، وشغف بالتميز.',
    aboutText2: 'تحتفل مجموعتنا بالمذاق المصري والمحاصيل الموسمية والمنتجات المتميزة التي تمنح شعورًا باللذة والتغذية.',
    stat1: 'عملاء راضون',
    stat2: 'مكونات طازجة',
    stat3: 'دعم عبر واتساب',
    galleryEyebrow: 'المعرض',
    galleryHeading: 'منتجات مميزة وجودة طازجة.',
    contactEyebrow: 'زيارة بريميومي',
    contactHeading: 'اكتشف متجرنا في الجيزة',
    contactText: 'شارع مصرف جلال، شارع الملك فيصل، محافظة الجيزة 12555، مصر',
    whatsapp: 'الدردشة على واتساب',
    call: 'اتصل +20 11 4030 2996',
    reviews: 'عرض ملف خرائط جوجل',
    footer: 'بريميومي 🌿 — منتجات طبيعية في الجيزة.',
    footerLink: 'العودة للأعلى',
  },
  ru: {
    pageTitle: 'Premiumy | Натуральные продукты в Гизе',
    navAbout: 'О нас',
    navGallery: 'Галерея',
    navContact: 'Контакты',
    heroEyebrow: 'Премиальное качество',
    heroHeading: 'Создано с любовью, вдохновлено традициями.',
    heroText: 'Откройте нашу подборку премиальных товаров, свежих ингредиентов и качественных продуктов из сердца Гизы.',
    heroGallery: 'Просмотреть галерею',
    heroContact: 'Найти нас',
    aboutEyebrow: 'О Premiumy',
    aboutHeading: 'Свежие продукты, приготовленные с заботой.',
    aboutText1: 'Premiumy приносит премиальные натуральные продукты в сердце Гизы. Каждый продукт готовится из местных ингредиентов, честного качества и страсти к совершенству.',
    aboutText2: 'Наша коллекция празднует египетский вкус, сезонные продукты и премиальные товары, которые одновременно вкусны и полезны.',
    stat1: 'Довольные клиенты',
    stat2: 'Свежие ингредиенты',
    stat3: 'Поддержка через WhatsApp',
    galleryEyebrow: 'Галерея',
    galleryHeading: 'Премиальные продукты и свежее качество.',
    contactEyebrow: 'Посетите Premiumy',
    contactHeading: 'Найдите наш магазин в Гизе',
    contactText: 'شارع مصرف جلال، شارع الملك فيصل، محافظة الجيزة 12555، مصر',
    whatsapp: 'Чат в WhatsApp',
    call: 'Позвонить +20 11 4030 2996',
    reviews: 'Посмотреть профиль Google Maps',
    footer: 'Premiumy 🌿 — натуральные продукты в Гизе.',
    footerLink: 'Наверх',
  },
};

const textElements = document.querySelectorAll('[data-text-key]');
const languageButtons = document.querySelectorAll('.lang-button');
const navLinks = document.querySelectorAll('.site-nav a, .footer-inner a');

function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  const current = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  textElements.forEach((element) => {
    const key = element.dataset.textKey;
    if (!key) return;
    const value = current[key];
    if (value) {
      element.textContent = value;
    }
  });
  languageButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });
  document.title = current.pageTitle;
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

setLanguage('en');

const observerOptions = {
  root: null,
  rootMargin: '0px 0px -120px 0px',
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      sectionObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.animate').forEach((section) => {
  sectionObserver.observe(section);
});

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-section');
  const offset = window.scrollY * 0.08;
  hero.style.backgroundPosition = `center ${offset}px`;
});

const counters = document.querySelectorAll('.stat-card strong');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = 'true';
      const finalValue = parseInt(entry.target.textContent, 10);
      let current = 0;
      const step = Math.max(1, Math.round(finalValue / 40));
      const interval = setInterval(() => {
        current += step;
        if (current >= finalValue) {
          entry.target.textContent = `${finalValue}+`;
          clearInterval(interval);
          return;
        }
        entry.target.textContent = `${current}+`;
      }, 16);
    }
  });
}, { threshold: 0.5 });

counters.forEach((counter) => counterObserver.observe(counter));

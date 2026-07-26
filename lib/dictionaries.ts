import type { Locale } from "./i18n";

const en = {
  meta: {
    title: "IBDA Office — Electronic Services",
    description:
      "IBDA Office for Electronic Services completes government and private transactions quickly and professionally. Pay after completion. Contact us on WhatsApp.",
  },
  brand: {
    name: "IBDA",
    word: "OFFICE",
    tag: "Electronic Services",
  },
  nav: {
    home: "Home",
    track: "Track Request",
    services: "Our Services",
    complaint: "Raise Complaint",
    about: "About Us",
    whatsapp: "Contact us on WhatsApp",
  },
  hero: {
    title: "IBDA OFFICE",
    subtitle: "ELECTRONIC SERVICES",
    desc: "We launch government transactions quickly and with accuracy and reliability.",
    cta: "Request Our Services Now",
    badge: "Pay after completion",
    badgeNote: "You only pay once your transaction is done",
  },
  features: [
    { title: "Trustworthy", desc: "We ensure security and confidentiality" },
    { title: "Fast Execution", desc: "We complete transactions in the shortest time" },
    { title: "High Quality", desc: "Exceptional accuracy and professionalism" },
    { title: "Full Support", desc: "We are with you every step of the way" },
  ],
  services: {
    heading: "Our Services",
    sub: "Government and private transactions, completed on your behalf from start to finish.",
    cta: "Request this service",
    learnMore: "View details",
    items: [
      {
        key: "commercial",
        title: "Commercial Registration",
        desc: "Issuing, renewing, and amending commercial registrations for establishments and companies.",
      },
      {
        key: "labor-tax",
        title: "Labor & Tax Affairs",
        desc: "Handling labor office transactions, Zakat, and tax affairs with the relevant authorities.",
      },
      {
        key: "social-insurance",
        title: "Social Insurance",
        desc: "Registering employees, updating wages, and managing GOSI contributions and certificates.",
      },
      {
        key: "muqeem",
        title: "Muqeem Services",
        desc: "Resident data services: exit/re-entry visas, passport renewals, and status updates via Muqeem.",
      },
      {
        key: "qiwa",
        title: "Qiwa Platform Services",
        desc: "Work permits, contracts, Saudization certificates, and all establishment services on Qiwa.",
      },
      {
        key: "attestation",
        title: "Attestation Services",
        desc: "Attesting documents and certificates with chambers of commerce and government bodies.",
      },
      {
        key: "labor-transfer",
        title: "Labor Transfer Services",
        desc: "Transferring workers' sponsorship between establishments quickly and in full compliance.",
      },
      {
        key: "services-transfer",
        title: "Services Transfer",
        desc: "Transferring employee services and records between entities without interruption.",
      },
      {
        key: "work-permits",
        title: "Issuing & Renewing Work Permits",
        desc: "Issuing and renewing work permits and following up on their fees and status.",
      },
      {
        key: "residency",
        title: "Issuing & Renewing Residency",
        desc: "Issuing and renewing Iqama (residency) and completing all related requirements.",
      },
    ],
  },
  info: {
    hours: {
      label: "Working Hours",
      l1: "Saturday to Thursday",
      l2: "10:00 AM – 10:00 PM",
    },
    email: { label: "Email" },
    contact: { label: "Contact Us" },
    location: {
      label: "Our Location",
      l1: "Al-Salama District",
      l2: "Muakib Al-Nasr Street",
    },
  },
  perks: [
    { title: "Track Your Request", desc: "Track your request status easily" },
    { title: "Competitive Prices", desc: "Best prices and high quality" },
    { title: "Fast Completion", desc: "We complete your transactions quickly" },
    { title: "Experience & Efficiency", desc: "An experienced team with high efficiency" },
  ],
  track: {
    heading: "Track Your Request",
    sub: "Enter your request number and phone number, and we will reply with the latest status on WhatsApp.",
    requestNo: "Request number",
    requestPlaceholder: "e.g. 10254",
    phone: "Phone number",
    phonePlaceholder: "05x xxx xxxx",
    submit: "Track via WhatsApp",
    note: "Tracking opens a WhatsApp chat with our team — the fastest way to get an answer.",
    waPrefix: "Hello, I would like to track my request.",
  },
  complaint: {
    heading: "Raise a Complaint",
    sub: "Your feedback helps us improve. Describe the issue and our team will follow up directly.",
    name: "Full name",
    namePlaceholder: "Your name",
    phone: "Phone number",
    phonePlaceholder: "05x xxx xxxx",
    type: "Complaint type",
    types: ["Delay in completion", "Service quality", "Fees and pricing", "Staff conduct", "Other"],
    details: "Complaint details",
    detailsPlaceholder: "Tell us what happened…",
    submit: "Send via WhatsApp",
    waPrefix: "Complaint",
  },
  about: {
    heading: "About Us",
    sub: "A transaction-processing office you can rely on.",
    p1: "IBDA Office for Electronic Services is a Saudi muaqib (transaction-processing) office that completes government and private transactions on behalf of individuals and establishments — quickly, accurately, and with full professionalism.",
    p2: "From commercial registration and labor affairs to residency, work permits, and platform services such as Qiwa and Muqeem, our team follows your transaction from submission to completion and keeps you informed at every step.",
    payTitle: "Pay after completion",
    payDesc: "We believe trust is earned. That is why you only pay once your transaction has been completed successfully.",
    whyTitle: "Why choose us",
    visitTitle: "Visit or contact us",
  },
footer: {
  about: "We complete government and private transactions quickly and professionally. Pay after completion.",
  quick: "Quick Links",
  servicesTitle: "Our Services",
  contact: "Contact",
  rights: "IBDA Office for Electronic Services. All rights reserved.",
  developedBy: "Developed and Engineered by ",
  company: " Nexora Tech ",
  companyUrl: "https://www.nexoratech.info/",
},
  common: {
    langSwitch: "العربية",
    whatsappShort: "WhatsApp",
    floating: "Contact us on WhatsApp",
    loading: "Loading…",
  },
  servicePage: {
    backToServices: "Back to all services",
    benefits: "Why choose us for this service",
    includes: "What we handle for you",
    process: "How it works",
    turnaround: "Expected timeframe",
    requestNow: "Request this service now",
    chatWhatsApp: "Chat on WhatsApp | +966-55-412-4666",
    waMessage: "I would like to request this service",
    ctaNote:
      "Send us a message on WhatsApp and our team will reply with the documents needed and an estimated timeline. You only pay after your transaction is successfully completed.",
  },
  notFound: {
    title: "Page not found",
    desc: "The page you are looking for does not exist or may have been moved.",
    backHome: "Back to home",
  },
};

const ar: typeof en = {
  meta: {
    title: "مكتب الإبداع للخدمات الإلكترونية — خدمات تعقيب ومعاملات حكومية",
    description:
      "مكتب الإبداع للخدمات الإلكترونية لإنجاز جميع المعاملات الحكومية والخاصة بسرعة واحترافية. الدفع بعد الإنجاز. تواصل معنا عبر الواتساب.",
  },
  brand: {
    name: "الإبداع",
    word: "مكتب",
    tag: "للخدمات الإلكترونية",
  },
  nav: {
    home: "الرئيسية",
    track: "تتبع الطلب",
    services: "خدماتنا",
    complaint: "تقديم شكوى",
    about: "من نحن",
    whatsapp: "تواصل معنا واتساب",
  },
  hero: {
    title: "مكتب الإبداع",
    subtitle: "للخدمات الإلكترونية",
    desc: "ننجز المعاملات الحكومية بسرعة وبدقة وموثوقية عالية.",
    cta: "اطلب خدماتنا الآن",
    badge: "الدفع بعد الإنجاز",
    badgeNote: "لا تدفع إلا بعد اكتمال معاملتك بنجاح",
  },
  features: [
    { title: "موثوقية", desc: "نضمن لك الأمان والسرية التامة" },
    { title: "سرعة التنفيذ", desc: "ننجز المعاملات في أقصر وقت" },
    { title: "جودة عالية", desc: "دقة واحترافية استثنائية" },
    { title: "دعم كامل", desc: "معك في كل خطوة على الطريق" },
  ],
  services: {
    heading: "خدماتنا",
    sub: "معاملات حكومية وخاصة نُنجزها نيابة عنك من البداية حتى النهاية.",
    cta: "اطلب هذه الخدمة",
    learnMore: "عرض التفاصيل",
    items: [
      {
        key: "commercial",
        title: "السجل التجاري",
        desc: "إصدار وتجديد وتعديل السجلات التجارية للمؤسسات والشركات.",
      },
      {
        key: "labor-tax",
        title: "شؤون العمل والضرائب",
        desc: "إنهاء معاملات مكتب العمل والزكاة والضرائب لدى الجهات المختصة.",
      },
      {
        key: "social-insurance",
        title: "التأمينات الاجتماعية",
        desc: "تسجيل الموظفين وتحديث الأجور وإدارة الاشتراكات والشهادات في التأمينات.",
      },
      {
        key: "muqeem",
        title: "خدمات مقيم",
        desc: "خدمات بيانات المقيمين: تأشيرات الخروج والعودة وتجديد الجوازات وتحديث الحالة عبر مقيم.",
      },
      {
        key: "qiwa",
        title: "خدمات منصة قوى",
        desc: "رخص العمل والعقود وشهادات السعودة وجميع خدمات المنشآت عبر منصة قوى.",
      },
      {
        key: "attestation",
        title: "خدمات التصديق",
        desc: "تصديق الوثائق والشهادات لدى الغرف التجارية والجهات الحكومية.",
      },
      {
        key: "labor-transfer",
        title: "خدمات نقل العمالة",
        desc: "نقل كفالة العمالة بين المنشآت بسرعة وبما يتوافق مع الأنظمة.",
      },
      {
        key: "services-transfer",
        title: "نقل الخدمات",
        desc: "نقل خدمات الموظفين وسجلاتهم بين الجهات دون انقطاع.",
      },
      {
        key: "work-permits",
        title: "إصدار وتجديد رخص العمل",
        desc: "إصدار وتجديد رخص العمل ومتابعة رسومها وحالتها أولاً بأول.",
      },
      {
        key: "residency",
        title: "إصدار وتجديد الإقامة",
        desc: "إصدار وتجديد الإقامة وإنهاء جميع المتطلبات المرتبطة بها.",
      },
    ],
  },
  info: {
    hours: {
      label: "ساعات العمل",
      l1: "من السبت إلى الخميس",
      l2: "10:00 صباحاً – 10:00 مساءً",
    },
    email: { label: "البريد الإلكتروني" },
    contact: { label: "اتصل بنا" },
    location: {
      label: "موقعنا",
      l1: "حي السلامة",
      l2: "شارع موكب النصر",
    },
  },
  perks: [
    { title: "تتبع طلبك", desc: "تابع حالة طلبك بكل سهولة" },
    { title: "أسعار تنافسية", desc: "أفضل الأسعار مع جودة عالية" },
    { title: "إنجاز سريع", desc: "ننهي معاملاتك في وقت قياسي" },
    { title: "خبرة وكفاءة", desc: "فريق ذو خبرة وكفاءة عالية" },
  ],
  track: {
    heading: "تتبع طلبك",
    sub: "أدخل رقم الطلب ورقم الجوال وسنوافيك بآخر تحديث لحالة طلبك عبر الواتساب.",
    requestNo: "رقم الطلب",
    requestPlaceholder: "مثال: 10254",
    phone: "رقم الجوال",
    phonePlaceholder: "05x xxx xxxx",
    submit: "تتبع عبر الواتساب",
    note: "التتبع يفتح محادثة واتساب مع فريقنا — أسرع طريقة للحصول على إجابة.",
    waPrefix: "السلام عليكم، أرغب في تتبع طلبي.",
  },
  complaint: {
    heading: "تقديم شكوى",
    sub: "ملاحظاتك تساعدنا على التحسين. صف لنا المشكلة وسيتابعها فريقنا مباشرة.",
    name: "الاسم الكامل",
    namePlaceholder: "اسمك",
    phone: "رقم الجوال",
    phonePlaceholder: "05x xxx xxxx",
    type: "نوع الشكوى",
    types: ["تأخر في الإنجاز", "جودة الخدمة", "الرسوم والأسعار", "تعامل الموظفين", "أخرى"],
    details: "تفاصيل الشكوى",
    detailsPlaceholder: "اشرح لنا ما حدث…",
    submit: "إرسال عبر الواتساب",
    waPrefix: "شكوى",
  },
  about: {
    heading: "من نحن",
    sub: "مكتب تعقيب يمكنك الاعتماد عليه.",
    p1: "مكتب الإبداع للخدمات الإلكترونية هو مكتب تعقيب سعودي يُنجز المعاملات الحكومية والخاصة نيابة عن الأفراد والمنشآت — بسرعة ودقة واحترافية كاملة.",
    p2: "من السجل التجاري وشؤون العمل إلى الإقامة ورخص العمل وخدمات المنصات مثل قوى ومقيم، يتابع فريقنا معاملتك من التقديم حتى الإنجاز ويُبقيك على اطلاع في كل خطوة.",
    payTitle: "الدفع بعد الإنجاز",
    payDesc: "نؤمن بأن الثقة تُكتسب، لذلك لا تدفع إلا بعد إنجاز معاملتك بنجاح.",
    whyTitle: "لماذا تختارنا",
    visitTitle: "زرنا أو تواصل معنا",
  },
footer: {
  about: "نُنجز المعاملات الحكومية والخاصة بسرعة واحترافية. الدفع بعد الإنجاز.",
  quick: "روابط سريعة",
  servicesTitle: "خدماتنا",
  contact: "تواصل معنا",
  rights: "مكتب الإبداع للخدمات الإلكترونية. جميع الحقوق محفوظة.",
  developedBy: "تم التطوير والهندسة بواسطة",
  company: "Nexora Tech",
  companyUrl: "https://www.nexoratech.info/",
},
  common: {
    langSwitch: "English",
    whatsappShort: "واتساب",
    floating: "تواصل معنا واتساب",
    loading: "جاري التحميل…",
  },
  servicePage: {
    backToServices: "العودة لجميع الخدمات",
    benefits: "لماذا تختارنا لهذه الخدمة",
    includes: "ما نتولاه نيابة عنك",
    process: "كيف تتم الخدمة",
    turnaround: "المدة المتوقعة",
    requestNow: "اطلب هذه الخدمة الآن",
    chatWhatsApp: "تواصل عبر الواتساب",
    waMessage: "أرغب في طلب هذه الخدمة",
    ctaNote:
      "راسلنا على الواتساب وسيرد فريقنا بالمستندات المطلوبة والمدة المتوقعة. لا تدفع إلا بعد إنجاز معاملتك بنجاح.",
  },
  notFound: {
    title: "الصفحة غير موجودة",
    desc: "الصفحة التي تبحث عنها غير موجودة أو قد تكون نُقلت.",
    backHome: "العودة للرئيسية",
  },
};

export const dictionaries = { en, ar };
export type Dict = typeof en;

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}

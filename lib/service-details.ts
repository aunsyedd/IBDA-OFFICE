import type { ServiceItem } from "./dictionaries";
import type { Locale } from "./i18n";

export type ServiceDetailContent = {
  tagline: string;
  overview: string;
  benefits: string[];
  includes: string[];
  process: { title: string; desc: string }[];
  turnaround: string;
  documents: string[];
  whoFor: string;
};

type ServiceMeta = Omit<ServiceDetailContent, "includes">;

const processEn: ServiceDetailContent["process"] = [
  {
    title: "WhatsApp consultation",
    desc: "Contact us on WhatsApp with the service you need. We confirm requirements, fees, and the expected timeline before you commit.",
  },
  {
    title: "Document review",
    desc: "Share the required documents digitally. We review them for completeness and compliance so your application is accepted the first time.",
  },
  {
    title: "Submission & follow-up",
    desc: "Our team submits through the official platform and monitors progress with the authority until your request is approved.",
  },
  {
    title: "Confirmation & delivery",
    desc: "You receive confirmation, certificates, or updated records. You only pay after your transaction is successfully completed.",
  },
];

const processAr: ServiceDetailContent["process"] = [
  {
    title: "استشارة عبر الواتساب",
    desc: "تواصل معنا عبر الواتساب وحدّد الخدمة المطلوبة. نؤكد المتطلبات والرسوم والمدة المتوقعة قبل البدء.",
  },
  {
    title: "مراجعة المستندات",
    desc: "شاركنا المستندات إلكترونياً. نراجعها للتأكد من اكتمالها وصحتها لتُقبل معاملتك من المرة الأولى.",
  },
  {
    title: "التقديم والمتابعة",
    desc: "يقدّم فريقنا عبر المنصة الرسمية ويتابع مع الجهة حتى تتم الموافقة على طلبك.",
  },
  {
    title: "التأكيد والتسليم",
    desc: "تستلم التأكيد أو الشهادات أو السجلات المحدّثة. لا تدفع إلا بعد إنجاز معاملتك بنجاح.",
  },
];

const metaEn: Record<string, ServiceMeta> = {
  jawazat: {
    tagline: "Iqama, visa, and residency services through Jawazat — completed on your behalf.",
    overview:
      "The General Directorate of Passports handles some of the most time-sensitive transactions for residents and sponsors. We manage Iqama issuance and renewal, exit and re-entry visas, final exit, sponsorship transfer, dependents, and inquiries — so you avoid queues, rejections, and costly delays.",
    benefits: [
      "Skip long waits at Jawazat service centers",
      "Accurate submissions that prevent rejection and fines",
      "Urgent visa and Iqama requests handled promptly",
      "Direct WhatsApp updates from consultation to completion",
    ],
    turnaround:
      "Most Jawazat transactions are completed within 1–5 business days depending on the service type.",
    documents: [
      "Valid passport copy",
      "Iqama or border number",
      "Sponsor or establishment authorization when required",
      "Previous visa or Iqama details for renewals and amendments",
    ],
    whoFor:
      "Expatriates, sponsors, and businesses that need Iqama, visa, dependent, or sponsorship services through Jawazat.",
    process: processEn,
  },
  absher: {
    tagline: "Absher activation, authorizations, and Interior Ministry services — handled for you.",
    overview:
      "Absher is the gateway to dozens of Ministry of Interior services — from account activation and authorizations to vehicle, traffic, and civil affairs transactions. We set up and manage your Absher needs accurately so you can access services without confusion or repeated visits.",
    benefits: [
      "Quick Absher activation and profile updates",
      "Authorizations issued and cancelled correctly",
      "Vehicle and traffic services without portal frustration",
      "Appointment booking and inquiries managed on your behalf",
    ],
    turnaround:
      "Most Absher-related transactions are completed within 1–3 business days.",
    documents: [
      "National ID or Iqama copy",
      "Registered mobile number for verification",
      "Vehicle registration details for traffic services",
      "Authorization details when issuing or cancelling a Tafweed",
    ],
    whoFor:
      "Residents, citizens, and vehicle owners who need Absher setup, authorizations, or Ministry of Interior services.",
    process: processEn,
  },
  qiwa: {
    tagline: "Full Qiwa platform support — work permits, contracts, and establishment compliance.",
    overview:
      "Qiwa centralizes labor, contracts, Saudization, and work permits for every establishment. We open and update establishment files, issue and renew work permits, manage visas and employee transfers, authenticate contracts, and resolve Qiwa blocks — keeping your workforce legally authorized and your Nitaqat status healthy.",
    benefits: [
      "Work permits and contracts kept in sync",
      "Saudization and Nitaqat compliance improved",
      "Qiwa errors resolved before they block other transactions",
      "Dedicated follow-up until every request is closed",
    ],
    turnaround:
      "Qiwa transactions typically take 2–5 business days depending on the request type.",
    documents: [
      "Commercial registration or establishment number",
      "Employee Iqama and contract details",
      "Authorized signatory identification",
      "Previous work permit or visa records when applicable",
    ],
    whoFor:
      "Employers and HR teams that manage work permits, contracts, visas, and Saudization through the Qiwa platform.",
    process: processEn,
  },
  muqeem: {
    tagline: "Resident services on Muqeem — fast, accurate, and fully managed.",
    overview:
      "Muqeem is essential for day-to-day resident management — exit and re-entry visas, final exit, Iqama renewal, dependent services, and resident reports. We process every Muqeem transaction on your behalf so employees and dependents stay compliant without navigating complex screens alone.",
    benefits: [
      "No more struggling with Muqeem portal requirements",
      "Urgent visa requests handled with priority",
      "Resident data updates completed correctly the first time",
      "Real-time WhatsApp updates throughout the process",
    ],
    turnaround:
      "Most Muqeem services are completed within 1–3 business days.",
    documents: [
      "Employee or resident Iqama number",
      "Valid passport copy",
      "Establishment authorization for employer-initiated services",
      "Travel dates for exit and re-entry visa requests",
    ],
    whoFor:
      "Employers, PRO offices, and sponsors who manage resident visas, Iqama renewals, and Muqeem reports.",
    process: processEn,
  },
  commerce: {
    tagline: "Commercial registration services with the Ministry of Commerce — done right.",
    overview:
      "Your commercial registration is the foundation of every business transaction in Saudi Arabia. We handle issuance, renewal, amendments, trade name reservation, ownership transfer, and CR extracts with the Ministry of Commerce — ensuring correct activities, capital, and address data from the start.",
    benefits: [
      "Avoid costly delays and registration rejections",
      "Correct activity codes chosen the first time",
      "Renewals tracked before expiry dates",
      "Full confidentiality for your business information",
    ],
    turnaround:
      "Most Ministry of Commerce transactions are completed within 1–3 business days.",
    documents: [
      "Owner or manager national ID or Iqama",
      "Proposed or current trade name",
      "National address registration",
      "Existing commercial registration for renewals and amendments",
    ],
    whoFor:
      "Business owners, investors, and managers who need commercial registration services with the Ministry of Commerce.",
    process: processEn,
  },
  "business-center": {
    tagline: "End-to-end commercial register services through the Saudi Business Center.",
    overview:
      "The Saudi Business Center streamlines commercial registration, amendments, and annual confirmation in one integrated portal. We manage your CR lifecycle — from issuance and renewal to ownership transfer, activity changes, and annual confirmation — so your business stays active and compliant year round.",
    benefits: [
      "Single point of support for all CR lifecycle steps",
      "Annual confirmation completed before deadlines",
      "Amendments processed without disrupting operations",
      "Request tracking until every CR update is confirmed",
    ],
    turnaround:
      "Saudi Business Center transactions are typically completed within 1–4 business days.",
    documents: [
      "Commercial registration number",
      "Authorized manager or owner identification",
      "National address proof",
      "Supporting documents for amendments or ownership transfer",
    ],
    whoFor:
      "Established businesses and new investors using the Saudi Business Center for CR management and annual confirmation.",
    process: processEn,
  },
  zatca: {
    tagline: "VAT, Zakat, and customs compliance with ZATCA — accurate and on time.",
    overview:
      "ZATCA requirements affect every registered business — from VAT registration and returns to Zakat certificates and customs clearance. We manage your tax profile, submit returns, issue certificates, and coordinate customs services so your establishment stays compliant and penalty-free.",
    benefits: [
      "Reduce fines from missed filing deadlines",
      "VAT registration and updates handled correctly",
      "Zakat and VAT certificates issued without repeat visits",
      "Customs coordination when imports or exports are involved",
    ],
    turnaround:
      "Most ZATCA transactions are completed within 2–5 business days.",
    documents: [
      "Commercial registration or tax identification number",
      "Financial statements or revenue figures for VAT registration",
      "Authorized signatory identification",
      "Customs shipment documents for clearance services",
    ],
    whoFor:
      "Businesses and importers that need VAT, Zakat, tax filing, or customs services with ZATCA.",
    process: processEn,
  },
  gosi: {
    tagline: "GOSI registration and compliance — protecting your employees and your business.",
    overview:
      "Social insurance errors lead to fines, blocked transactions, and compliance issues across Qiwa and other platforms. We register establishments and employees, update wages, issue certificates, and resolve GOSI discrepancies so your file remains in good standing at all times.",
    benefits: [
      "Prevent GOSI-related blocks on other government services",
      "Accurate wage and employee records maintained",
      "Certificates issued without repeated office visits",
      "Experienced handling of complex contribution cases",
    ],
    turnaround:
      "Standard GOSI updates are usually completed within 1–2 business days.",
    documents: [
      "Establishment registration or GOSI subscription number",
      "Employee Iqama and salary details",
      "Commercial registration for new establishment registration",
      "Previous GOSI certificate for renewals or corrections",
    ],
    whoFor:
      "Employers and HR administrators who manage GOSI registration, wage updates, and social insurance certificates.",
    process: processEn,
  },
  mofa: {
    tagline: "Visit visas and document attestation through the Ministry of Foreign Affairs.",
    overview:
      "MOFA handles family and business visit visas, visa extensions, and official document attestation required for international and domestic use. We prepare, submit, and follow up on your MOFA requests so invitations, visas, and attested documents are ready when you need them.",
    benefits: [
      "Visit visa applications prepared correctly the first time",
      "Document attestation routed to the right MOFA channel",
      "Extensions processed before visas expire",
      "Status tracking and updates via WhatsApp",
    ],
    turnaround:
      "MOFA visa and attestation services typically take 3–7 business days.",
    documents: [
      "Passport copy of the visitor or document holder",
      "Invitation letter or sponsor details for visit visas",
      "Original or certified documents for attestation",
      "Previous visa copy for extensions",
    ],
    whoFor:
      "Sponsors, families, and businesses arranging visit visas or MOFA document attestation.",
    process: processEn,
  },
  mudad: {
    tagline: "Payroll and wage protection compliance through Mudad — fully managed.",
    overview:
      "Mudad is mandatory for wage protection compliance across Saudi establishments. We register your business, upload payroll files, manage wage records, and monitor compliance so you meet HRSD requirements without payroll delays or platform errors.",
    benefits: [
      "Wage protection compliance maintained month after month",
      "Payroll files uploaded correctly and on schedule",
      "Employee wage records aligned with GOSI and Qiwa",
      "Compliance issues flagged and resolved early",
    ],
    turnaround:
      "Mudad registration and payroll uploads are typically completed within 1–3 business days.",
    documents: [
      "Commercial registration and establishment number",
      "Employee list with Iqama numbers and salary details",
      "Bank payroll file or wage transfer records",
      "Authorized signatory identification for platform access",
    ],
    whoFor:
      "Employers and finance teams responsible for payroll processing and wage protection through Mudad.",
    process: processEn,
  },
  spl: {
    tagline: "National address registration and management with Saudi Post (SPL).",
    overview:
      "A valid national address is required for commercial registration, government transactions, and mail delivery across Saudi Arabia. We register, update, print, and manage your SPL national address so your business and personal records stay accurate and accepted by all authorities.",
    benefits: [
      "National address registered and linked to your CR quickly",
      "Updates processed without rejected government submissions",
      "Printed proof available when authorities require it",
      "Multi-address management for branches and establishments",
    ],
    turnaround:
      "SPL national address services are usually completed within 1–2 business days.",
    documents: [
      "National ID or Iqama of the address owner",
      "Proof of property ownership or rental agreement",
      "Commercial registration for business addresses",
      "Previous national address short code for updates",
    ],
    whoFor:
      "Individuals and businesses that need to register, update, or print a Saudi Post national address.",
    process: processEn,
  },
  balady: {
    tagline: "Municipal licenses, health certificates, and sign permits via Balady.",
    overview:
      "Balady covers municipal licensing, health certificates, and commercial sign permits required to operate legally in your city. We issue, renew, amend, and transfer licenses through the Balady platform — keeping your shop, restaurant, or facility open and compliant with local municipality rules.",
    benefits: [
      "Licenses issued before inspection deadlines",
      "Health certificates renewed without business interruption",
      "Sign permits processed in line with municipality regulations",
      "License ownership transfers handled cleanly during sales",
    ],
    turnaround:
      "Balady license and certificate transactions typically take 2–5 business days.",
    documents: [
      "Commercial registration and national address",
      "Municipal license number for renewals and amendments",
      "Lease or property documentation for the business location",
      "Health certificate or sign specifications when applicable",
    ],
    whoFor:
      "Shop owners, restaurants, and commercial establishments that need municipal licenses or health certificates through Balady.",
    process: processEn,
  },
  tourism: {
    tagline: "Tourism licensing and operation certificates with the Ministry of Tourism.",
    overview:
      "Operating in Saudi Arabia's growing tourism sector requires the right licenses and operation certificates from the Ministry of Tourism. We handle issuance, renewal, amendments, and cancellations — ensuring your hospitality, travel, or entertainment business meets all regulatory requirements.",
    benefits: [
      "Tourism licenses secured before launch deadlines",
      "Operation certificates issued for compliant facilities",
      "Amendments processed when activities or ownership change",
      "Full follow-up until ministry approval is confirmed",
    ],
    turnaround:
      "Ministry of Tourism licensing services typically take 5–10 business days.",
    documents: [
      "Commercial registration with tourism-related activities",
      "Facility lease or ownership documentation",
      "Existing tourism license for renewals and amendments",
      "Operational plan or facility details as required by the ministry",
    ],
    whoFor:
      "Hotels, travel agencies, tour operators, and hospitality businesses seeking Ministry of Tourism licenses.",
    process: processEn,
  },
  environment: {
    tagline: "Environmental permits and certificates through NCEC — compliant from day one.",
    overview:
      "The National Center for Environmental Compliance (NCEC) requires permits and certificates for activities that affect the environment. We issue, renew, amend, and track environmental permits so your industrial, construction, or commercial project proceeds without regulatory delays or shutdowns.",
    benefits: [
      "Permits secured before project or operation deadlines",
      "Environmental compliance maintained across renewals",
      "Amendments handled when scope or location changes",
      "Request tracking until NCEC approval is issued",
    ],
    turnaround:
      "Environmental permit transactions typically take 5–15 business days depending on activity type.",
    documents: [
      "Commercial registration and project location details",
      "Environmental impact assessment or activity description",
      "Existing permit number for renewals and amendments",
      "Technical reports required for the specific activity class",
    ],
    whoFor:
      "Industrial, construction, and commercial operators that need environmental permits or certificates from NCEC.",
    process: processEn,
  },
  "civil-defense": {
    tagline: "Civil Defense safety licenses and reports — approved and on record.",
    overview:
      "Civil Defense safety licenses and reports are mandatory for many commercial and residential facilities. We issue and renew safety licenses, submit safety reports, and follow up on approvals so your building or business meets Civil Defense requirements without failed inspections.",
    benefits: [
      "Safety licenses obtained before opening or renewal deadlines",
      "Reports prepared to meet Civil Defense standards",
      "Amendments processed when facility data changes",
      "Follow-up until approval is recorded on the system",
    ],
    turnaround:
      "Civil Defense license and report services typically take 3–7 business days.",
    documents: [
      "Commercial registration or building ownership proof",
      "Existing safety license number for renewals",
      "Floor plan or facility layout when required",
      "Previous Civil Defense report for renewals or amendments",
    ],
    whoFor:
      "Business owners, facility managers, and contractors who need Civil Defense safety licenses or reports.",
    process: processEn,
  },
  sfda: {
    tagline: "SFDA licensing and product registration — market-ready and compliant.",
    overview:
      "The Saudi Food and Drug Authority regulates food, cosmetics, medical devices, and pharmaceutical products. We manage SFDA license issuance and renewal, product registration, and data amendments — helping manufacturers, importers, and distributors bring products to market legally.",
    benefits: [
      "Product registration completed to SFDA standards",
      "Licenses renewed before expiry disrupts sales",
      "Amendments processed when product data changes",
      "Expert guidance on SFDA documentation requirements",
    ],
    turnaround:
      "SFDA licensing and registration typically take 7–20 business days depending on product category.",
    documents: [
      "Commercial registration and import or manufacturing authorization",
      "Product composition, labeling, and technical dossier",
      "Existing SFDA registration number for renewals",
      "Free sale certificate or manufacturer authorization letter",
    ],
    whoFor:
      "Food, cosmetics, pharmaceutical, and medical device businesses registering products or licenses with SFDA.",
    process: processEn,
  },
  transport: {
    tagline: "Transport licenses and operating cards with the Transport General Authority.",
    overview:
      "The Transport General Authority regulates road freight, passenger transport, and logistics operations. We issue and renew transport licenses and operating cards, process amendments, and manage cancellations — keeping your fleet legally authorized to operate across Saudi Arabia.",
    benefits: [
      "Transport licenses issued before operational deadlines",
      "Operating cards renewed without fleet downtime",
      "Amendments handled when vehicles or routes change",
      "Full compliance with Transport Authority requirements",
    ],
    turnaround:
      "Transport Authority license services typically take 3–7 business days.",
    documents: [
      "Commercial registration with transport activities",
      "Vehicle registration and ownership documents",
      "Existing transport license for renewals and amendments",
      "Driver qualifications and operating card details",
    ],
    whoFor:
      "Logistics companies, freight operators, and transport businesses regulated by the Transport General Authority.",
    process: processEn,
  },
  saso: {
    tagline: "SASO product registration and conformity certificates — import with confidence.",
    overview:
      "SASO conformity requirements apply to a wide range of imported and locally sold products. We register products, issue and renew certificates of conformity, and handle inquiries — ensuring your goods clear customs and reach the market without compliance holds.",
    benefits: [
      "Products registered to the correct SASO scheme",
      "Certificates of conformity issued for smooth customs clearance",
      "Renewals tracked before certificates expire",
      "Reduced delays at ports and retail checkpoints",
    ],
    turnaround:
      "SASO registration and certificate services typically take 5–10 business days.",
    documents: [
      "Product technical specifications and test reports",
      "Commercial registration and importer details",
      "Existing SASO certificate for renewals",
      "Manufacturer declaration or ISO compliance documents",
    ],
    whoFor:
      "Importers, manufacturers, and distributors who need SASO product registration or certificates of conformity.",
    process: processEn,
  },
  saip: {
    tagline: "Trademark, patent, and copyright protection with SAIP.",
    overview:
      "Protecting intellectual property is essential for brand value and innovation. We register trademarks, patents, and copyrights with the Saudi Authority for Intellectual Property, manage renewals and ownership transfers, and track applications until official registration is granted.",
    benefits: [
      "IP applications prepared to SAIP filing standards",
      "Trademark renewals managed before expiry",
      "Ownership transfers recorded correctly on the register",
      "Application status tracked until registration is confirmed",
    ],
    turnaround:
      "SAIP filing and follow-up services typically take 7–30 business days depending on IP type.",
    documents: [
      "Trademark logo, patent description, or copyright work sample",
      "Commercial registration or applicant identification",
      "Power of attorney for corporate applicants",
      "Existing SAIP registration number for renewals or transfers",
    ],
    whoFor:
      "Business owners, inventors, and creators seeking trademark, patent, or copyright protection through SAIP.",
    process: processEn,
  },
  najiz: {
    tagline: "Powers of attorney, contract authentication, and legal services via Najiz.",
    overview:
      "The Najiz platform connects you to Ministry of Justice services — powers of attorney, contract authentication, lawsuits, enforcement requests, and legal inquiries. We prepare and submit your legal transactions accurately so documents are enforceable and cases proceed without procedural errors.",
    benefits: [
      "Powers of attorney drafted and issued to your specifications",
      "Contracts authenticated for legal enforceability",
      "Court filings and enforcement requests submitted correctly",
      "Case and deed inquiries answered without portal confusion",
    ],
    turnaround:
      "Najiz legal services typically take 1–5 business days depending on transaction type.",
    documents: [
      "National ID or Iqama of all parties involved",
      "Draft contract or power of attorney terms",
      "Case or deed reference numbers for inquiries and enforcement",
      "Supporting evidence documents for lawsuits when applicable",
    ],
    whoFor:
      "Individuals and businesses that need powers of attorney, contract authentication, or legal filings through Najiz.",
    process: processEn,
  },
  health: {
    tagline: "Ministry of Health certificates, appointments, and facility services.",
    overview:
      "Ministry of Health services cover occupational health certificates, appointment booking, report inquiries, and health facility transactions. We manage these requests on your behalf — ensuring workers, employers, and facilities meet health regulatory requirements efficiently.",
    benefits: [
      "Health certificates issued and renewed on schedule",
      "Appointments booked without long phone waits",
      "Report inquiries answered with accurate MOH data",
      "Facility services coordinated with health authority requirements",
    ],
    turnaround:
      "Ministry of Health services are typically completed within 1–5 business days.",
    documents: [
      "National ID or Iqama of the applicant",
      "Existing health certificate for renewals",
      "Employer letter for occupational health certificates",
      "Facility license or registration for health establishment services",
    ],
    whoFor:
      "Workers, employers, and health facility operators who need Ministry of Health certificates, appointments, or services.",
    process: processEn,
  },
};

const metaAr: Record<string, ServiceMeta> = {
  jawazat: {
    tagline: "خدمات الإقامة والتأشيرات عبر الجوازات — نُنجزها نيابة عنك.",
    overview:
      "المديرية العامة للجوازات تتولى أهم معاملات المقيمين والكفلاء. نتولى إصدار وتجديد الإقامة، خروج وعودة، الخروج النهائي، نقل الكفالة، التابعين والاستعلامات — لتتجنب الطوابير والرفض والغرامات.",
    benefits: [
      "تجنب الانتظار الطويل في مراكز الجوازات",
      "تقديم دقيق يمنع الرفض والغرامات",
      "معالجة عاجلة لطلبات التأشيرات والإقامة",
      "تحديثات مباشرة عبر الواتساب من البداية حتى الإنجاز",
    ],
    turnaround: "تُنجز معظم معاملات الجوازات خلال 1–5 أيام عمل حسب نوع الخدمة.",
    documents: [
      "نسخة جواز سفر ساري",
      "رقم الإقامة أو رقم الحدود",
      "تفويض الكفيل أو المنشأة عند الحاجة",
      "بيانات التأشيرة أو الإقامة السابقة للتجديد والتعديل",
    ],
    whoFor:
      "المقيمون والكفلاء والمنشآت التي تحتاج خدمات الإقامة والتأشيرات والتابعين ونقل الكفالة عبر الجوازات.",
    process: processAr,
  },
  absher: {
    tagline: "تفعيل أبشر والتفاويض وخدمات وزارة الداخلية — بإدارة كاملة.",
    overview:
      "أبشر بوابة لعشرات خدمات وزارة الداخلية — من التفعيل والتفاويض إلى المركبات والمرور والأحوال المدنية. نُعدّ وندير حسابك ومعاملاتك بدقة لتصل للخدمات دون تعقيد أو زيارات متكررة.",
    benefits: [
      "تفعيل أبشر وتحديث البيانات بسرعة",
      "إصدار وإلغاء التفاويض بشكل صحيح",
      "خدمات المركبات والمرور دون عناء المنصة",
      "حجز المواعيد والاستعلامات نيابة عنك",
    ],
    turnaround: "تُنجز معظم معاملات أبشر خلال 1–3 أيام عمل.",
    documents: [
      "نسخة الهوية الوطنية أو الإقامة",
      "رقم جوال مسجّل للتحقق",
      "بيانات تسجيل المركبة لخدمات المرور",
      "تفاصيل التفويض عند الإصدار أو الإلغاء",
    ],
    whoFor:
      "المقيمون ومواطنو المملكة ومالكو المركبات الذين يحتاجون تفعيل أبشر أو التفاويض أو خدمات وزارة الداخلية.",
    process: processAr,
  },
  qiwa: {
    tagline: "دعم شامل لمنصة قوى — رخص العمل والعقود والالتزام.",
    overview:
      "قوى تجمع العمل والعقود والسعودة ورخص العمل في منصة واحدة. نفتح ونحدّث ملفات المنشآت، ونُصدر ونجدّد رخص العمل، وندير التأشيرات ونقل الخدمات، ونوثّق العقود، ونحلّ تعليقات قوى — ليبقى موظفوك مخوّلين قانونياً ونطاقاتك في وضع سليم.",
    benefits: [
      "مزامنة رخص العمل والعقود باستمرار",
      "تحسين الالتزام بالسعودة ونطاقات",
      "حل أخطاء قوى قبل تعليق المعاملات الأخرى",
      "متابعة حتى إغلاق كل طلب",
    ],
    turnaround: "معاملات قوى تستغرق عادة 2–5 أيام عمل حسب نوع الطلب.",
    documents: [
      "السجل التجاري أو رقم المنشأة",
      "بيانات إقامة الموظف والعقد",
      "هوية المفوّض بالتوقيع",
      "سجل رخصة العمل أو التأشيرة السابقة عند الحاجة",
    ],
    whoFor:
      "أصحاب العمل وفرق الموارد البشرية التي تدير رخص العمل والعقود والتأشيرات والسعودة عبر قوى.",
    process: processAr,
  },
  muqeem: {
    tagline: "خدمات المقيمين على منصة مقيم — بسرعة ودقة وإدارة كاملة.",
    overview:
      "مقيم أساسي لإدارة شؤون المقيمين يومياً — خروج وعودة، خروج نهائي، تجديد الإقامة، التابعين والتقارير. نُنفّذ كل معاملة على مقيم نيابة عنك ليبقى موظفوك ومرافقوك متوافقين دون التعامل مع المنصة بمفردك.",
    benefits: [
      "لا حاجة للتعامل مع متطلبات مقيم المعقدة",
      "معالجة عاجلة لطلبات التأشيرات",
      "تحديث بيانات المقيمين بشكل صحيح من المرة الأولى",
      "تحديثات فورية عبر الواتساب طوال العملية",
    ],
    turnaround: "تُنجز معظم خدمات مقيم خلال 1–3 أيام عمل.",
    documents: [
      "رقم إقامة الموظف أو المقيم",
      "نسخة جواز سفر ساري",
      "تفويض المنشأة للخدمات التي يبدأها صاحب العمل",
      "تواريخ السفر لطلبات خروج وعودة",
    ],
    whoFor:
      "أصحاب العمل ومكاتب التعقيب والكفلاء الذين يديرون تأشيرات المقيمين وتجديد الإقامة وتقارير مقيم.",
    process: processAr,
  },
  commerce: {
    tagline: "خدمات السجل التجاري لدى وزارة التجارة — بإنجاز صحيح.",
    overview:
      "السجل التجاري أساس كل معاملة تجارية في المملكة. نتولى الإصدار والتجديد والتعديل وحجز الاسم التجاري ونقل الملكية والمستخرجات لدى وزارة التجارة — مع ضمان صحة النشاط ورأس المال والعنوان من البداية.",
    benefits: [
      "تجنب التأخير والرفض بسبب أخطاء التسجيل",
      "اختيار أكواد النشاط الصحيحة من المرة الأولى",
      "متابعة التجديد قبل انتهاء الصلاحية",
      "سرية تامة لمعلومات منشأتك",
    ],
    turnaround: "تُنجز معظم معاملات وزارة التجارة خلال 1–3 أيام عمل.",
    documents: [
      "هوية المالك أو المدير الوطنية أو الإقامة",
      "الاسم التجاري المقترح أو الحالي",
      "تسجيل العنوان الوطني",
      "السجل التجاري الحالي للتجديد والتعديل",
    ],
    whoFor:
      "أصحاب الأعمال والمستثمرون والمديرون الذين يحتاجون خدمات السجل التجاري لدى وزارة التجارة.",
    process: processAr,
  },
  "business-center": {
    tagline: "خدمات السجل التجاري المتكاملة عبر المركز السعودي للأعمال.",
    overview:
      "المركز السعودي للأعمال يُبسّط إصدار وتعديل السجل التجاري والتأكيد السنوي في منصة واحدة. ندير دورة حياة سجلك — من الإصدار والتجديد إلى نقل الملكية وتعديل الأنشطة والتأكيد السنوي — ليبقى نشاطك التجاري فعّالاً ومتوافقاً طوال العام.",
    benefits: [
      "نقطة دعم واحدة لجميع مراحل السجل التجاري",
      "إنجاز التأكيد السنوي قبل المواعيد النهائية",
      "تعديلات دون تعطيل العمليات",
      "متابعة الطلبات حتى تأكيد كل تحديث",
    ],
    turnaround: "معاملات المركز السعودي للأعمال تُنجز عادة خلال 1–4 أيام عمل.",
    documents: [
      "رقم السجل التجاري",
      "هوية المدير أو المالك المفوّض",
      "إثبات العنوان الوطني",
      "مستندات داعمة للتعديل أو نقل الملكية",
    ],
    whoFor:
      "المنشآت القائمة والمستثمرون الجدد الذين يستخدمون المركز السعودي للأعمال لإدارة السجل والتأكيد السنوي.",
    process: processAr,
  },
  zatca: {
    tagline: "الامتثال الضريبي والزكوي والجمركي مع هيئة الزكاة والضريبة والجمارك.",
    overview:
      "متطلبات الهيئة تؤثر على كل منشأة مسجّلة — من ضريبة القيمة المضافة والإقرارات إلى شهادات الزكاة والتخليص الجمركي. ندير ملفك الضريبي ونقدّم الإقرارات ونصدر الشهادات وننسّق الجمارك ليبقى ملفك متوافقاً وخالياً من الغرامات.",
    benefits: [
      "تقليل الغرامات الناتجة عن تأخر التقديم",
      "تسجيل وتحديث ضريبة القيمة المضافة بشكل صحيح",
      "إصدار شهادات الزكاة والضريبة دون زيارات متكررة",
      "تنسيق الجمارك عند الاستيراد أو التصدير",
    ],
    turnaround: "تُنجز معظم معاملات الهيئة خلال 2–5 أيام عمل.",
    documents: [
      "السجل التجاري أو الرقم الضريبي",
      "القوائم المالية أو أرقام الإيرادات للتسجيل الضريبي",
      "هوية المفوّض بالتوقيع",
      "مستندات الشحنة للتخليص الجمركي",
    ],
    whoFor:
      "المنشآت والمستوردون الذين يحتاجون خدمات ضريبة القيمة المضافة والزكاة والجمارك لدى الهيئة.",
    process: processAr,
  },
  gosi: {
    tagline: "تسجيل التأمينات والالتزام — حماية لموظفيك ومنشأتك.",
    overview:
      "أخطاء التأمينات تؤدي إلى غرامات وتعليق المعاملات ومشكلات الالتزام على قوى ومنصات أخرى. نسجّل المنشآت والموظفين ونحدّث الأجور ونصدر الشهادات ونحلّ التعارضات ليبقى ملفك سليماً في جميع الأوقات.",
    benefits: [
      "تجنب تعليق الخدمات الحكومية بسبب التأمينات",
      "سجلات أجور وموظفين دقيقة",
      "إصدار الشهادات دون زيارات متكررة",
      "خبرة في معاملات الاشتراكات المعقدة",
    ],
    turnaround: "تحديثات التأمينات القياسية تُنجز خلال 1–2 يوم عمل.",
    documents: [
      "رقم تسجيل المنشأة أو الاشتراك في التأمينات",
      "بيانات إقامة الموظف والراتب",
      "السجل التجاري لتسجيل منشأة جديدة",
      "شهادة التأمينات السابقة للتجديد أو التصحيح",
    ],
    whoFor:
      "أصحاب العمل ومسؤولو الموارد البشرية الذين يديرون تسجيل التأمينات وتحديث الأجور والشهادات.",
    process: processAr,
  },
  mofa: {
    tagline: "تأشيرات الزيارة وتصديق الوثائق لدى وزارة الخارجية.",
    overview:
      "وزارة الخارجية تتولى تأشيرات الزيارة العائلية والتجارية وتمديدها وتصديق الوثائق الرسمية. نُجهّز ونقدّم ونتابع طلباتك لتكون الدعوات والتأشيرات والوثائق المصدّقة جاهزة عند حاجتك.",
    benefits: [
      "طلبات تأشيرة الزيارة مُعدّة بشكل صحيح من البداية",
      "توجيه التصديق للقناة الصحيحة في الوزارة",
      "تمديد التأشيرات قبل انتهائها",
      "متابعة الحالة وتحديثات عبر الواتساب",
    ],
    turnaround: "خدمات التأشيرة والتصديق لدى الخارجية تستغرق عادة 3–7 أيام عمل.",
    documents: [
      "نسخة جواز سفر الزائر أو صاحب الوثيقة",
      "خطاب الدعوة أو بيانات الكفيل لتأشيرات الزيارة",
      "الوثائق الأصلية أو المصدّقة للتصديق",
      "نسخة التأشيرة السابقة للتمديد",
    ],
    whoFor:
      "الكفلاء والعائلات والمنشآت التي ترتّب تأشيرات الزيارة أو تصديق وثائق وزارة الخارجية.",
    process: processAr,
  },
  mudad: {
    tagline: "الرواتب والالتزام بحماية الأجور عبر منصة مدد — بإدارة كاملة.",
    overview:
      "مدد إلزامية للالتزام بحماية الأجور في المنشآت السعودية. نسجّل منشأتك ونرفع ملفات الرواتب وندير سجلات الأجور ونراقب الالتزام لتلبية متطلبات الموارد البشرية دون تأخير أو أخطاء.",
    benefits: [
      "الحفاظ على الالتزام بحماية الأجور شهرياً",
      "رفع ملفات الرواتب بشكل صحيح وفي موعدها",
      "مواءمة سجلات الأجور مع التأمينات وقوى",
      "رصد المشكلات وحلّها مبكراً",
    ],
    turnaround: "تسجيل مدد ورفع الرواتب يُنجز عادة خلال 1–3 أيام عمل.",
    documents: [
      "السجل التجاري ورقم المنشأة",
      "قائمة الموظفين مع أرقام الإقامة والرواتب",
      "ملف الرواتب البنكي أو سجلات التحويل",
      "هوية المفوّض للوصول إلى المنصة",
    ],
    whoFor:
      "أصحاب العمل وفرق المالية المسؤولة عن الرواتب والالتزام بحماية الأجور عبر مدد.",
    process: processAr,
  },
  spl: {
    tagline: "تسجيل وإدارة العنوان الوطني لدى البريد السعودي (سبل).",
    overview:
      "العنوان الوطني مطلوب للسجل التجاري والمعاملات الحكومية وخدمات البريد في المملكة. نسجّل ونحدّث ونطبع وندير عنوانك الوطني ليبقى سجلك التجاري والشخصي دقيقاً ومقبولاً لدى جميع الجهات.",
    benefits: [
      "تسجيل العنوان الوطني وربطه بالسجل التجاري بسرعة",
      "تحديثات دون رفض المعاملات الحكومية",
      "إثبات مطبوع عند طلب الجهات",
      "إدارة عناوين متعددة للفروع والمنشآت",
    ],
    turnaround: "خدمات العنوان الوطني لدى سبل تُنجز عادة خلال 1–2 يوم عمل.",
    documents: [
      "هوية أو إقامة مالك العنوان",
      "إثبات ملكية أو عقد إيجار العقار",
      "السجل التجاري للعناوين التجارية",
      "الرمز المختصر للعنوان السابق عند التحديث",
    ],
    whoFor:
      "الأفراد والمنشآت التي تحتاج تسجيل أو تحديث أو طباعة العنوان الوطني لدى البريد السعودي.",
    process: processAr,
  },
  balady: {
    tagline: "الرخص البلدية والشهادات الصحية واللوحات التجارية عبر بلدي.",
    overview:
      "بلدي يغطي التراخيص البلدية والشهادات الصحية وتراخيص اللوحات المطلوبة للعمل قانونياً في مدينتك. نُصدر ونجدّد ونعدّل وننقل الرخص عبر المنصة — ليبقى محلك أو مطعمك أو منشأتك مفتوحاً ومتوافقاً مع أنظمة البلدية.",
    benefits: [
      "إصدار الرخص قبل مواعيد التفتيش",
      "تجديد الشهادات الصحية دون إيقاف العمل",
      "تراخيص اللوحات وفق أنظمة البلدية",
      "نقل ملكية الرخص بسلاسة عند البيع",
    ],
    turnaround: "معاملات الرخص والشهادات في بلدي تستغرق عادة 2–5 أيام عمل.",
    documents: [
      "السجل التجاري والعنوان الوطني",
      "رقم الرخصة البلدية للتجديد والتعديل",
      "عقد الإيجار أو إثبات موقع المنشأة",
      "الشهادة الصحية أو مواصفات اللوحة عند الحاجة",
    ],
    whoFor:
      "أصحاب المحلات والمطاعم والمنشآت التجارية التي تحتاج رخصاً بلدية أو شهادات صحية عبر بلدي.",
    process: processAr,
  },
  tourism: {
    tagline: "التراخيص السياحية وشهادات التشغيل لدى وزارة السياحة.",
    overview:
      "العمل في قطاع السياحة المتنامي يتطلب التراخيص وشهادات التشغيل من وزارة السياحة. نتولى الإصدار والتجديد والتعديل والإلغاء — ليلبي نشاطك في الضيافة أو السفر أو الترفيه جميع المتطلبات التنظيمية.",
    benefits: [
      "الحصول على التراخيص قبل مواعيد الافتتاح",
      "إصدار شهادات التشغيل للمنشآت الملتزمة",
      "تعديلات عند تغيّر النشاط أو الملكية",
      "متابعة حتى تأكيد موافقة الوزارة",
    ],
    turnaround: "خدمات الترخيص لدى وزارة السياحة تستغرق عادة 5–10 أيام عمل.",
    documents: [
      "سجل تجاري بأنشطة سياحية",
      "عقد إيجار أو إثبات ملكية المنشأة",
      "الترخيص السياحي الحالي للتجديد والتعديل",
      "خطة التشغيل أو تفاصيل المنشأة حسب متطلبات الوزارة",
    ],
    whoFor:
      "الفنادق ووكالات السفر ومنظّمو الرحلات ومنشآت الضيافة التي تطلب تراخيص وزارة السياحة.",
    process: processAr,
  },
  environment: {
    tagline: "التصاريح والشهادات البيئية عبر المركز الوطني للرقابة على الالتزام البيئي.",
    overview:
      "المركز الوطني يفرض تصاريح وشهادات للأنشطة المؤثرة على البيئة. نُصدر ونجدّد ونعدّل ونتابع التصاريح البيئية ليسير مشروعك الصناعي أو التجاري دون تأخير تنظيمي أو إيقاف.",
    benefits: [
      "الحصول على التصاريح قبل مواعيد المشروع",
      "الحفاظ على الالتزام البيئي عبر التجديدات",
      "تعديلات عند تغيّر النطاق أو الموقع",
      "متابعة حتى صدور موافقة المركز",
    ],
    turnaround: "معاملات التصاريح البيئية تستغرق عادة 5–15 يوم عمل حسب نوع النشاط.",
    documents: [
      "السجل التجاري وموقع المشروع",
      "تقييم الأثر البيئي أو وصف النشاط",
      "رقم التصريح الحالي للتجديد والتعديل",
      "التقارير الفنية المطلوبة لفئة النشاط",
    ],
    whoFor:
      "المشغّلون الصناعيون والتجاريون الذين يحتاجون تصاريح أو شهادات بيئية من المركز الوطني.",
    process: processAr,
  },
  "civil-defense": {
    tagline: "رخص وتقارير السلامة لدى الدفاع المدني — معتمدة ومسجّلة.",
    overview:
      "رخص السلامة وتقارير الدفاع المدني إلزامية للعديد من المنشآت التجارية والسكنية. نُصدر ونجدّد الرخص ونقدّم تقارير السلامة ونتابع الموافقات لتلبية متطلبات الدفاع المدني دون رسوب في التفتيش.",
    benefits: [
      "رخص السلامة قبل مواعيد الافتتاح أو التجديد",
      "تقارير مُعدّة وفق معايير الدفاع المدني",
      "تعديلات عند تغيّر بيانات المنشأة",
      "متابعة حتى تسجيل الموافقة في النظام",
    ],
    turnaround: "خدمات رخص وتقارير الدفاع المدني تستغرق عادة 3–7 أيام عمل.",
    documents: [
      "السجل التجاري أو إثبات ملكية المبنى",
      "رقم رخصة السلامة الحالية للتجديد",
      "مخطط الطوابق أو تخطيط المنشأة عند الحاجة",
      "تقرير الدفاع المدني السابق للتجديد أو التعديل",
    ],
    whoFor:
      "أصحاب الأعمال ومديرو المنشآت والمقاولون الذين يحتاجون رخص أو تقارير سلامة لدى الدفاع المدني.",
    process: processAr,
  },
  sfda: {
    tagline: "تراخيص وتسجيل منتجات الهيئة العامة للغذاء والدواء — جاهز للسوق.",
    overview:
      "الهيئة تنظّم الغذاء ومستحضرات التجميل والأجهزة الطبية والأدوية. ندير إصدار وتجديد التراخيص وتسجيل المنتجات وتعديل البيانات — لمساعدة المصنّعين والمستوردين على دخول السوق بشكل نظامي.",
    benefits: [
      "تسجيل المنتجات وفق معايير الهيئة",
      "تجديد التراخيص قبل انتهائها",
      "تعديلات عند تغيّر بيانات المنتج",
      "إرشاد خبير لمتطلبات مستندات الهيئة",
    ],
    turnaround: "تراخيص وتسجيل الهيئة تستغرق عادة 7–20 يوم عمل حسب فئة المنتج.",
    documents: [
      "السجل التجاري وترخيص الاستيراد أو التصنيع",
      "تركيبة المنتج والبطاقة والملف الفني",
      "رقم التسجيل الحالي للتجديد",
      "شهادة البيع الحر أو تفويض المصنّع",
    ],
    whoFor:
      "منشآت الغذاء والتجميل والأدوية والأجهزة الطبية التي تسجّل منتجاتها أو تراخيصها لدى الهيئة.",
    process: processAr,
  },
  transport: {
    tagline: "تراخيص النقل وبطاقات التشغيل لدى الهيئة العامة للنقل.",
    overview:
      "الهيئة العامة للنقل تنظّم النقل البري والركاب والخدمات اللوجستية. نُصدر ونجدّد تراخيص النقل وبطاقات التشغيل ونعالج التعديلات والإلغاء — ليبقى أسطولك مخوّلاً بالعمل في المملكة.",
    benefits: [
      "تراخيص النقل قبل مواعيد التشغيل",
      "تجديد بطاقات التشغيل دون توقف الأسطول",
      "تعديلات عند تغيّر المركبات أو المسارات",
      "امتثال كامل لمتطلبات هيئة النقل",
    ],
    turnaround: "خدمات تراخيص هيئة النقل تستغرق عادة 3–7 أيام عمل.",
    documents: [
      "سجل تجاري بأنشطة النقل",
      "مستندات تسجيل وملكية المركبات",
      "ترخيص النقل الحالي للتجديد والتعديل",
      "مؤهلات السائق وبيانات بطاقة التشغيل",
    ],
    whoFor:
      "شركات اللوجستيات والنقل والشحن الخاضعة لتنظيم الهيئة العامة للنقل.",
    process: processAr,
  },
  saso: {
    tagline: "تسجيل المنتجات وشهادات المطابقة لدى SASO — استورد بثقة.",
    overview:
      "متطلبات المطابقة SASO تشمل مجموعة واسعة من المنتجات المستوردة والمحلية. نسجّل المنتجات ونُصدر ونجدّد شهادات المطابقة ونعالج الاستعلامات — لتمرّ بضائعك الجمرك وتصل السوق دون تعليق.",
    benefits: [
      "تسجيل المنتجات في نظام SASO الصحيح",
      "شهادات مطابقة لتسهيل التخليص الجمركي",
      "متابعة التجديد قبل انتهاء الشهادات",
      "تقليل التأخير في الموانئ ونقاط البيع",
    ],
    turnaround: "تسجيل SASO والشهادات يستغرق عادة 5–10 أيام عمل.",
    documents: [
      "المواصفات الفنية للمنتج وتقارير الاختبار",
      "السجل التجاري وبيانات المستورد",
      "شهادة SASO الحالية للتجديد",
      "إقرار المصنّع أو مستندات ISO",
    ],
    whoFor:
      "المستوردون والمصنّعون والموزّعون الذين يحتاجون تسجيل منتجات أو شهادات مطابقة SASO.",
    process: processAr,
  },
  saip: {
    tagline: "حماية العلامات التجارية وبراءات الاختراع وحقوق المؤلف لدى SAIP.",
    overview:
      "حماية الملكية الفكرية أساسية لقيمة العلامة والابتكار. نسجّل العلامات وبراءات الاختراع وحقوق المؤلف لدى الهيئة السعودية للملكية الفكرية، وندير التجديد ونقل الملكية ونتابع الطلبات حتى التسجيل الرسمي.",
    benefits: [
      "طلبات ملكية فكرية مُعدّة وفق معايير الهيئة",
      "تجديد العلامات قبل انتهائها",
      "نقل الملكية مسجّل بشكل صحيح",
      "متابعة الطلب حتى تأكيد التسجيل",
    ],
    turnaround: "خدمات الهيئة تستغرق عادة 7–30 يوم عمل حسب نوع الملكية الفكرية.",
    documents: [
      "شعار العلامة أو وصف البراءة أو نموذج العمل",
      "السجل التجاري أو هوية مقدّم الطلب",
      "توكيل للمنشآت",
      "رقم التسجيل الحالي للتجديد أو النقل",
    ],
    whoFor:
      "أصحاب الأعمال والمبتكرون والمبدعون الذين يسعون لحماية العلامة أو البراءة أو حقوق المؤلف.",
    process: processAr,
  },
  najiz: {
    tagline: "الوكالات وتوثيق العقود والخدمات القانونية عبر ناجز.",
    overview:
      "منصة ناجز تربطك بخدمات وزارة العدل — الوكالات وتوثيق العقود والدعاوى وطلبات التنفيذ والاستعلامات. نُعدّ ونقدّم معاملاتك القانونية بدقة لتكون الوثائق قابلة للتنفيذ وتسير القضايا دون أخطاء إجرائية.",
    benefits: [
      "وكالات مُعدّة وفق مواصفاتك",
      "عقود موثّقة للإنفاذ القانوني",
      "تقديم دعاوى وطلبات تنفيذ بشكل صحيح",
      "استعلامات عن القضايا والصكوك دون تعقيد المنصة",
    ],
    turnaround: "خدمات ناجز القانونية تستغرق عادة 1–5 أيام عمل حسب نوع المعاملة.",
    documents: [
      "هوية أو إقامة جميع الأطراف",
      "مسودة العقد أو بنود الوكالة",
      "أرقام القضية أو الصك للاستعلام والتنفيذ",
      "مستندات إثبات للدعاوى عند الحاجة",
    ],
    whoFor:
      "الأفراد والمنشآت التي تحتاج وكالات أو توثيق عقود أو تقديمات قانونية عبر ناجز.",
    process: processAr,
  },
  health: {
    tagline: "شهادات وزارة الصحة والمواعيد وخدمات المنشآت الصحية.",
    overview:
      "خدمات وزارة الصحة تشمل الشهادات الصحية المهنية وحجز المواعيد والاستعلام عن التقارير ومعاملات المنشآت الصحية. ندير هذه الطلبات نيابة عنك — ليلبي العمال وأصحاب العمل والمنشآت المتطلبات الصحية بكفاءة.",
    benefits: [
      "إصدار وتجديد الشهادات الصحية في موعدها",
      "حجز المواعيد دون انتظار طويل",
      "استعلامات دقيقة عن تقارير الوزارة",
      "تنسيق خدمات المنشآت مع متطلبات الصحة",
    ],
    turnaround: "خدمات وزارة الصحة تُنجز عادة خلال 1–5 أيام عمل.",
    documents: [
      "هوية أو إقامة مقدّم الطلب",
      "الشهادة الصحية الحالية للتجديد",
      "خطاب صاحب العمل للشهادات المهنية",
      "ترخيص المنشأة لخدمات المنشآت الصحية",
    ],
    whoFor:
      "العمال وأصحاب العمل ومشغّلو المنشآت الصحية الذين يحتاجون شهادات أو مواعيد أو خدمات وزارة الصحة.",
    process: processAr,
  },
};

const fallbackMetaEn: ServiceMeta = {
  tagline: "Professional government transaction support — from start to finish.",
  overview:
    "We handle your government transaction from consultation through submission and follow-up, keeping you informed at every step. You only pay after your transaction is successfully completed.",
  benefits: [
    "Experienced team familiar with official platforms",
    "Clear WhatsApp communication throughout",
    "Accurate submissions that reduce rejections",
    "Pay only after your transaction is completed",
  ],
  turnaround: "Most transactions are completed within 2–5 business days depending on the service type.",
  documents: [
    "Valid ID or Iqama copy",
    "Documents specific to your request (confirmed via WhatsApp)",
    "Authorization letter if acting on behalf of an establishment",
  ],
  whoFor:
    "Individuals and establishments who need reliable support completing government transactions in Saudi Arabia.",
  process: processEn,
};

const fallbackMetaAr: ServiceMeta = {
  tagline: "دعم احترافي للمعاملات الحكومية — من البداية حتى الإنجاز.",
  overview:
    "نتولى معاملتك من الاستشارة إلى التقديم والمتابعة، ونُبقيك على اطلاع في كل خطوة. لا تدفع إلا بعد إنجاز معاملتك بنجاح.",
  benefits: [
    "فريق ذو خبرة في المنصات الرسمية",
    "تواصل واضح عبر الواتساب طوال العملية",
    "تقديم دقيق يقلل الرفض",
    "الدفع فقط بعد إنجاز المعاملة",
  ],
  turnaround: "تُنجز معظم المعاملات خلال 2–5 أيام عمل حسب نوع الخدمة.",
  documents: [
    "نسخة الهوية أو الإقامة",
    "مستندات خاصة بطلبك (نؤكدها عبر الواتساب)",
    "خطاب تفويض عند التقديم نيابة عن منشأة",
  ],
  whoFor:
    "الأفراد والمنشآت الذين يحتاجون دعماً موثوقاً لإنجاز المعاملات الحكومية في المملكة.",
  process: processAr,
};

export function getServiceDetail(locale: Locale, item: ServiceItem): ServiceDetailContent {
  const catalog = locale === "ar" ? metaAr : metaEn;
  const fallback = locale === "ar" ? fallbackMetaAr : fallbackMetaEn;
  const meta = catalog[item.key] ?? fallback;

  return {
    ...meta,
    includes: item.subServices,
  };
}

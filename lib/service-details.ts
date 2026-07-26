import type { Locale } from "./i18n";
import type { ServiceKey } from "./services";

export type ServiceDetailContent = {
  tagline: string;
  overview: string;
  benefits: string[];
  includes: string[];
  process: { title: string; desc: string }[];
  turnaround: string;
};

const en: Record<ServiceKey, ServiceDetailContent> = {
  commercial: {
    tagline: "Keep your business legally registered and fully compliant.",
    overview:
      "Whether you are opening a new establishment or renewing an existing registration, we handle every step with the Ministry of Commerce — from name reservation and activity selection to issuing, renewing, and amending your commercial registration without you waiting in queues.",
    benefits: [
      "Avoid costly delays and registration rejections",
      "Correct activity codes chosen the first time",
      "Renewals tracked before expiry dates",
      "Full confidentiality for your business data",
    ],
    includes: [
      "New commercial registration issuance",
      "Annual renewal and status updates",
      "Activity additions and amendments",
      "Branch and owner data updates",
      "Coordination with related government platforms",
    ],
    process: [
      { title: "Consultation", desc: "We review your business type and required activities on WhatsApp." },
      { title: "Document prep", desc: "We guide you on exactly which documents to provide — nothing extra." },
      { title: "Submission", desc: "Our team submits and follows up with the Ministry of Commerce on your behalf." },
      { title: "Delivery", desc: "You receive your updated registration — pay only after successful completion." },
    ],
    turnaround: "Most commercial registration transactions are completed within 1–3 business days.",
  },
  "labor-tax": {
    tagline: "Labor office, Zakat, and tax affairs — handled in one place.",
    overview:
      "Labor and tax compliance can slow down your business if handled incorrectly. We manage Ministry of Human Resources transactions, Zakat/Tax Authority filings, and related updates so your establishment stays compliant and penalty-free.",
    benefits: [
      "Stay compliant with labor regulations",
      "Reduce fines from missed deadlines",
      "One team for labor and tax platforms",
      "Clear updates at every stage via WhatsApp",
    ],
    includes: [
      "Labor office file opening and updates",
      "Zakat and income tax registration",
      "Violation clearance and status corrections",
      "Wage protection and related filings",
      "Coordination with GOSI and Qiwa when required",
    ],
    process: [
      { title: "Case review", desc: "Tell us your establishment number and the transaction you need." },
      { title: "Platform access", desc: "We verify your file status on the relevant government portals." },
      { title: "Processing", desc: "We complete submissions, payments coordination, and follow-ups." },
      { title: "Confirmation", desc: "You receive proof of completion before any payment is due." },
    ],
    turnaround: "Typical labor and tax transactions are completed within 2–5 business days.",
  },
  "social-insurance": {
    tagline: "Accurate GOSI management protects your employees and your business.",
    overview:
      "Social insurance errors lead to fines and blocked transactions. We register employees, update wages, issue certificates, and resolve GOSI discrepancies so your establishment remains in good standing across all government platforms.",
    benefits: [
      "Prevent GOSI-related transaction blocks",
      "Accurate wage and employee records",
      "Certificates issued without repeated visits",
      "Experienced handling of complex cases",
    ],
    includes: [
      "New employee registration and deletion",
      "Wage updates and contribution adjustments",
      "GOSI certificate issuance",
      "Establishment compliance corrections",
      "Follow-up on pending GOSI issues",
    ],
    process: [
      { title: "Employee list review", desc: "Share employee details and the change you need via WhatsApp." },
      { title: "GOSI portal action", desc: "We log in and process the update on the GOSI platform." },
      { title: "Verification", desc: "We confirm the change is reflected correctly in your file." },
      { title: "Certificate", desc: "We deliver any required certificates or clearance documents." },
    ],
    turnaround: "Standard GOSI updates are usually completed within 1–2 business days.",
  },
  muqeem: {
    tagline: "Resident services on Muqeem — fast, accurate, and stress-free.",
    overview:
      "Muqeem is essential for every resident-related transaction. We handle exit/re-entry visas, passport updates, profession changes, and status corrections through the Muqeem platform so your employees and dependents stay legally compliant.",
    benefits: [
      "No more navigating complex Muqeem screens alone",
      "Urgent visa requests handled promptly",
      "Profession and status updates done correctly",
      "Direct WhatsApp updates throughout the process",
    ],
    includes: [
      "Exit and re-entry visa issuance",
      "Final exit processing",
      "Passport and profession updates",
      "Dependent and family member services",
      "Muqeem report and status inquiries",
    ],
    process: [
      { title: "Resident details", desc: "Provide Iqama number and the service required." },
      { title: "Eligibility check", desc: "We verify requirements and any outstanding violations." },
      { title: "Muqeem submission", desc: "We process the request on Muqeem and pay fees if needed." },
      { title: "Visa delivery", desc: "You receive confirmation and documents — pay after completion." },
    ],
    turnaround: "Most Muqeem services are completed within 1–3 business days.",
  },
  qiwa: {
    tagline: "Full Qiwa platform support for establishments of every size.",
    overview:
      "Qiwa connects labor, contracts, Saudization, and work permits in one platform. We manage your establishment's Qiwa profile — from contract authentication and work permit requests to Saudization certificates — keeping your workforce legally authorized.",
    benefits: [
      "Keep work permits and contracts in sync",
      "Improve Saudization compliance scores",
      "Resolve Qiwa errors that block other transactions",
      "Dedicated follow-up until every request is closed",
    ],
    includes: [
      "Work permit requests and renewals via Qiwa",
      "Employment contract authentication",
      "Saudization certificate issuance",
      "Establishment profile updates",
      "Qiwa error and violation resolution",
    ],
    process: [
      { title: "Establishment review", desc: "Share your Qiwa establishment number and required service." },
      { title: "Platform diagnosis", desc: "We identify any blocks or missing requirements on Qiwa." },
      { title: "Execution", desc: "We complete contracts, permits, or certificates on the platform." },
      { title: "Compliance check", desc: "We confirm your Qiwa status is fully updated." },
    ],
    turnaround: "Qiwa transactions typically take 2–5 business days depending on the request type.",
  },
  attestation: {
    tagline: "Official attestation for documents that must be accepted everywhere.",
    overview:
      "Many transactions require attested documents from chambers of commerce or government bodies. We prepare, submit, and collect your attested certificates so you never lose time on authentication requirements.",
    benefits: [
      "Documents accepted by all government entities",
      "Correct attestation type chosen first time",
      "Collection and delivery coordination",
      "Support for commercial and personal documents",
    ],
    includes: [
      "Chamber of Commerce attestation",
      "Ministry and authority authentications",
      "Commercial contract attestation",
      "Certificate and letter attestation",
      "Guidance on required document formats",
    ],
    process: [
      { title: "Document review", desc: "Send us a copy of the document and where it will be used." },
      { title: "Attestation routing", desc: "We determine the correct authority and submission path." },
      { title: "Submission", desc: "We submit and track the attestation with the relevant body." },
      { title: "Handover", desc: "Receive your attested document — payment after successful delivery." },
    ],
    turnaround: "Attestation services usually take 2–4 business days.",
  },
  "labor-transfer": {
    tagline: "Transfer worker sponsorship smoothly and in full legal compliance.",
    overview:
      "Transferring an employee between establishments involves Qiwa, GOSI, and labor office steps that must happen in the right order. We manage the entire transfer process so both the releasing and receiving establishment face zero disruption.",
    benefits: [
      "Transfers completed without legal complications",
      "Both parties kept informed throughout",
      "Qiwa and GOSI updated simultaneously",
      "Faster onboarding for transferred employees",
    ],
    includes: [
      "Worker transfer request initiation",
      "Coordination between both establishments",
      "Qiwa contract and permit updates",
      "GOSI and labor file adjustments",
      "Final transfer confirmation documents",
    ],
    process: [
      { title: "Transfer agreement", desc: "Confirm employee Iqama, current and new employer details." },
      { title: "Platform requests", desc: "We initiate the transfer on Qiwa and linked systems." },
      { title: "Approval follow-up", desc: "We track approvals from both establishments and authorities." },
      { title: "Completion", desc: "Transfer is confirmed — you pay only when the employee is fully moved." },
    ],
    turnaround: "Labor transfers are typically completed within 3–7 business days.",
  },
  "services-transfer": {
    tagline: "Move employee services between entities without interruption.",
    overview:
      "When restructuring or merging operations, employee service records must transfer cleanly between entities. We ensure GOSI, Qiwa, and labor records reflect the new structure without gaps that could block future transactions.",
    benefits: [
      "Zero downtime for employee coverage",
      "Clean records across all platforms",
      "Avoid penalties from record mismatches",
      "Expert handling of multi-entity transfers",
    ],
    includes: [
      "Employee service record migration",
      "GOSI establishment transfer updates",
      "Qiwa profile and contract realignment",
      "Labor office file corrections",
      "Post-transfer compliance verification",
    ],
    process: [
      { title: "Structure mapping", desc: "We understand the old and new entity relationship." },
      { title: "Record audit", desc: "We review all affected employee files on government platforms." },
      { title: "Transfer execution", desc: "Services are moved systematically across each system." },
      { title: "Final audit", desc: "We verify every employee record is correct post-transfer." },
    ],
    turnaround: "Service transfers vary by size — most cases complete within 5–10 business days.",
  },
  "work-permits": {
    tagline: "Work permits issued and renewed before they become a problem.",
    overview:
      "An expired or missing work permit blocks residency renewals and Qiwa compliance. We issue new permits, renew existing ones, and follow up on fees so your workforce stays authorized to work without interruption.",
    benefits: [
      "Never miss a permit renewal deadline",
      "Avoid blocks on Iqama and Qiwa transactions",
      "Fee calculations handled accurately",
      "Bulk renewals for large establishments supported",
    ],
    includes: [
      "New work permit issuance",
      "Annual work permit renewal",
      "Permit fee payment coordination",
      "Qiwa-linked permit corrections",
      "Status monitoring and expiry alerts",
    ],
    process: [
      { title: "Permit status check", desc: "We review current permits for the employee or establishment." },
      { title: "Requirement verification", desc: "We confirm GOSI, contract, and Qiwa prerequisites." },
      { title: "Issuance / renewal", desc: "We process the permit on Qiwa and related platforms." },
      { title: "Confirmation", desc: "Updated permit status confirmed — pay after completion." },
    ],
    turnaround: "Work permit issuance and renewal usually takes 1–3 business days.",
  },
  residency: {
    tagline: "Iqama issuance and renewal — done right, done on time.",
    overview:
      "Residency (Iqama) is the foundation of every expatriate's legal status in Saudi Arabia. We issue new Iqamas, renew expiring ones, and resolve issues that prevent renewal — including coordination with Muqeem, Jawazat, and medical insurance requirements.",
    benefits: [
      "Avoid residency expiry penalties",
      "Medical insurance and fee steps handled for you",
      "Complex renewal cases resolved efficiently",
      "Family and dependent Iqama support available",
    ],
    includes: [
      "New Iqama issuance",
      "Iqama renewal before and after expiry",
      "Profession and data amendments",
      "Dependent residency services",
      "Renewal block diagnosis and clearance",
    ],
    process: [
      { title: "Iqama review", desc: "Share the Iqama number and expiry date via WhatsApp." },
      { title: "Block check", desc: "We identify any violations, insurance, or fee issues." },
      { title: "Renewal / issuance", desc: "We complete the transaction on Absher/Jawazat channels." },
      { title: "Card delivery support", desc: "We confirm renewal and guide on card collection if needed." },
    ],
    turnaround: "Standard Iqama renewals are typically completed within 2–4 business days.",
  },
};

const ar: Record<ServiceKey, ServiceDetailContent> = {
  commercial: {
    tagline: "سجّل نشاطك التجاري وابقَ متوافقاً مع الأنظمة دون عناء.",
    overview:
      "سواء كنت تفتح منشأة جديدة أو تجدد سجلاً قائماً، نتولى جميع خطوات وزارة التجارة — من حجز الاسم واختيار النشاط إلى إصدار وتجديد وتعديل السجل التجاري دون انتظار في الطوابير.",
    benefits: [
      "تجنب التأخير والرفض بسبب أخطاء التسجيل",
      "اختيار أكواد النشاط الصحيحة من المرة الأولى",
      "متابعة التجديد قبل انتهاء الصلاحية",
      "سرية تامة لبيانات منشأتك",
    ],
    includes: [
      "إصدار سجل تجاري جديد",
      "التجديد السنوي وتحديث الحالة",
      "إضافة أنشطة وتعديلات",
      "تحديث بيانات الفروع والمالك",
      "التنسيق مع المنصات الحكومية المرتبطة",
    ],
    process: [
      { title: "استشارة", desc: "نراجع نوع نشاطك والأنشطة المطلوبة عبر الواتساب." },
      { title: "تجهيز المستندات", desc: "نوجّهك للمستندات المطلوبة فقط — دون زائد." },
      { title: "التقديم", desc: "فريقنا يقدّم ويتابع مع وزارة التجارة نيابة عنك." },
      { title: "التسليم", desc: "تستلم سجلك المحدّث — وتدفع فقط بعد الإنجاز." },
    ],
    turnaround: "تُنجز معظم معاملات السجل التجاري خلال 1–3 أيام عمل.",
  },
  "labor-tax": {
    tagline: "شؤون العمل والزكاة والضرائب — في مكان واحد.",
    overview:
      "الالتزام بأنظمة العمل والضرائب قد يعطل منشأتك إذا أُنجز بشكل خاطئ. ندير معاملات وزارة الموارد البشرية وملفات هيئة الزكاة والضريبة والتحديثات المرتبطة ليبقى ملفك متوافقاً وخالياً من الغرامات.",
    benefits: [
      "الالتزام بأنظمة العمل دون مخالفات",
      "تقليل الغرامات الناتجة عن التأخر",
      "فريق واحد لمنصات العمل والضرائب",
      "تحديثات واضحة في كل مرحلة عبر الواتساب",
    ],
    includes: [
      "فتح وتحديث ملف مكتب العمل",
      "التسجيل في الزكاة والضريبة",
      "إنهاء المخالفات وتصحيح الحالة",
      "حماية الأجور والإقرارات المرتبطة",
      "التنسيق مع التأمينات وقوى عند الحاجة",
    ],
    process: [
      { title: "مراجعة الحالة", desc: "أخبرنا برقم المنشأة ونوع المعاملة المطلوبة." },
      { title: "التحقق من المنصات", desc: "نتحقق من حالة ملفك على البوابات الحكومية." },
      { title: "المعالجة", desc: "نُكمل التقديمات والمدفوعات والمتابعة." },
      { title: "التأكيد", desc: "تستلم إثبات الإنجاز قبل أي دفعة." },
    ],
    turnaround: "تُنجز معاملات العمل والضرائب عادة خلال 2–5 أيام عمل.",
  },
  "social-insurance": {
    tagline: "إدارة دقيقة للتأمينات تحمي موظفيك ومنشأتك.",
    overview:
      "أخطاء التأمينات تؤدي إلى غرامات وتعليق المعاملات. نسجّل الموظفين ونحدّث الأجور ونصدر الشهادات ونحلّ التعارضات في التأمينات ليبقى ملف منشأتك سليماً على جميع المنصات.",
    benefits: [
      "تجنب تعليق المعاملات بسبب التأمينات",
      "سجلات أجور وموظفين دقيقة",
      "إصدار الشهادات دون زيارات متكررة",
      "خبرة في المعاملات المعقدة",
    ],
    includes: [
      "تسجيل وحذف الموظفين",
      "تحديث الأجور والاشتراكات",
      "إصدار شهادات التأمينات",
      "تصحيحات الالتزام للمنشأة",
      "متابعة المشكلات المعلقة",
    ],
    process: [
      { title: "مراجعة الموظفين", desc: "شاركنا بيانات الموظف والتعديل المطلوب." },
      { title: "الإجراء على المنصة", desc: "نُنفّذ التحديث على منصة التأمينات." },
      { title: "التحقق", desc: "نتأكد من انعكاس التغيير في ملفك." },
      { title: "الشهادة", desc: "نسلّم أي شهادات أو إثباتات مطلوبة." },
    ],
    turnaround: "تحديثات التأمينات القياسية تُنجز خلال 1–2 يوم عمل.",
  },
  muqeem: {
    tagline: "خدمات المقيمين على منصة مقيم — بسرعة ودقة.",
    overview:
      "مقيم أساسي لكل معاملة متعلقة بالمقيمين. نتولى تأشيرات الخروج والعودة وتحديث الجوازات وتغيير المهنة وتصحيح الحالة ليبقى موظفوك ومرافقوك متوافقين مع الأنظمة.",
    benefits: [
      "لا حاجة للتعامل مع شاشات مقيم المعقدة وحدك",
      "معالجة سريعة للتأشيرات العاجلة",
      "تحديث المهنة والحالة بشكل صحيح",
      "تحديثات مباشرة عبر الواتساب",
    ],
    includes: [
      "إصدار تأشيرة خروج وعودة",
      "إنهاء خدمة نهائي",
      "تحديث الجواز والمهنة",
      "خدمات المرافقين والعائلة",
      "استعلامات وتقارير مقيم",
    ],
    process: [
      { title: "بيانات المقيم", desc: "زوّدنا برقم الإقامة والخدمة المطلوبة." },
      { title: "التحقق من الأهلية", desc: "نتأكد من المتطلبات وأي مخالفات." },
      { title: "التقديم على مقيم", desc: "نُنفّذ الطلب وندفع الرسوم عند الحاجة." },
      { title: "تسليم التأشيرة", desc: "تستلم التأكيد والمستندات — الدفع بعد الإنجاز." },
    ],
    turnaround: "تُنجز معظم خدمات مقيم خلال 1–3 أيام عمل.",
  },
  qiwa: {
    tagline: "دعم شامل لمنصة قوى لجميع أحجام المنشآت.",
    overview:
      "قوى تجمع العمل والعقود والسعودة ورخص العمل في منصة واحدة. ندير ملف منشأتك — من توثيق العقود وطلبات رخص العمل إلى شهادات السعودة — ليبقى workforce مكلفاً قانونياً.",
    benefits: [
      "مزامنة رخص العمل والعقود",
      "تحسين نسب الالتزام بالسعودة",
      "حل أخطاء قوى التي تعلق المعاملات",
      "متابعة حتى إغلاق كل طلب",
    ],
    includes: [
      "طلبات وتجديد رخص العمل عبر قوى",
      "توثيق عقود العمل",
      "إصدار شهادات السعودة",
      "تحديث ملف المنشأة",
      "حل أخطاء ومخالفات قوى",
    ],
    process: [
      { title: "مراجعة المنشأة", desc: "شاركنا رقم المنشأة في قوى والخدمة المطلوبة." },
      { title: "تشخيص المنصة", desc: "نحدد أي تعليق أو متطلبات ناقصة." },
      { title: "التنفيذ", desc: "نُكمل العقود أو الرخص أو الشهادات." },
      { title: "التحقق", desc: "نتأكد من تحديث حالة قوى بالكامل." },
    ],
    turnaround: "معاملات قوى تستغرق عادة 2–5 أيام عمل حسب نوع الطلب.",
  },
  attestation: {
    tagline: "تصديق رسمي لمستنداتك مقبولة لدى جميع الجهات.",
    overview:
      "كثير من المعاملات تتطلب مستندات مصدّقة من الغرف التجارية أو الجهات الحكومية. نُجهّز ونقدّم ونستلم شهاداتك المصدّقة لتوفير وقتك في متطلبات التصديق.",
    benefits: [
      "مستندات مقبولة لدى جميع الجهات",
      "اختيار نوع التصديق الصحيح من البداية",
      "تنسيق الاستلام والتسليم",
      "دعم المستندات التجارية والشخصية",
    ],
    includes: [
      "تصديق الغرفة التجارية",
      "تصديقات الوزارات والجهات",
      "تصديق العقود التجارية",
      "تصديق الشهادات والخطابات",
      "إرشاد حول صيغ المستندات المطلوبة",
    ],
    process: [
      { title: "مراجعة المستند", desc: "أرسل نسخة من المستند والجهة التي سيُستخدم لديها." },
      { title: "تحديد مسار التصديق", desc: "نحدد الجهة المختصة ومسار التقديم." },
      { title: "التقديم", desc: "نقدّم ونتابع التصديق مع الجهة المعنية." },
      { title: "التسليم", desc: "تستلم المستند المصدّق — الدفع بعد التسليم." },
    ],
    turnaround: "خدمات التصديق تستغرق عادة 2–4 أيام عمل.",
  },
  "labor-transfer": {
    tagline: "انقل كفالة العامل بسلاسة وبما يتوافق مع الأنظمة.",
    overview:
      "نقل العامل بين المنشآت يتطلب خطوات على قوى والتأمينات ومكتب العمل بترتيب صحيح. ندير عملية النقل كاملة لعدم تعطيل أي من المنشأتين.",
    benefits: [
      "نقل دون تعقيدات قانونية",
      "إطلاع الطرفين في كل مرحلة",
      "تحديث قوى والتأمينات معاً",
      "انضمام أسرع للموظف المنقول",
    ],
    includes: [
      "بدء طلب نقل العامل",
      "التنسيق بين المنشأتين",
      "تحديث العقود والرخص في قوى",
      "تعديلات التأمينات وملف العمل",
      "مستندات تأكيد النقل",
    ],
    process: [
      { title: "اتفاق النقل", desc: "تأكيد إقامة العامل وبيانات المنشأتين." },
      { title: "طلبات المنصات", desc: "نبدأ النقل على قوى والأنظمة المرتبطة." },
      { title: "متابعة الموافقات", desc: "نتابع موافقات المنشآت والجهات." },
      { title: "الإتمام", desc: "يُؤكد النقل — تدفع عند اكتمال نقل العامل." },
    ],
    turnaround: "نقل العمالة يُنجز عادة خلال 3–7 أيام عمل.",
  },
  "services-transfer": {
    tagline: "انقل خدمات الموظفين بين الجهات دون انقطاع.",
    overview:
      "عند إعادة الهيكلة أو الدمج، يجب نقل سجلات خدمات الموظفين بين الكيانات دون فجوات قد تعلق المعاملات المستقبلية. نضمن انعكاس الهيكل الجديد على التأمينات وقوى ومكتب العمل.",
    benefits: [
      "استمرارية تغطية الموظفين",
      "سجلات نظيفة على جميع المنصات",
      "تجنب غرامات التعارض في السجلات",
      "خبرة في نقل الكيانات المتعددة",
    ],
    includes: [
      "ترحيل سجلات خدمات الموظفين",
      "تحديثات نقل التأمينات",
      "إعادة محاذاة العقود في قوى",
      "تصحيحات ملف مكتب العمل",
      "تحقق الالتزام بعد النقل",
    ],
    process: [
      { title: "رسم الهيكل", desc: "نفهم العلاقة بين الكيان القديم والجديد." },
      { title: "مراجعة السجلات", desc: "نراجع ملفات الموظفين على المنصات." },
      { title: "تنفيذ النقل", desc: "ننقل الخدمات بشكل منظم على كل نظام." },
      { title: "تدقيق نهائي", desc: "نتأكد من صحة كل سجل بعد النقل." },
    ],
    turnaround: "نقل الخدمات يختلف حسب الحجم — غالباً 5–10 أيام عمل.",
  },
  "work-permits": {
    tagline: "رخص العمل تُصدر وتُجدّد قبل أن تصبح مشكلة.",
    overview:
      "رخصة عمل منتهية أو مفقودة تعلق تجديد الإقامة والالتزام في قوى. نُصدر رخصاً جديدة ونجدّد القائمة ونتابع الرسوم ليبقى workforce مخوّلاً بالعمل دون انقطاع.",
    benefits: [
      "عدم تفويت مواعيد التجديد",
      "تجنب تعليق الإقامة ومعاملات قوى",
      "حساب الرسوم بدقة",
      "دعم التجديد الجماعي للمنشآت الكبيرة",
    ],
    includes: [
      "إصدار رخصة عمل جديدة",
      "تجديد رخصة العمل السنوي",
      "تنسيق دفع رسوم الرخص",
      "تصحيحات الرخص المرتبطة بقوى",
      "متابعة الحالة وتنبيهات الانتهاء",
    ],
    process: [
      { title: "فحص الرخص", desc: "نراجع الرخص الحالية للموظف أو المنشأة." },
      { title: "التحقق من المتطلبات", desc: "نتأكد من التأمينات والعقد وقوى." },
      { title: "الإصدار / التجديد", desc: "نُنفّذ على قوى والمنصات المرتبطة." },
      { title: "التأكيد", desc: "تُؤكد حالة الرخصة — الدفع بعد الإنجاز." },
    ],
    turnaround: "إصدار وتجديد رخص العمل عادة خلال 1–3 أيام عمل.",
  },
  residency: {
    tagline: "إصدار وتجديد الإقامة — في وقتها وبالشكل الصحيح.",
    overview:
      "الإقامة أساس الوضع القانوني لكل مقيم. نُصدر إقامات جديدة ونجدّد المنتهية ونحلّ المشكلات التي تمنع التجديد — مع التنسيق مع مقيم والجوازات والتأمين الطبي.",
    benefits: [
      "تجنب غرامات انتهاء الإقامة",
      "إنهاء خطوات التأمين والرسوم نيابة عنك",
      "حل حالات التجديد المعقدة",
      "دعم إقامة المرافقين والعائلة",
    ],
    includes: [
      "إصدار إقامة جديدة",
      "تجديد الإقامة قبل وبعد الانتهاء",
      "تعديل المهنة والبيانات",
      "خدمات إقامة المرافقين",
      "تشخيص وحل تعليق التجديد",
    ],
    process: [
      { title: "مراجعة الإقامة", desc: "شاركنا رقم الإقامة وتاريخ الانتهاء." },
      { title: "فحص التعليق", desc: "نحدد المخالفات أو التأمين أو الرسوم." },
      { title: "التجديد / الإصدار", desc: "نُكمل المعاملة عبر أبشر / الجوازات." },
      { title: "دعم استلام البطاقة", desc: "نؤكد التجديد ونوجّه لاستلام البطاقة." },
    ],
    turnaround: "تجديد الإقامة القياسي عادة خلال 2–4 أيام عمل.",
  },
};

export function getServiceDetail(locale: Locale, key: ServiceKey): ServiceDetailContent {
  return locale === "ar" ? ar[key] : en[key];
}

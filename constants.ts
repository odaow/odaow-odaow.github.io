
import { Translation, ServiceItem, TeamMember, ProjectItem, LabServiceItem } from './types';

export const DEFAULT_CONTENT = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      lab: "The Lab",
      contact: "Contact Us"
    },
    home: {
      heroTitle: "Precision Engineering.\nInnovative Design.",
      heroSubtitle: "Nebras Engineering Office delivers excellence in architectural and civil engineering solutions across Palestine.",
      ctaProject: "View Projects",
      ctaServices: "Our Services",
      ctaContact: "Get in Touch",
      quote: "Building the future with precision and passion.",
      since: "Since 2006"
    },
    about: {
      title: "About Us",
      storyTitle: "Our Story",
      storyText: "Founded in Tubas, Nebras Engineering Office has established itself as a leader in comprehensive engineering consultancy. We combine traditional engineering principles with cutting-edge BIM technology to deliver projects that stand the test of time. Our multidisciplinary approach ensures that every aspect of the built environment is considered, from structural integrity to aesthetic lighting.",
      teamTitle: "Our Team"
    },
    services: {
      title: "Our Services",
      description: "Comprehensive engineering and design solutions tailored to your needs."
    },
    projects: {
      title: "Selected Works",
      filterAll: "All Projects",
      viewDetails: "View Details",
      projectInfo: "Project Information",
      client: "Client",
      location: "Location",
      year: "Completion Year",
      category: "Category",
      backToProjects: "Back to Projects"
    },
    lab: {
      title: "ALSHAMAL LABORATORIES",
      subtitle: "Providing certified material testing and quality control services for the construction industry.",
      servicesTitle: "Laboratory Services",
      accreditationTitle: "Accreditation & Quality",
      accreditationText: "Al-Shamal Laboratories are fully accredited by the Palestinian Engineers Association and adhere to strict international standards (ASTM, BS). We utilize calibrated state-of-the-art equipment to ensure precise results for soil, concrete, and asphalt testing, guaranteeing the structural integrity of your projects.",
      galleryTitle: "Lab Gallery",
      ctaButton: "Request a Test Now",
      requestTestTitle: "Ready to test your materials?"
    },
    contact: {
      title: "Contact Us",
      address: "Main Street, Tubas, Palestine",
      phone: "Phone",
      whatsapp: "WhatsApp",
      email: "Email",
      location: "Our Location"
    },
    common: {
      readMore: "Read More",
      copyright: "© 2024 Nebras Engineering Office. All rights reserved."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "مشاريعنا",
      lab: "المختبر",
      contact: "اتصل بنا"
    },
    home: {
      heroTitle: "هندسة دقيقة.\nتصميم مبتكر.",
      heroSubtitle: "يقدم مكتب النبراس الهندسي التميز في الحلول المعمارية والهندسة المدنية في جميع أنحاء فلسطين.",
      ctaProject: "عرض المشاريع",
      ctaServices: "خدماتنا",
      ctaContact: "تواصل معنا",
      quote: "نصنع المستقبل بدقة وشغف.",
      since: "منذ عام 2006"
    },
    about: {
      title: "من نحن",
      storyTitle: "قصتنا",
      storyText: "تأسس مكتب النبراس الهندسي في طوباس، وقد رسخ مكانته كرائد في الاستشارات الهندسية الشاملة. نحن نجمع بين المبادئ الهندسية التقليدية وتقنية BIM المتطورة لتقديم مشاريع تصمد أمام اختبار الزمن. يضمن نهجنا متعدد التخصصات مراعاة كل جانب من جوانب البيئة المبنية، من السلامة الهيكلية إلى الإضاءة الجمالية.",
      teamTitle: "فريق العمل"
    },
    services: {
      title: "خدماتنا",
      description: "حلول هندسية وتصميمية شاملة مصممة لتلبية احتياجاتك."
    },
    projects: {
      title: "أعمال مختارة",
      filterAll: "كل المشاريع",
      viewDetails: "عرض التفاصيل",
      projectInfo: "معلومات المشروع",
      client: "العميل",
      location: "الموقع",
      year: "سنة الإنجاز",
      category: "التصنيف",
      backToProjects: "العودة للمشاريع"
    },
    lab: {
      title: "مختبرات الشمال الإنشائية",
      subtitle: "توفير خدمات فحص المواد ومراقبة الجودة المعتمدة لصناعة البناء والإنشاءات.",
      servicesTitle: "خدمات المختبر",
      accreditationTitle: "الاعتماد والجودة",
      accreditationText: "مختبرات الشمال معتمدة بالكامل من نقابة المهندسين الفلسطينيين وتلتزم بالمعايير الدولية الصارمة (ASTM, BS). نستخدم أحدث المعدات المعايرة لضمان نتائج دقيقة لفحوصات التربة والخرسانة والأسفلت، مما يضمن السلامة الإنشائية لمشاريعكم.",
      galleryTitle: "معرض صور المختبر",
      ctaButton: "طلب فحص الآن",
      requestTestTitle: "جاهز لفحص مواد مشروعك؟"
    },
    contact: {
      title: "اتصل بنا",
      address: "الشارع الرئيسي، طوباس، فلسطين",
      phone: "هاتف",
      whatsapp: "واتساب",
      email: "البريد الإلكتروني",
      location: "موقعنا"
    },
    common: {
      readMore: "اقرأ المزيد",
      copyright: "© 2024 مكتب النبراس الهندسي. جميع الحقوق محفوظة."
    }
  }
};

export const DEFAULT_SERVICES: ServiceItem[] = [
  {
    id: 'civil',
    title: { en: "Civil Engineering", ar: "الهندسة المدنية" },
    description: { en: "Structural analysis and infrastructure planning ensuring stability and durability.", ar: "التحليل الإنشائي وتخطيط البنية التحتية لضمان الاستقرار والمتانة." },
    iconName: "Building"
  },
  {
    id: 'arch',
    title: { en: "Architecture", ar: "الهندسة المعمارية" },
    description: { en: "Creative and functional architectural designs that transform visions into reality.", ar: "تصاميم معمارية إبداعية ووظيفية تحول الرؤى إلى واقع." },
    iconName: "PencilRuler"
  },
  {
    id: 'interior',
    title: { en: "Interior Design", ar: "التصميم الداخلي" },
    description: { en: "Crafting immersive interior spaces that balance aesthetics with ergonomics.", ar: "صياغة مساحات داخلية غامرة توازن بين الجماليات وبيئة العمل." },
    iconName: "Sofa"
  },
  {
    id: 'bim',
    title: { en: "BIM Consulting", ar: "استشارات BIM" },
    description: { en: "Advanced Building Information Modeling for optimized construction management.", ar: "نمذجة معلومات البناء المتقدمة لإدارة البناء الأمثل." },
    iconName: "Cuboid"
  },
  {
    id: 'road',
    title: { en: "Road Design", ar: "تصميم الطرق" },
    description: { en: "Comprehensive roadway and transportation network planning.", ar: "تخطيط شامل لشبكات الطرق والمواصلات." },
    iconName: "Route"
  },
  {
    id: 'consulting',
    title: { en: "Engineering Consulting", ar: "الاستشارات الهندسية" },
    description: { en: "Expert advice and feasibility studies for complex engineering challenges.", ar: "مشورة الخبراء ودراسات الجدوى للتحديات الهندسية المعقدة." },
    iconName: "Briefcase"
  },
  {
    id: 'qs',
    title: { en: "Quantity Surveying", ar: "حساب الكميات" },
    description: { en: "Accurate cost estimation and material management for project efficiency.", ar: "تقدير دقيق للتكاليف وإدارة المواد لكفاءة المشروع." },
    iconName: "Calculator"
  },
  {
    id: 'lighting',
    title: { en: "Lighting Design", ar: "تصميم الإضاءة" },
    description: { en: "Strategic lighting solutions to enhance architectural features and energy efficiency.", ar: "حلول إضاءة استراتيجية لتعزيز الميزات المعمارية وكفاءة الطاقة." },
    iconName: "Lightbulb"
  }
];

export const DEFAULT_TEAM: TeamMember[] = [
  {
    id: 'saed',
    name: { en: "Eng. Saed Salahat", ar: "م. سائد صلاحات" },
    role: { en: "Owner, Founder & Chief Structural Engineer", ar: "المالك والمؤسس وكبير الإنشائيين" },
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'odai',
    name: { en: "Eng. Odai Salahat", ar: "م. عدي صلاحات" },
    role: { en: "BIM Specialist", ar: "أخصائي BIM" },
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'mohammad',
    name: { en: "Eng. Mohammad Salahat", "ar": "م. محمد صلاحات" },
    role: { en: "Interior Design Specialist", ar: "أخصائي التصميم الداخلي" },
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'shatha',
    name: { en: "Eng. Shatha Salahat", ar: "م. شذا صلاحات" },
    role: { en: "Chief Architect", ar: "كبيرة المعماريين" },
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
  }
];

// Categories: 'bim', 'structural', 'interior', 'architectural'
export const DEFAULT_PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: { en: "Tubas Commercial Center", ar: "مركز طوباس التجاري" },
    category: "architectural",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description: {
      en: "A state-of-the-art commercial complex in the heart of Tubas, featuring modern retail spaces, offices, and underground parking. The design prioritizes natural light and accessible flow, becoming a new landmark for the city.",
      ar: "مجمع تجاري متطور في قلب مدينة طوباس، يضم مساحات تجارية حديثة ومكاتب ومواقف سيارات تحت الأرض. يعطي التصميم الأولوية للضوء الطبيعي والتدفق السهل، ليصبح معلمًا جديدًا للمدينة."
    },
    client: { en: "Tubas Municipality", ar: "بلدية طوباس" },
    location: { en: "Tubas, Palestine", ar: "طوباس، فلسطين" },
    year: "2023",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 'p2',
    title: { en: "Modern Hillside Residence", ar: "سكن عصري على التلال" },
    category: "structural",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description: {
      en: "Complex structural engineering for a multi-level residence built on a steep incline. We utilized advanced cantilever techniques and reinforced retaining walls to ensure safety while maximizing panoramic views.",
      ar: "هندسة إنشائية معقدة لسكن متعدد المستويات مبني على منحدر شديد. استخدمنا تقنيات الكابولي المتقدمة والجدران الاستنادية المقواة لضمان السلامة مع تعظيم الإطلالات البانورامية."
    },
    client: { en: "Private Client", ar: "عميل خاص" },
    location: { en: "Nablus, Palestine", ar: "نابلس، فلسطين" },
    year: "2022",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-2a4d26432e79?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 'p3',
    title: { en: "BIM Hospital Implementation", ar: "تطبيق BIM للمستشفيات" },
    category: "bim",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    description: {
      en: "A full-scale BIM implementation for a major medical facility. The 5D model integrated architectural, structural, and MEP systems for clash detection, cost estimation, and lifecycle management.",
      ar: "تنفيذ BIM واسع النطاق لمنشأة طبية رئيسية. دمج النموذج خماسي الأبعاد الأنظمة المعمارية والإنشائية والميكانيكية والكهربائية والسباكة للكشف عن التعارض وتقدير التكلفة وإدارة دورة الحياة."
    },
    client: { en: "Ministry of Health", ar: "وزارة الصحة" },
    location: { en: "Ramallah, Palestine", ar: "رام الله، فلسطين" },
    year: "2024",
    gallery: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581094794320-c91bed7828d5?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 'p4',
    title: { en: "Skyline Corporate Interiors", ar: "الديكورات الداخلية للشركات" },
    category: "interior",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    description: {
      en: "Modern, minimalist interior design for a tech headquarters. The space features open-plan work areas, acoustic meeting pods, and biophilic design elements to enhance employee well-being.",
      ar: "تصميم داخلي حديث وبسيط لمقر شركة تقنية. تتميز المساحة بمناطق عمل مفتوحة، وكبسولات اجتماعات صوتية، وعناصر تصميم بيوفيلية لتعزيز رفاهية الموظفين."
    },
    client: { en: "Tech Solutions Ltd", ar: "تك سوليوشنز" },
    location: { en: "Rawabi, Palestine", ar: "روابي، فلسطين" },
    year: "2023",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 'p5',
    title: { en: "Urban Cultural Center", ar: "المركز الثقافي الحضري" },
    category: "architectural",
    image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&w=1200&q=80",
    description: {
      en: "An architectural landmark designed to host community events and art exhibitions. The geometric facade is inspired by traditional Palestinian embroidery patterns reimagined in modern materials.",
      ar: "معلم معماري مصمم لاستضافة الفعاليات المجتمعية والمعارض الفنية. الواجهة الهندسية مستوحاة من أنماط التطريز الفلسطيني التقليدية التي أعيد تصورها بمواد حديثة."
    },
    client: { en: "Jenin Municipality", ar: "بلدية جنين" },
    location: { en: "Jenin, Palestine", ar: "جنين، فلسطين" },
    year: "2022",
    gallery: [
       "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&w=1200&q=80",
       "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1200&q=80",
       "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80",
       "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 'p6',
    title: { en: "Highway Interchange Bridge", ar: "جسر تقاطع الطريق السريع" },
    category: "structural",
    image: "https://images.unsplash.com/photo-1435575653489-b0873ec954e2?auto=format&fit=crop&w=1200&q=80",
    description: {
      en: "Structural engineering for a high-traffic interchange. The design focuses on seismic resistance and long-span post-tensioned concrete beams to minimize columns and maximize clearance.",
      ar: "الهندسة الإنشائية لتقاطع شديد الازدحام. يركز التصميم على مقاومة الزلازل والعوارض الخرسانية مسبقة الإجهاد طويلة المدى لتقليل الأعمدة وزيادة الخلوص."
    },
    client: { en: "Ministry of Public Works", ar: "وزارة الأشغال العامة" },
    location: { en: "Hebron, Palestine", ar: "الخليل، فلسطين" },
    year: "2023",
    gallery: [
       "https://images.unsplash.com/photo-1435575653489-b0873ec954e2?auto=format&fit=crop&w=1200&q=80",
       "https://images.unsplash.com/photo-1545459720-aac3e5ca0a24?auto=format&fit=crop&w=1200&q=80",
       "https://images.unsplash.com/photo-1513828583688-632910811a08?auto=format&fit=crop&w=1200&q=80",
       "https://images.unsplash.com/photo-1465446604801-351af6600c49?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

export const DEFAULT_LAB_SERVICES: LabServiceItem[] = [
  {
    id: "soil-analysis",
    title: { en: "Soil Testing and Characteristics Analysis", ar: "فحص التربة وتحليل خصائصها" },
    description: { en: "Comprehensive analysis of soil properties including moisture content, density, and classification to ensure foundation stability.", ar: "تحليل شامل لخصائص التربة بما في ذلك المحتوى الرطوبي والكثافة والتصنيف لضمان استقرار الأساس." },
    category: "soil",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "geotechnical",
    title: { en: "Geotechnical Studies", ar: "الدراسات الجيوتقنية" },
    description: { en: "In-depth geotechnical investigations to determine subsurface conditions and soil bearing capacity for safe construction.", ar: "تحقيقات جيوتقنية متعمقة لتحديد الظروف تحت السطحية وقوة تحمل التربة للبناء الآمن." },
    category: "soil",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "concrete-testing",
    title: { en: "Concrete Testing", ar: "اختبارات الخرسانة" },
    description: { en: "Rigorous testing including core tests and rebound hammer assessments to verify concrete strength and durability.", ar: "اختبارات صارمة تشمل الكور تست والمطرقة للتحقق من قوة الخرسانة ومتانتها." },
    category: "concrete",
    image: "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "asphalt-testing",
    title: { en: "Asphalt Testing", ar: "اختبارات الأسفلت" },
    description: { en: "Quality control for asphalt mixtures including Marshall stability, flow, and bitumen content analysis.", ar: "مراقبة الجودة لخلطات الأسفلت بما في ذلك ثبات مارشال والتدفق وتحليل محتوى البيتومين." },
    category: "asphalt",
    image: "https://images.unsplash.com/photo-1625246333195-58197bdc0a1e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "base-course",
    title: { en: "Base Course and Aggregates Testing", ar: "فحوصات البيسكورس والركام" },
    description: { en: "Testing of base course materials and aggregates for gradation, hardness, and durability standards.", ar: "فحص مواد البيسكورس والركام للتأكد من معايير التدرج والصلابة والمتانة." },
    category: "material",
    image: "https://images.unsplash.com/photo-1525286116112-4e187ee74375?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "recommendations",
    title: { en: "Integrated Engineering Recommendations", ar: "التوصيات الهندسية المتكاملة" },
    description: { en: "Providing expert engineering recommendations based on test results to optimize design and construction processes.", ar: "تقديم توصيات هندسية خبيرة بناءً على نتائج الاختبارات لتحسين عمليات التصميم والبناء." },
    category: "consulting",
    image: "https://images.unsplash.com/photo-1581094794320-c91bed7828d5?auto=format&fit=crop&w=800&q=80"
  }
];

export const DEFAULT_LAB_GALLERY: string[] = [
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1516937941348-c0331b32d543?auto=format&fit=crop&w=800&q=80"
];

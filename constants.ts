import { Translation, ServiceItem, TeamMember, ProjectItem, LabServiceItem, VipServiceItem } from './types';

export const DEFAULT_CONTENT = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      lab: "The Lab",
      contact: "Contact Us",
      vip: "VIP Services"
    },
    hero: {
      title: "Nebras Engineering Office",
      subtitle: "Excellence in Engineering & Design",
      ctaProjects: "View Projects",
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
      category: "Building Type",
      backToProjects: "Back to Projects"
    },
    lab: {
      title: "ALSHAMAL LABORATORIES",
      subtitle: "Providing certified material testing and quality control services for the construction industry.",
      ctaContact: "Contact Lab",
      servicesTitle: "Lab Services",
      accreditationTitle: "Accreditation",
      accreditationText: "Our lab is fully accredited and follows international standards.",
      galleryTitle: "Gallery",
      ctaButton: "Contact Us",
      requestTestTitle: "Request a Test"
    },
    contact: {
      title: "Contact Us",
      address: "Tubas, Palestine",
      phone: "+970 123 456 789",
      whatsapp: "+970 123 456 789",
      email: "info@nebras.com",
      location: "Location Map"
    },
    vip: {
      title: "VIP Services",
      subtitle: "Exclusive engineering solutions for our most distinguished clients.",
      ctaContact: "Request VIP Service"
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
      contact: "اتصل بنا",
      vip: "خدمات VIP"
    },
    hero: {
      title: "مكتب النبراس الهندسي",
      subtitle: "التميز في الهندسة والتصميم",
      ctaProjects: "عرض المشاريع",
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
      category: "نوع المبنى",
      backToProjects: "العودة للمشاريع"
    },
    lab: {
      title: "مختبرات الشمال",
      subtitle: "تقديم خدمات فحص المواد ومراقبة الجودة المعتمدة لقطاع الإنشاءات.",
      ctaContact: "تواصل مع المختبر",
      servicesTitle: "خدمات المختبر",
      accreditationTitle: "الاعتماد",
      accreditationText: "مختبرنا معتمد بالكامل ويتبع المعايير الدولية.",
      galleryTitle: "معرض الصور",
      ctaButton: "تواصل معنا",
      requestTestTitle: "طلب فحص"
    },
    contact: {
      title: "اتصل بنا",
      address: "طوباس، فلسطين",
      phone: "+970 123 456 789",
      whatsapp: "+970 123 456 789",
      email: "info@nebras.com",
      location: "خريطة الموقع"
    },
    vip: {
      title: "خدمات VIP",
      subtitle: "حلول هندسية حصرية لعملائنا المميزين.",
      ctaContact: "طلب خدمة VIP"
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
  },
  {
    id: 'landscape',
    title: { en: "Landscape", ar: "لاندسكيب" },
    description: { en: "Designing sustainable outdoor environments that blend nature with built structures.", ar: "تصميم بيئات خارجية مستدامة تمزج الطبيعة مع الهياكل المبنية." },
    iconName: "Trees"
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

export const PROJECT_CATEGORIES = [
  { id: 'all', label: { en: "All Projects", ar: "جميع المشاريع" } },
  { id: 'residential', label: { en: "Residential", ar: "سكني" } },
  { id: 'commercial', label: { en: "Commercial", ar: "تجاري" } },
  { id: 'religious', label: { en: "Mosques/Religious", ar: "مساجد/ديني" } },
  { id: 'industrial', label: { en: "Industrial", ar: "صناعي" } },
  { id: 'educational', label: { en: "Educational", ar: "تعليمي" } },
  { id: 'healthcare', label: { en: "Healthcare", ar: "صحي/طبي" } },
  { id: 'infrastructure', label: { en: "Infrastructure", ar: "تطوير البنية التحتية" } }
];

export const DEFAULT_PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: { en: "Tubas Commercial Center", ar: "مركز طوباس التجاري" },
    category: "commercial",
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
    category: "residential",
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
    category: "healthcare",
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
    category: "commercial",
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
    category: "educational",
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
    category: "infrastructure",
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
  },
  {
    id: 'p7',
    title: { en: "Al-Nour Grand Mosque Expansion", ar: "مشروع توسعة جامع النور الكبير" },
    category: "religious",
    image: "https://images.unsplash.com/photo-1545153518-d7843311416b?auto=format&fit=crop&w=1200&q=80",
    description: {
      en: "A comprehensive expansion project for Al-Nour Grand Mosque, integrating traditional Islamic architecture with modern structural solutions. The project includes a new minaret, an expanded prayer hall with a large span dome supported by reinforced concrete ring beams, and a complete renovation of the courtyard.",
      ar: "مشروع توسعة شامل لجامع النور الكبير، يدمج العمارة الإسلامية التقليدية مع الحلول الإنشائية الحديثة. يشمل المشروع مئذنة جديدة، وقاعة صلاة موسعة بقبة كبيرة الامتداد مدعومة بعوارض حلقية من الخرسانة المسلحة، وتجديدًا كاملاً للفناء."
    },
    client: { en: "Awqaf Ministry", ar: "وزارة الأوقاف" },
    location: { en: "Nablus, Palestine", ar: "نابلس، فلسطين" },
    year: "2023",
    gallery: [
      "https://images.unsplash.com/photo-1545153518-d7843311416b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580794966459-2a1a0e37d029?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564121211835-e88c852648ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 'p8',
    title: { en: "Northern Logistics Center Construction", ar: "إنشاء مركز الشمال اللوجستي" },
    category: "industrial",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    description: {
      en: "Design and construction of a large-scale logistics center featuring high-bay warehousing and automated distribution systems. The structural design utilizes long-span steel trusses to create column-free interior zones, optimized via BIM for efficient material handling and storage capacity.",
      ar: "تصميم وإنشاء مركز لوجستي واسع النطاق يضم مستودعات عالية الارتفاع وأنظمة توزيع آلية. يستخدم التصميم الإنشائي دعامات فولاذية طويلة المدى لإنشاء مناطق داخلية خالية من الأعمدة، تم تحسينها عبر BIM لكفاءة مناولة المواد وسعة التخزين."
    },
    client: { en: "Industrial Investment Group", ar: "مجموعة الاستثمار الصناعي" },
    location: { en: "Jenin Industrial Zone", ar: "منطقة جنين الصناعية" },
    year: "2024",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
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

export const DEFAULT_VIP_SERVICES: VipServiceItem[] = [
  {
    id: "vr-visualization",
    title: { en: "Advanced VR and 360° Visualization", ar: "الواقع الافتراضي والتصور 360 درجة" },
    description: {
      en: "Experience your project before it's built with our immersive VR tours and high-resolution 360° panoramic views, accessible on any device.",
      ar: "عش تجربة مشروعك قبل بنائه مع جولات الواقع الافتراضي الغامرة والمناظر البانورامية بدقة 360 درجة، المتاحة على أي جهاز."
    },
    image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "3d-models",
    title: { en: "Premium 3D Printed Miniature Models", ar: "نماذج مصغرة مطبوعة ثلاثية الأبعاد" },
    description: {
      en: "Physical realization of your architectural vision using state-of-the-art 3D printing technology, delivering precise and detailed miniature models.",
      ar: "تجسيد مادي لرؤيتك المعمارية باستخدام أحدث تقنيات الطباعة ثلاثية الأبعاد، لتقديم نماذج مصغرة دقيقة ومفصلة."
    },
    image: "https://images.unsplash.com/photo-1633362623348-16078397c432?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "luxury-book",
    title: { en: "Luxury Design and Documentation Book", ar: "كتاب توثيق وتصميم فاخر" },
    description: {
      en: "A professionally bound, luxury book documenting every detail of your project, from initial sketches to final plans and renderings, serving as a permanent record of excellence.",
      ar: "كتاب فاخر مجلد بشكل احترافي يوثق كل تفاصيل مشروعك، من الرسومات الأولية إلى المخططات النهائية والتصاميم، ليكون سجلاً دائماً للتميز."
    },
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gov-management",
    title: { en: "Government Licensing and Transactions Management", ar: "إدارة التراخيص والمعاملات الحكومية" },
    description: {
      en: "A dedicated officer to handle all government procedures, permits, and municipal approvals, ensuring a smooth, hassle-free legal process.",
      ar: "موظف مخصص للتعامل مع جميع الإجراءات الحكومية والتصاريح والموافقات البلدية، لضمان عملية قانونية سلسة وخالية من المتاعب."
    },
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
  }
];
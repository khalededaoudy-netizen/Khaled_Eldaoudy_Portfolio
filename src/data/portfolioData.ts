export interface Project {
  id: string;
  number: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  category: string;
  categoryAr: string;
  year: string;
  organization: string;
  description: string;
  descriptionAr: string;
  fullOverview: string;
  fullOverviewAr: string;
  highlights: string[];
  highlightsAr: string[];
  hardwareSpecs: {
    mcu: string;
    sensors: string[];
    actuators: string[];
    protocols: string[];
    simulation: string;
  };
  schematicDiagram: {
    inputs: string[];
    processing: string[];
    outputs: string[];
    communication: string[];
  };
  tags: string[];
  badgeText: string;
}

export interface Competition {
  id: string;
  year: string;
  date: string;
  title: string;
  titleAr: string;
  organizer: string;
  role: string;
  roleAr: string;
  result: string;
  resultAr: string;
  isPersonalVsTeam: 'Personal Contribution & Leadership' | 'Team Award & Lead Engineering' | 'Community Team Award';
  description: string;
  descriptionAr: string;
  technicalImpact: string;
  technicalImpactAr: string;
  badge: string;
  badgeAr: string;
}

export interface Certification {
  id: string;
  title: string;
  titleAr: string;
  issuer: string;
  date: string;
  hours?: string;
  score?: string;
  category: 'Embedded & Firmware' | 'AI & Data Science' | 'CAD & Mechanical' | 'Leadership & Honors';
  description: string;
  descriptionAr: string;
}

export interface LeadershipItem {
  id: string;
  title: string;
  titleAr: string;
  organization: string;
  period: string;
  roleType: string;
  roleTypeAr: string;
  achievements: string[];
  achievementsAr: string[];
}

export interface EntrepreneurialItem {
  id: string;
  role: string;
  roleAr: string;
  entity: string;
  period: string;
  tagline: string;
  taglineAr: string;
  points: string[];
  pointsAr: string[];
  metrics: string;
  metricsAr: string;
}

export const PERSONAL_INFO = {
  name: "Khaled Hamdy Eldaoudy",
  nameAr: "خالد حمدي الداودي",
  shortName: "Khaled Eldaoudy",
  monogram: "KE",
  title: "Mechatronics Engineering Student | Embedded Systems & Robotics Developer",
  titleAr: "طالب هندسة ميكاترونكس | مطور أنظمة مدمجة وروبوتات",
  status: "Senior Student // Available for Engineering Internships & R&D Opportunities",
  statusAr: "طالب بالسنة النهائية // متاح لفرص التدريب ومشاريع البحث والتطوير",
  university: "Zagazig National University (ZNU), Egypt",
  universityAr: "جامعة الزقازيق الأهلية، مصر",
  faculty: "Faculty of Engineering",
  facultyAr: "كلية الهندسة",
  degree: "Bachelor of Mechatronics Engineering (Credit-Hour System)",
  degreeAr: "بكالوريوس هندسة الميكاترونكس (نظام الساعات المعتمدة)",
  yearOfStudy: "Year 4 (Senior)",
  yearOfStudyAr: "السنة الرابعة (سنة التخرج)",
  expectedGraduation: "2026",
  location: "10th of Ramadan City, Sharqia, Egypt",
  locationAr: "مدينة العاشر من رمضان، الشرقية، مصر",
  email: "KhaledEdaoudy@gmail.com",
  phone: "+20 102 715 9784",
  phoneAlt: "+20 102 560 2440",
  whatsapp: "https://wa.me/201027159784",
  linkedin: "https://www.linkedin.com/in/khaledeldaoudy/",
  github: "https://github.com/khaledeldaoudy",
  profileImage: "/images/khaled-profile.png",
  cvFile: "/Khaled_CV.pdf",
  stats: [
    { label: "Technical Training", labelAr: "تدريب فني معتمد", value: "400+", unit: "Hours", unitAr: "ساعة", detail: "ITI, NTI, Obour Land" },
    { label: "Technical Projects", labelAr: "مشاريع هندسية", value: "10+", unit: "Projects", unitAr: "مشروع", detail: "C/C++, Python, CAD" },
    { label: "RoboSoccer National", labelAr: "روبوسوكر مصر", value: "2nd", unit: "Place", unitAr: "المركز الثاني", detail: "Team ZNUS & PM Commendation" },
    { label: "Academic Standing", labelAr: "المرحلة الدراسية", value: "Year 4", unit: "Senior", unitAr: "السنة النهائية", detail: "Zagazig National University" },
  ],
  bioIntro: "Detail-oriented Mechatronics Engineering student (Year 4) at Zagazig National University with practical experience in embedded systems, control engineering, and robotics. Led 10+ technical projects in competitive settings combining C/C++, Python, and CAD. Completed 400+ hours of advanced training across ITI and NTI, and serves as President of the Engineering College Student Union.",
  bioIntroAr: "طالب هندسة ميكاترونكس بالسنة الرابعة بجامعة الزقازيق الأهلية يمتلك خبرة عملية في الأنظمة المدمجة، نظم التحكم، والروبوتات. قاد أكثر من 10 مشاريع تقنية في مسابقات تنافسية تجمع بين C/C++ وPython والتصميم ثلاثي الأبعاد CAD. أتم أكثر من 400 ساعة تدريبية في معهد تكنولوجيا المعلومات ITI والمعهد القومي للاتصالات NTI، ويشغل منصب رئيس اتحاد طلاب كلية الهندسة.",
  engineeringPhilosophy: "Combining embedded firmware development, closed-loop control, mechanical assemblies, and entrepreneurial insight to solve multidisciplinary engineering problems.",
  engineeringPhilosophyAr: "الدمج بين برمجة الأنظمة المدمجة، نظم التحكم ذات التغذية الراجعة، التصميم الميكانيكي، والخبرة العملية لحل التحديات الهندسية المعقدة.",
};

export const SKILL_CATEGORIES = [
  {
    id: "embedded",
    name: "Embedded Systems & Firmware",
    nameAr: "الأنظمة المدمجة والبرمجيات الدقيقة",
    headline: "Microcontroller Interfacing & Firmware Development",
    headlineAr: "برمجة المتحكمات والتعامل مع المكونات العتادية",
    description: "Hands-on firmware development in C, C++, and Embedded C for microcontrollers with timer interrupts, ADC conversions, and peripheral communication protocols.",
    descriptionAr: "تطوير البرمجيات المدمجة بلغات C وC++ وEmbedded C للمتحكمات الدقيقة مع معالجة المقاطعات والتحويل التناظري الرقمي وبروتوكولات الاتصال.",
    skills: [
      { name: "Arduino Architecture", level: "Hands-on", detail: "Prototyping, sensor interfacing, and actuator control" },
      { name: "ESP32", level: "Hands-on", detail: "Wi-Fi, Bluetooth, and dual-core processing" },
      { name: "STM32", level: "Hands-on", detail: "ARM Cortex-M development and AI decision integration" },
      { name: "AVR Microcontrollers", level: "Hands-on", detail: "ATmega32 bare-metal C programming" },
      { name: "Microcontrollers Interfacing", level: "Hands-on", detail: "Sensors, relays, LCDs, and motor drivers" },
      { name: "C & C++ Programming", level: "Hands-on", detail: "Data structures, bitwise logic, and state machines" },
      { name: "Embedded C", level: "Hands-on", detail: "Register manipulation and interrupt service routines" },
      { name: "Proteus Simulation", level: "Hands-on", detail: "Schematic design and circuit behavior validation" },
    ],
    telemetry: {
      platforms: "Arduino, ESP32, STM32, AVR (ATmega32)",
      languages: "C, C++, Embedded C",
      protocols: "UART, I2C, SPI, ADC, PWM",
    }
  },
  {
    id: "control",
    name: "Control & Simulation",
    nameAr: "نظم التحكم والمحاكاة",
    headline: "Closed-Loop Control & Dynamic System Modeling",
    headlineAr: "التحكم المغلق ونمذجة الأنظمة الديناميكية",
    description: "Practical tuning of closed-loop feedback algorithms and mathematical modeling using MATLAB and Simulink for mobile robots and test rigs.",
    descriptionAr: "ضبط خوارزميات التحكم في الحلقة المغلقة والنمذجة الرياضية باستخدام MATLAB وSimulink للروبوتات المتنقلة ومنصات الاختبار.",
    skills: [
      { name: "PID Control", level: "Applied", detail: "Proportional-Integral-Derivative tuning for mobile robots" },
      { name: "MATLAB", level: "Applied", detail: "Mathematical analysis and algorithm simulation" },
      { name: "Simulink", level: "Applied", detail: "Dynamic system block diagram modeling" },
      { name: "Motion Control", level: "Applied", detail: "Speed and trajectory regulation for DC & servo motors" },
    ],
    telemetry: {
      algorithms: "Discrete PID, Speed Modulation",
      software: "MATLAB, Simulink",
      applications: "Line Follower, Robo-Soccer, Seismic Cam",
    }
  },
  {
    id: "robotics",
    name: "Robotics & Autonomous Systems",
    nameAr: "الروبوتات والأنظمة ذاتية القيادة",
    headline: "Autonomous Navigation, Sensor Fusion & Combat Sumo",
    headlineAr: "الملاحة الذاتية، دمج الحساسات، وروبوتات السومو التنافسية",
    description: "Designing, building, and programming competitive autonomous sumo robots, soccer robots, and articulated multi-DOF robotic arms.",
    descriptionAr: "تصميم وبناء وبرمجة روبوتات السومو ذاتية القيادة التنافسية، روبوتات كرة القدم، والأذرع الروبوتية متعددة درجات الحرية.",
    skills: [
      { name: "Mechanical Design", level: "Applied", detail: "Chassis structural design, gear selection, and load balancing" },
      { name: "Sensor Fusion & Integration", level: "Applied", detail: "Infrared, ultrasonic, vibration (SW-420), and temperature sensors" },
      { name: "Autonomous Navigation", level: "Applied", detail: "Line-following and dynamic obstacle avoidance" },
      { name: "Motion Control", level: "Applied", detail: "Multi-axis servo coordination and differential drive tuning" },
      { name: "Robot Design", level: "Applied", detail: "End-to-end mechatronic integration for national competitions" },
    ],
    telemetry: {
      platforms: "Autonomous Sumo, Robo-Soccer, Robotic Arm",
      competitions: "IEEE HTI, ERU Sumo 3 & 4, National Youth Tournaments",
      sensors: "SW-420, LM35, LDR, IR Arrays, Ultrasonic",
    }
  },
  {
    id: "programming",
    name: "Programming & Data Analysis",
    nameAr: "البرمجة وتحليل البيانات",
    headline: "Python Development & Machine Learning Fundamentals",
    headlineAr: "تطوير بايثون وأساسيات تعلم الآلة",
    description: "Data analysis, engineering calculations, and machine learning pipelines completed through NTI/ITIDA certified training with an 89% final score.",
    descriptionAr: "تحليل البيانات، الحسابات الهندسية، وبناء نماذج تعلم الآلة المعتمدة من المعهد القومي للاتصالات NTI بنتيجة نهائية 89%.",
    skills: [
      { name: "Python", level: "Applied", detail: "Algorithmic scripting, numerical computing, and data wrangling" },
      { name: "Pandas", level: "Applied", detail: "Tabular data structuring, inspection, and manipulation" },
      { name: "NumPy", level: "Applied", detail: "Array operations, vector mathematics, and signal handling" },
      { name: "Matplotlib", level: "Applied", detail: "Data charting and engineering visualization" },
      { name: "Basic Machine Learning", level: "Certified (89%)", detail: "Classification, regression, and model evaluation techniques" },
    ],
    telemetry: {
      accreditation: "NTI / ITIDA Summer Program (120 Hours)",
      score: "89% Final Achievement Score",
      stack: "Python, Pandas, NumPy, Matplotlib",
    }
  },
  {
    id: "cad",
    name: "CAD & 3D Mechanical Design",
    nameAr: "التصميم الميكانيكي ثلاثي الأبعاد CAD",
    headline: "SolidWorks Parametric Modeling & Assemblies",
    headlineAr: "النمذجة البارامترية والتجميعات الميكانيكية ببرنامج SolidWorks",
    description: "Creating accurate 3D CAD models, multi-part assemblies, and motion simulations for robotic chassis and testing mechanisms.",
    descriptionAr: "بناء النماذج ثلاثية الأبعاد والتجميعات الميكانيكية المعقدة ومحاكاة الحركة لهياكل الروبوتات وآليات الاختبار.",
    skills: [
      { name: "SolidWorks 3D Modeling", level: "Certified", detail: "Part sketching, extrusions, cuts, and parametric design" },
      { name: "Assemblies", level: "Applied", detail: "Constraint mating, interference checking, and fit analysis" },
      { name: "Simulation", level: "Applied", detail: "Kinematic motion validation and mechanical load inspection" },
      { name: "Cam Mechanisms", level: "Applied", detail: "Rotary-to-linear conversion for the earthquake test house" },
    ],
    telemetry: {
      training: "2B Digital Workshop (2026), Dassault Systèmes (2025)",
      deliverables: "Robotic Arm Linkages, Seismic Cam, Enclosures",
      software: "SolidWorks, 3DEXPERIENCE",
    }
  },
  {
    id: "industrial",
    name: "Industrial & Factory Systems",
    nameAr: "الأنظمة الصناعية والمصانع",
    headline: "Automated Packaging Lines & Aerospace Labs",
    headlineAr: "خطوط التعبئة والتغليف الآلية والمختبرات الفضائية",
    description: "Hands-on industrial technical training on Tetra Pak packaging machinery and educational aerospace systems at Labtronic Industries.",
    descriptionAr: "تدريب صناعي عملي على ماكينات تعبئة تترا باك وأنظمة وتجهيزات التدريب الفضائية بشركة لابتورنيك للصناعات.",
    skills: [
      { name: "Tetra Pak A3-Speed Machines", level: "Trained (120h)", detail: "Packaging overview, utilities, tube forming, and jaw mechanisms" },
      { name: "Utilities & Aseptic Systems", level: "Trained", detail: "Power, steam, compressed air, and sterilization workflows" },
      { name: "Aerospace Testing Exposure", level: "Field Visit", detail: "Wind tunnel, cabin simulator, landing gear, and force measurement" },
    ],
    telemetry: {
      facilities: "Obour Land Food Industries, Labtronic Industries",
      hours: "120 Hours Technical Industrial Training",
      scope: "High-Speed Automation, Pneumatics, Force Measurement",
    }
  }
];

export const PROJECTS: Project[] = [
  {
    id: "smart-home-iti",
    number: "01",
    title: "Smart Home Control System",
    titleAr: "نظام التحكم الذكي بالمنزل",
    subtitle: "ITI Capstone Project (Team of 3)",
    subtitleAr: "مشروع تخرج معهد تكنولوجيا المعلومات ITI (فريق من 3)",
    category: "Embedded Systems & Firmware",
    categoryAr: "أنظمة مدمجة وبرمجيات دقيقة",
    year: "2025",
    organization: "Information Technology Institute (ITI), Smart Village, Egypt",
    description: "Designed a smart home system to control appliances automatically via sensors or manually via Bluetooth, featuring keypad password authentication, LCD feedback, and Proteus simulation.",
    descriptionAr: "تصميم نظام منزل ذكي للتحكم في الأجهزة المنزلية آلياً عبر الحساسات أو يدوياً عبر البلوتوث، مزود بنظام حماية برقم سري عبر لوحة المفاتيح، شاشة LCD، ومحاكاة كاملة ببرنامج Proteus.",
    fullOverview: "Designed, built, and defended as a team capstone project during the intensive 162-hour Embedded Systems Summer Training Program at ITI Smart Village under the supervision of Dr. Heba Saleh. The system controls appliances automatically using sensor inputs or manually from a smartphone terminal via an HC-05 Bluetooth module through UART. A keypad and LCD provide local password protection and status display, while an LM35 temperature sensor and LDR light sensor interface through ADC channels to trigger relay-driven appliances and PWM-controlled fan motor and LED lighting.",
    fullOverviewAr: "مشروع تخرج صُمم وبُني ودوفع عنه ضمن التدريب الصيفي المكثف في الأنظمة المدمجة بمعهد تكنولوجيا المعلومات ITI (162 ساعة) تحت إشراف الدكتورة هبة صالح. يتحكم النظام بالأجهزة المنزلية آلياً بحسب الحساسات أو يدوياً من الهاتف عبر البلوتوث (HC-05 بواسطة UART). يحتوي على لوحة مفاتيح وشاشة LCD لإدخال كلمة المرور ومتابعة الحالة، مع ربط حساس حرارة LM35 وحساس إضاءة LDR عبر قنوات ADC للتحكم في الريلاي ومحرك المروحة بنظام PWM.",
    highlights: [
      "Designed and validated the complete circuit in Proteus VSM before physical implementation.",
      "Implemented a keypad-based password/security system with real-time LCD display feedback.",
      "Integrated HC-05 Bluetooth module via UART for remote mobile terminal control.",
      "Interfaced LM35 temperature sensor and LDR light sensor through ADC channels.",
      "Controlled household appliances using electromechanical relays and modulated motor/LED speed via PWM.",
      "Presented and defended the project before ITI instructors with distinction.",
    ],
    highlightsAr: [
      "بناء ومحاكاة الدائرة الكهربائية بالكامل على برنامج Proteus قبل التنفيذ العتادي.",
      "برمجة نظام أمان بكلمة مرور عبر لوحة مفاتيح 4x4 وشاشة LCD لإظهار الحالة.",
      "ربط وحدة البلوتوث HC-05 عبر واجهة UART للتحكم من تطبيق الهاتف المحمول.",
      "قراءة حساس الحرارة LM35 وحساس الإضاءة LDR عبر منافذ المحول التناظري الرقمي ADC.",
      "التحكم في الأجهزة عبر الريلاي والتحكم في سرعة المحرك والإضاءة بتقنية PWM.",
      "عرض ومناقشة المشروع أمام مدربي ومشرفي معهد ITI بنجاح.",
    ],
    hardwareSpecs: {
      mcu: "ATmega32 Microcontroller (AVR Architecture)",
      sensors: ["LM35 Temperature Sensor", "LDR Ambient Light Sensor", "Matrix Keypad"],
      actuators: ["Relay Module (Appliance Switching)", "DC Fan Motor (PWM)", "16x2 LCD Display", "Status LEDs"],
      protocols: ["UART (HC-05 Bluetooth)", "ADC Conversion", "Timer-Driven PWM"],
      simulation: "Proteus VSM Circuit Simulation & AVR-GCC Toolchain"
    },
    schematicDiagram: {
      inputs: ["LM35 Temp Sensor", "LDR Light Sensor", "4x4 Matrix Keypad", "HC-05 Bluetooth RX"],
      processing: ["ATmega32 Microcontroller", "AVR-GCC Bare-Metal C", "Security State Logic", "ADC Conversion"],
      outputs: ["16x2 Character LCD", "Appliance Relay Array", "DC Motor (PWM)", "Status LEDs"],
      communication: ["UART Serial Protocol", "Mobile Terminal App"]
    },
    tags: ["ATmega32", "AVR-GCC", "C", "Proteus", "Bluetooth", "UART", "ADC", "PWM", "ITI Capstone"],
    badgeText: "ITI Capstone Project // 2025"
  },
  {
    id: "robotic-arm",
    number: "02",
    title: "Robotic Arm – Pick-and-Place System",
    titleAr: "ذراع روبوتي – نظام الالتقاط والوضع",
    subtitle: "Articulated Multi-DOF Motion System",
    subtitleAr: "نظام حركي متعدد درجات الحرية",
    category: "Robotics & Motion Control",
    categoryAr: "الروبوتات والتحكم في الحركة",
    year: "2024–2025",
    organization: "Zagazig National University Prototyping",
    description: "Designed and built a multi-degree-of-freedom robotic arm using Arduino and servo motors for automated pick-and-place operations, integrating mechanical assembly and motion control.",
    descriptionAr: "تصميم وبناء ذراع روبوتي متعدد درجات الحرية باستخدام أردوينو ومحركات السيرفو لعمليات الالتقاط والوضع الآلية، مع دمج التجميع الميكانيكي والتحكم البرمجي.",
    fullOverview: "Designed and fabricated to perform automated pick-and-place tasks, applying principles of robotics, kinematics, and embedded systems. Features multiple servo-driven joints to manipulate objects in three-dimensional space with programmed precision motion profiles. Built for educational and industrial simulation purposes, harmonizing CAD mechanical assembly, driver electronics, and embedded software control.",
    fullOverviewAr: "صُمم وبُني لتنفيذ مهام الالتقاط والوضع آلياً مع تطبيق مفاهيم الروبوتات والحركيات والأنظمة المدمجة. يضم مفاصل متعددة مدفوعة بمحركات سيرفو للتعامل مع الأجسام في الفراغ ثلاثي الأبعاد بحركات مبرمجة بدقة، وصُنع لأغراض المحاكاة التعليمية والصناعية موازناً بين التصميم الميكانيكي والدوائر الإلكترونية وبرمجة المتحكم.",
    highlights: [
      "Engineered multi-degree-of-freedom mechanical structure using CAD modeling.",
      "Programmed coordinated servo motor positions for smooth motion profiles.",
      "Implemented an articulated gripper mechanism for grasping and placing target objects.",
      "Integrated mechanical assembly, power delivery, and embedded microcontroller firmware.",
    ],
    highlightsAr: [
      "تصميم الهيكل الميكانيكي متعدد درجات الحرية باستخدام برامج التصميم ثلاثي الأبعاد CAD.",
      "برمجة محركات السيرفو بتناسق لتحقيق حركة انسيابية ومنتظمة.",
      "بناء آلية القابض (Gripper) لإمساك ونقل الأجسام بدقة.",
      "دمج التجميع الميكانيكي مع الدوائر الإلكترونية والبرمجة المدمجة.",
    ],
    hardwareSpecs: {
      mcu: "Arduino Microcontroller Platform",
      sensors: ["Position Feedback & Manual Input Controls"],
      actuators: ["Servo Motors (Multiple Joint Axes)", "End-Effector Gripper Mechanism"],
      protocols: ["PWM Servo Control Signals", "Serial Monitor Diagnostic Interface"],
      simulation: "SolidWorks Mechanical Modeling"
    },
    schematicDiagram: {
      inputs: ["Control Inputs / Programmed Coordinates", "Calibration Limits"],
      processing: ["Arduino Microcontroller", "Joint Angle Calculation", "PWM Signal Generation"],
      outputs: ["Base Rotation Servo", "Joint Axis Servos", "Gripper Actuator"],
      communication: ["USB Serial Monitor"]
    },
    tags: ["Robotics", "Arduino", "Servo Motors", "Motion Control", "SolidWorks", "Mechanical Design"],
    badgeText: "Robotics & Kinematics"
  },
  {
    id: "earthquake-simulation",
    number: "03",
    title: "Earthquake Simulation House",
    titleAr: "منزل محاكاة الزلازل",
    subtitle: "Seismic Dynamic Structural Test Rig & Emergency Response",
    subtitleAr: "منصة اختبار ديناميكية الزلازل ونظام الطوارئ التلقائي",
    category: "Mechatronics & Control Engineering",
    categoryAr: "الميكاترونكس وهندسة التحكم",
    year: "2024",
    organization: "Academic Demonstration Rig",
    description: "Designed an Arduino-based earthquake simulator to demonstrate seismic vibration effects on building structures using a motor-driven cam mechanism and automated emergency response.",
    descriptionAr: "تصميم جهاز محاكاة زلازل يعتمد على أردوينو لتوضيح تأثير الاهتزازات الزلزالية على الهياكل الإنشائية باستخدام محرك وآلية كامة ميكانيكية مع استجابة طوارئ تلقائية.",
    fullOverview: "Constructed as an educational demonstration tool for civil engineering, mechatronics, and disaster-awareness applications. Vibration intensity is regulated through a potentiometer-driven PWM signal fed into an L298N motor driver and a GA25-370 DC gear motor. A custom-designed mechanical cam mechanism translates rotational drive into cyclic ground shaking. An SW-420 vibration sensor continuously monitors ground motion; when vibration exceeds predefined safety thresholds, the system triggers warning LEDs and activates an SG90 servo motor to simulate automated safety door unlocking.",
    fullOverviewAr: "صُممت كأداة تعليمية وتطبيقية للهندسة المدنية والميكاترونكس والتوعية بالكوارث. يتم التحكم في شدة الاهتزاز عبر إشارة PWM موجهة من مقاومة متغيرة إلى مشغل المحركات L298N ومحرك GA25-370 DC ذي التروس، مع آلية كامة ميكانيكية مخصصة لتوليد الاهتزازات. يقوم حساس الاهتزاز SW-420 بمراقبة الحركة الزلزالية وتفعيل إشارات تحذيرية ومحرك سيرفو SG90 لفتح باب الطوارئ آلياً عند تجاوز حد الأمان.",
    highlights: [
      "Engineered custom mechanical cam mechanism to convert rotary motor power into structural vibration.",
      "Controlled shaking intensity via potentiometer-driven PWM signal to L298N driver and GA25-370 DC gear motor.",
      "Integrated SW-420 vibration sensor to continuously quantify shake levels.",
      "Implemented automatic emergency routine with SG90 servo door release and visual LED indicators.",
      "Built as an interdisciplinary educational demonstration tool for mechatronics and civil structural analysis.",
    ],
    highlightsAr: [
      "تصميم كامة ميكانيكية خاصة لتحويل الحركة الدورانية إلى اهتزازات أفقية واقعية.",
      "التحكم في شدة الاهتزاز عبر إشارة PWM ومتحكم L298N ومحرك GA25-370 DC.",
      "ربط حساس الاهتزاز SW-420 لمراقبة وتسجيل مستويات الاهتزاز.",
      "برمجة استجابة طوارئ آلية تفتح باب الطوارئ بمحرك سيرفو SG90 وتطلق إشارات ضوئية.",
      "نموذج تطبيقي يجمع بين الميكاترونكس وهندسة المنشآت.",
    ],
    hardwareSpecs: {
      mcu: "Arduino UNO",
      sensors: ["SW-420 Vibration Sensor", "Analog Potentiometer"],
      actuators: ["GA25-370 DC Gear Motor", "L298N Motor Driver", "SG90 Servo (Emergency Door)", "LED Indicators"],
      protocols: ["PWM Motor Control", "Analog/Digital Sensor Interfacing"],
      simulation: "Mechanical Cam Design in SolidWorks"
    },
    schematicDiagram: {
      inputs: ["Intensity Potentiometer", "SW-420 Vibration Sensor"],
      processing: ["Arduino UNO Controller", "PWM Duty Cycle Calculation", "Vibration Threshold Comparator"],
      outputs: ["L298N Motor Driver", "GA25-370 DC Gear Motor", "SG90 Servo Door Mechanism", "Warning LEDs"],
      communication: ["Serial Diagnostic Monitor"]
    },
    tags: ["Arduino UNO", "L298N", "GA25-370 Motor", "SW-420", "SG90", "Cam Mechanism", "SolidWorks"],
    badgeText: "Seismic Simulation & Safety"
  },
  {
    id: "vibration-alarm",
    number: "04",
    title: "Vibration Alarm & Smart Safety System",
    titleAr: "نظام الإنذار بالاهتزاز والأمان الذكي",
    subtitle: "Real-Time Intrusion & Structural Hazard Interception",
    subtitleAr: "رصد فوري للاهتزازات وحماية المنشآت",
    category: "Security Systems & Firmware",
    categoryAr: "أنظمة الأمان والبرمجيات المدمجة",
    year: "2024",
    organization: "Zagazig National University Prototyping",
    description: "Built a smart vibration-based security and alarm system using Arduino UNO and an SW-420 sensor to detect abnormal movement or intrusion with acoustic, optical, and servo responses.",
    descriptionAr: "بناء نظام أمان وإنذار ذكي بالاهتزاز باستخدام أردوينو وحساس SW-420 لرصد الحركات غير الطبيعية ومحاولات الاقتحام مع استجابة صوتية وضوئية وإغلاق ميكانيكي بالسيرفو.",
    fullOverview: "Engineered to demonstrate the practical integration of embedded systems, sensors, actuators, and automated emergency safety logic. Utilizes an SW-420 vibration sensor to detect physical shocks, sudden impacts, or structural tampering. The Arduino UNO processes sensor signals in real time to trigger audible buzzer sirens and high-visibility warning LEDs, while simultaneously driving an SG90 servo-actuated safety door mechanism for automated lockdown or release.",
    fullOverviewAr: "صُمم لتوضيح الدمج العملي بين الأنظمة المدمجة، الحساسات، المحركات، ومنطق الاستجابة الذاتية للطوارئ. يعتمد على حساس الاهتزاز SW-420 لرصد الصدمات أو محاولات التسلل، ويقوم متحكم أردوينو بتحليل الإشارات فورياً لإطلاق صفارة إنذار ضوئية وصوتية وتشغيل آلية قفل/فتح الباب بمحرك سيرفو SG90.",
    highlights: [
      "Implemented real-time vibration monitoring logic using Arduino UNO and SW-420 sensor.",
      "Programmed immediate alert triggers for abnormal structural vibration or forced entry.",
      "Integrated dual warning feedback: acoustic buzzer sirens and visual status LEDs.",
      "Actuated SG90 servo motor safety door mechanism upon sensor threshold breach.",
      "Engineered clean modular hardware integration for smart security applications.",
    ],
    highlightsAr: [
      "برمجة منطق مراقبة فورية للاهتزازات بالاعتماد على أردوينو وحساس SW-420.",
      "تفعيل الإنذار الفوري عند تجاوز حدود الاهتزاز الطبيعية أو محاولات الاقتحام.",
      "تنبيه مزدوج صوتي (Buzzer) ومرئي (LEDs).",
      "تشغيل آلية أمان ميكانيكية لباب الطوارئ بواسطة محرك سيرفو SG90.",
      "تصميم عتادي منظم يناسب تطبيقات الأمان الذكية والمنشآت.",
    ],
    hardwareSpecs: {
      mcu: "Arduino UNO",
      sensors: ["SW-420 Vibration Sensor"],
      actuators: ["SG90 Servo Motor (Door Mechanism)", "Piezo Buzzer Alarm", "Warning LEDs"],
      protocols: ["Digital Sensor Sampling", "PWM Servo Positioning"],
      simulation: "Firmware Logic Validation & Hardware Benchtop Test"
    },
    schematicDiagram: {
      inputs: ["SW-420 Vibration Sensor Digital Output"],
      processing: ["Arduino UNO Controller", "Real-Time Monitoring Logic", "Safety Trigger Routine"],
      outputs: ["Piezo Siren Buzzer", "Warning Status LEDs", "SG90 Servo Door Mechanism"],
      communication: ["Serial Diagnostic Monitor"]
    },
    tags: ["Arduino UNO", "SW-420", "Buzzer", "SG90", "Security System", "Embedded C++"],
    badgeText: "Smart Safety & Alarm"
  }
];

export const COMPETITIONS: Competition[] = [
  {
    id: "robosoccer-2025",
    year: "2025",
    date: "August 2025",
    title: "RoboSoccer Competition",
    titleAr: "مسابقة روبوتات كرة القدم RoboSoccer",
    organizer: "IEEE HTI Student Branch",
    role: "Control System Design & Tuning — Team ZNUS & Team ZUNBots",
    roleAr: "تصميم وضبط نظام التحكم — فريقي ZNUS وZUNBots",
    result: "2nd Place (Team ZNUS) & 5th Place (Team ZUNBots)",
    resultAr: "المركز الثاني (فريق ZNUS) والمركز الخامس (فريق ZUNBots)",
    isPersonalVsTeam: "Team Award & Lead Engineering",
    description: "Secured second place with Team ZNUS and fifth place with Team ZUNBots among top Egyptian universities. Khaled led the control system design and motor tuning for stable, precise robot performance during intense match play.",
    descriptionAr: "حقق المركز الثاني مع فريق ZNUS والمركز الخامس مع فريق ZUNBots بين كبرى الجامعات المصرية. قاد تصميم وضبط نظام التحكم لتحقيق أداء عالي الدقة وثبات الروبوت أثناء المباريات.",
    technicalImpact: "Received an official certificate signed by Egypt's Prime Minister, Dr. Mostafa Madbouly, for national-level engineering recognition.",
    technicalImpactAr: "الحصول على شهادة تقدير رسمية موقعة من رئيس مجلس الوزراء المصري الدكتور مصطفى مدبولي تقديراً للتميز على المستوى القومي.",
    badge: "2nd Place Nationally // Signed by PM Mostafa Madbouly",
    badgeAr: "المركز الثاني قومياً // توقيع رئيس الوزراء د. مصطفى مدبولي"
  },
  {
    id: "error-competition-2025",
    year: "2025",
    date: "October 2025",
    title: "Error Competition 2025 – Sumo Robot (2nd Edition)",
    titleAr: "مسابقة إيرور 2025 لروبوتات السومو (النسخة الثانية)",
    organizer: "IEEE HTI Student Branch, Higher Technological Institute",
    role: "Robot Design, Programming & Control Systems — Team ZNUS",
    roleAr: "تصميم وبرمجة الروبوتات ونظم التحكم — فريق ZNUS",
    result: "Team ZNUS Competitor // NASA Team 2nd Place among 20+ Teams",
    resultAr: "مشارك بفريق ZNUS // وفريق NASA يحصد المركز الثاني من بين 20+ جامعة",
    isPersonalVsTeam: "Personal Contribution & Leadership",
    description: "Competed as part of Team ZNUS under the ZNU Robotics Community, designing and programming three autonomous sumo robots for Egypt's national qualifying competition for the International Sumo Robot Championship in Japan. The community's NASA Team achieved 2nd place among 20+ university teams.",
    descriptionAr: "شارك ضمن فريق ZNUS التابع لمجتمع الروبوتات بجامعة الزقازيق الأهلية، في تصميم وبرمجة ثلاثة روبوتات سومو ذاتية القيادة للمنافسة في التصفيات المؤهلة لبطولة العالم باليابان. وحقق فريق NASA من نفس المجتمع المركز الثاني بين أكثر من 20 فريقاً جامعياً.",
    technicalImpact: "Awarded Certificate of Appreciation for technical contribution in robot design, programming, and control systems.",
    technicalImpactAr: "الحصول على شهادة تقدير للمساهمة الفنية في تصميم الروبوتات وبرمجتها ونظم التحكم الخاصة بها.",
    badge: "Japan Championship Qualifier // 3 Robots Programmed",
    badgeAr: "تصفيات بطولة اليابان // برمجة وتصميم 3 روبوتات"
  },
  {
    id: "robot-sumo-3",
    year: "2025",
    date: "February 2025",
    title: "Robot Sumo 3",
    titleAr: "مسابقة مصارعة الروبوتات Sumo 3",
    organizer: "Egyptian Russian University (ERU)",
    role: "AI Decision Logic on STM32 — Member of NASA Team",
    roleAr: "دمج منطق اتخاذ القرار بالذكاء الاصطناعي على STM32 — عضو فريق NASA",
    result: "Certificate of Appreciation for Hardware/Software Integration",
    resultAr: "شهادة تقدير للتكامل بين العتاد الصلب والبرمجيات",
    isPersonalVsTeam: "Team Award & Lead Engineering",
    description: "Integrated AI decision logic on STM32 microcontrollers as a member of NASA Team, enabling real-time autonomous tactics in competitive sumo matches.",
    descriptionAr: "دمج خوارزميات اتخاذ القرار على متحكمات STM32 كعضو في فريق NASA، مما أتاح استجابات تكتيكية ذاتية فورية أثناء مباريات السومو التنافسية.",
    technicalImpact: "Received Certificate of Appreciation for technical contribution in hardware/software integration.",
    technicalImpactAr: "الحصول على شهادة تقدير للمساهمة الفنية المتميزة في دمج العتاد والبرمجيات.",
    badge: "STM32 AI Decision Logic // NASA Team",
    badgeAr: "منطق اتخاذ القرار على STM32 // فريق NASA"
  },
  {
    id: "national-robotics-2025",
    year: "2025",
    date: "March 2025",
    title: "National Robotics Competition",
    titleAr: "المسابقة القومية للروبوتات",
    organizer: "Ministry of Youth and Sports, Egypt",
    role: "Embedded C++ Motion Control Developer",
    roleAr: "مطور برمجيات التحكم في الحركة بلغة Embedded C++",
    result: "Honored for Innovation & Problem Solving by Ministry Officials",
    resultAr: "تكريم رسمي للابتكار وحل المشكلات من مسؤولي الوزارة",
    isPersonalVsTeam: "Personal Contribution & Leadership",
    description: "Optimized Embedded C++ code for motion control on competitive robotics platforms, recognized by ministry officials for technical problem solving.",
    descriptionAr: "تحسين وضبط برمجيات Embedded C++ للتحكم في حركة الروبوتات التنافسية، ونال تكريماً من قيادات وزارة الشباب والرياضة للابتكار الهندسي.",
    technicalImpact: "Honored for innovation and engineering problem-solving by Ministry leadership.",
    technicalImpactAr: "تكريم رسمي من قيادات الوزارة تقديراً للابتكار والحلول الهندسية.",
    badge: "Ministry of Youth and Sports Commendation",
    badgeAr: "تكريم وزارة الشباب والرياضة المصرية"
  },
  {
    id: "autonomous-robot-2023",
    year: "2023",
    date: "2023",
    title: "Autonomous Robot, IEEE Robotics Competition",
    titleAr: "مسابقة الروبوت ذاتي القيادة من IEEE",
    organizer: "IEEE Student Branch",
    role: "PID Control & Hardware Developer",
    roleAr: "مطور خوارزميات التحكم PID والعتاد الصلب",
    result: "Ranked 4th of 30+ University Teams",
    resultAr: "المركز الرابع من بين أكثر من 30 فريقاً جامعياً",
    isPersonalVsTeam: "Personal Contribution & Leadership",
    description: "Designed and built an autonomous line-following robot with obstacle avoidance, implementing and tuning closed-loop PID control to secure 4th place.",
    descriptionAr: "تصميم وبناء روبوت ذاتي القيادة لتتبع المسار وتفادي العوائق مع تطبيق وضبط خوارزمية التحكم PID، محققاً المركز الرابع بين 30+ فريقاً.",
    technicalImpact: "Ranked 4th of 30+ university teams using custom PID control.",
    technicalImpactAr: "المركز الرابع بين 30+ فريقاً جامعياً باستخدام تحكم PID مخصص.",
    badge: "4th Place / 30+ Teams // PID Control",
    badgeAr: "المركز الرابع من 30+ فريقاً // تحكم PID"
  },
  {
    id: "ieee-egypt-section",
    year: "2025",
    date: "March 2025",
    title: "IEEE Egypt Section Team Recognition",
    titleAr: "تكريم وفد جامعة الزقازيق الأهلية من IEEE مصر",
    organizer: "IEEE Egypt Section",
    role: "ZNU Robotics Team Representative",
    roleAr: "ممثل فريق الروبوتات بجامعة الزقازيق الأهلية",
    result: "Official Recognition for Strong Team Performance",
    resultAr: "تكريم رسمي للأداء المتميز للفريق الجامعي",
    isPersonalVsTeam: "Community Team Award",
    description: "Represented the ZNU Robotics Team and was recognized by IEEE Egypt Section leadership for outstanding collective performance across national challenges.",
    descriptionAr: "تمثيل فريق الروبوتات بجامعة الزقازيق الأهلية والحصول على تكريم من إدارة IEEE مصر للأداء التنافسي المتميز للفريق.",
    technicalImpact: "Recognized by IEEE Egypt Section for competitive engineering performance.",
    technicalImpactAr: "تكريم معتمد من IEEE مصر للأداء الهندسي التنافسي.",
    badge: "IEEE Egypt Section Recognition",
    badgeAr: "تكريم معتمد من IEEE مصر"
  },
  {
    id: "robot-sumo-4",
    year: "2025",
    date: "2025",
    title: "Robot Sumo Competition 4",
    titleAr: "مسابقة مصارعة الروبوتات Sumo 4",
    organizer: "Egyptian Russian University – Huawei ICT Academy Branch",
    role: "Autonomous Sumo Robot Core Contributor",
    roleAr: "مساهم رئيسي في تطوير روبوت السومو الذاتي",
    result: "Certificate of Appreciation for Mechatronic Contribution",
    resultAr: "شهادة تقدير للمساهمة في تطوير الروبوت والمنافسة",
    isPersonalVsTeam: "Team Award & Lead Engineering",
    description: "Contributed to the design and development of an autonomous sumo robot for the competition's 4th edition, earning a Certificate of Appreciation.",
    descriptionAr: "المساهمة في تصميم وتطوير روبوت سومو ذاتي الحركة للنسخة الرابعة من المسابقة، والحصول على شهادة تقدير للمجهود المبذول.",
    technicalImpact: "Awarded Certificate of Appreciation for contribution to autonomous sumo robot development.",
    technicalImpactAr: "شهادة تقدير للمساهمة في تطوير روبوت السومو ذاتي القيادة.",
    badge: "Huawei ICT Academy & ERU Certificate",
    badgeAr: "شهادة أكاديمية هواوي والجامعة المصرية الروسية"
  },
  {
    id: "interactive-demo-2025",
    year: "2025",
    date: "2025",
    title: "Interactive Robotics Demo",
    titleAr: "معرض الروبوتات التفاعلي الحي",
    organizer: "Zagazig National University",
    role: "Co-Organizer & Technical Workshop Instructor",
    roleAr: "شريك في التنظيم ومدرب ورش العمل الفنية",
    result: "University's First Live Robotics Showcase Delivered",
    resultAr: "إطلاق أول معرض حي للروبوتات في تاريخ الجامعة",
    isPersonalVsTeam: "Personal Contribution & Leadership",
    description: "Co-organized the university's first live robotics showcase and delivered technical workshops on C++/Python programming and CAD for engineering students.",
    descriptionAr: "شريك في تنظيم أول معرض تفاعلي حي للروبوتات بجامعة الزقازيق الأهلية، مع تقديم ورش عمل تدريبية للطلاب في برمجة C++/Python والتصميم ثلاثي الأبعاد CAD.",
    technicalImpact: "Delivered student workshops on programming and CAD while demonstrating live robotics.",
    technicalImpactAr: "تقديم ورش عمل تدريبية لطلاب الهندسة في البرمجة والتصميم الميكانيكي.",
    badge: "First Live ZNU Robotics Showcase",
    badgeAr: "أول معرض روبوتات حي بجامعة الزقازيق الأهلية"
  },
  {
    id: "sustainable-conf-2025",
    year: "2025",
    date: "May 2025",
    title: "National Conference on Sustainable Development",
    titleAr: "المؤتمر القومي للتنمية المستدامة",
    organizer: "National Sustainable Development Committee",
    role: "Scientific Presenter & Engineering Representative",
    roleAr: "مشارك علمي وممثل هندسي",
    result: "Earned Conference Shield & Certificate of Participation",
    resultAr: "حصد درع المؤتمر وشهادة مشاركة رسمية",
    isPersonalVsTeam: "Personal Contribution & Leadership",
    description: "Presented sustainability ideas and engineering concepts aligned with Egypt Vision 2030, earning the official conference shield and participation certificate.",
    descriptionAr: "تقديم رؤى هندسية وأفكار تقنية داعمة للاستدامة متوافقة مع رؤية مصر 2030، والحصول على درع المؤتمر وشهادة المشاركة الرسمية.",
    technicalImpact: "Awarded conference shield for technical ideas aligned with Egypt Vision 2030.",
    technicalImpactAr: "نيل درع المؤتمر للأفكار التقنية المتوافقة مع رؤية مصر 2030.",
    badge: "Conference Shield // Egypt Vision 2030",
    badgeAr: "درع المؤتمر // رؤية مصر 2030"
  }
];

export const LEADERSHIP_EXPERIENCE: LeadershipItem[] = [
  {
    id: "union-president",
    title: "President, Engineering College Student Union",
    titleAr: "رئيس اتحاد طلاب كلية الهندسة",
    organization: "Zagazig National University (ZNU)",
    period: "2023 – Present",
    roleType: "Elected Executive Student Leadership",
    roleTypeAr: "قيادة طلابية تنفيذية منتخبة",
    achievements: [
      "Represented the university and Faculty of Engineering at the 9th UniEgypt Higher Education Expo, showcasing Mechatronics and Civil Engineering projects; received commendation from the Minister for innovation.",
      "Coordinate communication between students and faculty; organize student activities, technical events, and academic workshops.",
    ],
    achievementsAr: [
      "تمثيل الجامعة وكلية الهندسة في معرض UniEgypt التاسع للتعليم العالي، وعرض مشاريع الميكاترونكس والهندسة المدنية، ونيل إشادة وزير التعليم العالي بالابتكار الطلابي.",
      "تنسيق التواصل الفعال بين الطلاب وإدارة الكلية وأعضاء هيئة التدريس وتنظيم الفعاليات والأنشطة والمسابقات الهندسية.",
    ]
  },
  {
    id: "znu-robotics",
    title: "Member & Co-Founder, ZNU Robotics Community",
    titleAr: "عضو وشريك مؤسس لمجتمع الروبوتات ZNU",
    organization: "Zagazig National University",
    period: "2024 – Present",
    roleType: "Technical Community Leadership",
    roleTypeAr: "بناء مجتمع تقني وتدريب مهندسين",
    achievements: [
      "Co-founded the community and helped organize workshops, hackathons, competitions, and peer mentoring for students.",
      "Delivered practical hands-on workshops in C/C++, Python programming, and CAD modeling.",
    ],
    achievementsAr: [
      "المشاركة في تأسيس المجتمع الطلابي وتنظيم ورش العمل والهاكاثونات والمسابقات وجلسات التوجيه للطلاب.",
      "تقديم ورش عمل عملية في لغات البرمجة C وC++ وPython والتصميم ثلاثي الأبعاد CAD.",
    ]
  },
  {
    id: "build-yourself",
    title: "Supervisor, 'We Help You Build Yourself' Student Initiative",
    titleAr: "مشرف مبادرة 'نساعدك تبني نفسك' الطلابية",
    organization: "Engineering Student Union, Zagazig National University",
    period: "2026",
    roleType: "Student Initiative Supervision",
    roleTypeAr: "إشراف وتنسيق مبادرات طلابية",
    achievements: [
      "Supervised and coordinated the initiative's activities as a representative of the Engineering Student Union, ensuring smooth execution and a productive environment.",
      "Recognized with a Certificate of Appreciation for leadership, responsibility, and continuous support throughout the initiative.",
    ],
    achievementsAr: [
      "الإشراف على وتنسيق أنشطة المبادرة كممثل لاتحاد طلاب الهندسة، وضمان التنفيذ السلس وتوفير بيئة إنتاجية محفزة للمشاركين.",
      "الحصول على شهادة تقدير للقيادة والمسؤولية والدعم المستمر طوال فترة المبادرة.",
    ]
  },
  {
    id: "leaders-forum",
    title: "Representative, 2nd Leaders Forum – Canal & Sinai Universities Alliance",
    titleAr: "ممثل الجامعة في منتدى القادة الثاني – تحالف جامعات القناة وسيناء",
    organization: "'Leaders by Will' | New Ismailia National University & Suez Canal University",
    period: "Feb 2026",
    roleType: "Alliance Regional Summit Representation",
    roleTypeAr: "تمثيل إقليمي في منتديات القيادة",
    achievements: [
      "Represented Zagazig National University and the Engineering Student Union at a regional leadership forum bringing together student leaders from the Canal and Sinai universities alliance.",
    ],
    achievementsAr: [
      "تمثيل جامعة الزقازيق الأهلية واتحاد طلاب الهندسة في المنتدى القيادي الإقليمي الذي جمع قيادات اتحادات طلاب جامعات إقليم القناة وسيناء.",
    ]
  },
  {
    id: "labtronic-visit",
    title: "Industrial Visit Coordinator – Labtronic Industries",
    titleAr: "منسق الزيارة الميدانية بشركة لابتورنيك للصناعات",
    organization: "6th of October City, Egypt | Aerospace training equipment & systems",
    period: "Apr – May 2026",
    roleType: "Union Industrial-Academic Liaison",
    roleTypeAr: "ربط أكاديمي وصناعي لطلاب الهندسة",
    achievements: [
      "Represented the Engineering Student Union on an industrial visit exploring real-world aerospace and mechanical engineering applications.",
      "Toured specialized labs including Wind Tunnel, Cabin Simulator, Landing Gear Mechanism, and Aero Components force-measurement systems (velocity, lift, drag, thrust).",
      "Gained hands-on exposure to engine operation/testing systems, control, operation, and lighting systems.",
      "Helped coordinate the visit to strengthen ties between academic learning and industrial practice for engineering students.",
    ],
    achievementsAr: [
      "تمثيل اتحاد طلاب الهندسة في زيارة ميدانية متخصصة لاستكشاف التطبيقات الصناعية لأنظمة الطيران والهندسة الميكانيكية.",
      "الاطلاع على المعامل المتخصصة: نفق الرياح (Wind Tunnel)، محاكي المقصورة، منظومة الهبوط، وأجهزة قياس القوى الهوائية (الرفع، السحب، والدفع).",
      "التعرف على أنظمة تشغيل واختبار المحركات وأنظمة التحكم والتشغيل الصناعية.",
      "المساهمة في تنظيم الزيارة لتعزيز الربط بين التعليم الأكاديمي والواقع العملي لطلاب الهندسة.",
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-iti",
    title: "Embedded Systems Summer Training Program (162 Hours)",
    titleAr: "برنامج التدريب الصيفي في الأنظمة المدمجة (162 ساعة)",
    issuer: "Information Technology Institute (ITI), Smart Village, Egypt",
    date: "Jul – Aug 2025",
    hours: "162 Hours",
    category: "Embedded & Firmware",
    description: "Intensive training covering C Programming, Microcontroller Interfacing, Communication Protocols, RTOS, and Embedded Testing. Built and defended Smart Home capstone project supervised by Dr. Heba Saleh, ITI Chairman.",
    descriptionAr: "تدريب عملي مكثف شمل برمجة C، توصيل المتحكمات، بروتوكولات الاتصال، نظم التشغيل الفورية RTOS، واختبار الأنظمة المدمجة، وتصميم ومناقشة مشروع منزل ذكي بإشراف الدكتورة هبة صالح رئيس معهد ITI."
  },
  {
    id: "cert-nti",
    title: "Machine Learning Summer Training Program (120 Hours)",
    titleAr: "برنامج التدريب الصيفي في تعلم الآلة (120 ساعة)",
    issuer: "National Telecommunication Institute (NTI), in cooperation with ITIDA",
    date: "Jul – Aug 2025",
    hours: "120 Hours (90 Tech + 30 Freelance)",
    score: "89% Final Score",
    category: "AI & Data Science",
    description: "Completed intensive summer training covering Machine Learning fundamentals and applications combined with freelancing and professional skills. Achieved a final score of 89%.",
    descriptionAr: "إتمام برنامج تدريبي صيفي مكثف غطى أساسيات وتطبيقات تعلم الآلة مع مهارات العمل الحر والتطوير المهني، محققاً درجة نهائية 89%."
  },
  {
    id: "cert-obour",
    title: "Beginner Technical Training, Tetra Pak A3-Speed Machines (120 Hours)",
    titleAr: "تدريب فني على ماكينات تترا باك A3-Speed (120 ساعة)",
    issuer: "Obour Land for Food Industries – Training Center",
    date: "Aug – Sep 2025",
    hours: "120 Hours",
    category: "CAD & Mechanical",
    description: "Practical training in packaging technology and aseptic processing, machine utilities (power, steam, air, H2O2), splicing, tube forming, sterilization, jaw mechanisms, and large-scale factory automation.",
    descriptionAr: "تدريب عملي على تكنولوجيا التعبئة والتغليف والمعالجة المعقمة، مرافق الماكينات (الكهرباء، البخار، الهواء المضغوط، H2O2)، آليات التشكيل، والتحكم الآلي في خطوط الإنتاج."
  },
  {
    id: "cert-solidworks-2b",
    title: "SolidWorks Workshop",
    titleAr: "ورشة عمل متقدمة في SolidWorks",
    issuer: "2B Digital",
    date: "March 2026",
    category: "CAD & Mechanical",
    description: "Mechanical 3D part modeling, assemblies, and design verification.",
    descriptionAr: "النمذجة ثلاثية الأبعاد للأجزاء الميكانيكية، التجميعات، والتحقق من التصميمات الهندسية."
  },
  {
    id: "cert-znu-term1",
    title: "Certificate of Achievement, End-of-Term-1 Student Activities",
    titleAr: "شهادة إنجاز الأنشطة الطلابية لنهاية الفصل الدراسي الأول",
    issuer: "Zagazig National University",
    date: "2026",
    category: "Leadership & Honors",
    description: "Awarded by Zagazig National University for distinguished student union leadership and activity organization.",
    descriptionAr: "ممنوحة من جامعة الزقازيق الأهلية تقديراً للتميز في قيادة الأنشطة الطلابية والعمل المؤسسي."
  },
  {
    id: "cert-error-sumo",
    title: "Error Competition 2025 Certificate of Appreciation (Sumo Robot)",
    titleAr: "شهادة تقدير مسابقة إيرور 2025 لروبوتات السومو",
    issuer: "IEEE HTI Student Branch",
    date: "October 2025",
    category: "Embedded & Firmware",
    description: "Awarded for technical contribution in robot design, programming, and control systems for autonomous sumo robots.",
    descriptionAr: "شهادة تقدير للمساهمة الفنية المتميزة في تصميم وبرمجة ونظم تحكم روبوتات السومو ذاتية القيادة."
  },
  {
    id: "cert-maharatech",
    title: "C Programming: From Basics to Mastery",
    titleAr: "برمجة C: من الأساسيات إلى الاحتراف",
    issuer: "MaharaTech (ITI Platform)",
    date: "August 2025",
    category: "Embedded & Firmware",
    description: "Core algorithms, pointers, memory allocation, and data structures in C.",
    descriptionAr: "الخوارزميات الأساسية، المؤشرات، إدارة الذاكرة، وهياكل البيانات بلغة C."
  },
  {
    id: "cert-dassault",
    title: "3DEXPERIENCE SOLIDWORKS Essentials Seminar",
    titleAr: "سيمينار أساسيات SolidWorks منصة 3DEXPERIENCE",
    issuer: "Dassault Systèmes / European Universities in Egypt (EUE)",
    date: "2025",
    category: "CAD & Mechanical",
    description: "Cloud-connected collaborative CAD modeling and design management.",
    descriptionAr: "التصميم السحابي التشاركي وإدارة النماذج الهندسية ثلاثية الأبعاد."
  },
  {
    id: "cert-bue-ai",
    title: "Artificial Intelligence",
    titleAr: "شهادة الذكاء الاصطناعي",
    issuer: "The British University in Egypt (BUE)",
    date: "2023",
    category: "AI & Data Science",
    description: "Foundations of AI methodologies, heuristic search, and pattern analysis.",
    descriptionAr: "أسس ومناهج الذكاء الاصطناعي، خوارزميات البحث، وتحليل الأنماط."
  },
  {
    id: "cert-zewail-ai",
    title: "Introduction to AI & Applications",
    titleAr: "مقدمة في الذكاء الاصطناعي وتطبيقاته",
    issuer: "Zewail City of Science and Technology",
    date: "2023",
    category: "AI & Data Science",
    description: "Machine learning workflows and computational pattern recognition fundamentals.",
    descriptionAr: "أساسيات خوارزميات التعلم الآلي وتطبيقاتها في معالجة البيانات."
  },
  {
    id: "cert-udemy-sw",
    title: "SolidWorks Associate",
    titleAr: "شهادة معتمد SolidWorks Associate",
    issuer: "Udemy Credential",
    date: "2022",
    category: "CAD & Mechanical",
    description: "Foundational mechanical modeling, sketches, and 3D features.",
    descriptionAr: "الرسم الهندسي ثلاثي الأبعاد وإعداد النماذج والمجسمات الميكانيكية."
  },
  {
    id: "cert-prog-data",
    title: "Programming & Data Analysis",
    titleAr: "البرمجة وتحليل البيانات",
    issuer: "Coursera and Satr",
    date: "2022 – 2024",
    category: "AI & Data Science",
    description: "Continuous coursework in Python programming and data handling.",
    descriptionAr: "مسارات تدريبية في لغة بايثون والتعامل مع مجموعات البيانات وتحليلها."
  }
];

export const ENTREPRENEURIAL_EXPERIENCE: EntrepreneurialItem[] = [
  {
    id: "ctrl-store",
    role: "Founder & Manager",
    roleAr: "المؤسس والمدير التنفيذي",
    entity: "CTRL Online Store",
    period: "2024 – Present",
    tagline: "E-commerce brand selling electronics and accessories (Wuilt platform)",
    taglineAr: "علامة تجارية للتجارة الإلكترونية لبيع الإلكترونيات والإكسسوارات",
    points: [
      "Manage product listings, SEO optimization, and content creation.",
      "Lead social media marketing and advertising strategy across TikTok, Facebook, and Instagram.",
    ],
    pointsAr: [
      "إدارة قوائم المنتجات، تحسين محركات البحث SEO، وصناعة المحتوى الرقمي.",
      "قيادة استراتيجيات التسويق والإعلانات الممولة عبر تيك توك، فيسبوك، وإنستغرام.",
    ],
    metrics: "E-Commerce Brand Management",
    metricsAr: "إدارة متجر إلكتروني متكامل"
  },
  {
    id: "accessory-stores",
    role: "Founder & E-Commerce Manager",
    roleAr: "مؤسس ومدير متاجر إلكترونية",
    entity: "Electronic Accessory Stores",
    period: "2019 – 2022",
    tagline: "Multi-Store E-Commerce & Sourcing Management",
    taglineAr: "إدارة وتوسيع المتاجر الرقمية وسلاسل الإمداد",
    points: [
      "Launched and ran 3 Shopify/WooCommerce stores; managed sourcing, fulfillment, and customer support.",
      "Generated consistent sales across multiple product cycles.",
    ],
    pointsAr: [
      "إطلاق وإدارة 3 متاجر إلكترونية عبر منصتي Shopify وWooCommerce مع إدارة التوريد والشحن وخدمة العملاء.",
      "تحقيق مبيعات مستمرة ومنتظمة عبر دورات منتجات متعددة.",
    ],
    metrics: "3 E-Commerce Stores Managed",
    metricsAr: "إدارة 3 متاجر رقمية بنجاح"
  },
  {
    id: "media-buyer",
    role: "Digital Marketer & Media Buyer (Freelance)",
    roleAr: "مسوق رقمي ومسؤول إعلانات ممولة (عمل حر)",
    entity: "Independent Performance Marketing",
    period: "2019 – 2022",
    tagline: "Paid Advertising & Return on Ad Spend (ROAS) Optimization",
    taglineAr: "إدارة الحملات الإعلانية الممولة وتحسين العائد الإعلاني ROAS",
    points: [
      "Created and optimized paid ads on Facebook and Instagram.",
      "Improved ROAS through targeting, A/B testing, and funnel analysis.",
    ],
    pointsAr: [
      "إنشاء وإدارة الحملات الإعلانية الممولة على منصتي فيسبوك وإنستغرام.",
      "تحسين العائد على الإنفاق الإعلاني (ROAS) من خلال الاستهداف الدقيق واختبارات A/B وتحليل مسار التحويل.",
    ],
    metrics: "A/B Testing & Funnel Analysis",
    metricsAr: "تحسين التحويل واختبارات A/B"
  },
  {
    id: "graphic-designer",
    role: "Graphic Designer (Freelance)",
    roleAr: "مصمم جرافيك (عمل حر)",
    entity: "Independent Creative Design",
    period: "2019 – 2022",
    tagline: "Brand Identity, Commercial Visuals & Social Creatives",
    taglineAr: "الهوية البصرية، التصاميم التجارية، والمحتوى الإعلاني",
    points: [
      "Designed social-media visuals and ad creatives using Photoshop and Canva.",
      "Maintained brand consistency for small businesses.",
    ],
    pointsAr: [
      "تصميم المنشورات والإعلانات الإبداعية باستخدام Photoshop وCanva.",
      "الحفاظ على هوية بصرية موحدة ومتسقة للأنشطة التجارية الناشئة.",
    ],
    metrics: "Commercial Brand Creatives",
    metricsAr: "تصاميم تجارية متكاملة"
  },
  {
    id: "noon-amazon",
    role: "Product Seller & Affiliate Marketer",
    roleAr: "بائع ومسوق بالعمولة على نون وأمازون مصر",
    entity: "Noon & Amazon Egypt Platforms",
    period: "2019 – 2022",
    tagline: "E-Commerce Marketplaces & FBA Workflows",
    taglineAr: "البيع عبر المنصات الرقمية الكبرى ونظام FBA",
    points: [
      "Listed trending tech/accessory products; applied SEO and FBA workflows.",
      "Analyzed customer behavior and optimized product listings.",
    ],
    pointsAr: [
      "إدراج المنتجات التكنولوجية والإكسسوارات الرائجة مع تطبيق قواعد SEO ونظام FBA للشحن.",
      "تحليل سلوك المتسوقين وتحسين صفحات المنتجات لزيادة المبيعات.",
    ],
    metrics: "Marketplace Listing & FBA Workflows",
    metricsAr: "إدارة المبيعات بمنصات التجارة الكبرى"
  }
];

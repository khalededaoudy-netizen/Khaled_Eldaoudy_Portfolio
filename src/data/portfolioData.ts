export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  organization: string;
  description: string;
  fullOverview: string;
  highlights: string[];
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
  organizer: string;
  role: string;
  result: string;
  isPersonalVsTeam: 'Personal Contribution & Leadership' | 'Team Award & Lead Engineering' | 'Community Team Award';
  description: string;
  technicalImpact: string;
  badge: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  hours?: string;
  score?: string;
  category: 'Embedded & Firmware' | 'AI & Data Science' | 'CAD & Mechanical' | 'Leadership & Honors';
  description: string;
}

export interface LeadershipItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  roleType: string;
  achievements: string[];
}

export interface EntrepreneurialItem {
  id: string;
  role: string;
  entity: string;
  period: string;
  tagline: string;
  points: string[];
  metrics: string;
}

export const PERSONAL_INFO = {
  name: "Khaled Hamdy Eldaoudy",
  shortName: "Khaled Eldaoudy",
  monogram: "KE",
  title: "Mechatronics Engineering Student | Embedded Systems & Robotics Developer",
  status: "Operational // Available for Graduation Projects, Robotics R&D & Embedded Internships",
  university: "Zagazig National University (ZNU), Egypt",
  degree: "Bachelor of Mechatronics Engineering (Credit-Hour System)",
  yearOfStudy: "Year 4 (Senior)",
  expectedGraduation: "2026",
  location: "10th of Ramadan City, Sharqia, Egypt",
  coordinates: "30.2981° N, 31.7416° E",
  email: "KhaledEdaoudy@gmail.com",
  phone: "+20 102 560 2440",
  linkedin: "https://linkedin.com/in/khaledeldaoudy",
  github: "https://github.com/khaledeldaoudy",
  cvFile: "/Khaled_CV.pdf",
  stats: [
    { label: "Intensive Training", value: "400+", unit: "Hours", detail: "ITI, NTI, Obour Land" },
    { label: "Competitive Projects", value: "10+", unit: "Systems", detail: "Robotics, MCU, Mechatronics" },
    { label: "Podium Recognition", value: "2nd", unit: "Place", detail: "RoboSoccer & NASA Sumo" },
    { label: "Academic Standing", value: "4th", unit: "Year", detail: "Zagazig National Univ." },
  ],
  bioIntro: "A forward-thinking Mechatronics Engineer combining real-time embedded firmware, closed-loop control, precision mechanical design, and proven team leadership. Currently serving as President of the Engineering College Student Union at Zagazig National University, with 400+ hours of advanced training across ITI and NTI.",
  engineeringPhilosophy: "Hardware is only as powerful as the deterministic logic commanding it. My work bridges bare-metal C microcontroller drivers, kinematic mechanical assemblies, and high-frequency sensor fusion into resilient cyber-physical systems designed for competition and industry.",
};

export const SKILL_CATEGORIES = [
  {
    id: "embedded",
    name: "Embedded Systems & Firmware",
    shortName: "Embedded",
    headline: "Deterministic Bare-Metal & RTOS Architecture",
    description: "Developing robust, low-latency firmware on ARM Cortex-M and 8-bit microcontrollers with hardware timer interrupts, communication busses, and memory optimization.",
    skills: [
      { name: "STM32 (ARM Cortex-M)", level: "Advanced", detail: "HAL, LL, Registers, Timers, DMA" },
      { name: "ATmega32 / AVR", level: "Advanced", detail: "AVR-GCC, Bare-Metal C, EEPROM, ADC" },
      { name: "ESP32", level: "Proficient", detail: "FreeRTOS, Wi-Fi, BLE, Dual-Core Tasking" },
      { name: "Arduino Architecture", level: "Expert", detail: "Rapid Prototyping, Sensor Integration" },
      { name: "Embedded C / C++", level: "Advanced", detail: "Bit manipulation, State Machines, ISRs" },
      { name: "Protocols: UART / SPI / I2C", level: "Advanced", detail: "Hardware telemetry, multi-node bus" },
      { name: "Proteus VSM Simulation", level: "Advanced", detail: "Circuit validation before fabrication" },
      { name: "Microcontroller Interfacing", level: "Advanced", detail: "PWM drivers, optocouplers, relay arrays" },
    ],
    telemetry: {
      clockSpeeds: "Up to 168 MHz (STM32)",
      protocols: "UART, I2C, SPI, ADC, PWM",
      compilers: "AVR-GCC, ARM-GCC, Keil, Arduino",
    }
  },
  {
    id: "control",
    name: "Control Systems & Simulation",
    shortName: "Control",
    headline: "Closed-Loop Feedback & Kinematics",
    description: "Tuning continuous and discrete control algorithms to eliminate steady-state error, damp oscillations, and ensure deterministic dynamic response in robotic joints.",
    skills: [
      { name: "PID Control Tuning", level: "Advanced", detail: "Proportional-Integral-Derivative, Anti-Windup" },
      { name: "MATLAB & Simulink", level: "Proficient", detail: "Dynamic systems modeling, step response" },
      { name: "Motion Profiling", level: "Advanced", detail: "S-curve acceleration, velocity ramps" },
      { name: "Kinematics Analysis", level: "Proficient", detail: "Forward & Inverse kinematic solvers" },
      { name: "State Estimation", level: "Proficient", detail: "Low-pass digital filtering & noise reduction" },
    ],
    telemetry: {
      responseType: "Critically Damped",
      tools: "MATLAB 2024, Simulink, C++ Math",
      applications: "Line Follower, Sumo Drive, Arm Joints",
    }
  },
  {
    id: "robotics",
    name: "Robotics & Autonomous Systems",
    shortName: "Robotics",
    headline: "Sensor Fusion & Competitive Sumo Engineering",
    description: "Designing end-to-end mechatronic robots for high-stakes national competitions, including autonomous obstacle clearance, line tracking, and combat sumo decision logic.",
    skills: [
      { name: "Autonomous Sumo Robots", level: "Advanced", detail: "National qualification for Japan championship" },
      { name: "Multi-DOF Robotic Arms", level: "Advanced", detail: "Pick-and-place servo actuation" },
      { name: "Sensor Integration", level: "Expert", detail: "Ultrasonic, IR Arrays, SW-420, LM35, LDR" },
      { name: "Autonomous Navigation", level: "Advanced", detail: "Line following, obstacle avoidance" },
      { name: "Motor Actuation & H-Bridges", level: "Advanced", detail: "L298N, MOSFET drivers, DC gear motors" },
      { name: "Tactical Decision Logic", level: "Advanced", detail: "Real-time state machines for robot combat" },
    ],
    telemetry: {
      sumoClass: "3 Autonomous Units Built",
      competitions: "IEEE RoboSoccer, Sumo 3, Sumo 4",
      sensors: "IR, Ultrasonic, Seismic, Optical",
    }
  },
  {
    id: "programming",
    name: "Programming & Data Science",
    shortName: "Data & ML",
    headline: "Analytical Python & Machine Learning Pipelines",
    description: "Utilizing modern Python computational stacks to analyze experimental data, train predictive models, and optimize hardware-generated datasets.",
    skills: [
      { name: "Python", level: "Advanced", detail: "Data structures, OOP, automation scripts" },
      { name: "Machine Learning (NTI 89%)", level: "Proficient", detail: "Classification, regression, model evaluation" },
      { name: "NumPy & Pandas", level: "Proficient", detail: "Matrix operations, telemetry parsing" },
      { name: "Matplotlib & Seaborn", level: "Proficient", detail: "Engineering data visualization" },
      { name: "Data Analysis", level: "Proficient", detail: "Sensor calibration and statistical trends" },
    ],
    telemetry: {
      ntiTraining: "120 Hours (Grade: 89%)",
      libraries: "NumPy, Pandas, Matplotlib, Scikit-learn",
      focus: "Hardware Telemetry Analysis",
    }
  },
  {
    id: "cad",
    name: "CAD & 3D Mechanical Design",
    shortName: "CAD & 3D",
    headline: "Precision Modeling, Assemblies & Kinematics",
    description: "Transforming mechatronic concepts into manufacturable 3D CAD assemblies using SolidWorks, verifying clearance, centers of mass, and stress points.",
    skills: [
      { name: "SolidWorks 3D Modeling", level: "Advanced", detail: "Complex parametric parts, sheet metal" },
      { name: "Assembly & Interference Check", level: "Advanced", detail: "Mating, tolerances, multi-body kinematics" },
      { name: "3DEXPERIENCE Essentials", level: "Certified", detail: "Dassault Systèmes European seminar" },
      { name: "Mechanical Cam Mechanisms", level: "Advanced", detail: "Rotary-to-linear seismic oscillation" },
      { name: "Motion & Stress Simulation", level: "Proficient", detail: "Structural deflection, torque requirements" },
    ],
    telemetry: {
      certifications: "SolidWorks 2B Digital 2026, Dassault 2025",
      deliverables: "Arm Linkages, Simulator Cams, Enclosures",
      tolerances: "Sub-millimeter 3D Print / CNC Specs",
    }
  },
  {
    id: "industrial",
    name: "Industrial Systems & Automation",
    shortName: "Industrial",
    headline: "High-Speed Packaging & Aerospace Labs",
    description: "Hands-on industrial exposure to heavy manufacturing lines, high-speed automated packaging, and aerospace wind tunnel test facilities.",
    skills: [
      { name: "Tetra Pak A3-Speed Systems", level: "Trained (120h)", detail: "Aseptic filling, automatic splicing, jaws" },
      { name: "Wind Tunnel Testing", level: "Field Exposed", detail: "Lift/drag force measurement, aero balance" },
      { name: "Cabin Simulator & Landing Gear", level: "Field Exposed", detail: "Labtronic Aerospace engineering rigs" },
      { name: "Factory Automation Workflows", level: "Experienced", detail: "Utilities: steam, pneumatic air, H2O2" },
    ],
    telemetry: {
      facilities: "Obour Land Food Ind., Labtronic Aerospace",
      hours: "120 Hours Tetra Pak Certified",
      aerospace: "Force Balance, Engine Operation Testing",
    }
  }
];

export const PROJECTS: Project[] = [
  {
    id: "smart-home-iti",
    number: "01",
    title: "Smart Home Control System",
    subtitle: "ITI Embedded Systems Capstone Project (Team of 3)",
    category: "Embedded Firmware & Automation",
    year: "2025",
    organization: "Information Technology Institute (ITI), Smart Village",
    description: "An industrial-grade home automation and security infrastructure engineered around the ATmega32 MCU, featuring dual-channel Bluetooth UART wireless telemetry, ADC multi-sensor monitoring, and multi-tier cryptographic passcode authentication.",
    fullOverview: "Designed, simulated, and built during the intensive 162-hour ITI Embedded Systems Summer Program under the supervision of Dr. Heba Saleh. The system provides seamless dual-mode control: autonomous environment-responsive actuation and manual override via smartphone Bluetooth terminal. Designed with strict bare-metal C register drivers to ensure zero-jitter response and high system reliability.",
    highlights: [
      "Hardware-validated in Proteus VSM before physical PCB integration, ensuring signal integrity across high-current relay coils.",
      "Custom 4x4 matrix keypad scanning routine with non-blocking debounce and interactive 16x2 LCD UI feedback.",
      "ADC multi-channel multiplexing reading LM35 thermal sensor (with voltage-to-celsius calibration) and Light Dependent Resistor (LDR).",
      "PWM timer-driven motor speed throttling for ventilation fans and dimmable atmospheric lighting.",
      "UART interrupt-driven HC-05 Bluetooth transceiver protocol with command packet parsing.",
    ],
    hardwareSpecs: {
      mcu: "ATmega32 (AVR 8-Bit Architecture)",
      sensors: ["LM35 Precision Centigrade Temperature Sensor", "Analog LDR Light Sensor", "Matrix Keypad 4x4"],
      actuators: ["Electromechanical 5V Relay Array", "DC Fan Motor (PWM)", "16x2 Character LCD Display", "Status LEDs"],
      protocols: ["UART (HC-05 Bluetooth @ 9600 Baud)", "Analog ADC Multiplexing", "Timer0 / Timer1 PWM"],
      simulation: "Proteus VSM + AVR-GCC Compiler Toolchain"
    },
    schematicDiagram: {
      inputs: ["LM35 (ADC Ch0)", "LDR (ADC Ch1)", "Keypad 4x4 (Port C)", "HC-05 RX (Port D0)"],
      processing: ["ATmega32 @ 16MHz", "AVR-GCC Bare-Metal", "Security State Machine", "ADC ISR"],
      outputs: ["16x2 LCD (Port A/B)", "Relay Array (Port B)", "PWM Motor (OC0)", "HC-05 TX (Port D1)"],
      communication: ["UART 9600 8N1", "Mobile Terminal App"]
    },
    tags: ["ATmega32", "AVR-GCC", "Bare-Metal C", "Proteus VSM", "UART", "ADC", "PWM", "ITI Capstone"],
    badgeText: "ITI Capstone 2025 // Defended with Distinction"
  },
  {
    id: "robotic-arm",
    number: "02",
    title: "Multi-DOF Precision Robotic Arm",
    subtitle: "Pick-and-Place Kinematic Manipulation System",
    category: "Robotics & Kinematics",
    year: "2024–2025",
    organization: "Zagazig National University Mechatronics Lab",
    description: "An articulated multi-axis robotic arm engineered for industrial sorting and pick-and-place automation, implementing forward kinematic trajectory planning and closed-loop servo synchronization.",
    fullOverview: "Built to demonstrate physical mechatronic synergy between structural CAD linkages and deterministic actuator control. The mechanical assembly utilizes lightweight, high-rigidity structural elements driven by high-torque metal-gear servo motors. The firmware maps Cartesian target points into joint angle coordinate vectors, executing smooth acceleration curves to minimize mechanical backlash and overshoot during payload transport.",
    highlights: [
      "Engineered multi-axis mechanical linkages in CAD with calculated torque-to-weight ratios to prevent joint stalling.",
      "Synchronized multi-channel PWM signal generation with pulse-width resolution of 1µs for micro-positioning accuracy.",
      "Custom parallel-jaw gripper mechanism capable of compliant object grasping without deformation.",
      "Integrated manual teach-pendant mode alongside autonomous cyclic pick-and-place routines.",
    ],
    hardwareSpecs: {
      mcu: "Arduino Mega / UNO Controller",
      sensors: ["Joint Position Encoders / Feedback Potentiometers", "Limit Switches"],
      actuators: ["MG996R Metal-Gear High-Torque Servos", "SG90 Micro Servos (End-Effector Gripper)"],
      protocols: ["Multi-Channel PWM (50Hz servo refresh)", "Serial Telemetry Interface"],
      simulation: "SolidWorks Motion Analysis & Kinematic Simulation"
    },
    schematicDiagram: {
      inputs: ["Analog Joystick Array", "Serial Position Commands", "Joint Limits"],
      processing: ["Kinematic Vector Solver", "Joint Interpolator", "PWM Generator"],
      outputs: ["Base Rotation Servo", "Shoulder Link Servo", "Elbow Link Servo", "Gripper Actuator"],
      communication: ["USB Serial Telemetry", "Hardware PWM Bus"]
    },
    tags: ["Robotics", "Servo Control", "SolidWorks", "Kinematics", "Motion Control", "Arduino", "Pick & Place"],
    badgeText: "Precision Manipulation // Kinematic Control"
  },
  {
    id: "earthquake-simulation",
    number: "03",
    title: "Earthquake Simulation House",
    subtitle: "Seismic Dynamic Structural Test Rig & Emergency Fail-Safe",
    category: "Civil Mechatronics & Control",
    year: "2024",
    organization: "Academic Research & Educational Demonstration",
    description: "A precision mechatronic test bench simulating variable seismic Richter vibrations on scale architectural structures, paired with closed-loop SW-420 shock detection and autonomous emergency exit unlocking.",
    fullOverview: "Developed as an interdisciplinary tool bridging Mechatronics, Structural Dynamics, and Emergency Response Engineering. The system utilizes a GA25-370 high-torque DC gear motor driving a custom-designed eccentric cam mechanism to convert rotary power into multi-amplitude lateral ground tremors. Structural acceleration is continuously quantified by SW-420 seismic sensors, triggering automated building safety mechanisms upon exceeding structural thresholds.",
    highlights: [
      "Custom eccentric cam mechanism engineered in SolidWorks to generate realistic harmonic ground oscillation.",
      "Potentiometer-driven PWM frequency regulation through an L298N dual H-bridge motor driver to simulate Richter levels 3.0 through 8.5.",
      "SW-420 high-sensitivity piezo-mechanical vibration sensor connected to external hardware interrupt for immediate event logging.",
      "Autonomous emergency safety routine: instantaneously unlocks SG90 servo-actuated egress doors and flashes high-luminosity hazard strobes upon severe tremor.",
    ],
    hardwareSpecs: {
      mcu: "Arduino UNO (ATmega328P)",
      sensors: ["SW-420 Piezoelectric Vibration Sensor", "Analog Precision Potentiometer"],
      actuators: ["GA25-370 High-Torque DC Gear Motor", "SG90 Servo Emergency Door Lock", "High-Intensity Hazard LEDs", "Acoustic Siren"],
      protocols: ["Hardware Interrupts (INT0)", "High-Power PWM Speed Control", "GPIO Actuation"],
      simulation: "Mechanical Cam Motion Profile in SolidWorks"
    },
    schematicDiagram: {
      inputs: ["Potentiometer (ADC0)", "SW-420 Shock Sensor (Pin 2 / INT0)"],
      processing: ["Richter Speed Regulator", "Threshold Shock Comparator", "Fail-Safe State Machine"],
      outputs: ["L298N Motor Driver (IN1/IN2/ENA)", "SG90 Safety Door", "Alert Strobe", "Buzzer"],
      communication: ["Real-Time Serial Seismic Telemetry"]
    },
    tags: ["Earthquake Simulator", "L298N", "GA25-370 DC Motor", "SW-420", "Cam Mechanism", "SolidWorks", "Arduino"],
    badgeText: "Seismic Dynamics // Autonomous Safety"
  },
  {
    id: "vibration-alarm",
    number: "04",
    title: "Vibration Alarm & Smart Safety System",
    subtitle: "Real-Time Structural Intrusion & Hazard Interception Unit",
    category: "Embedded Security & Industrial Safety",
    year: "2024",
    organization: "Zagazig National University Prototyping",
    description: "A high-reliability active monitoring unit combining micro-vibration threshold detection, digital signal filtering, acoustic-optical alarms, and electro-mechanical door barricading.",
    fullOverview: "Engineered to safeguard sensitive physical facilities and industrial enclosures against unauthorized physical breaches, seismic shifts, and heavy machinery unbalances. Features an SW-420 piezoelectric sensor with adjustable threshold hysteresis to eliminate false environmental triggers, triggering a rapid-response defensive sequence with loud acoustic alarm, optical strobe, and a servo-driven security latch.",
    highlights: [
      "Digital debounce and sliding time-window algorithm to distinguish benign acoustic vibrations from sustained mechanical impacts.",
      "Interrupt-driven firmware architecture yielding sub-millisecond reaction latency from physical strike to alarm trigger.",
      "Integrated mechanical deadbolt driven by an SG90 servo motor for autonomous physical lockdown.",
      "Expandable modular architecture designed to interface with industrial SCADA systems and remote telemetry links.",
    ],
    hardwareSpecs: {
      mcu: "Arduino UNO / Nano",
      sensors: ["SW-420 Vibration Detection Module with LM393 Comparator"],
      actuators: ["SG90 Micro Servo (Lockdown Latch)", "Piezo Acoustic Buzzer", "Dual Red/Green Status LEDs"],
      protocols: ["Digital Interrupt Handling", "Servo Position PWM"],
      simulation: "Circuit Schematics & Firmware State Verification"
    },
    schematicDiagram: {
      inputs: ["SW-420 DO (Pin 2 / INT0)", "Arm/Disarm Toggle"],
      processing: ["Vibration Frequency Evaluator", "Lockdown State Controller"],
      outputs: ["Piezo Alarm (PWM)", "Emergency Servo Latch", "Status Strobe Array"],
      communication: ["Serial Diagnostic Log"]
    },
    tags: ["SW-420 Sensor", "Security System", "Arduino", "Embedded C++", "Servo Actuation", "Industrial Safety"],
    badgeText: "Active Asset Protection // Sub-MS Reaction"
  }
];

export const COMPETITIONS: Competition[] = [
  {
    id: "robosoccer-2025",
    year: "2025",
    date: "August 2025",
    title: "IEEE RoboSoccer Competition",
    organizer: "IEEE HTI Student Branch (Higher Technological Institute)",
    role: "Lead Control & Firmware Engineer — Team ZNUS & Team ZUNBots",
    result: "2nd Place (Team ZNUS) & 5th Place (Team ZUNBots)",
    isPersonalVsTeam: "Team Award & Lead Engineering",
    description: "Competed against premier robotics squads from Egypt's top engineering universities. Spearheaded control system tuning, motor drive optimization, and wireless maneuvering telemetry to achieve exceptional field agility and precision ball trajectory strikes.",
    technicalImpact: "Honored with a prestigious Certificate of Recognition officially signed by Egypt's Prime Minister, Dr. Mostafa Madbouly, marking national-level government recognition for engineering excellence.",
    badge: "2nd Place Nationally // PM Signed Certificate"
  },
  {
    id: "error-competition-2025",
    year: "2025",
    date: "October 2025",
    title: "Error Competition 2025 – Autonomous Sumo Robot (2nd Edition)",
    organizer: "IEEE HTI Student Branch",
    role: "Robotics Designer & Embedded Firmware Developer — Team ZNUS",
    result: "Represented ZNU // NASA Team 2nd Place out of 20+ Universities",
    isPersonalVsTeam: "Personal Contribution & Leadership",
    description: "Designed, engineered, and programmed three autonomous combat sumo robots representing Zagazig National University in Egypt's official national qualifying competition for the International Sumo Robot Championship in Japan.",
    technicalImpact: "Awarded a Certificate of Appreciation for outstanding individual technical contribution in robot CAD design, sensor fusion, tactical edge-detection interrupts, and dynamic motor torque control.",
    badge: "Japan Championship Qualifier // 3 Autonomous Robots"
  },
  {
    id: "robot-sumo-3",
    year: "2025",
    date: "February 2025",
    title: "Robot Sumo 3 Championship",
    organizer: "Egyptian Russian University (ERU)",
    role: "Embedded Systems & AI Decision Logic Integrator — NASA Team",
    result: "Award of Engineering Excellence & Certificate of Appreciation",
    isPersonalVsTeam: "Team Award & Lead Engineering",
    description: "Engineered real-time tactical decision logic executed on an STM32 32-bit ARM Cortex-M microcontroller. Orchestrated rapid infrared optical ring tracking and ultrasonic opponent positioning algorithms.",
    technicalImpact: "Achieved sub-5ms combat reaction times, enabling autonomous flanking tactics and counter-push motor torque bursts in the sumo dohyo arena.",
    badge: "STM32 AI Decision Logic // High-Speed Arena Combat"
  },
  {
    id: "national-robotics-2025",
    year: "2025",
    date: "March 2025",
    title: "National Robotics Competition",
    organizer: "Egyptian Ministry of Youth and Sports",
    role: "Embedded C++ Motion Control Developer",
    result: "National Innovation Honor by Ministry Officials",
    isPersonalVsTeam: "Personal Contribution & Leadership",
    description: "Formulated and optimized low-level Embedded C++ motion control algorithms for competitive mechatronic platforms, eliminating wheel slippage and maximizing torque transfer across dynamic arena surfaces.",
    technicalImpact: "Personally commended by Ministry leadership for innovative algorithmic problem solving and resilient firmware architecture.",
    badge: "Ministry of Youth & Sports // Official Commendation"
  },
  {
    id: "autonomous-robot-2023",
    year: "2023",
    date: "2023",
    title: "IEEE Autonomous Line-Following & Obstacle Robot Competition",
    organizer: "IEEE Student Branch",
    role: "Hardware & Closed-Loop Control Engineer",
    result: "4th Place out of 30+ University Teams",
    isPersonalVsTeam: "Personal Contribution & Leadership",
    description: "Designed, fabricated, and programmed an autonomous ground vehicle navigating high-speed complex trajectories with active dynamic obstacle avoidance.",
    technicalImpact: "Implemented a custom discrete PID control algorithm reading an array of optical reflectance sensors to maintain smooth centerline tracking at high vehicle speeds.",
    badge: "4th / 30+ Teams // Custom PID Control"
  },
  {
    id: "ieee-egypt-section",
    year: "2025",
    date: "March 2025",
    title: "IEEE Egypt Section Official Team Recognition",
    organizer: "IEEE Egypt Section",
    role: "ZNU Robotics Team Representative",
    result: "Official Section Commendation",
    isPersonalVsTeam: "Community Team Award",
    description: "Recognized by IEEE Egypt Section leadership for sustained high-level performance, ethical sportsmanship, and technical rigor in national engineering competitions.",
    technicalImpact: "Represented Zagazig National University among the distinguished university delegations across Egypt.",
    badge: "IEEE Egypt Section // Official Honor"
  },
  {
    id: "robot-sumo-4",
    year: "2025",
    date: "2025",
    title: "Robot Sumo Competition 4th Edition",
    organizer: "Egyptian Russian University – Huawei ICT Academy Branch",
    role: "Autonomous Sumo Robot Core Contributor",
    result: "Certificate of Appreciation for Mechatronic Contribution",
    isPersonalVsTeam: "Team Award & Lead Engineering",
    description: "Contributed to mechanical structural reinforcement and sensor arbitration routines for an upgraded autonomous sumo chassis.",
    technicalImpact: "Implemented improved tactile bumper interrupt routines and high-grip polyurethane silicone tire molding.",
    badge: "ERU & Huawei ICT Academy // Combat Mechatronics"
  },
  {
    id: "sustainable-conf-2025",
    year: "2025",
    date: "May 2025",
    title: "National Conference on Sustainable Development",
    organizer: "National Sustainable Development Committee",
    role: "Scientific Presenter & Engineering Representative",
    result: "Conference Shield & Certificate of Participation",
    isPersonalVsTeam: "Personal Contribution & Leadership",
    description: "Presented research-backed engineering concepts focusing on automated renewable energy harvesting, smart city mechatronics, and environmental sensor networks aligned with Egypt Vision 2030.",
    technicalImpact: "Awarded the official Conference Shield for innovative green engineering proposals.",
    badge: "Conference Shield // Egypt Vision 2030"
  }
];

export const LEADERSHIP_EXPERIENCE: LeadershipItem[] = [
  {
    id: "union-president",
    title: "President, Engineering College Student Union",
    organization: "Zagazig National University (ZNU)",
    period: "2023 – Present",
    roleType: "Executive Student Leadership",
    achievements: [
      "Represented the Faculty of Engineering at the 9th UniEgypt Higher Education Expo, presenting mechatronics and civil engineering prototypes; received personal commendation from the Minister of Higher Education for student innovation.",
      "Lead a multifaceted student executive board, serving as the official liaison between faculty deans, department chairs, and 1,000+ engineering undergraduates.",
      "Conceived and executed technical symposiums, hackathons, academic tutoring programs, and engineering field trips bridging academic theory with industrial practice."
    ]
  },
  {
    id: "znu-robotics",
    title: "Co-Founder & Core Member",
    organization: "ZNU Robotics Community, Zagazig National University",
    period: "2024 – Present",
    roleType: "Technical Community Building",
    achievements: [
      "Co-founded the university's flagship robotics community, establishing dedicated training tracks in Embedded C++, Python, Computer Vision, and SolidWorks.",
      "Co-organized the university's inaugural Live Robotics Showcase, drawing hundreds of students and regional academic leaders.",
      "Mentored junior mechatronics teams who subsequently competed in national sumo and soccer championships."
    ]
  },
  {
    id: "build-yourself",
    title: "Supervisor, 'We Help You Build Yourself' Student Initiative",
    organization: "Engineering Student Union, Zagazig National University",
    period: "2026",
    roleType: "Strategic Mentorship & Program Management",
    achievements: [
      "Supervised comprehensive workshops focused on engineering career pathways, professional freelancing, and technical self-development.",
      "Awarded an official Certificate of Appreciation for inspirational leadership and organizational excellence in empowering engineering students."
    ]
  },
  {
    id: "leaders-forum",
    title: "Official Representative, 2nd Leaders Forum",
    organization: "Canal & Sinai Universities Alliance — 'Leaders by Will'",
    period: "February 2026",
    roleType: "Regional Summit Delegation",
    achievements: [
      "Selected to represent Zagazig National University at New Ismailia National University in partnership with Suez Canal University.",
      "Collaborated with student union presidents across the Suez Canal and Sinai region to formulate strategic youth leadership frameworks."
    ]
  },
  {
    id: "labtronic-visit",
    title: "Industrial Delegation Lead — Labtronic Industries",
    organization: "6th of October City, Egypt (Aerospace Training & Systems)",
    period: "April – May 2026",
    roleType: "Industrial-Academic Liaison",
    achievements: [
      "Represented the Student Union in organizing an elite technical expedition to Labtronic Industries' aerospace test labs.",
      "Investigated supersonic Wind Tunnel aerodynamic balances, Aircraft Cabin Simulators, Retractable Landing Gear kinematics, and Engine Test Cells.",
      "Strengthened bilateral academic-industrial cooperation to unlock practical R&D internships for engineering seniors."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-iti",
    title: "Embedded Systems Summer Training Program (162 Hours)",
    issuer: "Information Technology Institute (ITI), Smart Village, Egypt",
    date: "Jul – Aug 2025",
    hours: "162 Hours",
    category: "Embedded & Firmware",
    description: "Elite practical training covering bare-metal C programming, AVR/ARM microcontroller interfacing, communication protocols (UART, SPI, I2C), RTOS principles, and embedded verification. Supervised by Dr. Heba Saleh."
  },
  {
    id: "cert-nti",
    title: "Machine Learning Summer Training Program (120 Hours)",
    issuer: "National Telecommunication Institute (NTI) in cooperation with ITIDA",
    date: "Jul – Aug 2025",
    hours: "120 Hours",
    score: "89% Final Grade",
    category: "AI & Data Science",
    description: "90 hours of deep technical ML (regression, classification, model evaluation, Python pipelines) plus 30 hours of professional freelancing and technical consulting."
  },
  {
    id: "cert-obour",
    title: "Tetra Pak A3-Speed Machines Technical Training (120 Hours)",
    issuer: "Obour Land for Food Industries Training Center",
    date: "Aug – Sep 2025",
    hours: "120 Hours",
    category: "CAD & Mechanical",
    description: "High-speed automated packaging lines, aseptic processing, utilities (power, steam, compressed air, H2O2), automatic splicing, tube forming, drive & jaw kinematics, and final folder operations."
  },
  {
    id: "cert-solidworks-2b",
    title: "SolidWorks Advanced CAD Workshop",
    issuer: "2B Digital",
    date: "March 2026",
    category: "CAD & Mechanical",
    description: "Advanced parametric 3D parts modeling, multi-component assemblies, mechanism simulation, and geometric dimensioning & tolerancing (GD&T)."
  },
  {
    id: "cert-dassault",
    title: "3DEXPERIENCE SOLIDWORKS Essentials Seminar",
    issuer: "Dassault Systèmes / European Universities in Egypt (EUE)",
    date: "2025",
    category: "CAD & Mechanical",
    description: "Cloud-connected CAD workflows, collaborative 3D product lifecycle management (PLM), and structural simulation modeling."
  },
  {
    id: "cert-maharatech",
    title: "C Programming: From Basics to Mastery",
    issuer: "MaharaTech (ITI Platform)",
    date: "August 2025",
    category: "Embedded & Firmware",
    description: "Memory allocation, pointers, pointer-to-functions, bitwise manipulation, data structures, and optimized algorithm execution for embedded targets."
  },
  {
    id: "cert-bue-ai",
    title: "Artificial Intelligence Fundamentals",
    issuer: "The British University in Egypt (BUE)",
    date: "2023",
    category: "AI & Data Science",
    description: "Theoretical and algorithmic foundations of artificial intelligence, search heuristics, neural models, and computer vision concepts."
  },
  {
    id: "cert-zewail-ai",
    title: "Introduction to AI & Applied Neural Networks",
    issuer: "Zewail City of Science and Technology",
    date: "2023",
    category: "AI & Data Science",
    description: "Data pre-processing, feature engineering, and neural network applications in engineering pattern recognition."
  },
  {
    id: "cert-udemy-sw",
    title: "SolidWorks Associate Mechanical Modeling",
    issuer: "Udemy Credential",
    date: "2022",
    category: "CAD & Mechanical",
    description: "Foundational mechanical drafting, parametric sketching, feature extrusions, revolved cuts, and assembly constraints."
  }
];

export const ENTREPRENEURIAL_EXPERIENCE: EntrepreneurialItem[] = [
  {
    id: "ctrl-store",
    role: "Founder & Operations Manager",
    entity: "CTRL Online Store",
    period: "2024 – Present",
    tagline: "E-Commerce Consumer Electronics & Smart Accessories Brand",
    points: [
      "Conceived, built, and operate a direct-to-consumer technology retail platform deployed on the Wuilt e-commerce infrastructure.",
      "Formulate and execute growth marketing campaigns across TikTok, Meta (Facebook/Instagram), achieving profitable return on advertising spend (ROAS).",
      "Manage end-to-end supply chain, product quality testing, SEO catalog optimization, and post-purchase customer satisfaction."
    ],
    metrics: "Active Multi-Channel Brand // D2C Electronics"
  },
  {
    id: "accessory-stores",
    role: "Founder & E-Commerce Manager",
    entity: "Independent Electronic Accessory Brand Stores",
    period: "2019 – 2022",
    tagline: "Multi-Store Digital Retail & Logistics",
    points: [
      "Launched and scaled 3 successful digital storefronts across Shopify and WooCommerce platforms.",
      "Managed international component sourcing, inventory turnover, payment gateway integrations, and multi-region fulfillment.",
      "Generated reliable, profitable sales volumes across successive product life-cycles."
    ],
    metrics: "3 Digital Stores Scaled // End-to-End Fulfillment"
  },
  {
    id: "media-buyer",
    role: "Digital Marketer & Growth Media Buyer",
    entity: "Independent Performance Marketing",
    period: "2019 – 2022",
    tagline: "Data-Driven Paid Ad Campaign Optimization",
    points: [
      "Architected conversion-focused advertising funnels on Facebook Ads Manager and Instagram Business.",
      "Conducted rigorous A/B split-testing on ad creatives, copy hooks, and lookalike target audiences to systematically increase ROAS.",
      "Analyzed customer acquisition cost (CAC) and lifetime value (LTV) metrics to scale high-performing ad budgets."
    ],
    metrics: "A/B Testing Rigor // High-ROAS Campaign Architecture"
  },
  {
    id: "graphic-designer",
    role: "Commercial Visual Designer",
    entity: "Freelance Creative Services",
    period: "2019 – 2022",
    tagline: "Brand Identity, Commercial Creatives & Social Assets",
    points: [
      "Designed high-impact advertising assets, banners, product packaging visuals, and promotional content using Photoshop and Canva.",
      "Established coherent brand aesthetics and typography guidelines for regional e-commerce businesses."
    ],
    metrics: "Commercial Brand Assets // High-Conversion Creatives"
  },
  {
    id: "noon-amazon",
    role: "Marketplace Merchant & Affiliate Marketer",
    entity: "Amazon Egypt & Noon Platforms",
    period: "2019 – 2022",
    tagline: "High-Volume Marketplace Arbitrage & FBA Workflows",
    points: [
      "Sourced trending technology hardware accessories and published optimized product listings with organic SEO search ranking.",
      "Utilized Fulfilled-by-Amazon (FBA) logistics pipelines, maintaining optimal warehouse stock levels and top customer reviews."
    ],
    metrics: "FBA Workflow Mastery // Top Search Ranking"
  }
];

export const TECHNICAL_HIGHLIGHTS_SUMMARY = [
  "400+ Hours of Elite Technical Training (ITI, NTI, Obour Land)",
  "Student Union President & Official University Representative (Zagazig National University)",
  "2nd Place RoboSoccer — Certificate Signed by Egypt's Prime Minister",
  "Qualifier for International Sumo Robot Championship in Japan",
  "Bare-Metal C & Register-Level Firmware Architecture",
  "Dual Expertise: Hardware Engineering + Commercial E-Commerce Execution"
];

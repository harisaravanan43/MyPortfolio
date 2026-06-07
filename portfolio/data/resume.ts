export interface ResumeContact {
  phone: string;
  email: string;
  location: string;
  linkedIn: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  date: string;
  summary: string;
  bullets: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface InsightItem {
  title: string;
  description: string;
}

export const profile = {
  name: "Hari Saravanan D",
  title: "Embedded Software Engineer",
  summary:
    "Firmware Engineer with 5 years of experience in embedded systems and real-time firmware development. Skilled in STM32, ARM Cortex-M, RTOS (FreeRTOS), communication protocols and hardware interfaces. Proficient in Embedded C/C++ with expertise in sensor interfacing, motor control, and IoT integration. Experienced in Agile development, version control (Git), and modular firmware architecture. Passionate about building scalable, production-ready solutions across biomedical and industrial domains.",
  contact: {
    phone: "+91-8825939926",
    email: "harisaravanan43@gmail.com",
    location: "Bangalore, India",
    linkedIn: "hari-saravanan",
  } as ResumeContact,
};

export const education = {
  degree: "B.E. in Mechatronics Engineering",
  dates: "06/2016 - 04/2020",
  institute: "Kumaraguru College of Technology, Coimbatore",
};

export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["Embedded C", "C++", "Python", "Shell Scripting", "Object-Oriented Design"],
  },
  {
    category: "Embedded Systems & Microcontrollers",
    items: [
      "ARM Cortex-M",
      "STM32",
      "ESP32",
      "RTOS",
      "Bare-Metal Programming",
      "Bootloader",
      "Embedded Linux",
      "Xilinx Zynq UltraScale+ MPSoC",
      "Yocto",
      "Buildroot",
      "Secure Boot",
    ],
  },
  {
    category: "Hardware Interaction",
    items: ["GPIO", "Timers", "ADC", "UART", "SPI", "I2C", "Watchdog", "PWM"],
  },
  {
    category: "Development Tools",
    items: ["Keil", "STM32Cube", "Git", "CMake"],
  },
  {
    category: "Debugging Tools",
    items: ["JTAG", "ST-Link", "Oscilloscope", "Logic Analyzer", "Multimeter", "Serial logging"],
  },
  {
    category: "Communication Protocols",
    items: ["Modbus-RTU", "MQTT", "LWIP"],
  },
  {
    category: "Professional Strengths",
    items: [
      "Datasheet and schematic analysis",
      "Firmware architecture design",
      "Firmware development lifecycle",
      "Agile/Scrum delivery",
      "Structured problem solving",
      "Board bring-up",
      "Cross-functional collaboration",
    ],
  },
];

export const languages = ["English — Fluent", "Tamil — Native"];

export const experience: ExperienceItem[] = [
  {
    company: "Hughes Systique Pvt. Ltd",
    role: "Senior Engineer",
    location: "Bangalore",
    date: "09/2025 - Present",
    summary:
      "Building bare-metal firmware for AMD Zynq UltraScale+ MPSoC hardware with secure boot capabilities.",
    bullets: [
      "Implemented bare-metal applications for high-performance MPSoC hardware.",
      "Integrated secure boot workflows and device initialization routines.",
      "Collaborated closely with hardware and security teams to verify system readiness.",
    ],
  },
  {
    company: "Sacra Systems Private Limited",
    role: "Firmware Engineer",
    location: "Coimbatore",
    date: "08/2022 - 07/2025",
    summary:
      "Designed scalable firmware and embedded architectures for real-time industrial systems.",
    bullets: [
      "Gathered system requirements and defined modular firmware architecture.",
      "Delivered embedded code for systems with stringent real-time constraints.",
      "Led hardware-software integration and ensured reliable system behavior.",
      "Implemented extensive testing and debugging strategies for production readiness.",
    ],
  },
  {
    company: "Zum Heilen Healthcare Private Limited",
    role: "Hardware Design Engineer",
    location: "Trichur",
    date: "03/2021 - 12/2021",
    summary:
      "Contributed to biomedical product development through hardware and firmware collaboration.",
    bullets: [
      "Supported the full product lifecycle for a medical device.",
      "Worked with firmware teams to ensure robust hardware behavior.",
      "Validated sensor interfaces and board-level components for reliability.",
    ],
  },
  {
    company: "Aiva Healthcare Technologies Pvt. Ltd",
    role: "Hardware Product Developer",
    location: "Coimbatore",
    date: "04/2020 - 02/2021",
    summary:
      "Developed wearable medical products from concept to production-ready hardware.",
    bullets: [
      "Built an asthma monitoring device and a physiotherapy glove for stroke patients.",
      "Designed embedded hardware and collaborated on firmware integration.",
      "Validated real-time sensor data capture and wireless communication subsystems.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Rotational Disk Angle Measurement Device",
    description:
      "Designed a dual-disk system to independently track vertical and horizontal rotation with real-time sensor fusion.",
    highlights: [
      "STM32 firmware with FreeRTOS for event-driven task scheduling.",
      "SPI IMU and optical encoder integration for dual-axis measurement.",
      "Bluetooth telemetry and Modbus-RTU communication for external visualization.",
    ],
    tags: ["Embedded C", "STM32", "FreeRTOS", "Modbus-RTU", "Bluetooth"],
  },
  {
    title: "IoT Gateway System",
    description:
      "Built a modular gateway on Ubuntu to collect node telemetry, process events, and publish structured data to the cloud via MQTT.",
    highlights: [
      "C++ application architecture with OODA-inspired modularity.",
      "Cross-platform builds managed by CMake.",
      "Secure data flow from Modbus-RTU nodes to cloud infrastructure.",
    ],
    tags: ["C++", "Ubuntu", "MQTT", "Modbus-RTU", "CMake"],
  },
  {
    title: "Wearable Asthma Monitoring IoT Device",
    description:
      "Developed a wearable system for real-time asthma trigger detection and remote monitoring.",
    highlights: [
      "Bare-metal STM32 firmware for sensor fusion and data acquisition.",
      "TI respiratory sensor, MPU6050 IMU, and NTC thermistor integration.",
      "ESP32 Wi-Fi telemetry for cloud access.",
    ],
    tags: ["STM32", "Bare-metal C", "ESP32", "SPI", "I2C", "ADC"],
  },
  {
    title: "Smart Glove for Stroke Patients",
    description:
      "Created a wearable glove that tracks finger movement and delivers physiotherapy feedback through wireless communication.",
    highlights: [
      "Integrated 16 MPU6050 IMUs over I2C for per-finger motion sensing.",
      "Computed real-time joint angles and transmitted data via Bluetooth.",
      "Enabled remote physiotherapy tracking with visual feedback.",
    ],
    tags: ["STM32", "Bare-metal C", "I2C", "Bluetooth", "Wearables"],
  },
  {
    title: "Ethernet MQTT Communication for Monitoring Device",
    description:
      "Implemented an Ethernet-based communication stack on STM32 to publish device data reliably over MQTT.",
    highlights: [
      "LWIP integration on FreeRTOS for efficient TCP/IP networking.",
      "Optimized STM32 firmware for stable Ethernet telemetry.",
      "Built a robust MQTT publish pipeline for remote monitoring.",
    ],
    tags: ["STM32", "FreeRTOS", "LWIP", "MQTT", "Ethernet"],
  },
  {
    title: "Motor Controller Development",
    description:
      "Designed and optimized BLDC motor control using STSPIN hardware and field-oriented control algorithms.",
    highlights: [
      "Implemented FOC with STM32 Motor Control SDK.",
      "Enabled closed-loop speed and torque control.",
      "Tuned dynamic parameters for stability under varying loads.",
    ],
    tags: ["STM32", "BLDC", "MCSDK", "FOC", "Control Systems"],
  },
];

export const insights: InsightItem[] = [
  {
    title: "Designing modular firmware for real products",
    description:
      "A modular architecture makes embedded systems easier to test, extend, and maintain across hardware iterations.",
  },
  {
    title: "Secure boot on complex SoC platforms",
    description:
      "Secure boot adds confidence for devices that must operate reliably in industrial and medical environments.",
  },
  {
    title: "Bridging hardware and software teams",
    description:
      "Clear communication between engineers helps avoid integration issues and deliver stable, production-ready systems.",
  },
];

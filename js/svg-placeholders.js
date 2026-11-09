/**
 * svg-placeholders.js
 * 
 * Generates bespoke Editorial Luxury dark technical schematics for project cards.
 * Art direction: Deep obsidian (#0E0E0E), titanium hairline dividers,
 * champagne gold (#C6A66B / #D8BD8A) technical accents, and high-legibility typography.
 */

export function generateBlueprintSVG(title = '', category = 'embedded', subtitle = '', slug = '') {
  return generateEditorialArtwork(title, category, subtitle, slug);
}

export function generateEditorialArtwork(title = '', category = 'embedded', subtitle = '', slug = '') {
  const safeTitle = (title || 'SYSTEM SPECIFICATION')
    .toUpperCase()
    .replace(/[<>&"']/g, '')
    .trim();

  const key = `${slug} ${title} ${category}`.toLowerCase();

  let codeName = 'SYSTEM SPECIFICATION';
  let discipline = 'MECHATRONICS';
  let schematicSVG = '';

  if (slug === 'smart-home' || key.includes('smart-home') || key.includes('home') || key.includes('منزل')) {
    codeName = 'ATMEGA32 // SMART HOME CONTROL';
    discipline = 'EMBEDDED FIRMWARE';
    schematicSVG = `
      <!-- Architectural House Outline -->
      <path d="M100 190 L270 80 L440 190 L440 260 L100 260 Z" fill="none" stroke="#C6A66B" stroke-width="1.8" stroke-dasharray="6 4"/>
      
      <!-- Microcontroller Core -->
      <rect x="210" y="145" width="120" height="70" rx="4" fill="#18181A" stroke="#D8BD8A" stroke-width="2"/>
      <text x="270" y="180" fill="#F1EEE8" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600" text-anchor="middle" letter-spacing="1">ATMEGA32</text>
      <text x="270" y="198" fill="#C6A66B" font-family="'JetBrains Mono', monospace" font-size="10" text-anchor="middle">AVR CORE // 16MHz</text>

      <!-- Sensory Inputs -->
      <line x1="130" y1="160" x2="210" y2="160" stroke="#C6A66B" stroke-width="1.5"/>
      <circle cx="130" cy="160" r="5" fill="#D8BD8A"/>
      <text x="125" y="145" fill="#E0DDD6" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500">ADC // LM35 + LDR</text>

      <!-- Wireless Transceiver -->
      <line x1="130" y1="210" x2="210" y2="200" stroke="#C6A66B" stroke-width="1.5"/>
      <circle cx="130" cy="210" r="5" fill="#C6A66B"/>
      <text x="125" y="235" fill="#E0DDD6" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500">UART // HC-05 BT</text>

      <!-- Actuator Outputs -->
      <line x1="330" y1="170" x2="410" y2="170" stroke="#C6A66B" stroke-width="1.5"/>
      <circle cx="410" cy="170" r="5" fill="#D8BD8A"/>
      <text x="350" y="155" fill="#E0DDD6" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500">RELAY DRIVERS</text>

      <line x1="330" y1="205" x2="410" y2="215" stroke="#C6A66B" stroke-width="1.5"/>
      <circle cx="410" cy="215" r="5" fill="#C6A66B"/>
      <text x="350" y="240" fill="#E0DDD6" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500">PWM FAN / LIGHT</text>
    `;
  } else if (slug === 'robotic-arm' || key.includes('robotic-arm') || /\barm\b/i.test(key) || key.includes('ذراع')) {
    codeName = 'MULTI-DOF // KINEMATIC ARM';
    discipline = 'ROBOTICS &amp; CONTROL';
    schematicSVG = `
      <!-- Base Turret & Ground -->
      <line x1="80" y1="250" x2="220" y2="250" stroke="#3A3835" stroke-width="2"/>
      <path d="M115 250 L185 250 L175 215 L125 215 Z" fill="#18181A" stroke="#C6A66B" stroke-width="1.8"/>
      <circle cx="150" cy="215" r="16" fill="#101012" stroke="#D8BD8A" stroke-width="2"/>
      <circle cx="150" cy="215" r="5" fill="#C6A66B"/>
      <text x="150" y="190" fill="#C6A66B" font-family="'JetBrains Mono', monospace" font-size="11" text-anchor="middle">θ1 BASE</text>

      <!-- Linkage 1 -->
      <line x1="150" y1="215" x2="275" y2="125" stroke="#D8BD8A" stroke-width="4" stroke-linecap="round"/>
      <circle cx="275" cy="125" r="13" fill="#18181A" stroke="#D8BD8A" stroke-width="2"/>
      <circle cx="275" cy="125" r="4" fill="#C6A66B"/>
      <text x="275" y="100" fill="#C6A66B" font-family="'JetBrains Mono', monospace" font-size="11" text-anchor="middle">θ2 ELBOW</text>

      <!-- Linkage 2 & End-Effector Gripper -->
      <line x1="275" y1="125" x2="395" y2="160" stroke="#C6A66B" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="395" cy="160" r="7" fill="#D8BD8A"/>
      <path d="M395 160 L425 145 M395 160 L425 175" stroke="#F1EEE8" stroke-width="2.5" stroke-linecap="round"/>
      <text x="390" y="200" fill="#E0DDD6" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500" letter-spacing="1">SERVO GRIPPER</text>
      
      <!-- Coordinate Origin Indicator -->
      <text x="310" y="70" fill="#B6B2AB" font-family="'JetBrains Mono', monospace" font-size="11" letter-spacing="1">INVERSE KINEMATICS</text>
    `;
  } else if (slug === 'earthquake-house' || key.includes('earthquake') || key.includes('زلزال') || key.includes('simulator')) {
    codeName = 'SEISMIC VIBRATION SIMULATOR';
    discipline = 'STRUCTURAL DYNAMICS';
    schematicSVG = `
      <!-- Base Shake Table Platform -->
      <rect x="90" y="235" width="360" height="16" rx="3" fill="#18181A" stroke="#C6A66B" stroke-width="1.8"/>
      <text x="270" y="248" fill="#F1EEE8" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" text-anchor="middle" letter-spacing="1">SHAKE TABLE // DC CAM DRIVE</text>
      
      <!-- Multi-story Structural Truss Frame -->
      <rect x="185" y="90" width="170" height="145" fill="none" stroke="#D8BD8A" stroke-width="2"/>
      <line x1="185" y1="160" x2="355" y2="160" stroke="#C6A66B" stroke-width="1.5"/>
      
      <!-- Bracing Crosses -->
      <line x1="185" y1="90" x2="355" y2="160" stroke="#3A3835" stroke-width="1.5" stroke-dasharray="4 4"/>
      <line x1="355" y1="90" x2="185" y2="160" stroke="#3A3835" stroke-width="1.5" stroke-dasharray="4 4"/>
      <line x1="185" y1="160" x2="355" y2="235" stroke="#3A3835" stroke-width="1.5" stroke-dasharray="4 4"/>
      <line x1="355" y1="160" x2="185" y2="235" stroke="#3A3835" stroke-width="1.5" stroke-dasharray="4 4"/>
      
      <!-- Seismic Probe Node -->
      <rect x="340" y="145" width="30" height="30" rx="4" fill="#C6A66B"/>
      <text x="385" y="165" fill="#F1EEE8" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">SW-420</text>
      <text x="385" y="180" fill="#B6B2AB" font-family="'JetBrains Mono', monospace" font-size="10">SEISMIC PROBE</text>
    `;
  } else if (slug === 'vibration-alarm' || key.includes('vibration') || key.includes('alarm') || key.includes('إنذار')) {
    codeName = 'INTELLIGENT VIBRATION SECURITY';
    discipline = 'SAFETY &amp; SENSORS';
    schematicSVG = `
      <!-- Concentric Harmonic Waves -->
      <circle cx="270" cy="165" r="28" fill="none" stroke="#D8BD8A" stroke-width="2"/>
      <circle cx="270" cy="165" r="56" fill="none" stroke="#C6A66B" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.85"/>
      <circle cx="270" cy="165" r="88" fill="none" stroke="#C6A66B" stroke-width="1" stroke-dasharray="3 5" opacity="0.5"/>
      
      <!-- Piezo Sensor Node -->
      <circle cx="270" cy="165" r="14" fill="#18181A" stroke="#D8BD8A" stroke-width="2"/>
      <circle cx="270" cy="165" r="5" fill="#C6A66B"/>
      <text x="270" y="115" fill="#F1EEE8" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600" text-anchor="middle" letter-spacing="1">SW-420 PIEZO INTERRUPT</text>
      
      <!-- Alarm Actuators -->
      <line x1="270" y1="179" x2="270" y2="225" stroke="#C6A66B" stroke-width="1.5"/>
      <text x="270" y="242" fill="#E0DDD6" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500" text-anchor="middle">SERVO LOCK + ACOUSTIC ALARM</text>
    `;
  } else if (slug === 'line-follower' || key.includes('line-follower') || key.includes('مسار') || key.includes('ieee')) {
    codeName = 'AUTONOMOUS NAVIGATION ROBOT';
    discipline = 'IEEE COMPETITION // PID';
    schematicSVG = `
      <!-- Dynamic S-Curve Track Guideway -->
      <path d="M80 230 C 180 230, 200 130, 310 130 C 400 130, 420 210, 470 210" fill="none" stroke="#3A3835" stroke-width="4"/>
      <path d="M80 230 C 180 230, 200 130, 310 130 C 400 130, 420 210, 470 210" fill="none" stroke="#C6A66B" stroke-width="2" stroke-dasharray="6 4"/>
      
      <!-- Mobile Robot Differential Chassis -->
      <g transform="translate(270, 155) rotate(-22)">
        <rect x="-40" y="-24" width="80" height="48" rx="5" fill="#18181A" stroke="#D8BD8A" stroke-width="2"/>
        <!-- Left & Right Drive Wheels -->
        <rect x="-35" y="-30" width="22" height="6" rx="2" fill="#C6A66B"/>
        <rect x="-35" y="24" width="22" height="6" rx="2" fill="#C6A66B"/>
        <!-- 5-Channel IR Sensor Array Bar at Front -->
        <line x1="38" y1="-20" x2="38" y2="20" stroke="#F1EEE8" stroke-width="3"/>
        <circle cx="38" cy="-15" r="2.5" fill="#D8BD8A"/>
        <circle cx="38" cy="-7" r="2.5" fill="#D8BD8A"/>
        <circle cx="38" cy="0" r="2.5" fill="#C6A66B"/>
        <circle cx="38" cy="7" r="2.5" fill="#D8BD8A"/>
        <circle cx="38" cy="15" r="2.5" fill="#D8BD8A"/>
      </g>

      <text x="270" y="245" fill="#F1EEE8" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600" text-anchor="middle" letter-spacing="1">CLOSED-LOOP PID DIFFERENTIAL</text>
      <text x="270" y="95" fill="#C6A66B" font-family="'JetBrains Mono', monospace" font-size="11" text-anchor="middle">5-CHANNEL IR SENSORY ARRAY</text>
    `;
  } else {
    codeName = 'SYSTEM SPECIFICATION';
    discipline = 'ENGINEERING ARCHITECTURE';
    schematicSVG = `
      <circle cx="270" cy="170" r="70" fill="none" stroke="#C6A66B" stroke-width="1.5" stroke-dasharray="5 5"/>
      <circle cx="270" cy="170" r="10" fill="#D8BD8A"/>
      <text x="270" y="175" fill="#F1EEE8" font-family="'JetBrains Mono', monospace" font-size="12" text-anchor="middle">ENGINEERING SCHEMATIC</text>
    `;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 320" width="100%" height="100%">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#141416"/>
        <stop offset="100%" stop-color="#0A0A0C"/>
      </linearGradient>
      <pattern id="gridPattern" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="0.75"/>
      </pattern>
    </defs>

    <!-- Canvas Backdrop -->
    <rect width="540" height="320" fill="url(#bgGrad)"/>
    <rect width="540" height="320" fill="url(#gridPattern)"/>

    <!-- Subtle Vignette Frame -->
    <rect x="12" y="12" width="516" height="296" rx="6" fill="none" stroke="rgba(198,166,107,0.3)" stroke-width="1"/>

    <!-- Top Editorial Header -->
    <g transform="translate(28, 38)">
      <text x="0" y="0" fill="#C6A66B" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" letter-spacing="1.5">${codeName}</text>
      <text x="484" y="0" fill="#848079" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" text-anchor="end" letter-spacing="1">${discipline}</text>
      <line x1="0" y1="12" x2="484" y2="12" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    </g>

    <!-- Schematic Drawing In Center -->
    ${schematicSVG}

    <!-- Bottom Editorial Footer -->
    <g transform="translate(28, 288)">
      <line x1="0" y1="-8" x2="484" y2="-8" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
      <text x="0" y="8" fill="#F1EEE8" font-family="'Cormorant Garamond', Georgia, serif" font-size="14" font-weight="600" letter-spacing="0.5">KHALED ELDAOUDY</text>
      <text x="484" y="8" fill="#C6A66B" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" text-anchor="end" letter-spacing="1">ARCHITECTURAL SPECIFICATION</text>
    </g>
  </svg>`.trim();

  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

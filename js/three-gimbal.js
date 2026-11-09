/**
 * three-gimbal.js
 * 
 * Luxury Kinematic Gimbal 3D WebGL Experience in Three.js.
 * Features Champagne Gold (#C6A66B) and Obsidian materials, 3 concentric
 * coordinate rings, precision ticks, kinetic core icosahedron, and live telemetry HUD.
 */

export function initLuxuryGimbal(mountId = 'heroCanvasMount') {
  const container = document.getElementById(mountId);
  if (!container) return;

  // Check WebGL availability
  const checkWebGL = () => {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch {
      return false;
    }
  };

  if (!checkWebGL() || typeof THREE === 'undefined') {
    container.classList.add('no-webgl');
    return;
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scene & Camera
  const scene = new THREE.Scene();
  const width = container.clientWidth || 360;
  const height = container.clientHeight || 420;

  const camera = new THREE.PerspectiveCamera(45, width / Math.max(height, 1), 0.1, 1000);
  camera.position.z = 24;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
  } catch (err) {
    console.warn('WebGL init failed:', err);
    return;
  }

  // Luxury Color Palette
  const goldColor = new THREE.Color(0xC6A66B);       // Champagne Gold
  const goldLight = new THREE.Color(0xD8BD8A);       // Gold Highlight
  const obsidianDark = new THREE.Color(0x181818);    // Deep Obsidian Core
  const steelHairline = new THREE.Color(0x403D39);   // Subtle Titanium Hairline

  // Gimbal Root Group
  const gimbalAssembly = new THREE.Group();
  scene.add(gimbalAssembly);

  // 1. Ring 1: Outer Azimuth Ring
  const ring1Geo = new THREE.TorusGeometry(7.2, 0.06, 16, 120);
  const ring1Mat = new THREE.MeshBasicMaterial({
    color: steelHairline,
    wireframe: true,
    transparent: true,
    opacity: 0.55
  });
  const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
  gimbalAssembly.add(ring1Mesh);

  // Precision Azimuth Ticks
  const ticksGroup = new THREE.Group();
  for (let i = 0; i < 36; i++) {
    const angle = (i / 36) * Math.PI * 2;
    const isMajor = i % 9 === 0;
    const tickGeo = new THREE.BoxGeometry(isMajor ? 0.4 : 0.18, 0.03, 0.03);
    const tickMat = new THREE.MeshBasicMaterial({
      color: isMajor ? goldLight : steelHairline,
      transparent: true,
      opacity: isMajor ? 0.95 : 0.4
    });
    const tick = new THREE.Mesh(tickGeo, tickMat);
    tick.position.set(Math.cos(angle) * 7.2, Math.sin(angle) * 7.2, 0);
    tick.rotation.z = angle;
    ticksGroup.add(tick);
  }
  ring1Mesh.add(ticksGroup);

  // 2. Ring 2: Intermediate Pitch Ring (Champagne Gold)
  const ring2Geo = new THREE.TorusGeometry(5.6, 0.07, 16, 100);
  const ring2Mat = new THREE.MeshBasicMaterial({
    color: goldColor,
    transparent: true,
    opacity: 0.85
  });
  const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
  gimbalAssembly.add(ring2Mesh);

  // 3. Ring 3: Inner Roll Ring
  const ring3Geo = new THREE.TorusGeometry(4.2, 0.05, 16, 80);
  const ring3Mat = new THREE.MeshBasicMaterial({
    color: goldLight,
    wireframe: true,
    transparent: true,
    opacity: 0.65
  });
  const ring3Mesh = new THREE.Mesh(ring3Geo, ring3Mat);
  gimbalAssembly.add(ring3Mesh);

  // 4. Central Kinetic Core: Icosahedron
  const coreGeo = new THREE.IcosahedronGeometry(2.0, 1);
  const coreMat = new THREE.MeshBasicMaterial({
    color: obsidianDark,
    wireframe: false
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  gimbalAssembly.add(coreMesh);

  // Gold Wireframe Cage around Core
  const coreWireGeo = new THREE.IcosahedronGeometry(2.02, 1);
  const coreWireMat = new THREE.MeshBasicMaterial({
    color: goldColor,
    wireframe: true,
    transparent: true,
    opacity: 0.9
  });
  const coreWireMesh = new THREE.Mesh(coreWireGeo, coreWireMat);
  coreMesh.add(coreWireMesh);

  // 5. Orthogonal Coordinate Markers (X, Y, Z axes)
  const axesLength = 3.6;
  const xAxisGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-axesLength, 0, 0),
    new THREE.Vector3(axesLength, 0, 0)
  ]);
  const xAxis = new THREE.Line(xAxisGeo, new THREE.LineBasicMaterial({ color: goldColor, opacity: 0.8, transparent: true }));
  gimbalAssembly.add(xAxis);

  const yAxisGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, -axesLength, 0),
    new THREE.Vector3(0, axesLength, 0)
  ]);
  const yAxis = new THREE.Line(yAxisGeo, new THREE.LineBasicMaterial({ color: goldLight, opacity: 0.8, transparent: true }));
  gimbalAssembly.add(yAxis);

  const zAxisGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, -axesLength),
    new THREE.Vector3(0, 0, axesLength)
  ]);
  const zAxis = new THREE.Line(zAxisGeo, new THREE.LineBasicMaterial({ color: steelHairline, opacity: 0.6, transparent: true }));
  gimbalAssembly.add(zAxis);

  // 6. Floating Micro Dust Particles
  const particleCount = 80;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    particlePositions[i] = (Math.random() - 0.5) * 22;
    particlePositions[i + 1] = (Math.random() - 0.5) * 22;
    particlePositions[i + 2] = (Math.random() - 0.5) * 16;
  }
  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 0.12,
    color: goldLight,
    transparent: true,
    opacity: 0.45
  });
  const particlePoints = new THREE.Points(particleGeo, particleMat);
  scene.add(particlePoints);

  // Mouse Interaction Physics
  let mouseX = 0;
  let mouseY = 0;
  let targetRotationX = 0.35;
  let targetRotationY = 0.45;

  const handleMouseMove = (e) => {
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mouseX = x * 0.7;
    mouseY = y * 0.5;
  };

  window.addEventListener('mousemove', handleMouseMove, { passive: true });

  // Handle Resize
  const handleResize = () => {
    if (!container || !renderer) return;
    const w = container.clientWidth || 360;
    const h = container.clientHeight || 420;
    camera.aspect = w / Math.max(h, 1);
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };

  window.addEventListener('resize', handleResize, { passive: true });

  // Animation Loop
  let lastTime = performance.now();
  let animationFrameId;

  const pitchEl = document.getElementById('gimbalPitchVal');
  const yawEl = document.getElementById('gimbalYawVal');
  const rollEl = document.getElementById('gimbalRollVal');
  let tickCounter = 0;

  const animate = (currentTime) => {
    animationFrameId = requestAnimationFrame(animate);

    const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
    lastTime = currentTime;

    if (!prefersReduced) {
      targetRotationY += delta * 0.3;
      targetRotationX += delta * 0.15;

      // Inertial damping toward mouse target
      gimbalAssembly.rotation.y += (targetRotationY + mouseX - gimbalAssembly.rotation.y) * 0.05;
      gimbalAssembly.rotation.x += (targetRotationX + mouseY - gimbalAssembly.rotation.x) * 0.05;

      // Independent ring orbital rotation
      ring1Mesh.rotation.z += delta * 0.15;
      ring2Mesh.rotation.y += delta * 0.25;
      ring3Mesh.rotation.x += delta * 0.18;

      // Kinetic Core pulse
      coreMesh.rotation.x += delta * 0.6;
      coreMesh.rotation.y += delta * 0.8;
      const pulse = 1 + Math.sin(currentTime * 0.002) * 0.04;
      coreMesh.scale.set(pulse, pulse, pulse);

      // Micro particles drift
      particlePoints.rotation.y += delta * 0.02;
    }

    renderer.render(scene, camera);

    // Update Telemetry Display
    tickCounter++;
    if (tickCounter % 6 === 0) {
      if (pitchEl) pitchEl.textContent = `${(gimbalAssembly.rotation.x * (180 / Math.PI)).toFixed(1)}°`;
      if (yawEl)   yawEl.textContent   = `${((gimbalAssembly.rotation.y * (180 / Math.PI)) % 360).toFixed(1)}°`;
      if (rollEl)  rollEl.textContent  = `${(gimbalAssembly.rotation.z * (180 / Math.PI)).toFixed(1)}°`;
    }
  };

  animationFrameId = requestAnimationFrame(animate);

  // Return cleanup handle
  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('resize', handleResize);
    if (renderer) renderer.dispose();
  };
}


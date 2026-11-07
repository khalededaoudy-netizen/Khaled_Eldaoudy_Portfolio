import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface TelemetryState {
  roll: number;
  pitch: number;
  yaw: number;
  rpm: number;
  fps: number;
}

export const ThreeHeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [telemetry, setTelemetry] = useState<TelemetryState>({
    roll: 0,
    pitch: 0,
    yaw: 0,
    rpm: 720,
    fps: 60,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // High-Tech Color Palette: Deep charcoal, Electric lime, Telemetry Cyan, Warm Steel
    const limeColor = new THREE.Color(0xc8f202);
    const cyanColor = new THREE.Color(0x00e5ff);
    const steelDark = new THREE.Color(0x222736);
    const steelMid = new THREE.Color(0x4a5568);

    // Group for the entire Mechatronic Assembly
    const gimbalAssembly = new THREE.Group();
    scene.add(gimbalAssembly);

    // Ring 1: Outer Azimuth Gimbal Ring (Structural Chassis)
    const ring1Geo = new THREE.TorusGeometry(7.2, 0.08, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: steelDark,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    gimbalAssembly.add(ring1Mesh);

    // Precision tick marks around outer ring
    const ticksGroup = new THREE.Group();
    for (let i = 0; i < 36; i++) {
      const angle = (i / 36) * Math.PI * 2;
      const tickGeo = new THREE.BoxGeometry(i % 3 === 0 ? 0.35 : 0.15, 0.04, 0.04);
      const tickMat = new THREE.MeshBasicMaterial({
        color: i % 9 === 0 ? limeColor : steelMid,
        transparent: true,
        opacity: i % 9 === 0 ? 0.9 : 0.4,
      });
      const tick = new THREE.Mesh(tickGeo, tickMat);
      tick.position.set(Math.cos(angle) * 7.2, Math.sin(angle) * 7.2, 0);
      tick.rotation.z = angle;
      ticksGroup.add(tick);
    }
    ring1Mesh.add(ticksGroup);

    // Ring 2: Intermediate Pitch Gimbal Ring (Telemetry Lime)
    const ring2Geo = new THREE.TorusGeometry(5.6, 0.07, 16, 80);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: limeColor,
      transparent: true,
      opacity: 0.75,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    gimbalAssembly.add(ring2Mesh);

    // Ring 3: Inner Roll Gimbal Ring (Cyan Guidance)
    const ring3Geo = new THREE.TorusGeometry(4.2, 0.06, 16, 64);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: cyanColor,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const ring3Mesh = new THREE.Mesh(ring3Geo, ring3Mat);
    gimbalAssembly.add(ring3Mesh);

    // Central Core: Kinetic Icosahedron Actuator (Mechatronics Nucleus)
    const coreGeo = new THREE.IcosahedronGeometry(2.0, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x141720,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    gimbalAssembly.add(coreMesh);

    // Core Wireframe Cage
    const coreWireGeo = new THREE.IcosahedronGeometry(2.02, 1);
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: limeColor,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });
    const coreWireMesh = new THREE.Mesh(coreWireGeo, coreWireMat);
    coreMesh.add(coreWireMesh);

    // Precision 3-Axis Orthogonal Coordinate Markers (X: Lime, Y: Cyan, Z: Steel)
    const axesLength = 3.6;
    const xAxisGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-axesLength, 0, 0),
      new THREE.Vector3(axesLength, 0, 0),
    ]);
    const xAxis = new THREE.Line(xAxisGeo, new THREE.LineBasicMaterial({ color: limeColor, opacity: 0.8, transparent: true }));
    gimbalAssembly.add(xAxis);

    const yAxisGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, -axesLength, 0),
      new THREE.Vector3(0, axesLength, 0),
    ]);
    const yAxis = new THREE.Line(yAxisGeo, new THREE.LineBasicMaterial({ color: cyanColor, opacity: 0.8, transparent: true }));
    gimbalAssembly.add(yAxis);

    const zAxisGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, -axesLength),
      new THREE.Vector3(0, 0, axesLength),
    ]);
    const zAxis = new THREE.Line(zAxisGeo, new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.3, transparent: true }));
    gimbalAssembly.add(zAxis);

    // Floating Sensor Array Particle Cloud
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 8.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particlePos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePos[i * 3 + 2] = radius * Math.cos(phi);
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: limeColor,
      size: 0.12,
      transparent: true,
      opacity: 0.45,
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    scene.add(particlePoints);

    // Mouse Interaction Tracking with Smooth Damping
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height * 2 - 1);
      mouse.targetX = x * 0.8;
      mouse.targetY = y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let lastTime = performance.now();
    let frameCounter = 0;
    let fpsTimer = performance.now();

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // Frame rate tracking
      frameCounter++;
      if (currentTime - fpsTimer >= 1000) {
        setTelemetry(prev => ({
          ...prev,
          fps: Math.round((frameCounter * 1000) / (currentTime - fpsTimer)),
        }));
        frameCounter = 0;
        fpsTimer = currentTime;
      }

      const delta = (currentTime - lastTime) * 0.001;
      lastTime = currentTime;

      // Inertial damping toward mouse position
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Kinematic Rotations
      // Assembly responds to mouse tilt + continuous idle precession
      gimbalAssembly.rotation.x = mouse.y * 0.7 + Math.sin(currentTime * 0.0006) * 0.15;
      gimbalAssembly.rotation.y = mouse.x * 0.9 + currentTime * 0.0003;

      // Independent Gimbal Ring Rates
      ring1Mesh.rotation.z += delta * 0.15;
      ring2Mesh.rotation.x += delta * 0.35;
      ring2Mesh.rotation.y += delta * 0.2;
      ring3Mesh.rotation.z -= delta * 0.45;
      ring3Mesh.rotation.x += delta * 0.1;

      // Central Actuator Pulse & Spin
      coreMesh.rotation.x += delta * 0.8;
      coreMesh.rotation.y += delta * 1.2;
      const pulseScale = 1 + Math.sin(currentTime * 0.003) * 0.05;
      coreMesh.scale.set(pulseScale, pulseScale, pulseScale);

      // Particle Field Gentle Drift
      particlePoints.rotation.y += delta * 0.05;
      particlePoints.rotation.x -= delta * 0.03;

      renderer.render(scene, camera);

      // Periodic Telemetry Sample Updates (low overhead)
      if (frameCounter % 6 === 0) {
        setTelemetry(prev => ({
          ...prev,
          roll: Number((gimbalAssembly.rotation.z * (180 / Math.PI)).toFixed(1)),
          pitch: Number((gimbalAssembly.rotation.x * (180 / Math.PI)).toFixed(1)),
          yaw: Number((gimbalAssembly.rotation.y * (180 / Math.PI) % 360).toFixed(1)),
          rpm: Math.round(720 + Math.sin(currentTime * 0.002) * 45),
        }));
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      coreWireGeo.dispose();
      coreWireMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[460px] lg:min-h-[620px] flex items-center justify-center pointer-events-none select-none">
      {/* 3D Canvas Mount Point */}
      <div ref={containerRef} className="absolute inset-0 pointer-events-auto" />

      {/* Cybernetic HUD Target Crosshairs & Telemetry Badges */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 sm:p-6 text-[10px] font-mono text-steel-400">
        {/* Top-Right Telemetry Data Box */}
        <div className="self-end bg-dark-900/80 backdrop-blur-md border border-steel-700/60 p-2.5 rounded-sm max-w-[210px] space-y-1">
          <div className="flex items-center justify-between text-lime text-[11px] font-semibold border-b border-steel-700/40 pb-1">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-ping" />
              GIMBAL_TELEMETRY
            </span>
            <span className="text-steel-400 font-normal">{telemetry.fps} FPS</span>
          </div>
          <div className="flex justify-between">
            <span className="text-steel-500">PITCH (X):</span>
            <span className="text-steel-200">{telemetry.pitch}°</span>
          </div>
          <div className="flex justify-between">
            <span className="text-steel-500">YAW (Y):</span>
            <span className="text-steel-200">{telemetry.yaw}°</span>
          </div>
          <div className="flex justify-between">
            <span className="text-steel-500">ACTUATOR:</span>
            <span className="text-cyan-telemetry">{telemetry.rpm} RPM</span>
          </div>
          <div className="flex justify-between pt-1 border-t border-steel-700/30 text-[9px]">
            <span className="text-steel-500">MCU SYNC:</span>
            <span className="text-lime">LOCKED [168MHz]</span>
          </div>
        </div>

        {/* Bottom-Left Schematic Coordinate Badge */}
        <div className="self-start bg-dark-900/80 backdrop-blur-md border border-steel-700/60 p-2 rounded-sm space-y-0.5">
          <div className="text-steel-500 flex items-center gap-2">
            <span className="w-2 h-[2px] bg-lime" />
            <span>SYS_ORIENTATION // 3-DOF GIMBAL</span>
          </div>
          <div className="text-[9px] text-steel-400">
            RADIAL INERTIA DAMPENING: 0.95 // INTERRUPT: TIM1_UP
          </div>
        </div>
      </div>

      {/* Decorative Technical Crosshair Center Ring */}
      <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-steel-700/30 border-dashed pointer-events-none animate-spin" style={{ animationDuration: '60s' }} />
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-steel-700/15 pointer-events-none" />
    </div>
  );
};

import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100, targetX: -100, targetY: -100 });

  useEffect(() => {
    // Disable if touch device or prefers reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      setIsDisabled(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.dataset.interactive === 'true')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let animId: number;
    const updatePosition = () => {
      // Smooth linear interpolation for the ring
      posRef.current.x += (posRef.current.targetX - posRef.current.x) * 0.35;
      posRef.current.y += (posRef.current.targetY - posRef.current.y) * 0.35;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${posRef.current.targetX}px, ${posRef.current.targetY}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(updatePosition);
    };

    animId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (isDisabled || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none transition-colors duration-150 ${
          isPointer ? 'bg-lime shadow-[0_0_8px_#c8f202]' : 'bg-steel-100'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Target Reticle Outer Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border pointer-events-none transition-all duration-200 ${
          isPointer
            ? 'w-10 h-10 border-lime/80 bg-lime/10'
            : 'w-7 h-7 border-steel-500/40'
        }`}
        style={{ willChange: 'transform' }}
      >
        {isPointer && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-1.5 h-[1px] bg-lime -translate-x-3" />
            <span className="w-1.5 h-[1px] bg-lime translate-x-3" />
            <span className="h-1.5 w-[1px] bg-lime -translate-y-3" />
            <span className="h-1.5 w-[1px] bg-lime translate-y-3" />
          </div>
        )}
      </div>
    </div>
  );
};

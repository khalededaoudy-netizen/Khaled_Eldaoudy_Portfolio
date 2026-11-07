import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
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

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-300">
      {/* Precision Center Dot */}
      <div
        className={`fixed w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-75 ${
          isPointer ? 'bg-lime scale-150 shadow-[0_0_8px_#c8f202]' : 'bg-steel-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Target Reticle Outer Ring */}
      <div
        className={`fixed rounded-full border transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-150 ${
          isPointer
            ? 'w-10 h-10 border-lime/80 bg-lime/10 scale-110'
            : 'w-7 h-7 border-steel-500/40'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
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

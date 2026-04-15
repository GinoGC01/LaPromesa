import React, { useState, useMemo } from 'react';

interface Design {
  id: string;
  nombre: string;
  imagen_front: string;
  imagen_back: string;
  deporte: string;
  division: string;
  colores: string[];
  tipo: string;
  descripcion: string;
  destacado: boolean;
}

interface DesignCardProps {
  design: Design;
  onOpenModal: () => void;
}

const DesignCard: React.FC<DesignCardProps> = ({ design, onOpenModal }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setIsMounted(true);
    
    // Intersection Observer for animation (React-way)
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  // Detect if touch device
  const isTouchDevice = useMemo(() => {
    if (!isMounted || typeof window === 'undefined') return false;
    return window.matchMedia('(hover: none)').matches;
  }, [isMounted]);

  const handleInteraction = () => {
    if (isTouchDevice) {
      if (!isFlipped) {
        setIsFlipped(true);
      } else {
        onOpenModal();
      }
    } else {
      onOpenModal();
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`flex flex-col gap-4 animate-on-scroll-react ${isVisible ? 'is-visible' : ''}`}
    >
      <div 
        className={`card-flip-container aspect-[3/4] cursor-pointer ${isFlipped ? 'is-flipped' : ''}`}
        onClick={handleInteraction}
        onMouseEnter={() => !isTouchDevice && setIsFlipped(true)}
        onMouseLeave={() => !isTouchDevice && setIsFlipped(false)}
      >
        <div className="card-flip-inner">
          {/* Front */}
          <div className="card-flip-front overflow-hidden bg-brand-gray-light">
            <img 
              src={design.imagen_front} 
              alt={design.nombre} 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Back */}
          <div className="card-flip-back overflow-hidden bg-brand-gray-light">
            <img 
              src={design.imagen_back} 
              alt={`${design.nombre} dorso`} 
              className="w-full h-full object-contain"
            />
            {/* Mobile Overlay */}
            {isTouchDevice && (
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-condensed text-[10px] text-brand-white/60 tracking-[0.2em] uppercase text-center">
                  TAP PARA VER DETALLE
                </p>
              </div>
            )}
            
            {/* Desktop Hover Indicator (Optional, but user said "en desktop ese texto no aparece") */}
          </div>
        </div>
      </div>

      {/* Info Block */}
      <div className="flex flex-col items-start gap-2">
        <h3 className="font-condensed text-lg text-brand-white uppercase truncate w-full tracking-wider">
          {design.nombre}
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="font-condensed text-[10px] uppercase px-2 py-0.5 border border-brand-red bg-[#1A1A1A] text-brand-white rounded-[2px] tracking-wider">
            {design.deporte}
          </span>
          <span className="font-condensed text-[10px] uppercase px-2 py-0.5 border border-brand-red bg-[#1A1A1A] text-brand-white rounded-[2px] tracking-wider">
            {design.division.replace('-', ' ')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;

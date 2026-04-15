import React, { useState } from 'react';
import { colorsData } from '../../data/colors';

interface Design {
  id: string;
  nombre: string;
  imagen_front: string;
  imagen_back: string;
  imagenes_extra?: string[];
  deporte: string;
  division: string;
  colores: string[];
  tipo: string;
  descripcion: string;
}

interface DesignModalProps {
  design: Design;
  onClose: () => void;
}

const DesignModal: React.FC<DesignModalProps> = ({ design, onClose }) => {
  const [activeImage, setActiveImage] = useState(design.imagen_front);
  
  // Combine all images for the slider/thumbnails
  const allImages = [design.imagen_front, design.imagen_back, ...(design.imagenes_extra || [])];

  const whatsappMessage = `Hola! Vi el diseño "${design.nombre}" en su galería y quería consultar por presupuesto para mi equipo.`;
  const whatsappLink = `https://wa.me/5491122334455?text=${encodeURIComponent(whatsappMessage)}`;

  const designColors = design.colores.map(id => colorsData.find(c => c.id === id)).filter(Boolean);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-6xl bg-brand-gray-light rounded-[2px] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-brand-red transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Gallery Block */}
          <div className="bg-[#111] p-2 md:p-6">
            <div className="aspect-[3/4] overflow-hidden rounded-[2px] mb-4">
              <img 
                src={activeImage} 
                alt={design.nombre} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {allImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {allImages.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-20 aspect-square shrink-0 border-2 rounded-[2px] overflow-hidden transition-all ${
                      activeImage === img ? "border-brand-red" : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Block */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-8">
               <div className="flex gap-2 mb-4">
                  <span className="bg-brand-red/10 text-brand-red border border-brand-red/20 text-[10px] font-condensed tracking-widest px-2 py-1 uppercase">{design.deporte}</span>
                  <span className="bg-brand-white/5 text-brand-white/60 border border-brand-white/10 text-[10px] font-condensed tracking-widest px-2 py-1 uppercase">{design.division.replace('-', ' ')}</span>
               </div>
              <h2 className="font-display text-4xl md:text-6xl text-brand-white uppercase leading-none mb-4">
                {design.nombre}
              </h2>
              <div className="w-12 h-[3px] bg-brand-red"></div>
            </div>

            <p className="font-body text-brand-gray text-lg leading-relaxed mb-8">
              {design.descripcion}
            </p>

            <div className="mb-10">
              <h4 className="font-condensed text-white/40 text-xs tracking-widest mb-4 uppercase">Combinación de colores</h4>
              <div className="flex gap-3">
                {designColors.map(color => (
                  <div key={color?.id} className="group relative">
                    <div 
                      className="w-10 h-10 rounded-full border border-white/10 shadow-lg"
                      style={{ backgroundColor: color?.hex }}
                    ></div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 border border-white/10 font-body">
                      {color?.nombre}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                className="bg-[#25D366] text-white font-condensed tracking-[0.2em] py-4 px-8 rounded-[2px] uppercase text-center hover:opacity-90 transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                CONSULTAR POR WHATSAPP
              </a>
              <button 
                onClick={onClose}
                className="bg-brand-gray-light border border-white/10 text-brand-white/40 font-condensed tracking-[0.2em] py-4 px-8 rounded-[2px] uppercase hover:bg-white/5 transition-all"
              >
                CERRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignModal;

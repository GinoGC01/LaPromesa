import React, { useState } from 'react';
import { colorsData } from '../../data/colors';
import { sports } from '../../data/sports';

interface GalleryFiltersProps {
  filterDivision: string;
  setFilterDivision: (v: string) => void;
  filterDeporte: string;
  setFilterDeporte: (v: string) => void;
  filterColores: string[];
  setFilterColores: (v: string[] | ((prev: string[]) => string[])) => void;
  filterTipo: string;
  setFilterTipo: (v: string) => void;
}

const GalleryFilters: React.FC<GalleryFiltersProps> = (props) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleColor = (id: string) => {
    props.setFilterColores(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const FilterContent = () => (
    <div className="flex flex-col gap-10 p-6 lg:p-0">
      {/* División */}
      <section>
        <h4 className="font-condensed text-brand-red tracking-[0.2em] mb-4 text-sm">DIVISIÓN</h4>
        <div className="flex flex-wrap gap-2 text-[10px]">
          {["todos", "primera", "b-nacional", "ascenso"].map(div => (
            <button
              key={div}
              onClick={() => props.setFilterDivision(div)}
              className={`px-3 py-2 border rounded-[2px] tracking-widest uppercase transition-all ${
                props.filterDivision === div 
                ? "bg-brand-red border-brand-red text-white" 
                : "bg-transparent border-white/20 text-brand-white/60 hover:border-white"
              }`}
            >
              {div === "todos" ? "TODOS" : div.replace("-", " ")}
            </button>
          ))}
        </div>
      </section>

      {/* Deporte */}
      <section>
        <h4 className="font-condensed text-brand-red tracking-[0.2em] mb-4 text-sm">DEPORTE</h4>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <button
            onClick={() => props.setFilterDeporte("todos")}
            className={`px-3 py-2 border rounded-[2px] tracking-widest uppercase transition-all ${
              props.filterDeporte === "todos" 
              ? "bg-brand-red border-brand-red text-white" 
              : "bg-transparent border-white/20 text-brand-white/60 hover:border-white"
            }`}
          >
            TODOS
          </button>
          {sports.map(sport => (
            <button
              key={sport.id}
              onClick={() => props.setFilterDeporte(sport.id)}
              className={`px-3 py-2 border rounded-[2px] tracking-widest uppercase transition-all ${
                props.filterDeporte === sport.id 
                ? "bg-brand-red border-brand-red text-white" 
                : "bg-transparent border-white/20 text-brand-white/60 hover:border-white"
              }`}
            >
              {sport.nombre}
            </button>
          ))}
        </div>
      </section>

      {/* Tipo */}
      <section>
        <h4 className="font-condensed text-brand-red tracking-[0.2em] mb-4 text-sm">TIPO DE PRENDA</h4>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          {["todos", "conjunto-completo", "camiseta", "short", "arquero"].map(tipo => (
            <button
              key={tipo}
              onClick={() => props.setFilterTipo(tipo)}
              className={`px-3 py-2 border rounded-[2px] tracking-widest uppercase transition-all ${
                props.filterTipo === tipo 
                ? "bg-brand-red border-brand-red text-white" 
                : "bg-transparent border-white/20 text-brand-white/60 hover:border-white"
              }`}
            >
              {tipo === "todos" ? "TODOS" : tipo.replace("-", " ")}
            </button>
          ))}
        </div>
      </section>

      {/* Colores */}
      <section>
        <h4 className="font-condensed text-brand-red tracking-[0.2em] mb-4 text-sm">COLORES PRINCIPALES</h4>
        <div className="grid grid-cols-6 lg:grid-cols-5 gap-3">
          {colorsData.map(color => (
            <button
              key={color.id}
              onClick={() => toggleColor(color.id)}
              title={color.nombre}
              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                props.filterColores.includes(color.id) ? "border-white" : "border-transparent"
              }`}
              style={{ backgroundColor: color.hex }}
            >
              {props.filterColores.includes(color.id) && (
                <svg className="w-4 h-4 text-white drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </section>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 h-fit sticky top-32">
        <div className="border border-brand-white/5 bg-brand-gray-light/30 p-8 rounded-[2px]">
          <FilterContent />
        </div>
      </aside>

      {/* Mobile Floating Button */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <button 
          onClick={() => setIsMobileOpen(true)}
          className="bg-brand-red text-white font-condensed tracking-widest px-8 py-3 rounded-full shadow-2xl border-2 border-white/20"
        >
          FILTROS
        </button>
      </div>

      {/* Mobile Bottom Sheet */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/80" onClick={() => setIsMobileOpen(false)}></div>
          <div className="absolute inset-x-0 bottom-0 h-4/5 bg-brand-black border-t border-brand-red rounded-t-3xl overflow-y-auto flex flex-col">
            <div className="p-4 flex justify-center">
              <div className="w-12 h-1.5 bg-brand-white/10 rounded-full"></div>
            </div>
            <div className="flex-1">
              <FilterContent />
            </div>
            <div className="p-6 bg-brand-black sticky bottom-0 border-t border-brand-white/5">
              <button 
                onClick={() => setIsMobileOpen(false)}
                className="w-full bg-brand-red text-white font-condensed tracking-[0.2em] py-4 rounded-[2px] uppercase"
              >
                APLICAR FILTROS
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryFilters;

import React, { useState, useMemo } from 'react';
import GalleryFilters from './GalleryFilters';
import DesignModal from './DesignModal';
import DesignCard from './DesignCard';

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
  destacado: boolean;
}

interface GalleryGridProps {
  designs: Design[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ designs }) => {
  const [filterDivision, setFilterDivision] = useState<string>("todos");
  const [filterDeporte, setFilterDeporte] = useState<string>("todos");
  const [filterColores, setFilterColores] = useState<string[]>([]);
  const [filterTipo, setFilterTipo] = useState<string>("todos");
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);

  // Extract unique values dynamically from loaded designs
  const uniqueDivisions = useMemo(() => Array.from(new Set(designs.map(d => d.division.toLowerCase()))).sort(), [designs]);
  const uniqueDeportes = useMemo(() => Array.from(new Set(designs.map(d => d.deporte.toLowerCase()))).sort(), [designs]);
  const uniqueTipos = useMemo(() => Array.from(new Set(designs.map(d => d.tipo.toLowerCase()))).sort(), [designs]);
  const uniqueColores = useMemo(() => Array.from(new Set(designs.flatMap(d => d.colores))).sort(), [designs]);

  const filteredDesigns = useMemo(() => {
    return designs.filter((design) => {
      const matchDivision = filterDivision === "todos" || design.division.toLowerCase() === filterDivision;
      const matchDeporte = filterDeporte === "todos" || design.deporte.toLowerCase() === filterDeporte;
      const matchTipo = filterTipo === "todos" || design.tipo.toLowerCase() === filterTipo;
      const matchColores = filterColores.length === 0 || 
                           filterColores.every(color => design.colores.includes(color));
      
      return matchDivision && matchDeporte && matchTipo && matchColores;
    });
  }, [designs, filterDivision, filterDeporte, filterColores, filterTipo]);

  const clearAllFilters = () => {
    setFilterDivision("todos");
    setFilterDeporte("todos");
    setFilterColores([]);
    setFilterTipo("todos");
  };

  const removeColorFilter = (color: string) => {
    setFilterColores(prev => prev.filter(c => c !== color));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 py-12">
      {/* Sidebar Filters */}
      <GalleryFilters 
        filterDivision={filterDivision} setFilterDivision={setFilterDivision}
        filterDeporte={filterDeporte} setFilterDeporte={setFilterDeporte}
        filterColores={filterColores} setFilterColores={setFilterColores}
        filterTipo={filterTipo} setFilterTipo={setFilterTipo}
        uniqueDivisions={uniqueDivisions}
        uniqueDeportes={uniqueDeportes}
        uniqueTipos={uniqueTipos}
        uniqueColores={uniqueColores}
      />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header & Chips */}
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex justify-between items-end">
            <p className="font-body text-sm text-brand-gray">
              Mostrando <span className="text-brand-white font-bold">{filteredDesigns.length}</span> de {designs.length} diseños
            </p>
            {(filterDivision !== "todos" || filterDeporte !== "todos" || filterTipo !== "todos" || filterColores.length > 0) && (
              <button 
                onClick={clearAllFilters}
                className="font-condensed text-xs text-brand-red uppercase tracking-widest hover:underline"
              >
                Limpiar todos
              </button>
            )}
          </div>

          {/* Active Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {filterDivision !== "todos" && (
              <FilterChip label={filterDivision} onRemove={() => setFilterDivision("todos")} />
            )}
            {filterDeporte !== "todos" && (
              <FilterChip label={filterDeporte} onRemove={() => setFilterDeporte("todos")} />
            )}
            {filterTipo !== "todos" && (
              <FilterChip label={filterTipo} onRemove={() => setFilterTipo("todos")} />
            )}
            {filterColores.map(color => (
              <FilterChip key={color} label={color} onRemove={() => removeColorFilter(color)} isColor />
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {filteredDesigns.map((design) => (
            <DesignCard 
              key={design.id} 
              design={design} 
              onOpenModal={() => setSelectedDesign(design)} 
            />
          ))}
        </div>

        {filteredDesigns.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-condensed text-xl text-brand-gray tracking-widest">NO SE ENCONTRARON DISEÑOS CON ESTOS FILTROS</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedDesign && (
        <DesignModal 
          design={selectedDesign} 
          onClose={() => setSelectedDesign(null)} 
        />
      )}
    </div>
  );
};

interface FilterChipProps {
  label: string;
  onRemove: () => void;
  isColor?: boolean;
}

const FilterChip: React.FC<FilterChipProps> = ({ label, onRemove, isColor }) => (
  <span className="inline-flex items-center gap-2 bg-brand-gray-light/50 border border-brand-white/10 px-3 py-1 font-condensed text-[10px] text-brand-white uppercase tracking-widest rounded-full group">
    {isColor && <div className="w-2 h-2 rounded-full bg-brand-red" />}
    {label}
    <button onClick={onRemove} className="hover:text-brand-red transition-colors">
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </span>
);

export default GalleryGrid;

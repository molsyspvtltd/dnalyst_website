import React from 'react';
import './FlipCard.css';

export default function ProductCard({ name, desc, image }) {
  return (
    <div className="flip-card w-full h-100">
      <div className="flip-card-inner rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105">

        {/* Front */}
        <div className="flip-card-front bg-white rounded-2xl overflow-hidden">
          <img src={image} alt={name} className="h-56 w-full object-cover" />
          <div className="p-4">
            <h3 className="text-2xl font-serif text-burnt text-center">{name}</h3>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back bg-[#fffaf4] rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-inner">
          <h3 className="text-2xl font-serif text-burnt mb-3">{name}</h3>
          <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
        </div>
        
      </div>
    </div>
  );
}

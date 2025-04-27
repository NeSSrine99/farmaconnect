'use client';

import React from 'react';

const ChatbotComponent = () => {
  return (
    <div className="max-w-sm mx-auto p-4 bg-white rounded-xl shadow-lg flex flex-col gap-4 border border-gray-200">
      
      {/* Header */}
      <div className="flex items-center gap-2">
      <a href="/" className="flex items-end">
        <img src="FarmaconnectLogo.svg" alt="logo" width={30} height={40} className="mb-2" />
        <span className="text-center justify-center text-[16px]  bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_#26ECF6_0deg,_#18959C_189deg,_#0D5356_360deg)] bg-cover bg-clip-text text-transparent">
          Farmaconnect
        </span>
      </a>
      </div>

      {/* Message */}
      <div className="bg-gray-100 p-3 rounded-md text-gray-700 text-sm leading-relaxed">
        Bonjour, veuillez laisser vos coordonnées afin que nous puissions vous recontacter dans les plus brefs délais.<br /><br />
        Vous avez déjà passé une commande ? Laissez ensuite l'adresse e-mail avec laquelle vous avez passé la commande.
      </div>

      {/* Input Field */}
      <div className="flex flex-col gap-2">
        <label className="text-gray-600 text-sm">Nom</label>
        <input 
          type="text" 
          placeholder="Taper votre nom" 
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Button */}
      <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition">
        Suiv.
      </button>

      {/* Text Area */}
      <div className="flex items-center gap-2 border-t pt-2">
        <input 
          type="text" 
          placeholder="Tapez un message" 
          className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button className="text-gray-500 hover:text-primary">
          📎
        </button>
      </div>

    </div>
  );
};

export default ChatbotComponent;

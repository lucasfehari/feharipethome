import React from 'react';
import { MessageCircle } from 'lucide-react';

function App() {
  const handleWhatsAppClick = () => {
    // Replace this number with your WhatsApp number
    const phoneNumber = '5511999999999';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p>Start prompting (or editing) to see magic happen :)</p>
      </div>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
    </>
  );
}

export default App;
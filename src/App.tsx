import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import SEO from './components/SEO';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Header onContactClick={() => setIsContactOpen(true)} />
      <Hero onContactClick={() => setIsContactOpen(true)} />
      <Services onContactClick={() => setIsContactOpen(true)} />
      <Benefits />
      <Testimonials />
      <FAQ onContactClick={() => setIsContactOpen(true)} />
      <CTA onContactClick={() => setIsContactOpen(true)} />
      <Footer />
      <FloatingButton onClick={() => setIsContactOpen(true)} />

      {isContactOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg sm:rounded-xl max-w-md w-full p-5 sm:p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 pr-8">Ponte en Contacto</h3>
            <form className="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder="Nombre de la Empresa"
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="Cuéntanos sobre tu negocio"
                rows={4}
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Solicitar Propuesta
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

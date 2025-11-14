import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-14 lg:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          <div>
            <div className="mb-4">
              <img src="/logo.png" alt="EM Global Solutions" className="h-12 sm:h-14 lg:h-16 w-auto" />
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-5 sm:mb-6">
              Transformando empresas a través de estrategias de marketing integradas y resultados medibles.
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Servicios</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Estrategia Digital</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Redes Sociales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tráfico Pagado</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SEO</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Automatización</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Empresa</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Acerca de Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contacto</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-400">
              <li className="flex items-start space-x-2 sm:space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <span className="break-all">contacto@emglobalsolutions.com</span>
              </li>
              <li className="flex items-start space-x-2 sm:space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <span>+54 11 99999-9999</span>
              </li>
              <li className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <span>Buenos Aires<br />Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © 2024 EM Global Solutions. Todos los derechos reservados.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400 text-center">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

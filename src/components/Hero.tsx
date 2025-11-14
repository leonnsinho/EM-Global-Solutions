import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="pt-20 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Transforma Tu Negocio con Marketing Completo
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Deja de contratar múltiples proveedores. Con el Paquete Marketing Completo de EM Global Solutions,
              tienes todo lo que necesitas para hacer crecer tu empresa de verdad.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg text-gray-700">Estrategia completa de marketing digital</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg text-gray-700">Gestión de todas las redes sociales</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg text-gray-700">Campañas de tráfico pago optimizadas</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg text-gray-700">Resultados medibles y garantizados</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={onContactClick}
                className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Comenzar Ahora</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-gray-700 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-50 transition-all border-2 border-gray-200"
              >
                Conocer el Paquete
              </button>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-4 sm:p-6 mb-3 sm:mb-4">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-xs sm:text-sm font-semibold text-gray-500">CRECIMIENTO MENSUAL</span>
                  <span className="text-green-500 font-bold text-sm sm:text-base">+245%</span>
                </div>
                <div className="h-24 sm:h-32 flex items-end space-x-1 sm:space-x-2">
                  {[40, 55, 45, 70, 65, 85, 95, 100].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-blue-500 rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2.5 sm:p-4 text-white">
                  <div className="text-lg sm:text-2xl font-bold">500+</div>
                  <div className="text-xs sm:text-sm opacity-90">Clientes Activos</div>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2.5 sm:p-4 text-white">
                  <div className="text-lg sm:text-2xl font-bold">98%</div>
                  <div className="text-xs sm:text-sm opacity-90">Satisfacción</div>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2.5 sm:p-4 text-white">
                  <div className="text-lg sm:text-2xl font-bold">3x</div>
                  <div className="text-xs sm:text-sm opacity-90">ROI Promedio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

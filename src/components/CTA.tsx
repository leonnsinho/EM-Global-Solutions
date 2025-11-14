import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface CTAProps {
  onContactClick: () => void;
}

function CTA({ onContactClick }: CTAProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 leading-tight">
              ¿Listo para Transformar tu Empresa?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
              Únete a más de 500 empresas que ya están creciendo con nuestro Paquete Marketing Completo.
              Sin compromiso, sin riesgo.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">Propuesta personalizada gratuita</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">Análisis completo de tu mercado</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">Garantía de 90 días o devolvemos tu dinero</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">Sin contrato de fidelización</span>
              </div>
            </div>

            <button
              onClick={onContactClick}
              className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <span>Solicitar Propuesta Ahora</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-2xl mt-8 lg:mt-0">
            <div className="text-center mb-5 sm:mb-6">
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Oferta Especial
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Obtén 30 Días Gratis
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Para las primeras 10 empresas este mes
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
              <div className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-200">
                <span className="text-sm sm:text-base text-gray-700">Estrategia Digital Completa</span>
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
              </div>
              <div className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-200">
                <span className="text-sm sm:text-base text-gray-700">Gestión de Redes Sociales</span>
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
              </div>
              <div className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-200">
                <span className="text-sm sm:text-base text-gray-700">Tráfico Pagado Optimizado</span>
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
              </div>
              <div className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-200">
                <span className="text-sm sm:text-base text-gray-700">SEO y Performance</span>
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
              </div>
              <div className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-200">
                <span className="text-sm sm:text-base text-gray-700">Equipo Dedicado</span>
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
              </div>
              <div className="flex items-center justify-between py-2 sm:py-3">
                <span className="text-sm sm:text-base text-gray-700">Soporte Prioritario 24/7</span>
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-5 sm:mb-6">
              <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0">
                <div className="text-center sm:text-left">
                  <div className="text-xs sm:text-sm text-gray-600">Inversión</div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">$720 USD<span className="text-sm sm:text-base lg:text-lg text-gray-600">/mes</span></div>
                </div>
                <div className="text-center sm:text-right">
                  <div className="text-xs sm:text-sm text-gray-600">Ahorras</div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">$720 USD</div>
                </div>
              </div>
            </div>

            <button
              onClick={onContactClick}
              className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-blue-700 transition-colors"
            >
              Asegurar Mi Lugar
            </button>

            <p className="text-center text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
              Solo 3 lugares disponibles este mes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;

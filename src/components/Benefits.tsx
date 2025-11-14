import { Clock, DollarSign, Award, TrendingUp } from 'lucide-react';

function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Ahorra Tiempo',
      description: 'Un único punto de contacto para todo tu marketing. Sin reuniones infinitas con múltiples agencias.',
      stat: '70% menos tiempo',
    },
    {
      icon: DollarSign,
      title: 'Ahorra Dinero',
      description: 'Paquete completo más barato que contratar servicios por separado. Mejor relación costo-beneficio del mercado.',
      stat: 'Hasta 40% de ahorro',
    },
    {
      icon: TrendingUp,
      title: 'Resultados Reales',
      description: 'Estrategias integradas que funcionan juntas para maximizar tus resultados y crecimiento.',
      stat: '3x más conversiones',
    },
    {
      icon: Award,
      title: 'Calidad Garantizada',
      description: 'Equipo especializado y dedicado a tu éxito. Si no entregar resultados, te devolvemos tu dinero.',
      stat: 'Garantía de 90 días',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Por Qué Elegir EM Global Solutions?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Somos más que una agencia. Somos tu socio estratégico de crecimiento.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-blue-100 w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{benefit.title}</h3>
                    <span className="text-xs sm:text-sm font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 sm:px-3 rounded-full whitespace-nowrap self-start">
                      {benefit.stat}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center bg-white rounded-xl p-5 sm:p-6 shadow-sm">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-sm sm:text-base text-gray-600 font-medium">Empresas Atendidas</div>
          </div>
          <div className="text-center bg-white rounded-xl p-5 sm:p-6 shadow-sm">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-2">$ARS 7.5B+</div>
            <div className="text-sm sm:text-base text-gray-600 font-medium">Gestionados en Medios</div>
          </div>
          <div className="text-center bg-white rounded-xl p-5 sm:p-6 shadow-sm">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-2">245%</div>
            <div className="text-sm sm:text-base text-gray-600 font-medium">Crecimiento Promedio</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;

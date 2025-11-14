import { Globe, Target, LineChart, Megaphone, Users, Zap } from 'lucide-react';

interface ServicesProps {
  onContactClick?: () => void;
}

function Services({ onContactClick }: ServicesProps) {
  const services = [
    {
      icon: Target,
      title: 'Estrategia Digital',
      description: 'Planificación completa y personalizada para que tu negocio crezca de forma consistente.',
    },
    {
      icon: Globe,
      title: 'Gestión de Redes Sociales',
      description: 'Presencia profesional en todas las plataformas con contenido que atrae y convierte.',
    },
    {
      icon: Megaphone,
      title: 'Campañas de Tráfico Pagado',
      description: 'Anuncios optimizados en Google, Facebook e Instagram con máximo retorno sobre inversión.',
    },
    {
      icon: LineChart,
      title: 'SEO y Performance',
      description: 'Tu empresa en los primeros resultados de Google con estrategias de SEO avanzadas.',
    },
    {
      icon: Users,
      title: 'Branding e Identidad',
      description: 'Construcción de marca fuerte y consistente que te diferencia de la competencia.',
    },
    {
      icon: Zap,
      title: 'Automatización y CRM',
      description: 'Sistemas automatizados para nutrir leads y transformarlos en clientes leales.',
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Todo lo que tu Empresa Necesita en un Único Paquete
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Deja de contratar agencias diferentes y perder tiempo coordinando equipos.
            Nuestra solución completa se encarga de todo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-5 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="bg-blue-100 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center text-white">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Paquete Marketing Completo</h3>
          <p className="text-sm sm:text-base lg:text-xl opacity-90 mb-5 sm:mb-6 max-w-2xl mx-auto px-2">
            Todos los servicios anteriores + equipo dedicado + informes mensuales + soporte prioritario
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="w-full sm:w-auto text-center sm:text-left bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-5 py-3 sm:px-6 sm:py-4">
              <div className="text-xs sm:text-sm opacity-90">Inversión a partir de</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">$720 USD/mes</div>
            </div>
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors"
            >
              Solicitar Propuesta Personalizada
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

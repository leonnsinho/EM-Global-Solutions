import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  onContactClick?: () => void;
}

function FAQ({ onContactClick }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Qué está incluido en el Paquete Marketing Completo?',
      answer: 'El paquete incluye estrategia digital completa, gestión de todas las redes sociales, campañas de tráfico pagado (Google, Facebook, Instagram), SEO, branding, automatización de marketing, CRM, informes mensuales y equipo dedicado a tu proyecto.',
    },
    {
      question: '¿Cuánto tiempo tarda en ver resultados?',
      answer: 'La mayoría de nuestros clientes comienzan a ver resultados significativos en 30-60 días. Algunos resultados, como engagement en redes sociales, aparecen aún más rápido. Las estrategias de SEO y branding tardan de 90-120 días para resultados completos.',
    },
    {
      question: '¿Con qué tamaño de empresas trabajan?',
      answer: 'Trabajamos con empresas de todos los tamaños, desde startups hasta grandes corporaciones. Nuestro paquete es flexible y adaptable a las necesidades específicas de cada negocio.',
    },
    {
      question: '¿Cómo funciona el proceso de contratación?',
      answer: 'Primero, solicitas una propuesta. Luego, hacemos una reunión para entender tu negocio y objetivos. A continuación, presentamos una estrategia personalizada. Aprobada la propuesta, iniciamos inmediatamente con el onboarding completo.',
    },
    {
      question: '¿Existe contrato de fidelización?',
      answer: 'No trabajamos con contratos de fidelización obligatorios. Creemos que nuestros resultados hablan por sí solos. Puedes cancelar con 30 días de aviso previo, sin multas o burocracias.',
    },
    {
      question: '¿Garantizan resultados?',
      answer: 'Sí. Tenemos garantía de 90 días. Si no entregamos los resultados prometidos en el plazo acordado, te devolvemos el 100% de tu inversión. Esta es nuestra confianza en nuestro trabajo.',
    },
    {
      question: '¿Cómo se hace el seguimiento de resultados?',
      answer: 'Recibes informes mensuales detallados con todas las métricas y resultados. Además, tenemos reuniones quincenales para alineamiento estratégico y ajustes. Tienes acceso 24/7 a un dashboard con datos en tiempo real.',
    },
    {
      question: '¿Puedo contratar solo parte de los servicios?',
      answer: 'El Paquete Marketing Completo fue desarrollado para funcionar de forma integrada, maximizando tus resultados. Sin embargo, podemos evaluar necesidades específicas en casos puntuales. Ponte en contacto para discutir.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Preguntas Frecuentes
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
            Despeja todas tus dudas sobre nuestro Paquete Marketing Completo
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg pr-3 sm:pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 pb-4 sm:px-6 sm:pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 text-center px-4">
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">¿Aún tienes dudas?</p>
          <button
            onClick={onContactClick}
            className="bg-blue-600 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors"
          >
            Hablar con un Especialista
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQ;

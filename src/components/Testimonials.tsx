import { Star } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Silva',
      company: 'TechStart Argentina',
      role: 'CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      text: 'En 6 meses con EM Global Solutions, triplicamos nuestros ingresos. El equipo es excepcional y los resultados hablan por sí solos. Fue la mejor decisión que tomamos.',
      rating: 5,
    },
    {
      name: 'Mariana Costa',
      company: 'Belleza Prime',
      role: 'Fundadora',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      text: 'Finalmente encontré una agencia que entiende lo que necesito. Dejé de preocuparme por marketing y me enfoco en lo que hago mejor: mi negocio.',
      rating: 5,
    },
    {
      name: 'Roberto Almeida',
      company: 'Almeida Abogados',
      role: 'Socio',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      text: 'El ROI fue impresionante. Cada peso invertido retornó multiplicado. EM Global Solutions transformó completamente nuestra presencia digital.',
      rating: 5,
    },
    {
      name: 'Juliana Martins',
      company: 'EduTech Solutions',
      role: 'Directora de Marketing',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      text: 'Trabajar con EM es diferente a todo lo que experimenté antes. Son proactivos, creativos y entregan resultados consistentes mes tras mes.',
      rating: 5,
    },
    {
      name: 'Fernando Santos',
      company: 'Santos Inmuebles',
      role: 'Director Comercial',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      text: 'Duplicamos nuestra generación de leads en 90 días. El equipo de EM Global Solutions conoce profundamente el mercado inmobiliario.',
      rating: 5,
    },
    {
      name: 'Patricia Lima',
      company: 'Fit Life Gimnasio',
      role: 'Propietaria',
      image: 'https://images.pexels.com/photos/3756684/pexels-photo-3756684.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      text: 'Nuestro gimnasio creció 200% después de contratar el paquete completo. Valió cada peso. Equipo dedicado y resultados garantizados.',
      rating: 5,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Más de 500 empresas ya han transformado sus resultados con nuestro Paquete Marketing Completo
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-5 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-5 sm:mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-2.5 sm:space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="min-w-0">
                  <div className="font-bold text-sm sm:text-base text-gray-900">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-600 truncate">
                    {testimonial.role} - {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-16 bg-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600">4.9/5.0</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Calificación Promedio</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-gray-300"></div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600">98%</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Tasa de Satisfacción</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-gray-300"></div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600">500+</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Clientes Felices</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

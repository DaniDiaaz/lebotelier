export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      restaurant: "Restaurante La Tradición",
      location: "Madrid",
      quote: "En 2 meses pasamos de 15 mesas por noche a estar completos todos los días. El chatbot funciona incluso mejor que nuestros camareros.",
      rating: 5,
      metric: "+150% reservas"
    },
    {
      name: "María González",
      restaurant: "Sabores del Mar",
      location: "Valencia", 
      quote: "Por fin puedo desconectar el móvil por las noches. El sistema maneja todo automáticamente y los clientes están más satisfechos que nunca.",
      rating: 5,
      metric: "24/7 automatizado"
    },
    {
      name: "José Luis Ruiz",
      restaurant: "Casa José",
      location: "Sevilla",
      quote: "Las campañas personalizadas han sido un antes y un después. Nuestros clientes habituales vienen más seguido y gastan más por visita.",
      rating: 5,
      metric: "+80% fidelización"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-restaurant-gray to-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-restaurant-dark mb-6">
            Lo que dicen nuestros <span className="text-restaurant-red">restauradores</span>
          </h2>
          <p className="text-xl text-restaurant-text max-w-3xl mx-auto">
            Más de 50 restaurantes ya han transformado su negocio. Estos son algunos de sus testimonios reales:
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative"
            >
              <div className="absolute -top-4 -right-4 bg-restaurant-red text-white px-4 py-2 rounded-full text-sm font-semibold">
                {testimonial.metric}
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              
              <blockquote className="text-restaurant-text italic mb-6 text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-restaurant-dark">{testimonial.name}</div>
                <div className="text-restaurant-red font-medium">{testimonial.restaurant}</div>
                <div className="text-sm text-restaurant-text">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-restaurant-red/10 p-6 rounded-2xl inline-block">
            <p className="text-lg font-semibold text-restaurant-dark mb-2">
              📊 Resultados promedio de nuestros clientes:
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span className="bg-restaurant-red text-white px-4 py-2 rounded-full">+180% reservas</span>
              <span className="bg-restaurant-red text-white px-4 py-2 rounded-full">+65% fidelización</span>
              <span className="bg-restaurant-red text-white px-4 py-2 rounded-full">-90% tiempo al móvil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
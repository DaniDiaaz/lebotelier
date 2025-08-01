const TestimonialsSection = () => {
  const stats = [
    {
      number: "+30%",
      description: "Más reservas en la primera semana",
      detail: "Los restaurantes ven un aumento inmediato en reservas al automatizar WhatsApp"
    },
    {
      number: "2h",
      description: "Menos trabajo diario en atención al cliente",
      detail: "El tiempo que ahorras respondiendo preguntas repetitivas"
    },
    {
      number: "24/7",
      description: "Atención garantizada, sin descanso",
      detail: "Tu restaurante nunca más perderá una reserva por no responder"
    },
    {
      number: "95%",
      description: "De satisfacción de los clientes",
      detail: "Los clientes prefieren la rapidez y comodidad del chatbot"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      restaurant: "Restaurante El Jardín",
      text: "Desde que instalamos el chatbot, no perdemos ni una sola reserva. Antes se nos escapaban muchas llamadas durante el servicio.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      restaurant: "Pizzería Don Carlo",
      text: "Lo mejor es que responde las preguntas típicas automáticamente. Ya no tengo que explicar los horarios 20 veces al día.",
      rating: 5
    },
    {
      name: "Ana Martín",
      restaurant: "Café Central",
      text: "Mis clientes están encantados. Pueden hacer reservas cuando quieren, incluso a las 2 de la madrugada. Es genial.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Los resultados <span className="text-gold">hablan por sí solos</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
            Miles de restaurantes ya están automatizando sus reservas y viendo resultados increíbles
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="text-5xl md:text-6xl font-bold text-gold mb-4">{stat.number}</div>
                <h3 className="text-lg font-semibold mb-2">{stat.description}</h3>
                <p className="text-sm text-white/70">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gold/10 border border-gold/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para ver estos resultados en tu restaurante?
            </h3>
            <p className="text-white/80 mb-6">
              No esperes más. Cada día que pasa sin automatizar, pierdes reservas y dinero.
            </p>
            <div className="bg-gold text-navy px-6 py-3 rounded-full inline-block font-semibold">
              ⚡ Instalación en menos de 24 horas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
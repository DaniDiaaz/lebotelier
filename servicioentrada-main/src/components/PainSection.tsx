const PainSection = () => {
  const painPoints = [
    {
      icon: "😤",
      title: "Pierdes reservas por no responder a tiempo",
      description: "Los clientes llaman fuera de horario o cuando estás ocupado y se van a la competencia"
    },
    {
      icon: "⏰",
      title: "No tienes tiempo para tanto WhatsApp",
      description: "Entre cocinar, atender y gestionar, responder mensajes se vuelve imposible"
    },
    {
      icon: "📞",
      title: "Las mismas preguntas una y otra vez",
      description: "Horarios, precios, menú, disponibilidad... siempre contestando lo mismo"
    },
    {
      icon: "📝",
      title: "Reservas desorganizadas y confusas",
      description: "Anotaciones en papel, confusiones con fechas y mesas, cancelaciones de último momento"
    },
    {
      icon: "💸",
      title: "Menos ingresos de los que podrías tener",
      description: "Cada reserva perdida son euros que se van. Y eso pasa más de lo que crees"
    },
    {
      icon: "😓",
      title: "Trabajas más horas de las necesarias",
      description: "Tu tiempo vale oro, pero lo gastas en tareas que podrían automatizarse"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            ¿Te suena esto?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Si tienes un restaurante, seguro que alguna (o todas) estas situaciones te resultan familiares...
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up border-l-4 border-gold"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-lg font-bold text-navy mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-navy/5 rounded-2xl p-8 max-w-4xl mx-auto border border-navy/10">
            <h3 className="text-2xl font-bold text-navy mb-4">
              La realidad es que cada día que pasa sin automatizar...
            </h3>
            <p className="text-xl text-gold font-semibold">
              📉 Pierdes clientes, 💰 pierdes dinero y ⏰ pierdes tiempo valioso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
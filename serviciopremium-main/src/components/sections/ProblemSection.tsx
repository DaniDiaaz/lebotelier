export const ProblemSection = () => {
  const problems = [
    {
      icon: "😫",
      title: "Clientes que no vuelven",
      description: "Gastas en marketing pero no logras fidelizar. Los clientes vienen una vez y no regresan."
    },
    {
      icon: "⏰",
      title: "Sin tiempo para tu familia",
      description: "Siempre pegado al móvil, contestando WhatsApps hasta altas horas. Tu vida personal sufre."
    },
    {
      icon: "📱",
      title: "Dependes completamente del móvil",
      description: "Si no contestas en 5 minutos, pierdes la reserva. Estás esclavizado a las notificaciones."
    },
    {
      icon: "📊",
      title: "Promociones que no funcionan",
      description: "Envías ofertas a todos igual, sin personalizar. Gastas dinero sin ver resultados reales."
    },
    {
      icon: "💸",
      title: "Mesas vacías que duelen",
      description: "Tienes capacidad pero no llega gente. Las horas punta no son suficiente para rentabilizar."
    },
    {
      icon: "🤯",
      title: "Gestión caótica de clientes",
      description: "No sabes quién viene habitualmente, qué le gusta, cuándo es su cumpleaños. Pierdes oportunidades."
    }
  ];

  return (
    <section className="py-20 bg-restaurant-dark text-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Te sientes <span className="text-restaurant-red">identificado</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sabemos exactamente por lo que pasas. Estos son los problemas que nos cuentan el 90% de restauradores:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-restaurant-red">{problem.title}</h3>
              <p className="text-gray-300 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-2xl font-semibold text-restaurant-red mb-8">
            Si has sentido esto, tenemos la solución perfecta para ti 👇
          </p>
        </div>
      </div>
    </section>
  );
};
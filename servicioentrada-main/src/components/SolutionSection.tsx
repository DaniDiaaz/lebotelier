const SolutionSection = () => {
  const features = [
    {
      icon: "📅",
      title: "Confirmación automática de reservas",
      description: "El bot recibe solicitudes de reserva, verifica disponibilidad y confirma automáticamente"
    },
    {
      icon: "❓",
      title: "Respuesta a preguntas frecuentes",
      description: "Horarios, ubicación, precios, menú... todo respondido al instante, 24/7"
    },
    {
      icon: "🍽️",
      title: "Menú digital integrado",
      description: "Los clientes pueden consultar tu carta completa directamente en WhatsApp"
    },
    {
      icon: "⚙️",
      title: "Panel para modificar horarios",
      description: "Cambia disponibilidad, horarios especiales y información desde tu móvil"
    },
    {
      icon: "⚡",
      title: "Instalación rápida y sin apps",
      description: "Todo funciona en WhatsApp. Tus clientes no necesitan descargar nada nuevo"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6">
            🤖 La Solución
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Tu nuevo asistente virtual, <span className="text-gold">24/7 en WhatsApp</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Imagina tener un empleado perfecto que nunca se cansa, nunca se olvida de nada 
            y está disponible las 24 horas para atender a tus clientes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up border-l-4 border-gold"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gold/20 to-navy/20 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-navy mb-6">¿Cómo funciona?</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-sm">1</div>
                  <p className="text-navy">Cliente envía mensaje a tu WhatsApp</p>
                </div>
                <div className="flex items-center gap-4 text-left">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-sm">2</div>
                  <p className="text-navy">El bot responde automáticamente</p>
                </div>
                <div className="flex items-center gap-4 text-left">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-sm">3</div>
                  <p className="text-navy">Gestiona reservas y preguntas</p>
                </div>
                <div className="flex items-center gap-4 text-left">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-sm">4</div>
                  <p className="text-navy">Tú recibes notificaciones organizadas</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white rounded-xl shadow-lg">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-gold">Tiempo de configuración:</span> Menos de 24 horas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits highlight */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gold/10 to-navy/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-navy mb-4">
              El resultado: Más reservas, menos trabajo, clientes más felices
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">+30%</div>
                <div className="text-sm text-muted-foreground">Más reservas automáticas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy">2h</div>
                <div className="text-sm text-muted-foreground">Menos trabajo diario</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">24/7</div>
                <div className="text-sm text-muted-foreground">Atención garantizada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
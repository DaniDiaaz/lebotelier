import { CTAButton } from "@/components/ui/cta-button";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: "📈",
      title: "+200% más reservas",
      description: "Respuesta inmediata = más conversiones. Nunca más perderás una reserva por no contestar a tiempo."
    },
    {
      icon: "❤️",
      title: "Clientes fieles de por vida",
      description: "Mensajes personalizados en cumpleaños, aniversarios y fechas especiales. Tus clientes se sienten únicos."
    },
    {
      icon: "⏰",
      title: "Recupera tu tiempo libre",
      description: "El sistema trabaja mientras tú disfrutas de tu familia. Automatización completa 24/7."
    },
    {
      icon: "✨",
      title: "Imagen moderna y profesional",
      description: "Tu restaurante se ve tecnológico y actualizado. Los clientes perciben mayor calidad y confianza."
    },
    {
      icon: "🎯",
      title: "Control total del negocio",
      description: "Datos precisos sobre qué funciona y qué no. Toma decisiones inteligentes basadas en información real."
    },
    {
      icon: "💰",
      title: "ROI garantizado desde el primer mes",
      description: "El aumento en reservas y fidelización paga la inversión rápidamente. Rentabilidad comprobada."
    }
  ];

  return (
    <section className="py-20 bg-restaurant-dark text-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tu restaurante, <span className="text-restaurant-red">más lleno</span>, más rentable, más libre.
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Estos son los resultados reales que verás en tu restaurante desde la primera semana:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-restaurant-red">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-restaurant-red/20 to-restaurant-red/10 p-8 rounded-2xl text-center border border-restaurant-red/30">
          <h3 className="text-3xl font-bold mb-4">
            🚀 Garantía de Resultados
          </h3>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
            Si en 30 días no ves un aumento significativo en reservas y satisfacción del cliente, 
            te devolvemos el 100% de tu inversión. Sin preguntas, sin complicaciones.
          </p>
          <CTAButton className="w-full max-w-md mx-auto text-sm sm:text-base">
            <span className="hidden sm:inline">🎯 Quiero estos resultados para mi restaurante</span>
            <span className="sm:hidden">🎯 Quiero estos resultados</span>
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
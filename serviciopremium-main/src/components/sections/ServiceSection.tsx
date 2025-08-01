import { CTAButton } from "@/components/ui/cta-button";

export const ServiceSection = () => {
  const features = [
    {
      icon: "🤖",
      title: "Chatbot Personalizado 24/7",
      description: "Atiende automáticamente reservas, consultas y pedidos. Tu cliente siempre tendrá respuesta inmediata, incluso cuando duermes."
    },
    {
      icon: "📋",
      title: "CRM Inteligente Conectado",
      description: "Guarda automáticamente cumpleaños, preferencias, historial de visitas. Conoce a tus clientes mejor que ellos mismos."
    },
    {
      icon: "📢",
      title: "Campañas Automáticas Segmentadas",
      description: "Envía promociones personalizadas según gustos y comportamiento. Cada cliente recibe lo que realmente le interesa."
    },
    {
      icon: "📊",
      title: "Informes Mensuales Detallados",
      description: "Datos reales de conversiones, clientes más rentables, horas pico. Toma decisiones basadas en números, no intuición."
    },
    {
      icon: "🆘",
      title: "Soporte Técnico 24/7",
      description: "Nuestro equipo siempre disponible para resolver cualquier duda. Tu tranquilidad es nuestra prioridad."
    },
    {
      icon: "🎯",
      title: "Consultoría Mensual Personalizada",
      description: "Reunión mensual para optimizar estrategias y maximizar resultados. Un experto dedicado a hacer crecer tu negocio."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-restaurant-gray">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-restaurant-dark mb-6">
            La solución <span className="text-restaurant-red">completa</span> que necesitas
          </h2>
          <p className="text-xl text-restaurant-text max-w-4xl mx-auto leading-relaxed">
            No es solo un chatbot. Es un sistema integral que transforma completamente la forma en que gestionas tu restaurante.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-restaurant-red"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-restaurant-dark">{feature.title}</h3>
              <p className="text-restaurant-text leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-restaurant-red/10 p-8 rounded-2xl text-center">
          <h3 className="text-3xl font-bold text-restaurant-dark mb-4">
            🎁 Bonus Exclusivo: Configuración Personalizada
          </h3>
          <p className="text-lg text-restaurant-text mb-6 max-w-3xl mx-auto">
            Nuestro equipo configura todo específicamente para tu restaurante: menús, horarios, promociones, estilo de comunicación. 
            Solo tienes que sentarte y ver cómo llegan las reservas.
          </p>
          <CTAButton className="w-full max-w-md mx-auto text-sm sm:text-base">
            <span className="hidden sm:inline">💎 Quiero mi sistema personalizado ahora</span>
            <span className="sm:hidden">💎 Quiero mi sistema ahora</span>
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
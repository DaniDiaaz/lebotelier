import { CTAButton } from "@/components/ui/cta-button";

export const FeaturesSection = () => {
  const features = [
    {
      category: "🤖 Chatbot Inteligente",
      items: [
        "Respuestas automáticas personalizadas según tu estilo",
        "Gestión de reservas con calendario en tiempo real",
        "Consultas de menú con precios y descripciones",
        "Manejo de alergias y preferencias dietéticas",
        "Derivación inteligente a humano cuando es necesario",
        "Múltiples idiomas configurables"
      ]
    },
    {
      category: "📋 CRM Avanzado",
      items: [
        "Historial completo de cada cliente automático",
        "Seguimiento de preferencias y platos favoritos",
        "Recordatorios automáticos de cumpleaños",
        "Segmentación por frecuencia de visita",
        "Notas personalizadas del equipo",
        "Análisis de valor de vida del cliente (LTV)"
      ]
    },
    {
      category: "📢 Marketing Automatizado",
      items: [
        "Campañas de reactivación para clientes inactivos",
        "Promociones personalizadas por horario",
        "Mensajes de cumpleaños con ofertas especiales",
        "Campañas estacionales automáticas",
        "A/B testing de mensajes y ofertas",
        "Lista de difusión segmentada"
      ]
    },
    {
      category: "📊 Análisis y Reportes",
      items: [
        "Dashboard en tiempo real de reservas",
        "Métricas de conversión de WhatsApp",
        "Análisis de horarios pico y valle",
        "Rendimiento de campañas detallado",
        "Predicción de demanda semanal",
        "Reportes de satisfacción del cliente"
      ]
    },
    {
      category: "🔧 Configuración Técnica",
      items: [
        "Integración con WhatsApp Business API",
        "Sincronización con sistemas de reservas existentes",
        "Webhooks para conectar con tu POS",
        "Backup automático de conversaciones",
        "Escalado automático según demanda",
        "Cumplimiento RGPD y protección de datos"
      ]
    },
    {
      category: "🆘 Soporte Profesional",
      items: [
        "Configuración inicial completamente personalizada",
        "Training del equipo incluido",
        "Soporte técnico 24/7 en español",
        "Actualizaciones automáticas del sistema",
        "Consultoría mensual de optimización",
        "Canal prioritario de comunicación"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-restaurant-gray to-background">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-restaurant-dark mb-6">
            Cada <span className="text-restaurant-red">detalle</span> pensado para tu éxito
          </h2>
          <p className="text-xl text-restaurant-text max-w-4xl mx-auto">
            No es solo automatización, es un ecosistema completo que transform cada aspecto 
            de la gestión de tu restaurante. Descubre todo lo que incluye nuestro sistema:
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-restaurant-dark mb-6 flex items-center gap-3">
                {feature.category}
              </h3>
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="text-restaurant-red mt-1 flex-shrink-0">✓</span>
                    <span className="text-restaurant-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-restaurant-red/10 to-restaurant-red/5 p-10 rounded-3xl text-center border border-restaurant-red/20">
          <h3 className="text-3xl font-bold text-restaurant-dark mb-4">
            🚀 Y esto es solo el comienzo...
          </h3>
          <p className="text-lg text-restaurant-text mb-8 max-w-4xl mx-auto">
            Cada mes añadimos nuevas funcionalidades basadas en las necesidades reales de nuestros restauradores. 
            Tu sistema evoluciona constantemente sin coste adicional.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/50 p-4 rounded-xl">
              <div className="text-2xl mb-2">🔄</div>
              <div className="font-semibold text-restaurant-dark">Actualizaciones automáticas</div>
              <div className="text-sm text-restaurant-text">Nuevas funciones cada mes</div>
            </div>
            <div className="bg-white/50 p-4 rounded-xl">
              <div className="text-2xl mb-2">🎯</div>
              <div className="font-semibold text-restaurant-dark">Personalización total</div>
              <div className="text-sm text-restaurant-text">Adaptado a tu negocio específico</div>
            </div>
            <div className="bg-white/50 p-4 rounded-xl">
              <div className="text-2xl mb-2">📈</div>
              <div className="font-semibold text-restaurant-dark">Escalabilidad garantizada</div>
              <div className="text-sm text-restaurant-text">Crece con tu restaurante</div>
            </div>
          </div>
          <CTAButton size="lg" className="w-full max-w-md mx-auto text-sm sm:text-base">
            <span className="hidden sm:inline">💡 Quiero ver el sistema en acción</span>
            <span className="sm:hidden">💡 Ver sistema en acción</span>
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
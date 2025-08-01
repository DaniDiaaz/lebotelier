import { Bot, Calendar, BarChart3, MessageCircle, Settings, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SolutionSection = () => {
  const features = [
    {
      icon: Bot,
      title: "Chatbot personalizado completo",
      description: "Bot inteligente que habla como tu marca y conoce todos tus servicios, horarios y promociones.",
      details: ["Respuestas personalizadas", "Integración con tu menú", "Tono de voz de tu marca"]
    },
    {
      icon: Calendar,
      title: "Reservas automáticas con confirmación",
      description: "Sistema completo de reservas que gestiona disponibilidad, confirma y recuerda citas.",
      details: ["TheFork integration", "Google Calendar sync", "Recordatorios automáticos"]
    },
    {
      icon: MessageCircle,
      title: "Promociones automatizadas",
      description: "Envía ofertas segmentadas a los clientes correctos en el momento perfecto.",
      details: ["Campañas por horarios", "Segmentación inteligente", "Ofertas por comportamiento"]
    },
    {
      icon: BarChart3,
      title: "Panel de control + informes mensuales",
      description: "Dashboard completo con métricas de negocio e informes detallados cada mes.",
      details: ["Estadísticas en tiempo real", "Informes mensuales", "Análisis de rendimiento"]
    },
    {
      icon: Settings,
      title: "Configuración sin límites",
      description: "Adapta el bot a cualquier cambio en tu negocio: menús, horarios, promociones.",
      details: ["Cambios ilimitados", "Soporte incluido", "Actualizaciones constantes"]
    },
    {
      icon: Zap,
      title: "Instalación express en 24h",
      description: "En menos de 24 horas tienes tu chatbot funcionando y atendiendo clientes.",
      details: ["Setup en 24h", "Formación incluida", "Soporte prioritario"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            La Solución Completa
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Un chatbot que{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              gestiona todo tu restaurante
            </span>{" "}
            automáticamente
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde la primera consulta hasta la reserva confirmada, nuestro sistema 
            se encarga de convertir visitantes en clientes fieles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative group hover:shadow-[var(--shadow-card)] transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                
                <CardTitle className="text-xl mb-2">
                  {feature.title}
                </CardTitle>
                
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Logos */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8">
          <h3 className="text-center text-lg font-semibold mb-8 text-muted-foreground">
            Integra con las herramientas que ya usas
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="font-semibold text-green-600">WhatsApp Business</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="font-semibold text-red-600">TheFork</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="font-semibold text-blue-600">Google Calendar</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="font-semibold text-purple-600">Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
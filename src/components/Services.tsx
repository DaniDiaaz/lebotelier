import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Menu, MessageCircle, Bot, Crown, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "basico",
      title: "Básico",
      subtitle: "Menú digital interactivo",
      icon: Menu,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      description: "Menú digital moderno que transforma la experiencia de tus clientes",
      url: "https://serviciobasico.lebotelier.es/",
      features: [
        "Menú digital QR interactivo",
        "Actualización en tiempo real",
        "Diseño responsive",
        "Soporte técnico básico"
      ]
    },
    {
      id: "entrada",
      title: "Entrada",
      subtitle: "Chatbot para reservas + atención básica",
      icon: MessageCircle,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      description: "Automatización de reservas y atención al cliente 24/7",
      url: "https://servicioentrada.lebotelier.es/",
      features: [
        "Todo lo del plan Básico",
        "Chatbot de reservas automático",
        "Atención al cliente básica",
        "Integración con calendario",
        "Notificaciones automáticas"
      ]
    },
    {
      id: "core",
      title: "Core",
      subtitle: "Chatbot avanzado + campañas + informes",
      icon: Bot,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      description: "Automatización completa con inteligencia artificial avanzada",
      url: "https://serviciocore.lebotelier.es/",
      features: [
        "Todo lo del plan Entrada",
        "IA avanzada personalizada",
        "Campañas de marketing automáticas",
        "Informes y analytics detallados",
        "Gestión de inventario básica",
        "Integración con redes sociales"
      ]
    },
    {
      id: "premium",
      title: "Premium",
      subtitle: "Automatización total + CRM + fidelización",
      icon: Crown,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      description: "La solución más completa para restaurantes modernos",
      url: "https://serviciopremium.lebotelier.es/",
      features: [
        "Todo lo del plan Core",
        "CRM completo integrado",
        "Sistema de fidelización avanzado",
        "Automatización total del negocio",
        "IA predictiva y recomendaciones",
        "Soporte prioritario 24/7",
        "Consultoría personalizada"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde un menú digital hasta automatización completa. Encuentra la solución perfecta para tu restaurante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-elegant hover:scale-105 ${service.borderColor} border-2 bg-gradient-card`}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${service.bgColor} flex items-center justify-center`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-lg font-medium text-muted-foreground">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-6 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open(service.url, '_blank')}
                >
                  Ver más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";
import { MessageSquare, Clock, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=34674565394&text=Me%20interesa%20saber%20m%C3%A1s...";

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23e2e8f0\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <MessageSquare className="w-4 h-4" />
              Chatbot WhatsApp Profesional
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Activa un chatbot que{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  trabaja por ti 24/7
                </span>{" "}
                y convierte más clientes sin levantar el teléfono.
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Automatiza reservas, envía promociones y llena tus mesas a diario. 
                Todo desde WhatsApp.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-accent" />
                </div>
                <span className="font-semibold">+40% reservas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <span className="font-semibold">24/7 automatizado</span>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-sm lg:text-lg px-4 py-4 lg:px-8 lg:py-6 h-auto w-full sm:w-auto"
              asChild
            >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Quiero llenar más mesas ahora
                </a>
              </Button>
              
              <p className="text-sm text-muted-foreground">
                ✅ Sin permanencia • ✅ Setup gratuito • ✅ Soporte 24/7
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
              <img 
                src={heroImage} 
                alt="Restaurante moderno con chatbot automatizado" 
                className="w-full h-auto"
              />
              
              {/* Floating WhatsApp Chat Demo */}
              <div className="absolute top-4 right-4 bg-white rounded-lg p-4 shadow-lg max-w-[280px]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Restaurante Bot</div>
                    <div className="text-xs text-green-500">En línea</div>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="bg-gray-100 rounded-lg p-2">
                    ¡Hola! ¿Para cuántas personas quieres reservar?
                  </div>
                  <div className="bg-primary text-white rounded-lg p-2 ml-8">
                    Para 4 personas el sábado
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2">
                    ¡Perfecto! Te confirmo mesa para 4 el sábado. ¿Qué hora prefieres?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
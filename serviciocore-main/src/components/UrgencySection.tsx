import { Clock, Users, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const UrgencySection = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=34674565394&text=Me%20interesa%20saber%20m%C3%A1s...";

  return (
    <section className="py-20 bg-gradient-to-br from-warning/10 to-destructive/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Header */}
          <div className="bg-warning/20 border border-warning/30 rounded-xl p-6 mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <AlertTriangle className="w-6 h-6 text-warning" />
              <span className="font-semibold text-warning">DISPONIBILIDAD LIMITADA</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Solo aceptamos{" "}
              <span className="text-warning">5 nuevos restaurantes</span>{" "}
              al mes
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Para garantizar un servicio personalizado y resultados excepcionales, 
              limitamos nuestras incorporaciones mensuales.
            </p>
          </div>

          {/* Reasons */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Setup personalizado</h3>
              <p className="text-muted-foreground">
                Cada chatbot se configura específicamente para tu restaurante y tu estilo.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Soporte dedicado</h3>
              <p className="text-muted-foreground">
                Un especialista asignado para asegurar tu éxito desde el primer día.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Resultados garantizados</h3>
              <p className="text-muted-foreground">
                Solo trabajamos con clientes a los que podemos garantizar resultados reales.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              No pierdas tu oportunidad de{" "}
              <span className="text-accent">transformar tu restaurante</span>
            </h3>
            
            <Button 
              variant="cta" 
              size="lg" 
              className="text-sm lg:text-xl px-6 py-4 lg:px-12 lg:py-8 h-auto w-full sm:w-auto animate-pulse"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Quiero reservar mi plaza YA
              </a>
            </Button>
            
            <p className="text-sm text-muted-foreground">
              ⚡ Respuesta inmediata • 📞 Llamada de consultoría gratuita • 🎯 Plan personalizado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
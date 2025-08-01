import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=34674565394&text=Me%20interesa%20saber%20m%C3%A1s...";

  const features = [
    "Todo lo del intermedio",
    "Integración profesional con API oficial de WhatsApp (con plataforma tipo Landbot, Twilio o Kommo)",
    "Módulo de pedidos o pedidos para llevar (según preferencia)",
    "Formulario de opiniones, captación de reseñas y feedback",
    "Dashboard personalizado con métricas básicas",
    "Asesoría y soporte por 90 días"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Invierte{" "}
            <span className="text-warning">menos de 10€ al día</span>{" "}
            y multiplica tus reservas
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-warning/20 shadow-[var(--shadow-card)]">
            {/* Popular Badge */}
            <div className="absolute top-0 right-8 bg-warning text-warning-foreground px-6 py-2 rounded-b-lg font-semibold text-sm">
              <Star className="w-4 h-4 inline mr-1" />
              Más Popular
            </div>

            <CardHeader className="text-center pb-8 pt-12">
              <div className="space-y-2">
                <CardTitle className="text-4xl lg:text-6xl font-bold">
                  199€<span className="text-xl text-muted-foreground">/mes</span>
                  <span className="text-lg text-muted-foreground block mt-2">o 499€ pago único</span>
                </CardTitle>
                <CardDescription className="text-lg">
                  Todo incluido • Sin permanencia • Setup gratuito
                </CardDescription>
              </div>

              {/* Price Comparison */}
              <div className="bg-muted/50 rounded-xl p-6 mt-8">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">9,67€</div>
                    <div className="text-sm text-muted-foreground">por día</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">2,25€</div>
                    <div className="text-sm text-muted-foreground">por comida extra</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-warning">1 mesa</div>
                    <div className="text-sm text-muted-foreground">se paga el servicio</div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* ROI Calculator */}
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6">
                <h3 className="font-semibold mb-4 text-center">Calculadora de ROI real:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Inversión mensual:</span>
                      <span className="font-semibold">199€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Reservas extra (+40%):</span>
                      <span className="font-semibold text-accent">+30 mesas</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Ticket promedio:</span>
                      <span className="font-semibold">45€</span>
                    </div>
                    <div className="flex justify-between text-sm border-t pt-3">
                      <span>Ingresos extra:</span>
                      <span className="font-semibold text-2xl text-accent">+1.350€</span>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4 p-4 bg-accent/20 rounded-lg">
                  <div className="text-2xl font-bold text-accent">ROI: 678%</div>
                  <div className="text-sm text-muted-foreground">Por cada euro invertido, generas 6.78€</div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center space-y-4">
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="text-sm lg:text-lg px-6 py-4 lg:px-12 lg:py-6 h-auto w-full md:w-auto"
                  asChild
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Zap className="w-5 h-5 mr-2" />
                    Solicitar mi instalación ahora
                  </a>
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  🚀 Instalación en 24h • 🔄 Cancelación sin penalización
                </p>
              </div>

              {/* Guarantee */}
              <div className="text-center bg-muted/30 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Garantía de resultados</h4>
                <p className="text-sm text-muted-foreground">
                  Si en 30 días no incrementas al menos un 20% tus reservas, 
                  te devolvemos el 100% de tu dinero. Sin preguntas.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
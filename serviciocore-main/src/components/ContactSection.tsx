import { Phone, Mail, Instagram, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=34674565394&text=Me%20interesa%20saber%20m%C3%A1s...";

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              ¿Listo para{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                revolucionar tu restaurante?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hablemos de cómo podemos ayudarte a automatizar tu negocio y 
              multiplicar tus reservas en los próximos 30 días.
            </p>
          </div>

          {/* Main CTA */}
          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] mb-12">
            <div className="space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Consultoría gratuita por WhatsApp</h3>
                <p className="text-muted-foreground">
                  Analizamos tu restaurante y te mostramos exactamente cómo implementar 
                  el chatbot para maximizar tus resultados.
                </p>
              </div>
              
              <Button 
                variant="cta" 
                size="lg" 
                className="text-sm lg:text-xl px-6 py-4 lg:px-12 lg:py-8 h-auto w-full sm:w-auto"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-6 h-6 mr-3" />
                  Iniciar consultoría ahora
                </a>
              </Button>
              
              <p className="text-sm text-muted-foreground">
                📱 Respuesta inmediata • 🎯 Análisis personalizado • 💡 Estrategia específica
              </p>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Teléfono directo</h3>
              <p className="text-muted-foreground">+34 674 565 395</p>
              <p className="text-sm text-muted-foreground mt-1">Lunes a Viernes 9:00 - 20:00</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a 
                href="mailto:lebotelier@gmail.com" 
                className="text-accent hover:text-accent/80 transition-colors"
              >
                lebotelier@gmail.com
              </a>
              <p className="text-sm text-muted-foreground mt-1">Respuesta en menos de 2 horas</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Instagram</h3>
              <a 
                href="https://instagram.com/lebotelier.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                @lebotelier.ai
              </a>
              <p className="text-sm text-muted-foreground mt-1">Casos de éxito y tips diarios</p>
            </div>
          </div>

          {/* About */}
          <div className="bg-muted/30 rounded-xl p-8">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">¿Por qué elegirnos?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left text-sm">
                <div className="space-y-2">
                  <p className="flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    <span>Incremento promedio del 40% en reservas</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    <span>Especialistas en sector gastronómico</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    <span>Instalación express en 24 horas</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    <span>Soporte técnico personalizado 24/7</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    <span>Garantía de resultados o devolución</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sobre <span className="text-primary">Nosotros</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos especialistas en automatización de restaurantes con inteligencia artificial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Le Botelier
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Somos una agencia especializada en transformar restaurantes tradicionales en negocios modernos y eficientes mediante la implementación de chatbots inteligentes y sistemas de automatización.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestra misión es que los propietarios de restaurantes puedan enfocarse en lo que realmente aman: crear experiencias gastronómicas excepcionales, mientras nosotros nos encargamos de automatizar todos los procesos operativos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center bg-gradient-card border-gold/20">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-foreground mb-2">500+</h4>
                  <p className="text-muted-foreground">Restaurantes atendidos</p>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-gradient-card border-gold/20">
                <CardContent className="p-6">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-foreground mb-2">95%</h4>
                  <p className="text-muted-foreground">Satisfacción del cliente</p>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-gradient-card border-gold/20">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-foreground mb-2">5+</h4>
                  <p className="text-muted-foreground">Años de experiencia</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Image/Logo Section */}
          <div className="flex justify-center">
            <Card className="p-12 bg-gradient-card border-2 border-gold/20 shadow-elegant">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-hero rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-4xl">LB</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Le Botelier</h3>
                <p className="text-lg text-muted-foreground italic">
                  "Automatizando el futuro de la gastronomía"
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-hero text-white shadow-elegant">
            <CardContent className="p-12">
              <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed">
                "Creemos que cada restaurante merece tener la tecnología más avanzada para brindar experiencias excepcionales a sus clientes, sin complicaciones técnicas."
              </blockquote>
              <cite className="block mt-6 text-xl font-semibold">
                — Equipo Le Botelier
              </cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
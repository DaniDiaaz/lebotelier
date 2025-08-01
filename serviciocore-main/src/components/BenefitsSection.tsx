import { TrendingUp, Users, Clock, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      percentage: "+40%",
      title: "Más reservas confirmadas",
      description: "Respuesta inmediata = más conversiones. Nunca pierdes una oportunidad de venta."
    },
    {
      icon: Users,
      percentage: "+60%",
      title: "Clientes más fidelizados",
      description: "Comunicación constante y personalizada que hace que regresen más frecuentemente."
    },
    {
      icon: Clock,
      percentage: "3h",
      title: "Ahorro de tiempo diario",
      description: "El tiempo que recuperas para enfocarte en la calidad del servicio y la cocina."
    },
    {
      icon: BarChart,
      percentage: "100%",
      title: "Control total del negocio",
      description: "Estadísticas precisas para tomar decisiones que aumenten tus ingresos."
    }
  ];

  const whatsappUrl = "https://api.whatsapp.com/send?phone=34674565394&text=Me%20interesa%20saber%20m%C3%A1s...";

  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Resultados reales que puedes{" "}
            <span className="text-accent">medir desde el primer día</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estos son los resultados promedio que obtienen nuestros clientes 
            en las primeras 4 semanas de uso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {benefit.percentage}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="cta" 
            size="lg" 
            className="text-sm lg:text-lg px-4 py-4 lg:px-8 lg:py-6 h-auto w-full sm:w-auto"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Quiero estos resultados para mi restaurante
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
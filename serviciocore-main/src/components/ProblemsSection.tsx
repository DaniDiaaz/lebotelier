import { AlertTriangle, Clock, MessageSquareX, TrendingDown } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: MessageSquareX,
      title: "Pierdes reservas por no responder a tiempo",
      description: "Cada mensaje sin respuesta es un cliente que se va a la competencia."
    },
    {
      icon: Clock,
      title: "Saturación de mensajes todo el día",
      description: "No puedes estar pendiente del teléfono mientras atiendes el restaurante."
    },
    {
      icon: TrendingDown,
      title: "Promociones que nadie ve",
      description: "Gastas en marketing pero no llega a los clientes correctos."
    },
    {
      icon: AlertTriangle,
      title: "Falta de control sobre el negocio",
      description: "No sabes qué funciona, cuántos clientes pierdes o cuándo vienen más."
    }
  ];

  return (
    <section className="py-20 bg-destructive/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            ¿Estás perdiendo clientes por{" "}
            <span className="text-destructive">no responder a tiempo?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estos son los problemas que enfrentan diariamente los restaurantes que no tienen 
            un sistema automatizado de atención al cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-card-foreground">
                {problem.title}
              </h3>
              
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pain Point Stats */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-[var(--shadow-card)]">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-destructive mb-2">73%</div>
              <p className="text-muted-foreground">de restaurantes pierden reservas por respuesta tardía</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-destructive mb-2">2.5h</div>
              <p className="text-muted-foreground">tiempo promedio diario perdido en mensajes</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-destructive mb-2">35%</div>
              <p className="text-muted-foreground">de clientes se van si no responden en 15 min</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
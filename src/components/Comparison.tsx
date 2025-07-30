import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const Comparison = () => {
  const features = [
    { name: "Menú digital QR", basic: true, entry: true, core: true, premium: true },
    { name: "Actualización en tiempo real", basic: true, entry: true, core: true, premium: true },
    { name: "Chatbot de reservas", basic: false, entry: true, core: true, premium: true },
    { name: "Atención al cliente 24/7", basic: false, entry: true, core: true, premium: true },
    { name: "IA avanzada personalizada", basic: false, entry: false, core: true, premium: true },
    { name: "Campañas de marketing", basic: false, entry: false, core: true, premium: true },
    { name: "Informes y analytics", basic: false, entry: false, core: true, premium: true },
    { name: "CRM completo", basic: false, entry: false, core: false, premium: true },
    { name: "Sistema de fidelización", basic: false, entry: false, core: false, premium: true },
    { name: "IA predictiva", basic: false, entry: false, core: false, premium: true },
    { name: "Soporte prioritario", basic: false, entry: false, core: false, premium: true },
  ];

  const plans = [
    { id: "basic", name: "Básico", color: "text-green-600" },
    { id: "entry", name: "Entrada", color: "text-yellow-600" },
    { id: "core", name: "Core", color: "text-blue-600" },
    { id: "premium", name: "Premium", color: "text-red-600" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Comparador de <span className="text-primary">Planes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compara todas las características de nuestros planes para encontrar el que mejor se adapte a tu restaurante.
          </p>
        </div>

        <Card className="overflow-hidden shadow-card">
          <CardHeader className="bg-gradient-subtle">
            <CardTitle className="text-2xl text-center">Características por Plan</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold text-foreground bg-muted/50">
                      Características
                    </th>
                    {plans.map((plan) => (
                      <th key={plan.id} className="text-center p-4 font-semibold bg-muted/50">
                        <span className={`${plan.color} text-lg font-bold`}>
                          {plan.name}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium text-foreground">
                        {feature.name}
                      </td>
                      <td className="p-4 text-center">
                        {feature.basic ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.entry ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.core ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.premium ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Comparison;
import { Button } from "@/components/ui/button";

const OfferSection = () => {
  const handleCTAClick = () => {
    window.open("https://api.whatsapp.com/send?phone=34674565394&text=Me%20interesa%20saber%20m%C3%A1s...", "_blank");
  };

  const features = [
    "✅ Todo lo del servicio básico",
    "✅ Integración básica en WhatsApp Business (con plataformas low-cost tipo Wati, Kommo o similares)",
    "✅ Módulo de reservas automáticas",
    "✅ Preguntas frecuentes automatizadas (horarios, ubicación, promociones)",
    "✅ Configuración personalizada y soporte por 30 días"
  ];

  const bonus = [
    "🎁 Mini guía: 'Cómo aumentar reservas en redes sociales'",
    "🎁 Templates de respuestas para situaciones especiales",
    "🎁 Lista de verificación para optimizar tu atención"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gold/10 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Urgency Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              ⏰ Oferta Limitada Esta Semana
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Activa tu chatbot hoy por solo <span className="text-gold">99€/mes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              El precio normal es 249€. Pero esta semana puedes automatizar tu restaurante por menos de lo que gastas en una cena.
            </p>
          </div>

          {/* Main Offer Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gold">
            <div className="bg-gradient-to-r from-gold to-gold-light text-navy p-6 text-center">
              <h3 className="text-2xl font-bold">🤖 PACK AUTOMATIZACIÓN COMPLETA</h3>
              <div className="flex items-center justify-center gap-4 mt-4">
                <span className="text-3xl font-bold line-through opacity-60">249€</span>
                <span className="text-5xl font-bold">99€/mes</span>
              </div>
              <p className="mt-2 text-navy/80">Oferta válida hasta el domingo</p>
            </div>

            <div className="p-8">
              {/* What's Included */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-navy mb-6 text-center">
                  ¿Qué incluye exactamente?
                </h4>
                <div className="grid gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-lg flex-shrink-0">{feature.split(' ')[0]}</span>
                      <span className="text-sm md:text-base">{feature.substring(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bonus Section */}
              <div className="bg-gold/10 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-bold text-navy mb-4 text-center">
                  🎁 BONUS GRATIS (Valor 47€)
                </h4>
                <div className="space-y-3">
                  {bonus.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-lg flex-shrink-0">{item.split(' ')[0]}</span>
                      <span className="text-sm md:text-base">{item.substring(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Value Calculation */}
              <div className="bg-navy/5 rounded-xl p-6 mb-8 text-center">
                <h4 className="font-bold text-navy mb-4">💰 Cálculo rápido de rentabilidad:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gold">5</div>
                    <div className="text-muted-foreground">Reservas extra/semana</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gold">25€</div>
                    <div className="text-muted-foreground">Valor promedio/reserva</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy">+500€</div>
                    <div className="text-muted-foreground">Ingresos extra/mes</div>
                  </div>
                </div>
                <p className="mt-4 text-gold font-semibold">
                  El chatbot se paga solo en menos de una semana
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="w-full text-sm md:text-xl py-6 md:py-8 h-auto px-4 md:px-6 leading-tight"
                  onClick={handleCTAClick}
                >
                  <span className="text-center">🚀 SÍ, QUIERO AUTOMATIZAR<br className="md:hidden" /> MI RESTAURANTE POR 99€/MES</span>
                </Button>
                
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    ✅ Instalación en 24h · ✅ Soporte incluido
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="text-center mt-12">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-2xl mx-auto">
              <h4 className="font-bold text-green-800 mb-2">
                🛡️ Garantía de 30 días
              </h4>
              <p className="text-green-700 text-sm">
                Si en 30 días no estás completamente satisfecho con los resultados, 
                te devolvemos el 100% de tu dinero. Sin preguntas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
import { CTAButton } from "@/components/ui/cta-button";

export const PricingSection = () => {
  return (
    <section className="py-20 bg-restaurant-dark text-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Una <span className="text-restaurant-red">inversión</span> que se paga sola
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            No es un gasto, es la mejor inversión que puedes hacer en tu restaurante. 
            Calculamos el ROI en base a tu facturación actual.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 p-10 rounded-3xl border border-white/20 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-restaurant-red text-white px-6 py-2 rounded-bl-2xl font-semibold">
              🔥 Más Popular
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Sistema Completo de Automatización</h3>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-5xl font-bold text-restaurant-red">Desde 400€</span>
                <span className="text-xl text-gray-300">/mes</span>
              </div>
              <p className="text-gray-300 mb-6">
                Plan personalizado según el tamaño y necesidades específicas de tu restaurante
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-restaurant-red">✅ Todo incluido:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-restaurant-red">🤖</span>
                    Chatbot personalizado 24/7
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-restaurant-red">📋</span>
                    CRM completo con historial
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-restaurant-red">📢</span>
                    Campañas automáticas segmentadas
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-restaurant-red">📊</span>
                    Informes mensuales detallados
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-restaurant-red">🆘</span>
                    Soporte técnico 24/7
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-restaurant-red">🎯</span>
                    Consultoría mensual personalizada
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4 text-restaurant-red">💰 Retorno de inversión:</h4>
                <div className="space-y-4 bg-white/5 p-6 rounded-xl">
                  <div className="flex justify-between">
                    <span>Solo necesitas 8 reservas extra/mes</span>
                    <span className="text-restaurant-red font-semibold">Para cubrir el coste</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Promedio clientes nuevos/mes</span>
                    <span className="text-restaurant-red font-semibold">+120 reservas</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>ROI promedio mes 1</span>
                    <span className="text-restaurant-red">+1,200€</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <CTAButton size="lg" className="w-full max-w-md mx-auto text-sm sm:text-base">
                <span className="hidden sm:inline">💎 Solicitar diagnóstico gratuito</span>
                <span className="sm:hidden">💎 Diagnóstico gratuito</span>
              </CTAButton>
              <p className="text-sm text-gray-400 mt-4">
                Sin permanencia • Configuración incluida • Garantía de resultados
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-4">
            💡 <strong>¿Tienes un restaurante pequeño?</strong> Tenemos planes desde 200€/mes
          </p>
          <p className="text-lg text-gray-300">
            💡 <strong>¿Cadena de restaurantes?</strong> Descuentos especiales por volumen
          </p>
        </div>
      </div>
    </section>
  );
};
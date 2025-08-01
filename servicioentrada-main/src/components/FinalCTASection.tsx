import { Button } from "@/components/ui/button";
const FinalCTASection = () => {
  const handleCTAClick = () => {
    window.open("https://api.whatsapp.com/send?phone=34674565394&text=Me%20interesa%20saber%20m%C3%A1s...", "_blank");
  };
  return <section className="py-20 bg-gradient-to-br from-navy to-navy-light text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-4 md:top-20 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-4 md:bottom-20 md:left-20 w-36 h-36 md:w-72 md:h-72 bg-gold/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency message */}
          <div className="bg-red-500/20 border border-red-400 rounded-xl p-4 mb-8 animate-pulse">
            <p className="text-red-200 font-semibold">
              ⚠️ Esta oferta expira el domingo. Solo quedan algunas plazas disponibles.
            </p>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Deja de perder clientes por <span className="text-gold">no responder a tiempo</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
            Cada día que pasa sin automatizar tu WhatsApp, estás perdiendo reservas y dinero. 
            <br className="hidden md:block" />
            <span className="text-gold font-semibold">¿Hasta cuándo vas a esperar?</span>
          </p>

          {/* Pain points reminder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-slide-up">
              <div className="text-3xl mb-3">😤</div>
              <h3 className="font-semibold mb-2">Reservas perdidas</h3>
              <p className="text-sm text-white/80">Cada llamada no contestada es dinero que se va</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-slide-up" style={{
            animationDelay: '100ms'
          }}>
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-semibold mb-2">Tiempo perdido</h3>
              <p className="text-sm text-white/80">Horas respondiendo las mismas preguntas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-slide-up" style={{
            animationDelay: '200ms'
          }}>
              <div className="text-3xl mb-3">💸</div>
              <h3 className="font-semibold mb-2">Ingresos perdidos</h3>
              <p className="text-sm text-white/80">La competencia sí está automatizada</p>
            </div>
          </div>

          {/* Final value proposition */}
          <div className="bg-gold/20 border border-gold/40 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Por solo 99€ (menos de lo que gastas en ingredientes en un día)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gold mb-2">✅ Lo que GANAS:</h4>
                <ul className="space-y-1 text-sm text-white/90">
                  <li>• +30% más reservas automáticas</li>
                  <li>• 2h menos de trabajo diario</li>
                  <li>• Atención 24/7 sin descanso</li>
                  <li>• Clientes más satisfechos</li>
                  <li>• Más tiempo para tu negocio</li>
                </ul>
              </div>
              <div className="mt-6 md:mt-0">
                <h4 className="font-semibold text-gold mb-2">❌ Lo que PIERDES si no actúas:</h4>
                <ul className="space-y-1 text-sm text-white/90">
                  <li>• Reservas que se van a la competencia</li>
                  <li>• Tiempo valioso respondiendo WhatsApp</li>
                  <li>• Clientes frustrados por no responder</li>
                  <li>• Ingresos que podrías estar generando</li>
                  <li>• La ventaja competitiva</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-6">
            <Button variant="cta" size="lg" className="text-sm md:text-2xl px-4 md:px-12 py-6 md:py-8 h-auto animate-pulse-glow w-full sm:w-auto leading-tight" onClick={handleCTAClick}>
              <span className="text-center">🚀 RESERVAR MI INSTALACIÓN<br className="md:hidden" /> AHORA (99€)</span>
            </Button>
            
            <p className="text-sm text-white/70">
              ✅ Instalación en 24h · ✅ Garantía 30 días · ✅ Soporte incluido
            </p>
            
            
          </div>

          {/* Contact info */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <h3 className="text-xl font-semibold mb-6 text-gold">Contacto</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold mb-2">📧 Email</h4>
                <a href="mailto:lebotelier@gmail.com" className="text-white/80 hover:text-gold transition-colors break-all">
                  lebotelier@gmail.com
                </a>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📱 WhatsApp</h4>
                <a href="https://api.whatsapp.com/send?phone=34674565394&text=Me%20interesa%20saber%20m%C3%A1s..." target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-gold transition-colors">
                  +34 674 565 394
                </a>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📱 Instagram</h4>
                <a href="https://instagram.com/lebotelier.ai" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-gold transition-colors">
                  @lebotelier.ai
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTASection;
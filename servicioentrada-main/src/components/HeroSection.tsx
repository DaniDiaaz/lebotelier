import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";

const HeroSection = () => {
  const handleCTAClick = () => {
    window.open("https://api.whatsapp.com/send?phone=34674565394&text=Me%20interesa%20saber%20m%C3%A1s...", "_blank");
  };

  const handleDemoClick = () => {
    const demoSection = document.getElementById('demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/30 to-gold/10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-4 md:top-20 md:right-20 w-32 h-32 md:w-72 md:h-72 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-4 md:bottom-20 md:left-20 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-tr from-navy/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-navy leading-tight">
                Tu restaurante <span className="text-gold">no puede seguir</span> perdiendo reservas
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Activa un chatbot en WhatsApp y empieza a recibir 
                <span className="text-navy font-semibold"> reservas automáticas</span> hoy mismo
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button 
                variant="cta" 
                size="lg" 
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 md:py-6 h-auto w-full sm:flex-1"
                onClick={handleCTAClick}
              >
                🚀 Quiero Automatizar Mi Restaurante
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 md:py-6 h-auto border-2 border-gold text-gold hover:bg-gold hover:text-navy w-full sm:flex-1"
                onClick={handleDemoClick}
              >
                📞 Ver Demo Gratis
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <span className="text-gold">✓</span>
                <span>Instalación en 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold">✓</span>
                <span>Sin apps adicionales</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold">✓</span>
                <span>Soporte incluido</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Propietario de restaurante usando chatbot" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-white rounded-xl shadow-xl p-3 md:p-4 animate-fade-in delay-500">
              <div className="text-xl md:text-2xl font-bold text-gold">+30%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Más reservas</div>
            </div>
            <div className="absolute -top-4 -right-2 md:-top-6 md:-right-6 bg-white rounded-xl shadow-xl p-3 md:p-4 animate-fade-in delay-700">
              <div className="text-xl md:text-2xl font-bold text-navy">24/7</div>
              <div className="text-xs md:text-sm text-muted-foreground">Atención automática</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { CTAButton } from "@/components/ui/cta-button";
import chatbotMockup from "@/assets/chatbot-mockup.jpg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-restaurant-gray to-background flex items-center justify-center px-4 py-12 md:py-20">
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-restaurant-dark leading-tight">
                Automatiza, fideliza y{" "}
                <span className="text-restaurant-red">llena tu restaurante</span>{" "}
                sin mover un dedo.
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-restaurant-text leading-relaxed">
                Convierte WhatsApp en tu mejor camarero y gestor de clientes.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <CTAButton size="lg" className="w-full text-sm sm:text-base">
                <span className="hidden sm:inline">🚀 Quiero transformar mi restaurante ahora</span>
                <span className="sm:hidden">🚀 Transformar mi restaurante</span>
              </CTAButton>
            </div>
            
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={chatbotMockup} 
                alt="Chatbot de WhatsApp para restaurantes" 
                className="w-full max-w-md rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-4 -right-4 bg-restaurant-red text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                📈 +200% reservas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
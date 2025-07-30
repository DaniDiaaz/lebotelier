import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empieza a automatizar tu restaurante{" "}
            <span className="text-yellow-300">hoy mismo</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-2xl mx-auto">
            No esperes más para transformar tu negocio. Nuestro equipo está listo para ayudarte a implementar la solución perfecta para tu restaurante.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=34674565394&text=Quiero%20saber%20m%C3%A1s%20sobre%20estos%20servicios', '_blank')}
              className="text-xl px-8 py-6 shadow-button hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="mr-2" size={24} />
              Agendar asesoría gratuita
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const element = document.getElementById('servicios');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-xl px-8 py-6 text-white border-white hover:bg-white hover:text-foreground transition-all duration-300"
            >
              Elegir mi plan
              <ArrowRight className="ml-2" size={24} />
            </Button>
          </div>
          
          <p className="mt-8 text-lg text-gray-300">
            ✅ Consulta gratuita de 30 minutos • ✅ Sin compromiso • ✅ Análisis personalizado
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
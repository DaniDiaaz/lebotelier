import { CTAButton } from "@/components/ui/cta-button";

export const UrgencySection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-restaurant-red to-restaurant-red-hover text-white">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ⚠️ Plazas Limitadas
          </h2>
          <p className="text-2xl mb-8 leading-relaxed">
            Solo trabajamos con <strong>3 restaurantes nuevos al mes</strong> para garantizar 
            un servicio de máxima calidad y resultados excepcionales.
          </p>
        </div>
        
        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 mb-8">
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-sm">Plazas disponibles este mes</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24h</div>
              <div className="text-sm">Tiempo promedio de respuesta</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
            ¿Por qué esta limitación?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="font-semibold mb-3">🎯 Personalización total</h4>
              <p className="text-sm">Cada sistema se configura específicamente para tu restaurante, menú, estilo y clientela.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="font-semibold mb-3">📞 Atención personalizada</h4>
              <p className="text-sm">Consultoría mensual individual con expertos dedicados exclusivamente a tu éxito.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <CTAButton size="lg" className="w-full max-w-md mx-auto text-sm sm:text-base">
            <span className="hidden sm:inline">🔥 Quiero asegurar mi plaza ahora</span>
            <span className="sm:hidden">🔥 Asegurar mi plaza</span>
          </CTAButton>
          <p className="text-sm mt-4 opacity-90">
            ⏰ Las plazas se asignan por orden de llegada • Diagnóstico gratuito incluido
          </p>
        </div>
      </div>
    </section>
  );
};
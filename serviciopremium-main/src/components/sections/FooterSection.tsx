export const FooterSection = () => {
  return (
    <footer className="bg-restaurant-dark text-white py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-restaurant-red mb-4">LeBotelier.ai</h3>
            <p className="text-gray-300 leading-relaxed">
              Automatizamos restaurantes para que tengas más reservas, clientes fieles y tiempo libre. 
              La tecnología que tu negocio necesita.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <div className="space-y-2">
              <p className="text-gray-300">🤖 Chatbot personalizado</p>
              <p className="text-gray-300">📋 CRM inteligente</p>
              <p className="text-gray-300">📢 Campañas automáticas</p>
              <p className="text-gray-300">📊 Informes detallados</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a 
                href="mailto:lebotelier@gmail.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-restaurant-red transition-colors"
              >
                <span>📧</span>
                lebotelier@gmail.com
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=34674565394&text=Me%20interesa%20saber%20m%C3%A1s..." 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-restaurant-red transition-colors"
              >
                <span>📱</span>
                +34 674 565 394
              </a>
              <a 
                href="https://instagram.com/lebotelier.ai" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-restaurant-red transition-colors"
              >
                <span>📸</span>
                @lebotelier.ai
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <div className="grid md:grid-cols-3 gap-4 items-center">
            <div className="text-sm text-gray-400">
              © 2025 LeBotelier.ai - Todos los derechos reservados
            </div>
            <div className="text-sm text-restaurant-red font-semibold">
              🚀 Transformando restaurantes desde 2025
            </div>
            <div className="text-sm text-gray-400">
              Hecho con ❤️ para restauradores
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
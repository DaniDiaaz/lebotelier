import { Button } from "@/components/ui/button";
import { Instagram, Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-neutral-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/lovable-uploads/3133ca74-e365-4556-b30a-20afa58d1586.png" alt="Le Botelier Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold">Le Botelier</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Automatizamos tu restaurante para que solo te preocupes por cocinar. 
              Especialistas en chatbots e IA para restaurantes.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => window.open('https://api.whatsapp.com/send?phone=34674565394&text=Quiero%20saber%20m%C3%A1s%20sobre%20el%20plan%20Básico', '_blank')}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Plan Básico
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open('https://api.whatsapp.com/send?phone=34674565394&text=Quiero%20saber%20m%C3%A1s%20sobre%20el%20plan%20Entrada', '_blank')}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Plan Entrada
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open('https://api.whatsapp.com/send?phone=34674565394&text=Quiero%20saber%20m%C3%A1s%20sobre%20el%20plan%20Core', '_blank')}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Plan Core
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open('https://api.whatsapp.com/send?phone=34674565394&text=Quiero%20saber%20m%C3%A1s%20sobre%20el%20plan%20Premium', '_blank')}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Plan Premium
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contacto</h3>
            <div className="space-y-3">
              <a 
                href="mailto:lebotelier@gmail.com" 
                className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>lebotelier@gmail.com</span>
              </a>
              <a 
                href="tel:+34674565394" 
                className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors"
              >
                <Phone size={18} />
                <span>+34 674 565 394</span>
              </a>
              <a 
                href="https://instagram.com/lebotelier.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram size={18} />
                <span>@lebotelier.ai</span>
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">¿Hablamos?</h3>
            <p className="text-gray-400 text-sm">
              Contáctanos ahora y descubre cómo podemos automatizar tu restaurante.
            </p>
            <Button 
              variant="default" 
              onClick={() => window.open('https://api.whatsapp.com/send?phone=34674565394&text=Quiero%20saber%20m%C3%A1s%20sobre%20estos%20servicios', '_blank')}
              className="w-full"
            >
              <MessageCircle className="mr-2" size={18} />
              Contactar por WhatsApp
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Le Botelier. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Aviso Legal
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
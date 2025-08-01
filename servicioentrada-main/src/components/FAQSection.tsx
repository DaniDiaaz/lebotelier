import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Cuánto tiempo tarda en instalarse?",
      answer: "La instalación completa toma menos de 24 horas. Una vez que nos contactes, coordinamos una videollamada de 30 minutos para configurar todo y en pocas horas tu chatbot estará funcionando."
    },
    {
      question: "¿Mis clientes necesitan descargar alguna app?",
      answer: "No, absolutamente nada. Todo funciona a través de WhatsApp, que tus clientes ya tienen instalado. Es tan simple como enviar un mensaje normal."
    },
    {
      question: "¿Qué pasa si el bot no entiende algo?",
      answer: "El chatbot está diseñado para manejar las situaciones más comunes (reservas, horarios, menú, etc.). Si surge algo especial, deriva la conversación a ti con toda la información recopilada."
    },
    {
      question: "¿Puedo modificar las respuestas del bot?",
      answer: "¡Por supuesto! Tienes un panel súper fácil donde puedes cambiar horarios, precios, menú, y personalizar todas las respuestas desde tu móvil en cualquier momento."
    },
    {
      question: "¿Funciona para todo tipo de restaurantes?",
      answer: "Sí, adaptamos el chatbot a tu tipo de negocio: restaurante tradicional, pizzería, cafetería, bar de tapas, etc. Cada bot se personaliza según tu carta, horarios y estilo."
    },
    {
      question: "¿Qué soporte incluye?",
      answer: "Incluye 7 días de soporte completo para resolver cualquier duda, ajustar respuestas, o hacer cambios. Después, tienes soporte técnico por WhatsApp cuando lo necesites."
    },
    {
      question: "¿Hay algún costo mensual?",
      answer: "Sí, son 99€ al mes o también puedes pagar 249€ en un solo pago, sin mensualidad."
    },
    {
      question: "¿Y si no funciona para mi restaurante?",
      answer: "Tenemos una garantía de 30 días. Si no estás satisfecho con los resultados, te devolvemos el 100% de tu dinero sin hacer preguntas."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Preguntas frecuentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Resolvemos las dudas más comunes sobre nuestro servicio de chatbot
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-sm border border-gold/20 px-6"
              >
                <AccordionTrigger className="text-left text-navy font-semibold hover:text-gold transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-gold/10 to-navy/10 rounded-xl p-6">
              <h3 className="font-bold text-navy mb-2">
                ¿Tienes alguna otra pregunta?
              </h3>
              <p className="text-muted-foreground mb-4">
                Escríbenos y te respondemos en menos de 30 minutos
              </p>
              <a 
                href="https://api.whatsapp.com/send?phone=34674565394&text=Me%20interesa%20saber%20m%C3%A1s..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors"
              >
                💬 Preguntar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
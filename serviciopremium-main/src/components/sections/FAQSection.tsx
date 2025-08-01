import { useState } from "react";

export const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué necesito para empezar a usar el sistema?",
      answer: "Solo necesitas tener WhatsApp Business (gratuito) y nosotros nos encargamos de todo lo demás. Configuramos el chatbot, conectamos el CRM y entrenamos a tu equipo. En 48-72 horas tu sistema está funcionando."
    },
    {
      question: "¿Funciona si no tengo página web o redes sociales?",
      answer: "¡Por supuesto! El sistema funciona 100% a través de WhatsApp. No necesitas web, Instagram ni nada más. Tus clientes solo necesitan tu número de WhatsApp para hacer reservas y recibir promociones."
    },
    {
      question: "¿Cuánto tiempo tarda en implementarse?",
      answer: "La configuración completa toma entre 48-72 horas. Durante este tiempo configuramos el chatbot con tu menú, horarios y estilo de comunicación. Una vez listo, funciona automáticamente las 24 horas."
    },
    {
      question: "¿Puedo cancelar el servicio cuando quiera?",
      answer: "Sí, no hay permanencia. Puedes cancelar con 30 días de aviso. Sin embargo, el 95% de nuestros clientes renuevan porque ven resultados inmediatos en reservas y fidelización."
    },
    {
      question: "¿El chatbot puede manejar pedidos complicados?",
      answer: "El chatbot maneja el 90% de consultas automáticamente. Para casos complejos, deriva la conversación a tu equipo de forma inteligente, identificando exactamente qué necesita el cliente."
    },
    {
      question: "¿Qué pasa con mis datos y los de mis clientes?",
      answer: "Todos los datos están protegidos bajo RGPD europeo. Los almacenamos en servidores seguros en España y solo los usamos para mejorar tu servicio. Tus clientes y datos siempre son tuyos."
    },
    {
      question: "¿Funciona para todo tipo de restaurantes?",
      answer: "Sí, adaptamos el sistema para cualquier tipo: restaurantes familiares, alta cocina, comida rápida, pizzerías, bares de tapas, etc. Cada configuración es única según tu negocio."
    },
    {
      question: "¿Necesito contratar personal extra?",
      answer: "No, al contrario. El sistema reduce la carga de trabajo de tu equipo al automatizar reservas, consultas y promociones. Tu personal puede enfocarse en lo que realmente importa: atender bien a los clientes."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-restaurant-gray">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-restaurant-dark mb-6">
            Preguntas <span className="text-restaurant-red">frecuentes</span>
          </h2>
          <p className="text-xl text-restaurant-text">
            Resolvemos todas tus dudas antes de tomar la decisión más importante para tu restaurante.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-restaurant-gray/50 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-restaurant-dark pr-4">
                  {faq.question}
                </h3>
                <span className="text-restaurant-red text-2xl flex-shrink-0">
                  {openFAQ === index ? '−' : '+'}
                </span>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-restaurant-gray pt-4">
                    <p className="text-restaurant-text leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-restaurant-text mb-4">
            ¿Tienes más preguntas? Hablemos directamente 👇
          </p>
          <div className="bg-restaurant-red/10 p-6 rounded-2xl inline-block">
            <p className="text-restaurant-dark font-semibold mb-2">
              📞 Respuesta garantizada en menos de 2 horas
            </p>
            <p className="text-sm text-restaurant-text">
              Nuestro equipo está disponible para resolver cualquier duda específica sobre tu restaurante
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
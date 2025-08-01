import whatsappMockup from "@/assets/whatsapp-mockup.jpg";

const DemoSection = () => {
  const chatMessages = [
    {
      type: "user",
      message: "Hola! Quería hacer una reserva para esta noche",
      time: "20:15"
    },
    {
      type: "bot",
      message: "¡Hola! 😊 Claro, estaré encantado de ayudarte con tu reserva. ¿Para cuántas personas sería?",
      time: "20:15"
    },
    {
      type: "user",
      message: "Para 4 personas por favor",
      time: "20:16"
    },
    {
      type: "bot",
      message: "Perfecto! Para 4 personas. ¿A qué hora te gustaría cenar? Tenemos disponibilidad a las 21:00, 21:30 y 22:00",
      time: "20:16"
    },
    {
      type: "user",
      message: "A las 21:30 estaría bien",
      time: "20:17"
    },
    {
      type: "bot",
      message: "Excelente! Reserva confirmada para 4 personas hoy a las 21:30 ✅\n\n¿Podrías darme un nombre para la reserva?",
      time: "20:17"
    },
    {
      type: "user",
      message: "Ana García",
      time: "20:18"
    },
    {
      type: "bot",
      message: "¡Listo Ana! 🎉\n\n📅 Reserva confirmada:\n👥 4 personas\n⏰ Hoy 21:30\n📍 Mesa asignada: 12\n\n¿Te gustaría ver nuestra carta especial de hoy?",
      time: "20:18"
    }
  ];

  return (
    <section id="demo-section" className="py-20 bg-gradient-to-br from-muted/30 to-gold/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            💬 Demostración en Vivo
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Mira cómo funciona <span className="text-gold">en acción</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Así de simple es para tus clientes hacer una reserva. Sin llamadas, sin esperas, sin complicaciones.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* WhatsApp Chat Simulation */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-100 rounded-3xl p-4 md:p-6 max-w-sm md:max-w-md mx-auto shadow-2xl">
              {/* WhatsApp Header */}
              <div className="bg-green-600 text-white p-4 rounded-t-2xl flex items-center gap-3 -m-6 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-lg">🍽️</div>
                <div>
                  <h3 className="font-semibold">Restaurante Casa Ana</h3>
                  <p className="text-xs opacity-80">En línea</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-3 h-80 md:h-96 overflow-y-auto">
                {chatMessages.map((msg, index) => (
                  <div 
                    key={index}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
                    style={{animationDelay: `${index * 200}ms`}}
                  >
                    <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                      msg.type === 'user' 
                        ? 'bg-green-500 text-white rounded-br-sm' 
                        : 'bg-white text-gray-800 rounded-bl-sm shadow-sm'
                    }`}>
                      <p className="text-sm">{msg.message}</p>
                      <p className={`text-xs mt-1 ${msg.type === 'user' ? 'text-green-100' : 'text-gray-500'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-navy">
                Reserva completada en <span className="text-gold">menos de 3 minutos</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-semibold text-navy">Respuesta inmediata</h4>
                    <p className="text-muted-foreground text-sm">El cliente no tiene que esperar, el bot responde al instante</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-semibold text-navy">Proceso guiado</h4>
                    <p className="text-muted-foreground text-sm">El bot hace las preguntas correctas para completar la reserva</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-semibold text-navy">Confirmación clara</h4>
                    <p className="text-muted-foreground text-sm">El cliente recibe todos los detalles organizados y confirmados</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gold/10 border border-gold/20 rounded-xl p-6">
              <h4 className="font-bold text-navy mb-2">👨‍💼 Mientras tanto, tú...</h4>
              <p className="text-muted-foreground">
                Puedes seguir cocinando, atendiendo mesas o haciendo cualquier otra cosa. 
                El bot se encarga de todo y tú recibes un resumen organizado de las nuevas reservas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
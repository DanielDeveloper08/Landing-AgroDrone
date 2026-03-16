import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Fan, 
  Leaf, 
  Droplets, 
  Clock, 
  ShieldCheck, 
  Map, 
  Phone, 
  Mail, 
  ChevronRight,
  CheckCircle2,
  DollarSign,
  Droplet,
  Timer,
  TrendingUp
} from 'lucide-react';

export default function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [calcHectares, setCalcHectares] = useState<number>(50);
  const [formHectares, setFormHectares] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-emerald-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 p-2 rounded-lg text-white">
                <Fan className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-emerald-950">AgroDrone</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#beneficios" className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">Beneficios</a>
              <a href="#precio" className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">Precio</a>
              <a href="#contacto" className="text-sm font-medium bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors">
                Agendar Cita
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586771107445-d3af221808b8?q=80&w=2070&auto=format&fit=crop" 
            alt="Drone fumigando campo" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50/80 via-stone-50/95 to-stone-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold tracking-wide mb-6 border border-emerald-200">
              Tecnología Agrícola de Vanguardia
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-emerald-950 tracking-tight mb-6">
              Fumigación de Alta <br className="hidden md:block" />
              <span className="text-emerald-600">Precisión con Drones</span>
            </h1>
            <p className="mt-4 text-xl text-stone-600 max-w-2xl mx-auto mb-10">
              Optimiza tus cultivos, ahorra insumos y protege tu suelo con nuestra tecnología de aplicación aérea. Servicio rápido, eficiente y ecológico.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contacto" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5">
                Cotizar mi campo
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#precio" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-emerald-900 bg-white border border-stone-200 hover:border-emerald-200 hover:bg-emerald-50 transition-all">
                Ver tarifas
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Banner */}
      <section id="precio" className="py-12 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">Tarifa plana y transparente</h2>
              <p className="text-emerald-200/80">Sin costos ocultos. Incluye mapeo del terreno, planificación de vuelo y aplicación precisa del producto.</p>
            </div>
            <div className="flex-shrink-0 text-center md:text-right">
              <div className="text-5xl font-black tracking-tighter text-emerald-400">
                $20<span className="text-2xl font-medium text-emerald-200/60">/ha</span>
              </div>
              <p className="text-sm text-emerald-200/60 mt-1">Precio por hectárea aplicada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="beneficios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-4">¿Por qué elegir fumigación con drones?</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">La agricultura moderna exige soluciones eficientes. Nuestros drones ofrecen ventajas incomparables frente a los métodos tradicionales.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Droplets className="w-6 h-6" />,
                title: "Ahorro de Insumos",
                desc: "Aplicación ultra bajo volumen (UBV) que reduce el uso de agua hasta en un 90% y optimiza el agroquímico."
              },
              {
                icon: <Leaf className="w-6 h-6" />,
                title: "Cero Compactación",
                desc: "Al no usar maquinaria pesada, evitamos la compactación del suelo y el daño mecánico al cultivo."
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Rápida Aplicación",
                desc: "Capacidad de cubrir grandes extensiones en tiempo récord, aprovechando las ventanas climáticas ideales."
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Mayor Seguridad",
                desc: "El operador se mantiene a una distancia segura, reduciendo drásticamente la exposición a productos químicos."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:border-emerald-100 hover:shadow-lg hover:shadow-emerald-900/5 transition-all"
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-emerald-950 mb-3">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
      </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-900/50 text-emerald-300 text-sm font-semibold tracking-wide mb-4 border border-emerald-700/50">
              Simulador Interactivo
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Calcula el Impacto en tu Campo</h2>
            <p className="text-lg text-emerald-200/80 max-w-2xl mx-auto">
              Descubre cuánto puedes ahorrar en agua, tiempo y cultivo al cambiar la maquinaria tradicional por nuestros drones de precisión.
            </p>
          </div>

          <div className="bg-emerald-900/40 border border-emerald-800/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl shadow-black/50">
            <div className="mb-12">
              <div className="flex justify-between items-end mb-4">
                <label className="text-lg font-medium text-emerald-100">Tamaño del lote a fumigar</label>
                <div className="text-4xl font-black text-white">{calcHectares} <span className="text-xl text-emerald-400 font-medium">ha</span></div>
              </div>
              <input 
                type="range" 
                min="1" 
                max="500" 
                value={calcHectares} 
                onChange={(e) => setCalcHectares(Number(e.target.value))}
                className="w-full h-3 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-sm text-emerald-400/60 mt-2 font-medium">
                <span>1 ha</span>
                <span>500 ha</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-emerald-950/50 rounded-2xl p-6 border border-emerald-800/30">
                <div className="text-emerald-400 mb-3"><DollarSign className="w-8 h-8" /></div>
                <div className="text-sm text-emerald-200/70 mb-1">Inversión Total</div>
                <div className="text-3xl font-bold text-white">${(calcHectares * 20).toLocaleString()}</div>
                <div className="text-xs text-emerald-400/60 mt-2">A $20 por hectárea</div>
              </div>
              <div className="bg-emerald-950/50 rounded-2xl p-6 border border-emerald-800/30">
                <div className="text-blue-400 mb-3"><Droplet className="w-8 h-8" /></div>
                <div className="text-sm text-emerald-200/70 mb-1">Agua Ahorrada</div>
                <div className="text-3xl font-bold text-white">{(calcHectares * 90).toLocaleString()} L</div>
                <div className="text-xs text-emerald-400/60 mt-2">Vs. aplicación tradicional</div>
              </div>
              <div className="bg-emerald-950/50 rounded-2xl p-6 border border-emerald-800/30">
                <div className="text-amber-400 mb-3"><Timer className="w-8 h-8" /></div>
                <div className="text-sm text-emerald-200/70 mb-1">Tiempo Estimado</div>
                <div className="text-3xl font-bold text-white">{(calcHectares / 10).toFixed(1)} hrs</div>
                <div className="text-xs text-emerald-400/60 mt-2">Rendimiento: 10 ha/hora</div>
              </div>
              <div className="bg-emerald-950/50 rounded-2xl p-6 border border-emerald-800/30">
                <div className="text-emerald-400 mb-3"><TrendingUp className="w-8 h-8" /></div>
                <div className="text-sm text-emerald-200/70 mb-1">Cultivo Salvado</div>
                <div className="text-3xl font-bold text-white">~{(calcHectares * 0.03).toFixed(1)} ha</div>
                <div className="text-xs text-emerald-400/60 mt-2">Sin huella de tractor (3%)</div>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => {
                  setFormHectares(calcHectares.toString());
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-emerald-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-1"
              >
                Agendar {calcHectares} hectáreas ahora
                <ChevronRight className="ml-2 w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6">Agenda tu servicio hoy mismo</h2>
              <p className="text-lg text-stone-600 mb-8">
                Completa el formulario y nos pondremos en contacto contigo a la brevedad para coordinar los detalles de la aplicación en tu campo.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                    <Map className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-950">Cobertura</h4>
                    <p className="text-stone-600">Servicio disponible en toda la región agrícola central.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-950">Llámanos</h4>
                    <p className="text-stone-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-950">Correo</h4>
                    <p className="text-stone-600">contacto@agrodrone.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-emerald-900 rounded-2xl text-white">
                <h4 className="font-semibold text-lg mb-2">¿Necesitas asesoría?</h4>
                <p className="text-emerald-200/80 text-sm mb-4">Nuestros ingenieros agrónomos están listos para evaluar tu cultivo y recomendarte el mejor plan de aplicación.</p>
                <button className="text-sm font-medium text-white border-b border-emerald-400 pb-0.5 hover:text-emerald-300 transition-colors">
                  Hablar con un experto &rarr;
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-stone-200/50 border border-stone-100">
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-950 mb-2">¡Solicitud Recibida!</h3>
                  <p className="text-stone-600 mb-8">Nos comunicaremos contigo muy pronto para coordinar tu servicio de fumigación.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="px-6 py-3 bg-stone-100 text-stone-700 rounded-full font-medium hover:bg-stone-200 transition-colors"
                  >
                    Enviar otra solicitud
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-bold text-emerald-950 mb-6">Detalles del Servicio</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-stone-700">Nombre completo</label>
                      <input required type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Juan Pérez" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-sm font-medium text-stone-700">Teléfono</label>
                      <input required type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="+1 234 567 890" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-stone-700">Correo electrónico</label>
                    <input required type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="juan@ejemplo.com" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="hectares" className="text-sm font-medium text-stone-700">Hectáreas a fumigar</label>
                      <div className="relative">
                        <input 
                          required 
                          type="number" 
                          min="1" 
                          id="hectares" 
                          value={formHectares}
                          onChange={(e) => setFormHectares(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all pr-12" 
                          placeholder="50" 
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 font-medium">ha</span>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="crop" className="text-sm font-medium text-stone-700">Tipo de cultivo</label>
                      <input required type="text" id="crop" className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Ej. Maíz, Soja, Trigo" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="date" className="text-sm font-medium text-stone-700">Fecha preferida (Opcional)</label>
                    <div className="relative">
                      <input type="date" id="date" className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-stone-700">Mensaje adicional</label>
                    <textarea id="message" rows={3} className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none" placeholder="Cuéntanos más sobre el terreno, tipo de producto a aplicar, etc."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-600/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      "Agendar Servicio"
                    )}
                  </button>
                  <p className="text-xs text-center text-stone-500 mt-4">
                    Al enviar este formulario, aceptas que nos comuniquemos contigo para coordinar el servicio.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-200/60 py-12 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-white">
              <Fan className="w-6 h-6" />
              <span className="font-bold text-xl tracking-tight">AgroDrone</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} AgroDrone. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

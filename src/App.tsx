import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
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
  TrendingUp,
  Star,
  Quote
} from 'lucide-react';

export default function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [calcHectares, setCalcHectares] = useState<number>(50);
  const [formHectares, setFormHectares] = useState<string>('');

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const getPricePerHa = (ha: number) => {
    if (ha <= 5) return 30;
    if (ha <= 20) return 25;
    return 20;
  };

  const currentPrice = getPricePerHa(calcHectares);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://dasanza.app.n8n.cloud/webhook/b8c288b0-4d07-471a-a5df-7a7c49ba479f', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setFormHectares('');
      } else {
        console.error('Error submitting form');
        setFormStatus('idle');
        alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('idle');
      alert('Hubo un error de conexión. Por favor, inténtalo de nuevo.');
    }
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
            <div className="flex items-center gap-4 md:gap-8">
              <div className="hidden md:flex items-center gap-8">
                <a href="#beneficios" className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">Beneficios</a>
                <a href="#precio" className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">Precio</a>
                <a href="#testimonios" className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">Testimonios</a>
              </div>
              <a href="#contacto" className="text-sm font-medium bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors shadow-sm">
                Agendar <span className="hidden sm:inline">Cita</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-24 md:pb-20 overflow-hidden bg-stone-50">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-emerald-200/50 blur-[120px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-teal-200/40 blur-[100px]"
          />
          {/* Stylized Field Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="field-pattern" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(20)">
                <line x1="0" y1="0" x2="0" y2="80" stroke="#064e3b" strokeWidth="2" />
                <line x1="20" y1="0" x2="20" y2="80" stroke="#064e3b" strokeWidth="1" />
                <line x1="40" y1="0" x2="40" y2="80" stroke="#064e3b" strokeWidth="2" />
                <line x1="60" y1="0" x2="60" y2="80" stroke="#064e3b" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#field-pattern)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
              style={{ y: y1, opacity }}
              className="text-emerald-950"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 border border-emerald-200 backdrop-blur-sm mb-6 shadow-sm"
              >
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-sm font-bold text-emerald-800">Tecnología Agrícola de Precisión</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]"
              >
                El futuro de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">fumigación</span> en tus manos
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg md:text-xl text-stone-600 mb-8 max-w-xl leading-relaxed"
              >
                Optimiza tus recursos, protege tus cultivos y maximiza tu rentabilidad con nuestros drones de última generación en Ecuador.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href="#contacto" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:-translate-y-0.5 transform duration-200">
                  Cotizar Servicio
                </a>
                <a href="#beneficios" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-full text-emerald-700 bg-white hover:bg-stone-50 border border-stone-200 shadow-sm transition-colors hover:-translate-y-0.5 transform duration-200">
                  Ver Beneficios
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Visual (Drone / Ag Scene) */}
            <motion.div 
              style={{ y: y2 }}
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0"
            >
              {/* Main Scene Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                className="relative w-full max-w-lg px-4 sm:px-0"
              >
                {/* Hovering Animation Wrapper */}
                <motion.div
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  {/* Main Image */}
                  <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border-4 sm:border-8 border-white shadow-2xl shadow-emerald-900/20 bg-white">
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent z-10" />
                    <img 
                      src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000" 
                      alt="Campo agrícola" 
                      className="w-full h-[350px] sm:h-[450px] object-cover"
                    />
                    
                    {/* Stylized Drone Overlay inside image */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                      <motion.div
                        animate={{ y: [-8, 8, -8] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/30 shadow-lg"
                      >
                        <Fan className="w-16 h-16 text-white drop-shadow-lg" />
                      </motion.div>
                      {/* Mist effect */}
                      <motion.div 
                        animate={{ 
                          opacity: [0, 0.9, 0],
                          y: [0, 120],
                          scaleX: [1, 4],
                          scaleY: [1, 2.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        className="w-10 h-4 bg-white/60 blur-md rounded-full mt-2"
                      />
                    </div>
                  </div>

                  {/* Floating UI Card 1 */}
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -right-2 sm:-right-6 top-10 sm:top-20 bg-white/90 backdrop-blur-md border border-stone-100 p-3 sm:p-4 rounded-2xl shadow-xl z-30 scale-90 sm:scale-100 origin-right"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-100 p-2.5 rounded-xl text-emerald-600">
                        <Map className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-emerald-950 font-bold text-sm">Mapeo 3D</p>
                        <p className="text-stone-500 text-xs">Rutas automatizadas</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating UI Card 2 */}
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="absolute -left-2 sm:-left-6 bottom-16 sm:bottom-24 bg-white/90 backdrop-blur-md border border-stone-100 p-3 sm:p-4 rounded-2xl shadow-xl z-30 scale-90 sm:scale-100 origin-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2.5 rounded-xl text-blue-600">
                        <Droplets className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-emerald-950 font-bold text-sm">-90% Agua</p>
                        <p className="text-stone-500 text-xs">Ultra bajo volumen</p>
                      </div>
                    </div>
                  </motion.div>

                </motion.div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Pricing Banner */}
      <section id="precio" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-4">Tarifas Flexibles y Transparentes</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Precios ajustados al tamaño de tu terreno. Mientras más hectáreas, menor es el costo por unidad.
            </p>
            <div className="mt-4 inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-lg text-sm font-medium border border-amber-200">
              * Nota importante: Las tarifas no incluyen los agroquímicos.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Tier 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-stone-200/50 border border-stone-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-bold text-emerald-950 mb-2">Pequeños Productores</h3>
              <p className="text-stone-500 mb-6">De 1 a 5 hectáreas</p>
              <div className="text-5xl font-black text-emerald-600 mb-2">
                $30<span className="text-xl text-stone-400 font-medium">/ha</span>
              </div>
              <p className="text-sm text-stone-500 mb-8">Ideal para parcelas pequeñas y pruebas de eficacia.</p>
              <a href="#contacto" onClick={() => setFormHectares('5')} className="mt-auto w-full py-3 px-6 rounded-full font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors">
                Seleccionar
              </a>
            </div>

            {/* Tier 2 */}
            <div className="bg-emerald-950 rounded-3xl p-8 shadow-xl shadow-emerald-900/20 border border-emerald-800 flex flex-col items-center text-center transform md:-translate-y-4 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                MÁS POPULAR
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Medianos Productores</h3>
              <p className="text-emerald-200/60 mb-6">De 6 a 20 hectáreas</p>
              <div className="text-5xl font-black text-emerald-400 mb-2">
                $25<span className="text-xl text-emerald-200/40 font-medium">/ha</span>
              </div>
              <p className="text-sm text-emerald-200/60 mb-8">El equilibrio perfecto para fincas de tamaño medio.</p>
              <a href="#contacto" onClick={() => setFormHectares('15')} className="mt-auto w-full py-3 px-6 rounded-full font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-colors">
                Seleccionar
              </a>
            </div>

            {/* Tier 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-stone-200/50 border border-stone-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-bold text-emerald-950 mb-2">Grandes Extensiones</h3>
              <p className="text-stone-500 mb-6">Más de 20 hectáreas</p>
              <div className="text-5xl font-black text-emerald-600 mb-2">
                $20<span className="text-xl text-stone-400 font-medium">/ha</span>
              </div>
              <p className="text-sm text-stone-500 mb-8">Máximo ahorro para haciendas y grandes cultivos.</p>
              <a href="#contacto" onClick={() => setFormHectares('50')} className="mt-auto w-full py-3 px-6 rounded-full font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors">
                Seleccionar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="beneficios" className="py-16 md:py-24 bg-stone-50">
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
                className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all group"
              >
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                  className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-emerald-950 mb-3">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
      </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section className="py-16 md:py-24 bg-emerald-950 text-white relative overflow-hidden">
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

          <div className="bg-emerald-900/40 border border-emerald-800/50 rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-sm shadow-2xl shadow-black/50">
            <div className="mb-10 md:mb-12">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 sm:mb-4 gap-2">
                <label className="text-base sm:text-lg font-medium text-emerald-100">Tamaño del lote a fumigar</label>
                <div className="text-4xl md:text-5xl font-black text-white">{calcHectares} <span className="text-xl text-emerald-400 font-medium">ha</span></div>
              </div>
              <input 
                type="range" 
                min="1" 
                max="500" 
                value={calcHectares} 
                onChange={(e) => setCalcHectares(Number(e.target.value))}
                className="w-full h-4 sm:h-3 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-xs sm:text-sm text-emerald-400/60 mt-3 sm:mt-2 font-medium">
                <span>1 ha</span>
                <span>500 ha</span>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-10 md:mb-12">
              <div className="bg-emerald-950/50 rounded-2xl p-4 sm:p-6 border border-emerald-800/30 flex flex-col justify-between">
                <div className="text-emerald-400 mb-2 sm:mb-3"><DollarSign className="w-6 h-6 sm:w-8 sm:h-8" /></div>
                <div>
                  <div className="text-xs sm:text-sm text-emerald-200/70 mb-1">Inversión Total</div>
                  <div className="text-xl sm:text-3xl font-bold text-white">${(calcHectares * currentPrice).toLocaleString()}</div>
                  <div className="text-[10px] sm:text-xs text-emerald-400/60 mt-1 sm:mt-2">A ${currentPrice} por hectárea</div>
                </div>
              </div>
              <div className="bg-emerald-950/50 rounded-2xl p-4 sm:p-6 border border-emerald-800/30 flex flex-col justify-between">
                <div className="text-blue-400 mb-2 sm:mb-3"><Droplet className="w-6 h-6 sm:w-8 sm:h-8" /></div>
                <div>
                  <div className="text-xs sm:text-sm text-emerald-200/70 mb-1">Agua Ahorrada</div>
                  <div className="text-xl sm:text-3xl font-bold text-white">{(calcHectares * 90).toLocaleString()} L</div>
                  <div className="text-[10px] sm:text-xs text-emerald-400/60 mt-1 sm:mt-2">Vs. método tradicional</div>
                </div>
              </div>
              <div className="bg-emerald-950/50 rounded-2xl p-4 sm:p-6 border border-emerald-800/30 flex flex-col justify-between">
                <div className="text-amber-400 mb-2 sm:mb-3"><Timer className="w-6 h-6 sm:w-8 sm:h-8" /></div>
                <div>
                  <div className="text-xs sm:text-sm text-emerald-200/70 mb-1">Tiempo Estimado</div>
                  <div className="text-xl sm:text-3xl font-bold text-white">{(calcHectares / 10).toFixed(1)} hrs</div>
                  <div className="text-[10px] sm:text-xs text-emerald-400/60 mt-1 sm:mt-2">Rendimiento: 10 ha/hora</div>
                </div>
              </div>
              <div className="bg-emerald-950/50 rounded-2xl p-4 sm:p-6 border border-emerald-800/30 flex flex-col justify-between">
                <div className="text-emerald-400 mb-2 sm:mb-3"><TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" /></div>
                <div>
                  <div className="text-xs sm:text-sm text-emerald-200/70 mb-1">Cultivo Salvado</div>
                  <div className="text-xl sm:text-3xl font-bold text-white">~{(calcHectares * 0.03).toFixed(1)} ha</div>
                  <div className="text-[10px] sm:text-xs text-emerald-400/60 mt-1 sm:mt-2">Sin huella de tractor</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => {
                  setFormHectares(calcHectares.toString());
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-4 text-base sm:text-lg font-bold rounded-full text-emerald-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-1"
              >
                Agendar {calcHectares} ha ahora
                <ChevronRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-16 md:py-24 bg-white text-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Productores de la Costa y Sierra confían en AgroDrone para proteger sus cultivos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Carlos Mendoza",
                location: "Guayas, Costa",
                crop: "Arroz",
                text: "El ahorro en agua y químicos es impresionante. Antes tardábamos días en fumigar, ahora con los drones terminamos en horas y sin pisar el cultivo."
              },
              {
                name: "María Fernanda López",
                location: "Pichincha, Sierra",
                crop: "Papa",
                text: "La precisión en terrenos irregulares de la sierra es increíble. El dron mantiene la altura perfecta y la cobertura es uniforme. Excelente servicio."
              },
              {
                name: "Roberto Zambrano",
                location: "Los Ríos, Costa",
                crop: "Banano",
                text: "Muy profesionales. La tarifa escalonada me ayudó mucho ya que tengo más de 50 hectáreas. La inversión se recupera sola con lo que salvas de cultivo."
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-stone-50 rounded-3xl p-6 md:p-8 border border-stone-200 shadow-lg shadow-stone-200/50 relative hover:-translate-y-1 transition-transform">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-emerald-100" />
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-stone-700 text-base md:text-lg leading-relaxed mb-8 relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-xl font-bold text-emerald-700 shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-950">{testimonial.name}</h4>
                    <p className="text-sm text-stone-500">{testimonial.crop} • {testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-16 md:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Info */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6">Agenda tu servicio hoy mismo</h2>
              <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Completa el formulario y nos pondremos en contacto contigo a la brevedad para coordinar los detalles de la aplicación en tu campo.
              </p>
              
              <div className="space-y-6 text-left max-w-md mx-auto lg:mx-0">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                    <Map className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-950">Cobertura</h4>
                    <p className="text-stone-600">Atendemos en toda la Costa y Sierra Ecuatoriana.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-950">Llámanos</h4>
                    <p className="text-stone-600">0995006332</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-950">Correo</h4>
                    <p className="text-stone-600">ecuadorfumiga@agrodone.com</p>
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
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-stone-200/50 border border-stone-100">
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
                      <input required type="text" id="name" name="name" className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Juan Pérez" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-sm font-medium text-stone-700">Teléfono</label>
                      <input required type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="*593 965 556 776" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-stone-700">Correo electrónico</label>
                    <input required type="email" id="email" name="email" className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="juan@ejemplo.com" />
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
                          name="hectares"
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
                      <input required type="text" id="crop" name="crop" className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Ej. Maíz, Soja, Trigo" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="date" className="text-sm font-medium text-stone-700">Fecha preferida (Opcional)</label>
                    <div className="relative">
                      <input type="date" id="date" name="date" className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-stone-700">Mensaje adicional</label>
                    <textarea id="message" name="message" rows={3} className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none" placeholder="Cuéntanos más sobre el terreno, tipo de producto a aplicar, etc."></textarea>
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-2 text-white">
              <Fan className="w-6 h-6" />
              <span className="font-bold text-xl tracking-tight">AgroDrone</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
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

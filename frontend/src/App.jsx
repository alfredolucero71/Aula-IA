import { useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Bot,
  Brain,
  Check,
  ChevronDown,
  Clock3,
  FileText,
  GraduationCap,
  Menu,
  MessageCircle,
  Play,
  Sparkles,
  WandSparkles,
  X,
} from "lucide-react";

import RobotAssistant from "./components/landing/RobotAssistant";
import AuthPanel from "./components/auth/AuthPanel";

import "./App.css";

const agents = [
  {
    icon: GraduationCap,
    title: "Arquitecto de Clases",
    description:
      "Transforma tus objetivos pedagógicos en clases estructuradas y listas para trabajar.",
  },
  {
    icon: FileText,
    title: "Generador de Materiales",
    description:
      "Crea actividades, recursos y materiales adaptados a tus alumnos.",
  },
  {
    icon: Brain,
    title: "Planificador IA",
    description:
      "Organiza tus planificaciones utilizando el contexto pedagógico de tu institución.",
  },
  {
    icon: WandSparkles,
    title: "Corrector de Evaluaciones",
    description:
      "Analiza evaluaciones y genera devoluciones útiles para docentes y estudiantes.",
  },
];

const benefits = [
  "Diseñado específicamente para docentes",
  "Trabaja con tu contexto pedagógico",
  "Ahorra tiempo en tareas repetitivas",
  "Genera materiales listos para editar",
];

const faqs = [
  {
    question: "¿Qué es AulaIA?",
    answer:
      "AulaIA es un sistema de asistentes de Inteligencia Artificial diseñado específicamente para acompañar el trabajo docente.",
  },
  {
    question: "¿Tengo que saber utilizar Inteligencia Artificial?",
    answer:
      "No. Los agentes están diseñados para que el docente pueda utilizarlos mediante instrucciones sencillas.",
  },
  {
    question: "¿Puedo probar AulaIA antes de contratarlo?",
    answer:
      "Sí. La primera versión permitirá probar los agentes disponibles con una cantidad limitada de usos.",
  },
  {
    question: "¿AulaIA reemplaza al docente?",
    answer:
      "No. AulaIA está pensado como asistente. Las decisiones pedagógicas continúan estando en manos del docente.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [authMode, setAuthMode] = useState(null);

  const scrollTo = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const showComingSoon = (message) => {
    alert(message);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050816] text-white">

      {/* =====================================================
          BACKGROUND GLOBAL
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute left-1/2 top-[-250px] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[140px]" />

        <div className="absolute right-[-200px] top-[500px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="absolute left-[-200px] top-[1000px] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#050816]/75 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

          {/* LOGO */}

          <button
            onClick={() => scrollTo("inicio")}
            className="flex items-center gap-3"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/20">

              <Bot size={23} />

            </div>

            <div className="text-left">

              <div className="text-lg font-bold tracking-tight">
                Aula<span className="text-cyan-300">IA</span>
              </div>

              <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">
                Docentes IA PRO
              </div>

            </div>

          </button>

          {/* NAV DESKTOP */}

          <nav className="hidden items-center gap-8 md:flex">

            <button
              onClick={() => scrollTo("agentes")}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Agentes IA
            </button>

            <button
              onClick={() => scrollTo("como-funciona")}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Cómo funciona
            </button>

            <button
              onClick={() => scrollTo("beneficios")}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Beneficios
            </button>

            <button
              onClick={() => scrollTo("preguntas")}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Preguntas
            </button>

          </nav>

          {/* ACCIONES DESKTOP */}

          <div className="hidden items-center gap-3 md:flex">

            <button
              onClick={() =>
                setAuthMode("register")
              }
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
            >
              Ingresar
            </button>

            <button
              onClick={() =>
                setAuthMode("register")
              }
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-slate-950 shadow-xl shadow-white/10 transition hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              Probar AulaIA
            </button>

          </div>

          {/* MENU MOBILE */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/10 p-2 md:hidden"
            aria-label="Abrir menú"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>

        {menuOpen && (
          <div className="border-t border-white/5 bg-[#070b1d] px-5 py-5 md:hidden">

            <div className="flex flex-col gap-2">

              {[
                ["agentes", "Agentes IA"],
                ["como-funciona", "Cómo funciona"],
                ["beneficios", "Beneficios"],
                ["preguntas", "Preguntas"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="rounded-xl px-4 py-3 text-left text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {label}
                </button>
              ))}

              <button
                onClick={() =>
                  setAuthMode("register")
                }
                className="mt-2 rounded-xl bg-white px-4 py-3 font-bold text-slate-950"
              >
                Probar AulaIA
              </button>

            </div>

          </div>
        )}

      </header>

      {/* =====================================================
          CONTENIDO PRINCIPAL
      ====================================================== */}

      <main>

        {/* ===================================================
            HERO
        ==================================================== */}

        <section
          id="inicio"
          className="relative flex min-h-screen items-center pt-20"
        >

          {/* Luces específicas del Hero */}

          <div className="pointer-events-none absolute left-[-200px] top-[20%] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />

          <div className="pointer-events-none absolute right-[-180px] top-[30%] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px]" />

          <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">

            {/* =================================================
                TEXTO HERO
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative z-10"
            >

              {/* Badge */}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-sm text-cyan-200"
              >

                <Sparkles className="h-4 w-4" />

                Inteligencia Artificial para docentes

              </motion.div>

              {/* Título */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
                className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
              >

                Tu nuevo

                <span className="block bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                  asistente docente.
                </span>

              </motion.h1>

              {/* Descripción */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl"
              >

                Planificá, prepará clases, generá actividades y
                evaluaciones con un equipo de agentes de Inteligencia
                Artificial pensado especialmente para tu realidad docente.

              </motion.p>

              {/* Botones */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >

                <button
                  onClick={() =>
                    showComingSoon(
                      "La prueba gratuita estará disponible próximamente."
                    )
                  }
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-bold text-slate-950 shadow-2xl shadow-white/10 transition hover:-translate-y-1 hover:bg-cyan-100"
                >

                  Probar AulaIA gratis

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />

                </button>

                <button
                  onClick={() => scrollTo("agentes")}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/[0.07]"
                >

                  <Play size={17} />

                  Conocer los agentes

                </button>

              </motion.div>

              {/* Beneficios rápidos */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.7,
                }}
                className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500"
              >

                <span className="flex items-center gap-2">

                  <Check size={16} className="text-cyan-300" />

                  Sin experiencia en IA

                </span>

                <span className="flex items-center gap-2">

                  <Check size={16} className="text-cyan-300" />

                  Pensado para docentes

                </span>

                <span className="flex items-center gap-2">

                  <Check size={16} className="text-cyan-300" />

                  Prueba limitada gratuita

                </span>

              </motion.div>

            </motion.div>

            {/* =================================================
                ROBOT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                x: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="relative mx-auto flex min-h-[560px] w-full max-w-[570px] items-center justify-center"
            >

              <RobotAssistant />

            </motion.div>

          </div>

        </section>

        {/* =====================================================
            TRUST BAR
        ====================================================== */}

        <section className="border-y border-white/5 bg-white/[0.015]">

          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 py-7 text-center text-sm text-slate-500 sm:px-8">

            <span>Planificación</span>
            <span>Actividades</span>
            <span>Materiales</span>
            <span>Evaluaciones</span>
            <span>Devoluciones</span>
            <span>Asistencia pedagógica</span>

          </div>

        </section>

        {/* =====================================================
            BENEFICIOS
        ====================================================== */}

        <section
          id="beneficios"
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"
        >

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Más que un chatbot
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">

                Una IA que entiende

                <span className="text-cyan-300">
                  {" "}el trabajo docente.
                </span>

              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">

                AulaIA no busca reemplazar al docente. Busca quitarle
                de encima parte del trabajo repetitivo para que pueda
                dedicar más tiempo a enseñar.

              </p>

              <div className="mt-8 space-y-4">

                {benefits.map((benefit) => (

                  <div
                    key={benefit}
                    className="flex items-center gap-3 text-slate-200"
                  >

                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">

                      <Check size={14} />

                    </div>

                    {benefit}

                  </div>

                ))}

              </div>

            </div>

            {/* Tarjeta simulación IA */}

            <div className="relative">

              <div className="absolute inset-0 rounded-[2rem] bg-indigo-500/10 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl sm:p-8">

                <div className="flex items-center gap-4 border-b border-white/10 pb-6">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400">

                    <Bot />

                  </div>

                  <div>

                    <div className="font-bold">
                      AulaIA
                    </div>

                    <div className="text-sm text-slate-500">
                      Asistente docente
                    </div>

                  </div>

                  <div className="ml-auto flex items-center gap-2 text-xs text-emerald-300">

                    <span className="h-2 w-2 rounded-full bg-emerald-400" />

                    Disponible

                  </div>

                </div>

                <div className="space-y-5 py-7">

                  <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-indigo-500/15 p-4 text-sm leading-6 text-indigo-100">

                    Necesito preparar una clase de Ciencias Naturales
                    para quinto grado.

                  </div>

                  <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-slate-300">

                    <div className="mb-3 flex items-center gap-2 font-semibold text-cyan-300">

                      <Sparkles size={15} />

                      AulaIA está trabajando...

                    </div>

                    Voy a ayudarte a estructurar la clase teniendo
                    en cuenta tus objetivos, el nivel de los alumnos
                    y el tiempo disponible.

                  </div>

                </div>

                <div className="rounded-xl border border-white/5 bg-black/20 px-4 py-3 text-xs text-slate-500">

                  El docente sigue tomando las decisiones pedagógicas.

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            AGENTES
        ====================================================== */}

        <section
          id="agentes"
          className="border-y border-white/5 bg-white/[0.015]"
        >

          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">

            <div className="mx-auto max-w-3xl text-center">

              <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Tu equipo de asistentes
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">

                Varios agentes.

                <span className="block text-slate-400">
                  Un solo espacio de trabajo.
                </span>

              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">

                Cada agente tiene una función específica dentro del
                trabajo docente.

              </p>

            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {agents.map((agent, index) => {

                const Icon = agent.icon;

                return (
                  <motion.div
                    key={agent.title}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-80px",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/20 hover:bg-white/[0.05]"
                  >

                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 text-cyan-300 transition group-hover:scale-110">

                      <Icon size={25} />

                    </div>

                    <h3 className="text-lg font-bold">
                      {agent.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {agent.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-cyan-300">

                      Conocer agente

                      <ArrowRight size={14} />

                    </div>

                  </motion.div>
                );

              })}

            </div>

          </div>

        </section>

        {/* =====================================================
            CÓMO FUNCIONA
        ====================================================== */}

        <section
          id="como-funciona"
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"
        >

          <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:items-center">

            <div>

              <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Cómo funciona
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">

                De la idea

                <span className="block text-slate-400">
                  al material listo.
                </span>

              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">

                El objetivo es simplificar el trabajo, no agregar otra
                herramienta complicada a tu día.

              </p>

              <button
                onClick={() =>
                  showComingSoon(
                    "La demostración estará disponible próximamente."
                  )
                }
                className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold transition hover:bg-white/5"
              >

                <MessageCircle size={17} />

                Ver demostración

              </button>

            </div>

            <div className="space-y-5">

              {[
                [
                  "01",
                  "Indicá qué necesitás",
                  "Escribí tu objetivo con lenguaje natural.",
                ],
                [
                  "02",
                  "AulaIA analiza el contexto",
                  "El sistema utiliza la información disponible para orientar la respuesta.",
                ],
                [
                  "03",
                  "El agente genera una propuesta",
                  "Obtenés una primera versión que podés revisar y modificar.",
                ],
                [
                  "04",
                  "Vos decidís",
                  "El docente mantiene siempre el control sobre el resultado final.",
                ],
              ].map(([number, title, description]) => (

                <div
                  key={number}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-sm font-bold text-cyan-300">

                    {number}

                  </div>

                  <div>

                    <h3 className="font-bold">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            CTA PRUEBA GRATUITA
        ====================================================== */}

        <section className="px-5 py-10 sm:px-8">

          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-gradient-to-br from-indigo-600/20 via-[#10162e] to-cyan-500/10 p-8 text-center sm:p-14">

            <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="relative">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">

                <Sparkles />

              </div>

              <h2 className="mt-6 text-3xl font-black sm:text-4xl">

                Probá AulaIA antes de decidir.

              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-400">

                Accedé a los agentes disponibles y descubrí cómo puede
                ayudarte un asistente de IA pensado para docentes.

              </p>

              <button
                onClick={() =>
                  showComingSoon(
                    "El registro estará disponible próximamente."
                  )
                }
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-100"
              >

                Comenzar prueba

                <ArrowRight size={18} />

              </button>

              <p className="mt-4 text-xs text-slate-500">

                Primera versión con usos de prueba limitados.

              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            FAQ
        ====================================================== */}

        <section
          id="preguntas"
          className="mx-auto max-w-4xl px-5 py-24 sm:px-8 lg:py-32"
        >

          <div className="text-center">

            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Preguntas frecuentes
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Antes de comenzar
            </h2>

          </div>

          <div className="mt-12 space-y-3">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]"
                >

                  <button
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left font-semibold"
                  >

                    {faq.question}

                    <ChevronDown
                      size={19}
                      className={`shrink-0 transition-transform ${
                        isOpen
                          ? "rotate-180 text-cyan-300"
                          : "text-slate-500"
                      }`}
                    />

                  </button>

                  {isOpen && (
                    <div className="border-t border-white/5 px-5 pb-5 pt-4 text-sm leading-7 text-slate-400">

                      {faq.answer}

                    </div>
                  )}

                </div>
              );

            })}

          </div>

        </section>

      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-white/5 bg-black/20">

        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400">

                <Bot size={19} />

              </div>

              <div className="font-bold">

                Aula<span className="text-cyan-300">IA</span>

              </div>

            </div>

            <p className="mt-3 text-sm text-slate-600">

              Tu equipo inteligente para planificar, enseñar y evaluar.

            </p>

          </div>

          <div className="text-sm text-slate-600">

            © 2026 AulaIA · Docentes IA PRO

          </div>

        </div>

      </footer>

      <AuthPanel mode={authMode} onClose={() => setAuthMode(null)} />



    </div>
  );
}

export default App;
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Check,
  Clock3,
  Play,
  Sparkles,
  WandSparkles,
} from "lucide-react";

import heroImage from "../../assets/hero.png";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100vh-80px)] overflow-hidden"
    >
      {/* =========================================================
          FONDO GENERAL
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Luz izquierda */}
        <div className="absolute -left-[300px] top-[15%] h-[650px] w-[650px] rounded-full bg-cyan-500/[0.07] blur-[150px]" />

        {/* Luz derecha */}
        <div className="absolute -right-[250px] top-[20%] h-[650px] w-[650px] rounded-full bg-violet-600/[0.08] blur-[160px]" />

        {/* Luz central detrás del robot */}
        <div className="absolute right-[15%] top-[20%] h-[550px] w-[550px] rounded-full bg-blue-500/[0.06] blur-[130px]" />

        {/* Puntos decorativos izquierda */}
        <div className="absolute bottom-[12%] left-[3%] grid grid-cols-6 gap-3 opacity-50">
          {Array.from({ length: 24 }).map((_, index) => (
            <span
              key={index}
              className="h-1 w-1 rounded-full bg-cyan-300/40"
            />
          ))}
        </div>

        {/* Puntos decorativos derecha */}
        <div className="absolute right-[2%] top-[12%] grid grid-cols-6 gap-3 opacity-40">
          {Array.from({ length: 24 }).map((_, index) => (
            <span
              key={index}
              className="h-1 w-1 rounded-full bg-violet-300/50"
            />
          ))}
        </div>
      </div>

      {/* =========================================================
          CONTENEDOR PRINCIPAL
      ========================================================== */}

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-[1400px] items-center gap-8 px-6 pb-10 pt-24 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:pt-20 xl:px-16">
        {/* =======================================================
            COLUMNA IZQUIERDA
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative z-20"
        >
          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/[0.05] px-5 py-2.5 text-sm font-semibold text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.05)]"
          >
            <Sparkles className="h-4 w-4 text-cyan-300" />

            <span>Inteligencia Artificial para docentes</span>
          </motion.div>

          {/* Título */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="max-w-[760px] text-5xl font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl xl:text-[82px]"
          >
            Tu nuevo
            <span className="block bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
              asistente docente.
            </span>
          </motion.h1>

          {/* Descripción */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="mt-7 max-w-[680px] text-lg leading-8 text-slate-400 sm:text-xl"
          >
            Planifica, crea actividades, genera materiales y analiza
            evaluaciones con un equipo de agentes de Inteligencia Artificial
            pensado para tu realidad docente.
          </motion.p>

          {/* Botones */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            {/* CTA PRINCIPAL */}

            <motion.a
              href="#probar"
              whileHover={{
                y: -2,
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-base font-bold text-slate-950 shadow-[0_15px_45px_rgba(255,255,255,0.12)] transition hover:bg-cyan-50"
            >
              Prueba AulaIA gratis

              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            {/* CTA SECUNDARIO */}

            <motion.a
              href="#agentes"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] px-7 py-4 text-base font-semibold text-white backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <Play className="h-4 w-4 fill-white" />

              Conocer los agentes
            </motion.a>
          </motion.div>

          {/* Beneficios */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
            className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500"
          >
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-cyan-300" />

              Sin experiencia en IA
            </span>

            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-cyan-300" />

              Pensado para docentes
            </span>

            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-cyan-300" />

              Prueba limitada gratuita
            </span>
          </motion.div>
        </motion.div>

        {/* =======================================================
            COLUMNA DERECHA — ROBOT
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 45,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative flex min-h-[520px] items-center justify-center lg:min-h-[650px]"
        >
          {/* =====================================================
              AURA DETRÁS DEL ROBOT
          ====================================================== */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.35, 0.5, 0.35],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[100px]"
          />

          <motion.div
            animate={{
              scale: [1.05, 0.95, 1.05],
              opacity: [0.15, 0.28, 0.15],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.08] blur-[130px]"
          />

          {/* =====================================================
              ANILLOS DECORATIVOS
          ====================================================== */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[570px] w-[570px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.08]"
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[490px] w-[490px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/[0.08]"
          />

          {/* =====================================================
              IMAGEN PRINCIPAL DEL ROBOT
          ====================================================== */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 flex w-full items-center justify-center"
          >
            <img
              src={heroImage}
              alt="Asistente docente de AulaIA"
              className="relative z-10 w-full max-w-[650px] object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            />
          </motion.div>

          {/* =====================================================
              TARJETA SUPERIOR IZQUIERDA
          ====================================================== */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[0%] top-[8%] z-30 hidden rounded-2xl border border-violet-400/20 bg-[#080d24]/90 p-4 shadow-2xl shadow-violet-950/30 backdrop-blur-xl sm:block xl:left-[-2%]"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-violet-500/15 p-2.5">
                <Brain className="h-5 w-5 text-violet-300" />
              </div>

              <div>
                <div className="text-xs text-slate-400">
                  IA pedagógica
                </div>

                <div className="text-sm font-bold text-white">
                  Contexto comprendido
                </div>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              TARJETA SUPERIOR DERECHA
          ====================================================== */}

          <motion.div
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[-2%] top-[13%] z-30 hidden rounded-2xl border border-violet-400/20 bg-[#080d24]/90 p-4 shadow-2xl shadow-violet-950/30 backdrop-blur-xl md:block"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-violet-500/15 p-2.5">
                <WandSparkles className="h-5 w-5 text-violet-300" />
              </div>

              <div>
                <div className="text-xs text-slate-400">
                  Asistentes IA
                </div>

                <div className="text-sm font-bold text-white">
                  Especializados en
                  <br />
                  tu tarea docente
                </div>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              TARJETA INFERIOR DERECHA
          ====================================================== */}

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[12%] right-[-2%] z-30 hidden rounded-2xl border border-cyan-400/15 bg-[#080d24]/90 p-4 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-400/10 p-2.5">
                <Clock3 className="h-5 w-5 text-cyan-300" />
              </div>

              <div>
                <div className="text-xs text-slate-400">
                  Tu tiempo importa
                </div>

                <div className="text-sm font-bold text-white">
                  Menos tareas
                  <br />
                  repetitivas
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* =========================================================
          BARRA DE CAPACIDADES
      ========================================================== */}

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
          duration: 0.8,
          delay: 0.7,
        }}
        className="relative z-20 mx-auto mb-8 max-w-[1180px] px-5 sm:px-8"
      >
        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] shadow-2xl backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-5">
          {/* Planificación */}

          <div className="flex items-center gap-4 border-b border-white/5 px-6 py-5 lg:border-b-0 lg:border-r">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
              <Sparkles className="h-5 w-5 text-violet-300" />
            </div>

            <div>
              <div className="text-sm font-bold text-white">
                Planificación
              </div>

              <div className="mt-1 text-xs text-slate-500">
                inteligente
              </div>
            </div>
          </div>

          {/* Actividades */}

          <div className="flex items-center gap-4 border-b border-white/5 px-6 py-5 sm:border-l lg:border-b-0 lg:border-r">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">
              <WandSparkles className="h-5 w-5 text-cyan-300" />
            </div>

            <div>
              <div className="text-sm font-bold text-white">
                Actividades
              </div>

              <div className="mt-1 text-xs text-slate-500">
                personalizadas
              </div>
            </div>
          </div>

          {/* Materiales */}

          <div className="flex items-center gap-4 border-b border-white/5 px-6 py-5 lg:border-b-0 lg:border-r">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
              <Sparkles className="h-5 w-5 text-violet-300" />
            </div>

            <div>
              <div className="text-sm font-bold text-white">
                Materiales
              </div>

              <div className="mt-1 text-xs text-slate-500">
                listos para usar
              </div>
            </div>
          </div>

          {/* Evaluaciones */}

          <div className="flex items-center gap-4 border-b border-white/5 px-6 py-5 sm:border-l lg:border-b-0 lg:border-r">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">
              <Brain className="h-5 w-5 text-cyan-300" />
            </div>

            <div>
              <div className="text-sm font-bold text-white">
                Evaluaciones
              </div>

              <div className="mt-1 text-xs text-slate-500">
                con devoluciones
              </div>
            </div>
          </div>

          {/* Asistencia */}

          <div className="flex items-center gap-4 px-6 py-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
              <Brain className="h-5 w-5 text-violet-300" />
            </div>

            <div>
              <div className="text-sm font-bold text-white">
                Asistencia
              </div>

              <div className="mt-1 text-xs text-slate-500">
                pedagógica
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
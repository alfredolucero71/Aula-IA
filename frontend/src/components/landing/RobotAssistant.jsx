import { motion } from "framer-motion";

/**
 * ============================================================
 * RobotAssistant.jsx
 * AulaIA - Docentes IA PRO
 * ============================================================
 *
 * Utiliza la composición visual final del robot como imagen.
 *
 * IMPORTANTE:
 * Colocar la imagen en:
 *
 * public/images/robot-assistant.png
 *
 * La imagen contiene:
 * - Robot
 * - Antena
 * - Cabeza
 * - Cuerpo
 * - Brazos
 * - Laptop
 * - Plataforma
 * - Anillos
 * - Iluminación
 * - Tarjetas flotantes
 *
 * Este componente se ocupa de:
 * - Escalado
 * - Responsive
 * - Animación de entrada
 * - Flotación
 * - Glow
 * - Profundidad
 * - Integración con la landing
 * ============================================================
 */

export default function RobotAssistant() {
  return (
    <div
      className="
        relative
        mx-auto
        flex
        h-[620px]
        w-full
        max-w-[760px]
        items-center
        justify-center
        overflow-visible
      "
    >

      {/* ======================================================
          AURA PRINCIPAL
      ======================================================= */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.22, 0.38, 0.22],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[47%]
          h-[430px]
          w-[430px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/20
          blur-[100px]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[48%]
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-500/20
          blur-[120px]
        "
      />

      {/* ======================================================
          HALO LUMINOSO
      ======================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-[48%]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-cyan-400/10
          shadow-[0_0_100px_rgba(34,211,238,0.08)]
        "
      />

      {/* ======================================================
          IMAGEN PRINCIPAL
      ======================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
          scale: 0.94,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          inset-0
          z-20
          flex
          items-center
          justify-center
        "
      >

        {/* Flotación del robot */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            flex
            w-full
            items-center
            justify-center
          "
        >

          <img
            src="/images/robot-assistant.png"
            alt="Asistente de inteligencia artificial de AulaIA"
            className="
              block
              w-full
              max-w-[760px]
              select-none
              object-contain
              drop-shadow-[0_35px_70px_rgba(0,0,0,0.55)]
            "
            draggable="false"
          />

        </motion.div>

      </motion.div>

      {/* ======================================================
          REFUERZO DE ILUMINACIÓN INFERIOR
      ======================================================= */}

      <motion.div
        animate={{
          scaleX: [0.85, 1.08, 0.85],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[55px]
          left-1/2
          z-10
          h-[60px]
          w-[360px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/30
          blur-[45px]
        "
      />

      {/* ======================================================
          PARTÍCULAS DECORATIVAS
      ======================================================= */}

      <motion.span
        animate={{
          y: [0, -12, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[12%]
          top-[28%]
          z-30
          h-1.5
          w-1.5
          rounded-full
          bg-cyan-300
          shadow-[0_0_14px_rgba(34,211,238,1)]
        "
      />

      <motion.span
        animate={{
          y: [0, 10, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[10%]
          top-[24%]
          z-30
          h-2
          w-2
          rounded-full
          bg-violet-400
          shadow-[0_0_18px_rgba(167,139,250,1)]
        "
      />

      <motion.span
        animate={{
          y: [0, -8, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[7%]
          top-[61%]
          z-30
          h-1
          w-1
          rounded-full
          bg-cyan-300
          shadow-[0_0_12px_rgba(34,211,238,1)]
        "
      />

      <motion.span
        animate={{
          y: [0, 8, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[8%]
          top-[65%]
          z-30
          h-1.5
          w-1.5
          rounded-full
          bg-cyan-300
          shadow-[0_0_15px_rgba(34,211,238,1)]
        "
      />

      {/* ======================================================
          PUNTOS DE CONEXIÓN
      ======================================================= */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[46%]
          z-10
          h-[510px]
          w-[510px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
        "
      >
        <span
          className="
            absolute
            left-1/2
            top-0
            h-2
            w-2
            -translate-x-1/2
            rounded-full
            bg-cyan-300
            shadow-[0_0_20px_rgba(34,211,238,1)]
          "
        />
      </motion.div>

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[46%]
          z-10
          h-[570px]
          w-[570px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
        "
      >
        <span
          className="
            absolute
            right-[5%]
            top-1/2
            h-2
            w-2
            rounded-full
            bg-violet-400
            shadow-[0_0_20px_rgba(167,139,250,1)]
          "
        />
      </motion.div>

    </div>
  );
}
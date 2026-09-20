import { motion } from "framer-motion";
import {
    ArrowRight,
    Sparkles,
    BookOpen,
    ClipboardCheck,
    Lightbulb,
    Bot
} from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">

            {/* =========================================================
                ILUMINACIÓN DEL HERO
            ========================================================= */}

            <div className="absolute inset-0 pointer-events-none">

                <div className="
                    absolute
                    top-[15%]
                    left-[5%]
                    w-[450px]
                    h-[450px]
                    rounded-full
                    bg-cyan-500/10
                    blur-[140px]
                " />

                <div className="
                    absolute
                    bottom-[5%]
                    right-[5%]
                    w-[500px]
                    h-[500px]
                    rounded-full
                    bg-violet-600/10
                    blur-[150px]
                " />

            </div>

            {/* =========================================================
                CONTENIDO
            ========================================================= */}

            <div className="
                relative
                z-10
                w-full
                max-w-7xl
                mx-auto
                px-6
                lg:px-8
                pt-28
                pb-20
            ">

                <div className="
                    grid
                    lg:grid-cols-[1.05fr_0.95fr]
                    gap-12
                    lg:gap-20
                    items-center
                ">

                    {/* =================================================
                        COLUMNA IZQUIERDA
                    ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -50
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 0.8
                        }}
                    >

                        {/* Badge */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 15
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                delay: 0.2,
                                duration: 0.6
                            }}
                            className="
                                inline-flex
                                items-center
                                gap-2
                                px-4
                                py-2
                                rounded-full
                                border
                                border-cyan-400/20
                                bg-cyan-400/5
                                backdrop-blur-md
                                mb-7
                            "
                        >

                            <Sparkles
                                size={17}
                                className="text-cyan-300"
                            />

                            <span className="
                                text-sm
                                text-cyan-200
                                font-medium
                            ">
                                Inteligencia Artificial para docentes
                            </span>

                        </motion.div>

                        {/* Título */}

                        <h1 className="
                            text-5xl
                            sm:text-6xl
                            lg:text-7xl
                            font-black
                            tracking-tight
                            leading-[1.02]
                        ">

                            Tu asistente

                            <span className="
                                block
                                bg-gradient-to-r
                                from-cyan-300
                                via-blue-400
                                to-violet-400
                                bg-clip-text
                                text-transparent
                            ">
                                inteligente para enseñar
                            </span>

                        </h1>

                        {/* Descripción */}

                        <p className="
                            mt-7
                            text-lg
                            lg:text-xl
                            leading-8
                            text-slate-300
                            max-w-2xl
                        ">
                            AulaIA acompaña a los docentes en la planificación,
                            creación de actividades, elaboración de evaluaciones
                            y generación de recursos educativos.
                        </p>

                        <p className="
                            mt-4
                            text-base
                            leading-7
                            text-slate-400
                            max-w-xl
                        ">
                            Una nueva forma de trabajar con Inteligencia Artificial:
                            como asistente pedagógico, no como reemplazo del docente.
                        </p>

                        {/* Botones */}

                        <div className="
                            flex
                            flex-wrap
                            gap-4
                            mt-9
                        ">

                            <motion.button
                                whileHover={{
                                    scale: 1.04
                                }}
                                whileTap={{
                                    scale: 0.97
                                }}
                                className="
                                    px-7
                                    py-4
                                    rounded-2xl
                                    bg-gradient-to-r
                                    from-blue-600
                                    to-cyan-500
                                    font-semibold
                                    shadow-[0_10px_40px_rgba(34,211,238,0.18)]
                                    flex
                                    items-center
                                    gap-3
                                "
                            >

                                Probar AulaIA

                                <ArrowRight size={19} />

                            </motion.button>

                            <motion.button
                                whileHover={{
                                    scale: 1.04
                                }}
                                whileTap={{
                                    scale: 0.97
                                }}
                                className="
                                    px-7
                                    py-4
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    backdrop-blur-md
                                    text-slate-200
                                "
                            >
                                Conocer AulaIA
                            </motion.button>

                        </div>

                        {/* Indicadores */}

                        <div className="
                            flex
                            flex-wrap
                            gap-x-6
                            gap-y-3
                            mt-8
                            text-sm
                            text-slate-400
                        ">

                            <div className="flex items-center gap-2">
                                <span className="text-cyan-400">✓</span>
                                Pensado para docentes
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-cyan-400">✓</span>
                                Asistencia pedagógica
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-cyan-400">✓</span>
                                Agentes especializados
                            </div>

                        </div>

                    </motion.div>

                    {/* =================================================
                        COLUMNA DERECHA — ROBOT ASISTENTE
                    ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.88,
                            y: 30
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.15
                        }}
                        className="
                            relative
                            flex
                            justify-center
                            items-center
                        "
                    >

                        {/* Halo */}

                        <motion.div
                            animate={{
                                scale: [1, 1.08, 1],
                                opacity: [0.35, 0.55, 0.35]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="
                                absolute
                                w-[360px]
                                h-[360px]
                                sm:w-[480px]
                                sm:h-[480px]
                                rounded-full
                                bg-cyan-400/20
                                blur-[90px]
                            "
                        />

                        {/* Anillo exterior */}

                        <motion.div
                            animate={{
                                rotate: 360
                            }}
                            transition={{
                                duration: 35,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="
                                absolute
                                w-[390px]
                                h-[390px]
                                sm:w-[510px]
                                sm:h-[510px]
                                rounded-full
                                border
                                border-cyan-400/10
                            "
                        />

                        {/* Tarjeta principal */}

                        <div className="
                            relative
                            w-full
                            max-w-[500px]
                            aspect-square
                            rounded-[42px]
                            border
                            border-white/10
                            bg-white/[0.045]
                            backdrop-blur-xl
                            shadow-[0_0_80px_rgba(34,211,238,0.12)]
                            overflow-hidden
                        ">

                            {/* Decoración superior */}

                            <div className="
                                absolute
                                top-5
                                left-6
                                right-6
                                flex
                                justify-between
                                items-center
                            ">

                                <div className="
                                    flex
                                    items-center
                                    gap-2
                                    text-xs
                                    text-cyan-300
                                ">

                                    <span className="
                                        w-2
                                        h-2
                                        rounded-full
                                        bg-emerald-400
                                        shadow-[0_0_10px_rgba(52,211,153,0.8)]
                                    " />

                                    AulaIA está disponible

                                </div>

                                <Bot
                                    size={20}
                                    className="text-cyan-300"
                                />

                            </div>

                            {/* Robot */}

                            <div className="
                                absolute
                                inset-0
                                flex
                                items-center
                                justify-center
                                pt-5
                            >

                                <motion.div
                                    animate={{
                                        y: [0, -10, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="
                                        relative
                                        w-[220px]
                                        h-[270px]
                                        sm:w-[250px]
                                        sm:h-[300px]
                                    "
                                >

                                    {/* Antena */}

                                    <div className="
                                        absolute
                                        top-[-35px]
                                        left-1/2
                                        -translate-x-1/2
                                        flex
                                        flex-col
                                        items-center
                                    ">

                                        <div className="
                                            w-1
                                            h-7
                                            bg-cyan-300/70
                                        " />

                                        <motion.div
                                            animate={{
                                                opacity: [0.4, 1, 0.4],
                                                scale: [0.9, 1.15, 0.9]
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity
                                            }}
                                            className="
                                                w-4
                                                h-4
                                                rounded-full
                                                bg-cyan-300
                                                shadow-[0_0_20px_rgba(103,232,249,0.9)]
                                            "
                                        />

                                    </div>

                                    {/* Cabeza */}

                                    <div className="
                                        absolute
                                        top-0
                                        left-1/2
                                        -translate-x-1/2
                                        w-[180px]
                                        h-[145px]
                                        rounded-[42px]
                                        border
                                        border-cyan-200/30
                                        bg-gradient-to-b
                                        from-slate-200
                                        to-slate-400
                                        shadow-[inset_0_-12px_25px_rgba(15,23,42,0.25),0_20px_40px_rgba(0,0,0,0.25)]
                                    ">

                                        {/* Pantalla facial */}

                                        <div className="
                                            absolute
                                            left-1/2
                                            top-1/2
                                            -translate-x-1/2
                                            -translate-y-1/2
                                            w-[135px]
                                            h-[88px]
                                            rounded-[28px]
                                            bg-slate-900
                                            border
                                            border-cyan-300/30
                                            shadow-[inset_0_0_25px_rgba(34,211,238,0.08)]
                                        ">

                                            {/* Ojos */}

                                            <div className="
                                                absolute
                                                top-7
                                                left-7
                                                right-7
                                                flex
                                                justify-between
                                            ">

                                                <motion.div
                                                    animate={{
                                                        scaleY: [1, 1, 0.15, 1]
                                                    }}
                                                    transition={{
                                                        duration: 4,
                                                        repeat: Infinity,
                                                        times: [0, 0.75, 0.78, 1]
                                                    }}
                                                    className="
                                                        w-6
                                                        h-6
                                                        rounded-full
                                                        bg-cyan-300
                                                        shadow-[0_0_15px_rgba(103,232,249,0.9)]
                                                    "
                                                />

                                                <motion.div
                                                    animate={{
                                                        scaleY: [1, 1, 0.15, 1]
                                                    }}
                                                    transition={{
                                                        duration: 4,
                                                        repeat: Infinity,
                                                        times: [0, 0.75, 0.78, 1]
                                                    }}
                                                    className="
                                                        w-6
                                                        h-6
                                                        rounded-full
                                                        bg-cyan-300
                                                        shadow-[0_0_15px_rgba(103,232,249,0.9)]
                                                    "
                                                />

                                            </div>

                                            {/* Sonrisa */}

                                            <div className="
                                                absolute
                                                bottom-5
                                                left-1/2
                                                -translate-x-1/2
                                                w-12
                                                h-2
                                                rounded-full
                                                bg-cyan-300/80
                                                shadow-[0_0_12px_rgba(103,232,249,0.7)]
                                            " />

                                        </div>

                                    </div>

                                    {/* Cuerpo */}

                                    <div className="
                                        absolute
                                        bottom-0
                                        left-1/2
                                        -translate-x-1/2
                                        w-[155px]
                                        h-[125px]
                                        rounded-[38px]
                                        border
                                        border-cyan-200/20
                                        bg-gradient-to-b
                                        from-slate-400
                                        to-slate-600
                                        shadow-[0_20px_40px_rgba(0,0,0,0.25)]
                                    ">

                                        <div className="
                                            absolute
                                            top-7
                                            left-1/2
                                            -translate-x-1/2
                                            w-20
                                            h-12
                                            rounded-2xl
                                            bg-slate-900/80
                                            border
                                            border-cyan-300/20
                                            flex
                                            items-center
                                            justify-center
                                        ">

                                            <Sparkles
                                                size={22}
                                                className="text-cyan-300"
                                            />

                                        </div>

                                    </div>

                                    {/* Brazo izquierdo */}

                                    <motion.div
                                        animate={{
                                            rotate: [-4, 4, -4]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="
                                            absolute
                                            left-[-5px]
                                            top-[155px]
                                            w-[42px]
                                            h-[100px]
                                            rounded-full
                                            bg-slate-500
                                            border
                                            border-cyan-200/20
                                            origin-top
                                        "
                                    />

                                    {/* Brazo derecho */}

                                    <motion.div
                                        animate={{
                                            rotate: [4, -4, 4]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="
                                            absolute
                                            right-[-5px]
                                            top-[155px]
                                            w-[42px]
                                            h-[100px]
                                            rounded-full
                                            bg-slate-500
                                            border
                                            border-cyan-200/20
                                            origin-top
                                        "
                                    />

                                </motion.div>

                            </div>

                            {/* Tarjetas flotantes */}

                            <motion.div
                                animate={{
                                    y: [0, -8, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: 0.5
                                }}
                                className="
                                    absolute
                                    left-5
                                    bottom-8
                                    px-4
                                    py-3
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-slate-950/70
                                    backdrop-blur-md
                                    shadow-xl
                                "
                            >

                                <div className="
                                    flex
                                    items-center
                                    gap-3
                                ">

                                    <div className="
                                        p-2
                                        rounded-xl
                                        bg-blue-500/10
                                    ">

                                        <BookOpen
                                            size={18}
                                            className="text-blue-300"
                                        />

                                    </div>

                                    <div>

                                        <p className="text-xs text-slate-500">
                                            AulaIA
                                        </p>

                                        <p className="text-sm font-medium">
                                            Planificar
                                        </p>

                                    </div>

                                </div>

                            </motion.div>

                            <motion.div
                                animate={{
                                    y: [0, 8, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: 1
                                }}
                                className="
                                    absolute
                                    right-5
                                    top-24
                                    px-4
                                    py-3
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-slate-950/70
                                    backdrop-blur-md
                                    shadow-xl
                                "
                            >

                                <div className="
                                    flex
                                    items-center
                                    gap-3
                                ">

                                    <div className="
                                        p-2
                                        rounded-xl
                                        bg-violet-500/10
                                    ">

                                        <ClipboardCheck
                                            size={18}
                                            className="text-violet-300"
                                        />

                                    </div>

                                    <div>

                                        <p className="text-xs text-slate-500">
                                            Asistente IA
                                        </p>

                                        <p className="text-sm font-medium">
                                            Evaluar
                                        </p>

                                    </div>

                                </div>

                            </motion.div>

                            <motion.div
                                animate={{
                                    y: [0, -6, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: 1.5
                                }}
                                className="
                                    absolute
                                    right-8
                                    bottom-8
                                    px-4
                                    py-3
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-slate-950/70
                                    backdrop-blur-md
                                    shadow-xl
                                "
                            >

                                <div className="
                                    flex
                                    items-center
                                    gap-3
                                ">

                                    <div className="
                                        p-2
                                        rounded-xl
                                        bg-amber-500/10
                                    ">

                                        <Lightbulb
                                            size={18}
                                            className="text-amber-300"
                                        />

                                    </div>

                                    <div>

                                        <p className="text-xs text-slate-500">
                                            Ideas
                                        </p>

                                        <p className="text-sm font-medium">
                                            Crear
                                        </p>

                                    </div>

                                </div>

                            </motion.div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}
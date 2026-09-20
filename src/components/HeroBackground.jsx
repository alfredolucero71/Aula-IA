import { motion } from "framer-motion";

const particles = Array.from({ length: 35 }, (_, index) => ({
    id: index,
    size: Math.random() * 6 + 2,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 12 + 10,
    delay: Math.random() * 8
}));

export default function HeroBackground() {

    return (

        <div className="absolute inset-0 overflow-hidden pointer-events-none">

            {/* =========================================
                Gradientes principales
            ========================================= */}

            <motion.div

                animate={{

                    scale: [1, 1.12, 1],

                    opacity: [0.25, 0.40, 0.25]

                }}

                transition={{

                    duration: 12,

                    repeat: Infinity,

                    ease: "easeInOut"

                }}

                className="absolute -top-72 -left-72 w-[900px] h-[900px] rounded-full bg-cyan-500 blur-[180px]"

            />

            <motion.div

                animate={{

                    scale: [1.1, 0.9, 1.1],

                    opacity: [0.25, 0.45, 0.25]

                }}

                transition={{

                    duration: 14,

                    repeat: Infinity,

                    ease: "easeInOut"

                }}

                className="absolute bottom-[-250px] right-[-200px] w-[850px] h-[850px] rounded-full bg-violet-600 blur-[180px]"

            />

            <motion.div

                animate={{

                    x: [-40, 40, -40],

                    y: [20, -20, 20]

                }}

                transition={{

                    duration: 18,

                    repeat: Infinity,

                    ease: "easeInOut"

                }}

                className="absolute top-[35%] left-[50%] w-[500px] h-[500px] rounded-full bg-blue-500 blur-[150px] opacity-30"

            />

            {/* =========================================
                Rejilla luminosa
            ========================================= */}

            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.05]
                    bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
                    bg-[size:80px_80px]
                "
            />

            {/* =========================================
                Partículas
            ========================================= */}

            {

                particles.map((particle) => (

                    <motion.div

                        key={particle.id}

                        initial={{

                            opacity: 0,

                            y: 0

                        }}

                        animate={{

                            opacity: [0, 0.8, 0],

                            y: [-80, 80, -80]

                        }}

                        transition={{

                            duration: particle.duration,

                            repeat: Infinity,

                            delay: particle.delay,

                            ease: "easeInOut"

                        }}

                        style={{

                            width: particle.size,

                            height: particle.size,

                            top: `${particle.top}%`,

                            left: `${particle.left}%`

                        }}

                        className="
                            absolute
                            rounded-full
                            bg-cyan-300
                            shadow-[0_0_20px_#67e8f9]
                        "

                    />

                ))

            }

            {/* =========================================
                Halo central
            ========================================= */}

            <motion.div

                animate={{

                    rotate: 360

                }}

                transition={{

                    duration: 60,

                    repeat: Infinity,

                    ease: "linear"

                }}

                className="
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-[900px]
                    h-[900px]
                    rounded-full
                    border
                    border-cyan-400/10
                "

            />

            <motion.div

                animate={{

                    rotate: -360

                }}

                transition={{

                    duration: 90,

                    repeat: Infinity,

                    ease: "linear"

                }}

                className="
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-[700px]
                    h-[700px]
                    rounded-full
                    border
                    border-blue-400/10
                "

            />

        </div>

    );

}
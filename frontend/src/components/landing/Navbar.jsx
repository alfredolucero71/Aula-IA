import { motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Qué hace", href: "#funciones" },
    { label: "Agentes IA", href: "#agentes" },
    { label: "Cómo funciona", href: "#como-funciona" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050816]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

        <a
          href="#inicio"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
            <Sparkles className="h-5 w-5 text-cyan-300" />
          </div>

          <div>
            <div className="text-lg font-black tracking-tight">
              Aula<span className="text-cyan-300">IA</span>
            </div>

            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
              Docentes IA PRO
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/65 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-xl px-4 py-2.5 text-sm font-semibold text-white/70 transition hover:text-white">
            Ingresar
          </button>

          <motion.a
            href="#probar"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl border border-cyan-300/30 bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20"
          >
            Probar AulaIA
          </motion.a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 p-2 md:hidden"
          aria-label="Abrir menú"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#050816] px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#probar"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-cyan-400 px-4 py-3 text-center font-bold text-slate-950"
            >
              Probar AulaIA
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
import { useEffect, useState } from "react";
import { X, LogIn, UserPlus, ShieldCheck, Clock3 } from "lucide-react";

const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:4000").replace(/\/$/, "");

export default function AuthPanel({ mode, onClose }) {
  const [view, setView] = useState(mode === "register" ? "register" : "login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (mode && !user) {
      setView(mode === "register" ? "register" : "login");
      setError("");
      setNotice("");
    }
  }, [mode, user]);

  if (!mode) return null;

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  async function submit(event) {
    event.preventDefault();
    setBusy(true);
    setError("");
    setNotice("");
    try {
      const endpoint = view === "register" ? "/api/auth/register" : "/api/auth/login";
      const response = await fetch(API_URL + endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || payload.error || "No se pudo completar la solicitud.");
      if (view === "register") {
        setNotice(payload.message || "Registro recibido. Tu cuenta queda pendiente de aprobación.");
        setView("login");
        setForm({ name: "", email: form.email, password: "" });
      } else {
        sessionStorage.setItem("aulaia_token", payload.token);
        setUser(payload.user);
        setNotice("");
      }
    } catch (err) {
      setError(err.message || "No se pudo conectar con AulaIA. Verificá que el backend esté iniciado.");
    } finally {
      setBusy(false);
    }
  }

  function logout() {
    sessionStorage.removeItem("aulaia_token");
    setUser(null);
    setForm({ name: "", email: "", password: "" });
    setView("login");
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/80 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="auth-title">
      <div className="relative my-auto w-full max-w-md rounded-3xl border border-white/10 bg-[#0b1024] p-6 text-white shadow-2xl sm:p-8">
        <button onClick={onClose} className="absolute right-4 top-4 rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white" aria-label="Cerrar"><X size={20} /></button>
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
          {user ? <ShieldCheck size={24} /> : view === "register" ? <UserPlus size={24} /> : <LogIn size={24} />}
        </div>
        <h2 id="auth-title" className="text-2xl font-bold">{user ? "Sesión iniciada" : view === "register" ? "Crear cuenta docente" : "Ingresar a AulaIA"}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          {user ? "Tu identidad fue validada por el backend." : view === "register" ? "Solicitá tu acceso. La cuenta deberá ser aprobada antes de ingresar." : "Ingresá con el correo y la contraseña de tu cuenta."}
        </p>

        {user ? (
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="font-semibold">{user.name}</p>
              <p className="mt-1 text-sm text-slate-400">{user.email}</p>
              <p className="mt-3 text-xs text-cyan-300">Rol: {user.role} · Estado: {user.status}</p>
            </div>
            {user.role === "admin" ? (
              <p className="text-sm text-amber-200">La sesión de administrador está activa. El panel de gestión todavía debe integrarse a la interfaz.</p>
            ) : (
              <p className="text-sm text-slate-300">El acceso a los agentes y al espacio de trabajo docente se incorporará en el siguiente tramo.</p>
            )}
            <button onClick={logout} className="w-full rounded-xl border border-white/10 px-4 py-3 font-semibold hover:bg-white/5">Cerrar sesión</button>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-6 space-y-4">
            {view === "register" && (
              <label className="block text-sm font-medium text-slate-200">Nombre y apellido
                <input name="name" value={form.name} onChange={update} required minLength={2} maxLength={100} autoComplete="name" className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-300" placeholder="Tu nombre" />
              </label>
            )}
            <label className="block text-sm font-medium text-slate-200">Correo electrónico
              <input name="email" type="email" value={form.email} onChange={update} required maxLength={254} autoComplete="email" className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-300" placeholder="docente@ejemplo.com" />
            </label>
            <label className="block text-sm font-medium text-slate-200">Contraseña
              <input name="password" type="password" value={form.password} onChange={update} required minLength={view === "register" ? 12 : 1} maxLength={72} autoComplete={view === "register" ? "new-password" : "current-password"} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-300" placeholder={view === "register" ? "Mínimo 12 caracteres" : "Tu contraseña"} />
            </label>
            {error && <p role="alert" className="rounded-xl border border-red-400/20 bg-red-400/10 p-3 text-sm text-red-200">{error}</p>}
            {notice && <p role="status" className="rounded-xl border border-amber-300/20 bg-amber-300/10 p-3 text-sm text-amber-100">{notice}</p>}
            <button disabled={busy} className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-4 py-3 font-bold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-wait disabled:opacity-60">
              {busy ? "Procesando…" : view === "register" ? "Solicitar acceso" : "Ingresar"}
            </button>
            <button type="button" onClick={() => { setView(view === "register" ? "login" : "register"); setError(""); setNotice(""); }} className="w-full py-2 text-sm text-slate-300 hover:text-cyan-200">
              {view === "register" ? "Ya tengo una cuenta · Ingresar" : "¿Todavía no tenés cuenta? Registrate"}
            </button>
            {view === "register" && <p className="flex items-start gap-2 text-xs leading-5 text-slate-500"><Clock3 size={15} className="mt-0.5 shrink-0" />Después del registro, un administrador deberá aprobar la cuenta. No se habilita el acceso automáticamente.</p>}
          </form>
        )}
      </div>
    </div>
  );
}

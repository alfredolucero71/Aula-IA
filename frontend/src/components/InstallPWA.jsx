import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";

export default function InstallPWA() {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [dismissed, setDismissed] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const isStandalone =
      window.matchMedia?.("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;

    if (isStandalone) {
      setInstalled(true);
      return undefined;
    }

    const onBeforeInstall = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };
    const onInstalled = () => {
      setInstalled(true);
      setInstallPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const install = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
  };

  if (installed || dismissed || !installPrompt) return null;

  return (
    <aside
      className="fixed bottom-4 right-4 z-[60] flex max-w-[calc(100vw-2rem)] items-center gap-3 rounded-2xl border border-cyan-200/20 bg-[#0b1025] p-3 text-white shadow-2xl shadow-black/40"
      aria-label="Instalar AulaIA"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
        <Download size={20} aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-bold">Instalá AulaIA</p>
        <p className="text-xs text-slate-400">Acceso directo desde tu dispositivo</p>
        <button
          type="button"
          onClick={install}
          className="mt-2 rounded-lg bg-cyan-200 px-3 py-1.5 text-xs font-bold text-slate-950 hover:bg-cyan-100"
        >
          Instalar aplicación
        </button>
      </div>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="self-start rounded-lg p-1 text-slate-400 hover:bg-white/10 hover:text-white"
        aria-label="Cerrar aviso de instalación"
      >
        <X size={16} aria-hidden="true" />
      </button>
    </aside>
  );
}

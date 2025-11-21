export interface EffectOptions {
  intensity?: number;
  windSpeed?: number;
  density?: number;
  mode?: 'day'|'night';
  container: HTMLElement;
}

export function mount(opts: EffectOptions): () => void {
  const root = document.createElement('div');
  root.style.cssText = 'position:absolute;inset:0;overflow:hidden;pointer-events:none';
  const blur = 6 + Math.round((opts.intensity ?? 50) / 6);
  const layer = (scale: number, delay: number) => {
    const f = document.createElement('div');
    f.style.cssText = `position:absolute;inset:-10%;background:radial-gradient(60% 40% at 50% 20%, rgba(255,255,255,.5), transparent 60%),radial-gradient(70% 50% at 20% 80%, rgba(255,255,255,.45), transparent 60%);filter:blur(${blur}px);opacity:.52;animation:fogMove ${scale > 1 ? 16 : 12}s ${-delay}s ease-in-out infinite alternate`;
    return f;
  };
  root.appendChild(layer(1, Math.random() * 10));
  root.appendChild(layer(1.4, Math.random() * 14));
  const style = document.createElement('style');
  style.textContent = '@keyframes fogMove{from{transform:translateX(-10%)} to{transform:translateX(10%)}}';
  opts.container.appendChild(style);
  opts.container.appendChild(root);
  return () => { style.remove(); root.remove(); };
}



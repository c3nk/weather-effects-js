export interface EffectOptions {
  intensity?: number;
  windSpeed?: number;
  density?: number;
  mode?: 'day'|'night';
  container: HTMLElement;
}

export function mount(opts: EffectOptions): () => void {
  const root = document.createElement('div');
  root.style.cssText = 'position:absolute;inset:0;overflow:hidden;pointer-events:none;display:grid;place-items:center';
  const size = 140 + Math.round((opts.intensity ?? 60) / 3);
  const glow = 30 + Math.round((opts.intensity ?? 60) * 0.8);
  const sun = document.createElement('div');
  sun.style.width = `${size}px`;
  sun.style.height = `${size}px`;
  sun.style.borderRadius = '9999px';
  sun.style.background = 'rgba(255,200,0,.9)';
  sun.style.boxShadow = `0 0 ${glow}px ${Math.max(20, glow / 2)}px rgba(255,191,0,.35)`;
  root.appendChild(sun);
  opts.container.appendChild(root);
  return () => { root.remove(); };
}



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
  const count = Math.round(((opts.density ?? 40) + 60) * 1.2);
  for (let i = 0; i < count; i++) {
    const f = document.createElement('i');
    const left = Math.random() * 100;
    const size = (1.5 + Math.random() * 2.5).toFixed(1);
    const delay = (Math.random() * -3).toFixed(2);
    const speed = 3.5 - Math.min(2.0, (opts.intensity ?? 50) / 40) + Math.random();
    f.style.cssText = `position:absolute;top:-10%;left:${left}%;width:${size}px;height:${size}px;background:#fff;border-radius:9999px;opacity:${0.6 + Math.random() * 0.4};animation:snowFall ${speed}s ${delay}s linear infinite`;
    root.appendChild(f);
  }
  const style = document.createElement('style');
  style.textContent = '@keyframes snowFall{to{transform:translate3d(0,110vh,0)}}';
  opts.container.appendChild(style);
  opts.container.appendChild(root);
  return () => { style.remove(); root.remove(); };
}



export interface EffectOptions {
  intensity?: number; // 0-100
  windSpeed?: number; // 0-100
  density?: number;   // 0-100
  mode?: 'day' | 'night';
  container: HTMLElement;
}

export function mount(opts: EffectOptions): () => void {
  const root = document.createElement('div');
  root.style.cssText = 'position:absolute;inset:0;overflow:hidden;pointer-events:none';
  const count = Math.round(((opts.density ?? 40) + 80) * 1.5);
  for (let i = 0; i < count; i++) {
    const d = document.createElement('i');
    const left = Math.random() * 100;
    const h = Math.round(8 + Math.random() * 14);
    const delay = (Math.random() * -2).toFixed(2);
    const speed = 0.9 - Math.min(0.6, (opts.intensity ?? 60) / 200) + Math.random() * 0.6;
    d.style.cssText = `position:absolute;top:-10%;left:${left}%;width:1px;height:${h}px;background:rgba(30,58,138,.85);opacity:${0.35 + Math.random() * 0.55};animation:rainFall ${speed}s ${delay}s linear infinite`;
    root.appendChild(d);
  }
  const style = document.createElement('style');
  style.textContent = '@keyframes rainFall{to{transform:translate3d(0,120vh,0)}}';
  opts.container.appendChild(style);
  opts.container.appendChild(root);
  return () => { style.remove(); root.remove(); };
}



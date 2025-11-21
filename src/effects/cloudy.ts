export interface EffectOptions {
  intensity?: number; // 0-100
  windSpeed?: number; // 0-100
  density?: number;   // 0-100
  mode?: 'day' | 'night';
  container: HTMLElement;
}

// Simple DOM-based clouds: soft circles drifting horizontally
export function mount(opts: EffectOptions): () => void {
  const root = document.createElement('div');
  root.style.cssText = 'position:absolute;inset:0;overflow:hidden;pointer-events:none';

  const density = opts.density ?? 40; // 0..100
  const count = Math.max(4, Math.round(6 + density / 10));
  const isNight = opts.mode === 'night';

  for (let i = 0; i < count; i++) {
    const cloud = document.createElement('div');
    const baseLeft = Math.random() * 80; // starting left %
    const top = 5 + Math.random() * 70;  // top %
    const scale = 0.6 + Math.random() * 0.9;
    const duration = 30 + Math.random() * 30; // seconds
    const delay = (Math.random() * -duration).toFixed(2);

    // cloud body
    cloud.style.position = 'absolute';
    cloud.style.left = baseLeft + '%';
    cloud.style.top = top + '%';
    cloud.style.width = 200 * scale + 'px';
    cloud.style.height = 80 * scale + 'px';
    cloud.style.borderRadius = '999px';
    cloud.style.filter = 'blur(0.4px)';
    cloud.style.opacity = String(0.5 + Math.random() * 0.3);
    cloud.style.background = isNight ? 'rgba(203,213,225,.9)' : 'rgba(148,163,184,.9)'; // slate-ish
    cloud.style.boxShadow = '40px 10px 0 10px currentColor, 90px -5px 0 16px currentColor, 120px 8px 0 12px currentColor';
    cloud.style.color = isNight ? 'rgba(203,213,225,.65)' : 'rgba(148,163,184,.65)';
    cloud.style.animation = `cloudDrift ${duration}s ${delay}s linear infinite`;

    root.appendChild(cloud);
  }

  const style = document.createElement('style');
  style.textContent = `@keyframes cloudDrift{from{transform:translateX(-20vw)}to{transform:translateX(40vw)}}`;
  opts.container.appendChild(style);
  opts.container.appendChild(root);
  return () => { style.remove(); root.remove(); };
}



export interface EffectOptions {
  intensity?: number;
  windSpeed?: number;
  density?: number;
  mode?: 'day'|'night';
  container: HTMLElement;
}

export function mount(opts: EffectOptions): () => void {
  const root = document.createElement('div');
  root.style.cssText = 'position:absolute;inset:0;pointer-events:none';
  const flash = document.createElement('div');
  flash.style.cssText = 'position:absolute;inset:0;background:rgba(255,255,255,0);mix-blend-mode:screen';
  root.appendChild(flash);
  opts.container.appendChild(root);
  let timer = 0 as number | undefined;
  function strike() {
    flash.style.background = 'rgba(255,255,255,.9)';
    setTimeout(() => { flash.style.background = 'rgba(255,255,255,0)'; }, 100);
  }
  const period = Math.max(500, 2400 - Math.min(90, (opts.intensity ?? 50)) * 16);
  timer = window.setInterval(() => {
    strike();
    if (Math.random() < 0.35) setTimeout(strike, 120);
  }, period);
  return () => { if (timer) clearInterval(timer); root.remove(); };
}



function h(e) {
  const t = document.createElement("div");
  t.style.cssText = "position:absolute;inset:0;overflow:hidden;pointer-events:none";
  const r = Math.round(((e.density ?? 40) + 80) * 1.5);
  for (let n = 0; n < r; n++) {
    const i = document.createElement("i"), s = Math.random() * 100, o = Math.round(8 + Math.random() * 14), d = (Math.random() * -2).toFixed(2), l = 0.9 - Math.min(0.6, (e.intensity ?? 60) / 200) + Math.random() * 0.6;
    i.style.cssText = `position:absolute;top:-10%;left:${s}%;width:1px;height:${o}px;background:rgba(30,58,138,.85);opacity:${0.35 + Math.random() * 0.55};animation:rainFall ${l}s ${d}s linear infinite`, t.appendChild(i);
  }
  const a = document.createElement("style");
  return a.textContent = "@keyframes rainFall{to{transform:translate3d(0,120vh,0)}}", e.container.appendChild(a), e.container.appendChild(t), () => {
    a.remove(), t.remove();
  };
}
function p(e) {
  const t = document.createElement("div");
  t.style.cssText = "position:absolute;inset:0;overflow:hidden;pointer-events:none";
  const r = Math.round(((e.density ?? 40) + 60) * 1.2);
  for (let n = 0; n < r; n++) {
    const i = document.createElement("i"), s = Math.random() * 100, o = (1.5 + Math.random() * 2.5).toFixed(1), d = (Math.random() * -3).toFixed(2), l = 3.5 - Math.min(2, (e.intensity ?? 50) / 40) + Math.random();
    i.style.cssText = `position:absolute;top:-10%;left:${s}%;width:${o}px;height:${o}px;background:#fff;border-radius:9999px;opacity:${0.6 + Math.random() * 0.4};animation:snowFall ${l}s ${d}s linear infinite`, t.appendChild(i);
  }
  const a = document.createElement("style");
  return a.textContent = "@keyframes snowFall{to{transform:translate3d(0,110vh,0)}}", e.container.appendChild(a), e.container.appendChild(t), () => {
    a.remove(), t.remove();
  };
}
function y(e) {
  const t = document.createElement("div");
  t.style.cssText = "position:absolute;inset:0;overflow:hidden;pointer-events:none";
  const r = 6 + Math.round((e.intensity ?? 50) / 6), a = (i, s) => {
    const o = document.createElement("div");
    return o.style.cssText = `position:absolute;inset:-10%;background:radial-gradient(60% 40% at 50% 20%, rgba(255,255,255,.5), transparent 60%),radial-gradient(70% 50% at 20% 80%, rgba(255,255,255,.45), transparent 60%);filter:blur(${r}px);opacity:.52;animation:fogMove ${i > 1 ? 16 : 12}s ${-s}s ease-in-out infinite alternate`, o;
  };
  t.appendChild(a(1, Math.random() * 10)), t.appendChild(a(1.4, Math.random() * 14));
  const n = document.createElement("style");
  return n.textContent = "@keyframes fogMove{from{transform:translateX(-10%)} to{transform:translateX(10%)}}", e.container.appendChild(n), e.container.appendChild(t), () => {
    n.remove(), t.remove();
  };
}
function f(e) {
  const t = document.createElement("div");
  t.style.cssText = "position:absolute;inset:0;overflow:hidden;pointer-events:none;display:grid;place-items:center";
  const r = 140 + Math.round((e.intensity ?? 60) / 3), a = 30 + Math.round((e.intensity ?? 60) * 0.8), n = document.createElement("div");
  return n.style.width = `${r}px`, n.style.height = `${r}px`, n.style.borderRadius = "9999px", n.style.background = "rgba(255,200,0,.9)", n.style.boxShadow = `0 0 ${a}px ${Math.max(20, a / 2)}px rgba(255,191,0,.35)`, t.appendChild(n), e.container.appendChild(t), () => {
    t.remove();
  };
}
function x(e) {
  const t = document.createElement("div");
  t.style.cssText = "position:absolute;inset:0;pointer-events:none";
  const r = document.createElement("div");
  r.style.cssText = "position:absolute;inset:0;background:rgba(255,255,255,0);mix-blend-mode:screen", t.appendChild(r), e.container.appendChild(t);
  let a = 0;
  function n() {
    r.style.background = "rgba(255,255,255,.9)", setTimeout(() => {
      r.style.background = "rgba(255,255,255,0)";
    }, 100);
  }
  const i = Math.max(500, 2400 - Math.min(90, e.intensity ?? 50) * 16);
  return a = window.setInterval(() => {
    n(), Math.random() < 0.35 && setTimeout(n, 120);
  }, i), () => {
    a && clearInterval(a), t.remove();
  };
}
function b(e) {
  const t = document.createElement("div");
  t.style.cssText = "position:absolute;inset:0;overflow:hidden;pointer-events:none";
  const r = e.density ?? 40, a = Math.max(4, Math.round(6 + r / 10)), n = e.mode === "night";
  for (let s = 0; s < a; s++) {
    const o = document.createElement("div"), d = Math.random() * 80, l = 5 + Math.random() * 70, c = 0.6 + Math.random() * 0.9, m = 30 + Math.random() * 30, u = (Math.random() * -m).toFixed(2);
    o.style.position = "absolute", o.style.left = d + "%", o.style.top = l + "%", o.style.width = 200 * c + "px", o.style.height = 80 * c + "px", o.style.borderRadius = "999px", o.style.filter = "blur(0.4px)", o.style.opacity = String(0.5 + Math.random() * 0.3), o.style.background = n ? "rgba(203,213,225,.9)" : "rgba(148,163,184,.9)", o.style.boxShadow = "40px 10px 0 10px currentColor, 90px -5px 0 16px currentColor, 120px 8px 0 12px currentColor", o.style.color = n ? "rgba(203,213,225,.65)" : "rgba(148,163,184,.65)", o.style.animation = `cloudDrift ${m}s ${u}s linear infinite`, t.appendChild(o);
  }
  const i = document.createElement("style");
  return i.textContent = "@keyframes cloudDrift{from{transform:translateX(-20vw)}to{transform:translateX(40vw)}}", e.container.appendChild(i), e.container.appendChild(t), () => {
    i.remove(), t.remove();
  };
}
function g(e, t) {
  return {
    rain: h,
    snow: p,
    fog: y,
    sun: f,
    lightning: x,
    cloudy: b
  }[e](t);
}
export {
  g as createWeatherEffect,
  b as mountCloudy,
  y as mountFog,
  x as mountLightning,
  h as mountRain,
  p as mountSnow,
  f as mountSun
};

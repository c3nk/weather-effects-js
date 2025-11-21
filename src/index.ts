import { mount as mountRain } from './effects/rain';
import { mount as mountSnow } from './effects/snow';
import { mount as mountFog } from './effects/fog';
import { mount as mountSun } from './effects/sun';
import { mount as mountLightning } from './effects/lightning';
import { mount as mountCloudy } from './effects/cloudy';

export type EffectType = 'rain' | 'snow' | 'fog' | 'sun' | 'lightning' | 'cloudy';

export interface EffectOptions {
  intensity?: number; // 0-100
  windSpeed?: number; // 0-100
  density?: number;   // 0-100
  mode?: 'day' | 'night';
  container: HTMLElement;
}

export type EffectMountFunction = (opts: EffectOptions) => () => void;

// Effect exports
export { mountRain, mountSnow, mountFog, mountSun, mountLightning, mountCloudy };

// Helper function
export function createWeatherEffect(type: EffectType, options: EffectOptions) {
  const effects = {
    rain: mountRain,
    snow: mountSnow,
    fog: mountFog,
    sun: mountSun,
    lightning: mountLightning,
    cloudy: mountCloudy,
  };

  return effects[type](options);
}
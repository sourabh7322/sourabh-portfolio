import { useTheme } from '../context/ThemeContext';
import DaylightBackground from './DaylightBackground';
import ParticlesBackground from './ParticlesBackground';

const BackgroundLayer = () => {
  const { isLight } = useTheme();

  return isLight ? <DaylightBackground /> : <ParticlesBackground />;
};

export default BackgroundLayer;

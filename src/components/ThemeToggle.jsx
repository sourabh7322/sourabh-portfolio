import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to daylight mode'}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface/80 text-foreground backdrop-blur-md transition-colors hover:border-brand-primary/40 hover:bg-surface ${className}`}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -40, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="text-brand-primary"
      >
        {isLight ? <Moon size={18} strokeWidth={2.25} /> : <Sun size={18} strokeWidth={2.25} />}
      </motion.span>
    </motion.button>
  );
};

export default ThemeToggle;

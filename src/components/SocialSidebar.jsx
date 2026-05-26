import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const iconClass = 'w-5 h-5 sm:w-[22px] sm:h-[22px]';

const GRADIENT_ID = 'social-brand-gradient';

const GitHubIcon = () => (
  <svg className={iconClass} viewBox="0 0 24 24" fill={`url(#${GRADIENT_ID})`} aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className={iconClass} viewBox="0 0 24 24" fill={`url(#${GRADIENT_ID})`} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialLinks = [
  {
    Icon: GitHubIcon,
    href: 'https://github.com/sourabh7322',
    label: 'GitHub',
    external: true,
  },
  {
    Icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/sourabh-rawat-123a81194/',
    label: 'LinkedIn',
    external: true,
  },
  {
    Icon: Phone,
    href: 'tel:+917906834867',
    label: 'Call',
    external: false,
    lucide: true,
  },
  {
    Icon: Mail,
    href: 'mailto:sourabhrawat77200@gmail.com',
    label: 'Email',
    external: false,
    lucide: true,
  },
];

const SocialSidebar = () => {
  const { isLight } = useTheme();
  const gradientStart = isLight ? '#d0011b' : '#A855F7';
  const gradientEnd = isLight ? '#ff4d6d' : '#EC4899';

  return (
  <motion.aside
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 1 }}
    className="fixed left-3 sm:left-6 bottom-6 sm:bottom-10 z-[60] flex flex-col items-center gap-4 sm:gap-5 pointer-events-none"
    aria-label="Social and contact links"
  >
  <svg width="0" height="0" className="absolute" aria-hidden="true">
    <defs>
      <linearGradient id={GRADIENT_ID} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={gradientStart} />
        <stop offset="100%" stopColor={gradientEnd} />
      </linearGradient>
    </defs>
  </svg>

    <div className="flex flex-col items-center gap-8 pointer-events-auto mb-10">
      {socialLinks.map((link, index) => {
        const { Icon } = link;
        return (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            aria-label={link.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="transition-opacity hover:opacity-80"
          >
            {link.lucide ? (
              <Icon
                className={iconClass}
                strokeWidth={2}
                stroke={`url(#${GRADIENT_ID})`}
                fill="none"
              />
            ) : (
              <Icon />
            )}
          </motion.a>
        );
      })}
    </div>

    <span
      className="w-px h-16 bg-gradient-to-b from-brand-primary to-brand-secondary pointer-events-none opacity-80"
      aria-hidden="true"
    />
  </motion.aside>
  );
};

export default SocialSidebar;

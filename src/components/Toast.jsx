import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, X } from 'lucide-react';

const Toast = ({ toast, onClose }) => {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {toast && (
        <motion.div
          key={`${toast.type}-${toast.message}`}
          role="alert"
          aria-live="polite"
          initial={{ opacity: 0, y: -24, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -24, x: '-50%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`fixed top-6 left-1/2 z-[9999] flex items-start gap-3 px-5 py-4 rounded-2xl shadow-2xl border backdrop-blur-xl min-w-[320px] max-w-[90vw] pointer-events-auto ${
            toast.type === 'success'
              ? 'bg-green-500/20 border-green-500/50 text-green-50'
              : 'bg-red-500/20 border-red-500/50 text-red-50'
          }`}
        >
          {toast.type === 'success' ? (
            <CheckCircle2 className="shrink-0 text-green-400 mt-0.5" size={20} />
          ) : (
            <XCircle className="shrink-0 text-red-400 mt-0.5" size={20} />
          )}
          <p className="flex-1 text-sm font-medium leading-relaxed pr-2">{toast.message}</p>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 text-white/60 hover:text-white transition-colors"
            aria-label="Dismiss notification"
          >
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default Toast;

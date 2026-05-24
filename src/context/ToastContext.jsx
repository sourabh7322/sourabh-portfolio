import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import Toast from '../components/Toast';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((type, message) => {
    setToast({ type, message });
  }, []);

  const dismissToast = useCallback(() => {
    setToast(null);
  }, []);

  useEffect(() => {
    if (!toast) return undefined;

    const timer = setTimeout(() => {
      setToast(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, [toast]);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <Toast toast={toast} onClose={dismissToast} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

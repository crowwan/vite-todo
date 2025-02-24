import { useEffect } from 'react';

interface ToastProps {
  message: string;
  isOpen: boolean;
  close: () => void;
}

export const Toast = ({ message, isOpen, close }: ToastProps) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        close();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, close]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        color: 'white',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <div
        style={{
          padding: '1rem',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          fontWeight: 'bold',
          borderRadius: '4px',
          margin: '0 40px 10px',
        }}
      >
        {message}
      </div>
    </div>
  );
};

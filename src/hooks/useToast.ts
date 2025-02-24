import { useState } from 'react';

export const useToast = () => {
  const [message, setMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setMessage(message);
  };

  const hideToast = () => {
    setMessage(null);
  };

  return {
    message,
    showToast,
    hideToast,
  };
};

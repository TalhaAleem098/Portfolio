'use client';
import { Toaster } from 'sonner';

const ToastProvider = () => {
  return (
    <Toaster 
      position="bottom-right" 
      richColors 
      theme="dark"
      toastOptions={{
        style: {
          background: '#334155',
          border: '1px solid #475569',
          color: '#f1f5f9',
        },
      }}
    />
  );
};

export default ToastProvider;
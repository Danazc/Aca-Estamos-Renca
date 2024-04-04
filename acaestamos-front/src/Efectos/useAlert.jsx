import { useState } from 'react';

// Hook personalizado useAlert para manejar alertas
export function useAlert(alertsElementId) {
  const [alertState, setAlertState] = useState({
    visible: false,
    type: 'info',
    message: ''
  });

  // Función para mostrar una alerta
  const show = (message, type = 'info') => {
    setAlertState({
      visible: true,
      type,
      message
    });

    // Ocultar la alerta después de 5 segundos
    setTimeout(() => {
      setAlertState({
        visible: false,
        type: 'info',
        message: ''
      });
    }, 5000);
  };

  return [alertState, { show }];
}

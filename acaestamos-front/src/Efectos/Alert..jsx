import React from 'react';
import { useAlert } from './useAlert';
import './Efectos/Alert.css';// Importa el hook useAlert

function Alert() {
  const [alertState, alertApi] = useAlert("alertsElement"); // Usa el hook useAlert para obtener el estado y la API de alerta

  // Función para mostrar una alerta
  const showAlert = () => {
    alertApi.show("¡No llenaste correctamente los datos solicitados!");
  };

  return (
    <div>
      {/* Botón para mostrar la alerta */}
      <button onClick={showAlert}>Enviar Formulario</button>

      {/* Contenedor de alertas */}
      <div id="alertsElement">
        {alertState.visible && (
          <div className={`alert ${alertState.type}`}>
            {alertState.message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Alert;


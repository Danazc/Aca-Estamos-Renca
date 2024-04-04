import React, { useState } from 'react';

function ShowHide  ()  {

    const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="filtroAdmin" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
      <button onClick={toggleVisibility}>Toggle Visibility</button>
      {/* Agrega aquí el contenido que deseas mostrar/ocultar */}
    </div>
  );
}

export default ShowHide;
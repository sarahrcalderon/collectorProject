import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ContaGotas: React.FC = () => {
  const [cor, setCor] = useState<string>('#fff');
  const [mostrarSeletor, setMostrarSeletor] = useState<boolean>(false);

  const handleColorChange = (color: any) => {
    setCor(color.hex);
  };

  const togglePicker = () => {
    setMostrarSeletor(!mostrarSeletor);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: cor,
          border: '1px solid #000',
          margin: '0 auto',
        }}
      />
      <button onClick={togglePicker} style={{ marginTop: '20px' }}>
        {mostrarSeletor ? 'Fechar Seletor' : 'Selecionar Cor'}
      </button>
      {mostrarSeletor && (
        <div style={{ marginTop: '20px' }}>
          <SketchPicker color={cor} onChangeComplete={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default ContaGotas;
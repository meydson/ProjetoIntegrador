import React, { useState } from 'react';

const selection = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
    };

  
    return (        
        <select
          name="ocorrencia"
          value={selectedOption}
          onChange={handleSelectChange}
          className="w-full p-3 bg-gray rounded-md my-3 placeholder-black placeholder:text-lg"
        >
          <option value="" disabled>
            Ocorrência
          </option>
          <option value="entrega_normal">Entrega Realizada</option>
          <option value="recusa_cancelada">Entrega Recusada</option>
          <option value="avaria">Pedido Avariado</option>
        </select>
    );
  };

export default selection

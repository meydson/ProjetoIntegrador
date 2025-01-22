import React, { useState } from 'react';
import Inputfield from '../../components/Inputfield/inputfield';
import Button from '../../components/Button/button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [cnpj, setCnpj] = useState('');
  const [cpf, setCpf] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    //validação
    if (cnpj.trim() === '0000000001' && cpf.trim() === '0000000001') {
      setError('');
      navigate('/delivery');
    } else {
      setError('CNPJ ou CPF inválido!');
    }
  };

  return (
    <div className="p-[2rem]">
      <div className="flex justify-center p-2 text-[32px]">Login Motoristas</div>
      <form className="my-8">
        <Inputfield
          type="text"
          name="CNPJ"
          placeholder="CNPJ"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
        />
        <Inputfield
          type="text"
          name="CPF"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </form>
      {error && <div className="text-red text-center -mt-2 mb-8">{error}</div>}
      <Button type="button" label="ENTRAR" onClick={handleLogin} />
    </div>
  );
};

export default Login;

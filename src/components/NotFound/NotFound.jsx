import React from 'react';
import Head from '../Head/Head';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <Head
        title="Página Não Encontrada"
        description="Descrição de página não encontrada"
      />

      <h1>Página não encontrada</h1>
    </div>
  );
};

export default NotFound;

import React from 'react';
import { useParams } from 'react-router-dom';

import './CurrentContact.css';

const CurrentContact = () => {
  const params = useParams();
  console.log(params.id);

  const getData = (email) => (
    <p className="contact-content">
      E-mail:{' '}
      <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
        {email}
      </a>
    </p>
  );

  return (
    <section className="personal-contact">
      <h2>Contato {params.id}</h2>
      {params.id === 'pessoal' && getData('guilherme@pessoal.com')}
      {params.id === 'profissional' && getData('guilhermerl.dev@gmail.com')}
      {params.id !== 'pessoal' && params.id !== 'profissional' && (
        <p className="contact-not-found">Contato não encontrado</p>
      )}
    </section>
  );
};

export default CurrentContact;

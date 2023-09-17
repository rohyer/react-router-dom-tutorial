import React from 'react';
import Head from '../Head/Head';
import { Link, Outlet } from 'react-router-dom';

import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <Head title="Contato" description="Descrição de Contato" />
      <h1>Contato</h1>

      <div>
        <Link to="">Contato</Link>
        <Link to="pessoal">Contato Pessoal</Link>
        <Link to="profissional">Contato Profissional</Link>
      </div>

      <Outlet />
    </section>
  );
};

export default Contact;

import React from 'react';
import Head from '../Head/Head';

import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <Head title="Home" description="Descrição de Home" />

      <h1>Página Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        veritatis eum earum, dolor velit atque ea in quo sint saepe id
        doloremque at nulla voluptas enim numquam? Inventore, perspiciatis
        quasi.
      </p>
    </section>
  );
};

export default Home;

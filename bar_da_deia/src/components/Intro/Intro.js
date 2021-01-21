import React from 'react';
import { Link } from 'react-router-dom';
import './Intro.css';

export default function Intro() {
  return (
    <main className="mainBackground">
      <section className="head">
        <img
          src="/static_resources/baloons.png"
          type="image/png"
          alt="balões"
          className="baloes"
        />
        <h1 className="parabens">
          FELIZ <br />
          ANIVERSÁÁÁÁRIO, <span className="nome"> DEIA!</span>
        </h1>
        <img
          src="/static_resources/balloons2.png"
          type="image/png"
          alt="balões"
          className="baloes"
        />
      </section>
      <section className="mensagem">
        <p className="msg1">SEJA BEM-VINDA AOS 30 ANOS!</p>
        <p>
          NÓS SABEMOS QUE, SE NÃO FOSSE PELO CORONGA, VOCÊ JÁ TERIA COMEÇADO O
          ANO NA BUSCA PELO MELHOR BOTECÃO PRA REUNIR OS MIGOS TODOS NAQUELA
          MUVUCA CHEIA DE AMOR E CALOR HUMANO. ESTE ANO, EM ESPECIAL, TALVEZ ATÉ
          ROLASSE UM ROOFTOP MUITO TOPZERA PRA COMEMORAR OS 30 EM GRANDE ESTILO,
          NÉ? HAHAHAHA
        </p>
        <br />
        <p>
          INFELIZMENTE, ESTE ANO NÃO VAI ROLAR BOTECÃO DA DEIA PRA RECARREGAR AS
          ENERGIAS E SE PREPARAR PRO COMEÇO DO ANO, MAS A GENTE NÃO PODIA DEIXAR
          VOCÊ SEM AQUELA ~VIBE BOA~ DE ANIVERSÁRIO, NÉ? PORQUE, AFINAL, MESMO
          SEM BOTECO E SEM AGLOMERAÇÃO, A GENTE AINDA QUER QUE VOCÊ SE SINTA
          MUITO AMADA POR NÓS.
        </p>
        <br />
        <p>
          ENTÃO, PARA ENTRAR NAQUELE CLIMINHA BÃO DE BARZIN COM OS MIGOS, CLICA
          NO BOTÃO AÍ DO LADO E VEM CURTIR UM POUQUINHO COM A GENTE :){' '}
        </p>
        <Link to="/bar-com-os-migos">
          <button className="nextPage">BORA CURTIR!</button>
        </Link>
      </section>
    </main>
  );
}

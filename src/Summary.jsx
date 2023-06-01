import React from 'react';
import styles from './assets/index.module.css';

const Summary = () => {
  return (
    <>
      <div className={styles.box}>
        <header>Resumo da compra</header>
        <div className={styles.info}>
          <div>
            <span>Sub-total</span>
            <span>R$ 418</span>
          </div>
          <div>
            <span>Frete</span>
            <span>Gratuito</span>
          </div>
          <div>
            <button>
              Adicionar cupom de desconto
              <i className='bx bx-right-arrow-alt'></i>
            </button>
          </div>
        </div>
        <footer>
          <span>Total</span>
          <span>R$ 418</span>
        </footer>
      </div>
      <button>Finalizar Compra</button>
    </>
  );
};

export default Summary;
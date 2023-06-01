import PageHeader from './layout/PageHeader';
import PageTitle from './layout/PageTitle';
import Summary from './Summary';
import TableRow from './TableRow';
import styles from './assets/index.module.css';
import { useState } from 'react';

function ramdomNumber (min, max) {
  return  Math.floor(Math.random() * (max - min) + min);
}
 
function App() {

  const [cart, setCart] = useState([]); 
  
  return (
    <>
      <PageHeader />
      <main>
        <PageTitle data={'Seu carrinho'} />
        <div className={styles.content}>
          <section>
            <table>
              <thead className={styles.principal}>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead> 
              <tbody className={styles.dados}>
                {cart.map(item => 
                <TableRow/> 
                )}
                {cart.length === 0 &&
                 <tr><td colspan='5'>CARRINHO VAZIO</td></tr> 
                 }
              </tbody>
            </table>
          </section>
          <aside>
            <Summary />
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
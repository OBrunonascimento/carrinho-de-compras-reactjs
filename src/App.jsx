import PageHeader from './layout/PageHeader';
import PageTitle from './layout/PageTitle';
import Summary from './Summary';
// import TableRow from './TableRow';
import styles from './assets/index.module.css'

// function randomNumber(min, max){
//   return Math.floor(Math.random() * (max - min) + min);
// }

function App() {

  // const [cart, setCart] = useState([1,2,3]);

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
                {/* {cart.map((item) => (<TableRow />)) }     */}
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
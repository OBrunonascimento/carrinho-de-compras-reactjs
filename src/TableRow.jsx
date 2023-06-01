import React from 'react';
import styles from './assets/index.module.css';


const TableRow = () => {
  return (
    <tr>
      <td>
        <div className={styles.product}>
          <img src='https://picsum.photos/100/120' alt='' />
          <div className='info'>
            <div className={styles.name}>Nome do produto</div>
            <div className={styles.category}>Categoria</div>
          </div>
        </div>
      </td>
      <td>R$ 120</td>
      <td>
        <div className={styles.qty}>
          <button>
            <i className='bx bx-minus'></i>
          </button>
          <span>2</span>
          <button>
            <i className='bx bx-plus'></i>
          </button>
        </div>
      </td>
      <td>R$ 240</td>
      <td>
        <button className={styles.remove}>
          <i className='bx bx-x'></i>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
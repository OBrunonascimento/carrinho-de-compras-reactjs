import React from 'react';
import styles from '../assets/index.module.css'

const PageTitle = ({ data }) => {
  return <div className={styles.PageTitle}>{data || '{insira um titulo}'}</div>;
};

export default PageTitle;
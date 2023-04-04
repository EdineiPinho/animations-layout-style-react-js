import React from 'react'
import styles from './Produto.module.css'

const Produto = () => {
  console.log(styles)
  return (
    <div>
      <h1 className={styles.titulo}>Notebook</h1>
      <p className={styles.preco}>R$ 2.300,00</p>
      <button className={styles.comprar}>Comprar</button>
    </div>

  )
}

export default Produto
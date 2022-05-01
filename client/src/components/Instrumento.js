import { Component } from 'react'
import { useSearchParams } from 'react-router-dom'

const styles = {
  instrumento: {
    border: 'solid 1px #eee',
    boxShadow: '0 5px 5px rgba(0, 0, 0, 0.1)',
    width: '30%',
    padding: '10px 15px',
    borderRadius: '5px',
  },
  img: {
    width: '100%',
  },
  envio: {
    color: 'orange',
  },
  btn: {
    position: 'relative',
    fontSize: '1.2rem',
    backgroundColor: '#0A283E',
    color: '#fff',
    border: 'none',
    padding: '15px 25px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  price: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
}

const Instrumento = ({ instrumento }) => {
  return (
    <div style={styles.instrumento}>
      <h1 style={styles.title}>{instrumento.instrumento}</h1>
      <p style={styles.description}>{instrumento.descripcion}</p>
      <p style={styles.price}>{instrumento.precio}</p>
      <img
        style={styles.img}
        src={instrumento.img}
        alt={instrumento.instrumento}
      />
      {instrumento.costoEnvio === 'G' ? (
        <p>
          <img alt='Envío gratis' src='./img/camion.png' />
          Envio gratis a todo el país
        </p>
      ) : (
        <p style={styles.envio}>Costo de envio: {instrumento.costoEnvio}</p>
      )}
      <button style={styles.btn}>Comprar</button>
    </div>
  )
}

export default Instrumento

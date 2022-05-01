import Instrumento from './Instrumento'

const styles = {
  instrumentos: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '10px 15px',
  },
}

const Instrumentos = ({ instrumentos }) => {
  return (
    <div style={styles.instrumentos}>
      {instrumentos.map((el) => (
        <Instrumento key={el.id} instrumento={el} />
      ))}
    </div>
  )
}

export default Instrumentos

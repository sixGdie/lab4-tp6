import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import Instrumentos from './components/Instrumentos'
import { Routes, Route, Link } from 'react-router-dom'
import InstrumentoDetalle from './components/InstrumentoDetalle'
import Instrumento from './components/Instrumento'

const App = () => {
  const [instrumentos, setInstrumentos] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((res) => res.json())
      .then((data) => {
        setInstrumentos(data)
      })
  }, [instrumentos])
  return (
    <div>
      <Layout>
        <Instrumentos instrumentos={instrumentos} />
      </Layout>
    </div>
  )
}

export default App

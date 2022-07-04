import Formulario from '../components/Formulario'
import { useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'

const EditarCliente = () => {
  const [cliente, setCliente] = useState({});
  const {id} = useParams()
  const [cargando, setCargando] = useState(true);

  useEffect( () => {
    
    const obtenerClienteAPI = async () => {
    try {
      const url = `http://localhost:4000/clientes/${id}`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      setCliente(resultado)
    } catch (error) {
        console.log(error)
    }
    setCargando(!cargando)
  }
  obtenerClienteAPI()
  }, [])

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
      <p className='mt-3'>Edita los campos necesarios</p>

      {cliente?.nombre ? (
        <Formulario
        cliente={cliente}
        cargando={cargando}
      />
      ): <p className='bg-red-700 text-white uppercase font-bold'>El ID de cliente es incorrecto o no existe</p>}
      
    </>
  )
}

export default EditarCliente
import { useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'


const VerCliente = () => {
  const [cliente, setCliente] = useState({});
  const {id} = useParams()

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
  }
  obtenerClienteAPI()
  }, [])

  return (
    <div>

      <h1 className='font-black text-4xl text-blue-900'>Ver Cliente</h1>
      <p className='mt-3'>Informacion del cliente</p>
      <p className='text-4xl text-gray-700 mt-10'>
        <span className='uppercase font-bold'>Cliente: </span>
        {cliente.nombre}
      </p>
      <p className='text-2xl text-gray-700 mt-4'>
        <span className='uppercase font-bold'>Email: </span>
        {cliente.email}
      </p>
      <p className='text-2xl text-gray-700 mt-4'>
        <span className='uppercase font-bold'>Telefono: </span>
        {cliente.telefono}
      </p>
      <p className='text-2xl text-gray-700 mt-4'>
        <span className='uppercase font-bold'>Empresa: </span>
        {cliente.empresa}
      </p>
      {cliente.observaciones && (
        <p className='text-2xl text-gray-700 mt-4'>
        <span className='uppercase font-bold'>Observaciones: </span>
        {cliente.observaciones}
      </p>
      )}
      
    </div>
  )
}

export default VerCliente
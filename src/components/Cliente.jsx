import React from 'react'
import {useNavigate} from 'react-router-dom'

const Cliente = ({ cliente, handleEliminar}) => {

  const { nombre, empresa, email, telefono, id} =cliente

  const navigate = useNavigate()

  return (
    <tr className='border-b hover:bg-gray-100'>
        <td className="p-3">{nombre}</td>
        <td className="p-3">
          <p><span className='text-gray-800 uppercase font-bold'>Email: </span>{email}</p>
          <p><span className='text-gray-800 uppercase font-bold'>Telefono: </span>{telefono}</p>         
        </td>
        <td className="p-3">{empresa}</td>    
        <td className='p-3'>
          <button 
            type='button'
            className='bg-yellow-400 hover:bg-yellow-500 block w-full text-white p-2 uppercase font-bold text-xs'
            onClick={ () => navigate(`/clientes/${id}`)}
          >Ver
          </button>
          <button 
            type='button'
            className='mt-3 bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs'
            onClick={ () => navigate(`/clientes/editar/${id}`) }
          >Editar
          </button>
          <button
            className='mt-3 bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs'
            type='button'
            onClick={() => handleEliminar(id)}
          >Eliminar
          </button>
        </td>
    
    </tr>

  )
}

export default Cliente
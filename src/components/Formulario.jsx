import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import Alerta from './Alerta'
import Spinner from './Spinner'

const Formulario = ({ cliente, cargando }) => {

    const navigate = useNavigate()

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string().required('El nombre es obligatorio').min(2, 'el nombre es muy corto'). max(12, 'el nombre es muy largo'),
        empresa: Yup.string().required('El nombre de la empresa es obligatorio'),
        email: Yup.string().email('Email no valido').required('El emial es obligatorio'),
        telefono: Yup.number().typeError('El numero no es valido').positive('Numero no valido').integer('Numero no valido'),
        observaciones: Yup.string()
    })

  
  const handleSubmit = async (values) => {
    try {
        let respuesta
        if (cliente.id) {
            // editando registro
            const url = `http://localhost:4000/clientes/${cliente.id}`
            respuesta = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(values),            
            headers: {
                'Content-Type': 'application/json',
                }
            }) 
        } else {
            // nuevo registro
            const url = 'http://localhost:4000/clientes'
            respuesta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(values),            
            headers: {
                'Content-Type': 'application/json',
                }
            })        
            
        }
        await respuesta.json()
        navigate('/clientes')
    } catch (error) {
        console.log(error)
    }
  }


  return (
    cargando? <Spinner /> :
    (<div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
        <h1
            className='text-gray-600 font-bold text-xl uppercase'
            >
            {cliente?.nombre ? 'Editar Cliente': 'Agregar Cliente'}
        </h1>
        <Formik
            initialValues = {{
                nombre: cliente?.nombre ?? '',
                empresa: cliente?.empresa ?? '',
                email: cliente?.email ?? '',
                telefono: cliente?.telefono ?? '',
                observaciones: cliente?.observaciones ?? '',
            }}
            enableReinitialize={true}
            onSubmit = { async (values, {resetForm}) => {
                await handleSubmit(values)

                resetForm()
            }
            }
            validationSchema = {nuevoClienteSchema}
            >


            { ({errors, touched}) => {
                
                return (
            <Form
                className='mt-10'
            >
                <div className = 'mb-4'>
                    <label
                        className='text-gray-800'
                        htmlFor='nombre'
                    >Nombre:</label>
                    <Field
                        id = 'nombre'
                        type = 'text'
                        className = 'mt-2 block w-full p-3 bg-gray-50'
                        placeholder = 'Nombre del Cliente'
                        name= 'nombre'
                    ></Field>

                    {errors.nombre && touched.nombre ? (
                        <Alerta>{errors.nombre}</Alerta>) : null }

                </div>
                <div className = 'mb-4'>
                    <label
                        className='text-gray-800'
                        htmlFor='empresa'
                    >Empresa:</label>
                    <Field
                        id = 'empresa'
                        type = 'text'
                        className = 'mt-2 block w-full p-3 bg-gray-50'
                        placeholder = 'Empresa del Cliente'
                        name = 'empresa'
                    ></Field>
                    
                    {errors.empresa && touched.empresa ? (
                        <Alerta>{errors.empresa}</Alerta>) : null }


                </div>
                <div className = 'mb-4'>
                    <label
                        className='text-gray-800'
                        htmlFor='email'
                    >Email:</label>
                    <Field
                        id = 'email'
                        type = 'email'
                        className = 'mt-2 block w-full p-3 bg-gray-50'
                        placeholder = 'Email del Cliente'
                        name = 'email'
                    ></Field>
                    
                    {errors.email && touched.email ? (
                        <Alerta>{errors.email}</Alerta>) : null }

                </div>
                <div className = 'mb-4'>
                    <label
                        className='text-gray-800'
                        htmlFor='telefono'
                    >Telefono:</label>
                    <Field
                        id = 'telefono'
                        type = 'tel'
                        className = 'mt-2 block w-full p-3 bg-gray-50'
                        placeholder = 'Telefono del Cliente'
                        name = 'telefono'
                    ></Field>

                        {errors.telefono && touched.telefono ? (
                        <Alerta>{errors.telefono}</Alerta>) : null }   
                    
                </div>
                <div className = 'mb-4'>
                    <label
                        className='text-gray-800'
                        htmlFor='observaciones'
                    >Observaciones:</label>
                    <Field
                        as = 'textarea'
                        id = 'observaciones'
                        type = 'text'
                        className = 'mt-2 block w-full p-3 bg-gray-50 h-40'
                        placeholder = 'Escriba aqui...'
                        name = 'observaciones'
                    ></Field>
                    
                </div>
                <input
                    type = 'submit'
                    value= {cliente?.nombre ? 'Editar Cliente': 'Agregar Cliente'}
                    className = 'hover:cursor-pointer mt-5 w-full p-3 bg-blue-800 text-white uppercase font-bold text-lg hover:bg-blue-700'
                />
            </Form>)}}
        </Formik>
    </div>)
  )
}

Formulario.defaultProps = {
    cliente: {},
    cargando: false
}

export default Formulario
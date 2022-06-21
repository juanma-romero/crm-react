import React from 'react'
import { Formik, Form, Field} from 'formik'

const Formulario = () => {

  const handleSubmit = (valores) => {
    console.log(valores)
  }

  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
        <h1 className='text-gray-600 font-bold text-xl uppercase'>Agregar cliente</h1>
        <Formik
            initialValues = {{
                nombre: '',
                empresa: '',
                email: '',
                telefono: '',
                observaciones: '',
            }}

            onSubmit = { (values) => {
                handleSubmit(values)
            }

            }
            >
            { () => (
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
                    value= 'Agregar cliente'
                    className = 'mt-5 w-full p-3 bg-blue-800 text-white uppercase font-bold text-lg'
                />
            </Form>)}
        </Formik>
    </div>
  )
}

export default Formulario
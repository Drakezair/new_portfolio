import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useMutation } from '@tanstack/react-query';

import { suscribeToNewsletter } from '../../libs/mailchimp/mailchimp';

export default function CTASection() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation({
    mutationKey: ['newsletter_suscribe'],
    mutationFn: (data: { email: string }) => suscribeToNewsletter(data.email),
  });

  return (
    <div className='bg-gray-900 px-6 py-24'>
      <div className='container  mx-auto '>
        <section className=' text-center text-gray-800 lg:text-left'>
          <div className='flex flex-wrap justify-center'>
            <div className='w-full shrink-0 grow-0 basis-auto px-3 lg:w-10/12'>
              <div className='grid items-center gap-x-6 lg:grid-cols-2'>
                <div className='mb-10 lg:mb-0'>
                  <h2 className='font-mono text-3xl font-bold text-white'>
                    Únete y ponte al día en
                    <br />
                    <span className='font-primary text-yellow-300'>
                      Desarrollo de software
                    </span>
                  </h2>
                </div>

                <div className='mb-6 md:mb-0'>
                  <form
                    onSubmit={handleSubmit((data) =>
                      mutate({ email: data.email })
                    )}
                  >
                    <div className='flex-row md:flex'>
                      <input
                        type='email'
                        className='form-control m-0 mb-2 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none md:mb-0 md:mr-2'
                        placeholder='Correo electrónico'
                        {...register('email', {
                          required: {
                            message: 'Campo requerido',
                            value: true,
                          },
                          pattern: {
                            message: 'El formato de correo no es el correcto',
                            value:
                              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                          },
                        })}
                      />
                      <button
                        type='submit'
                        className='inline-block rounded bg-yellow-300 px-7 py-3 font-primary text-sm font-medium uppercase leading-snug text-gray-800 shadow-md transition duration-150 ease-in-out hover:bg-yellow-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
                        data-mdb-ripple='true'
                        data-mdb-ripple-color='light'
                      >
                        Subscribirme
                      </button>
                    </div>
                    <ErrorMessage
                      errors={errors}
                      name='email'
                      render={({ message }) => (
                        <p className='my-9 text-sm text-red-500'>{message}</p>
                      )}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

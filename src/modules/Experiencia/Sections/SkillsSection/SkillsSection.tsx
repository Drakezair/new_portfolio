import Image from 'next/image';

export default function SkillsSection() {
  return (
    <div className='bg-gray-900 py-16 px-6'>
      <div className='container mx-auto'>
        <section className='text-center text-gray-800 lg:text-left'>
          <div className='py-12  md:px-12'>
            <div className='container mx-auto xl:px-32'>
              <div className='items-center md:flex lg:grid lg:grid-cols-2'>
                <div className='mb-12 md:mt-12 lg:mt-0 lg:mb-0'>
                  <div
                    className='relative block rounded-lg px-6 pt-12 pb-6 shadow-lg md:px-12 lg:-mr-14'
                    style={{
                      background: 'hsla(0, 0%, 100%, 0.55)',
                      backdropFilter: 'blur(30px)',
                      zIndex: 1,
                    }}
                  >
                    <h2 className='mb-6 text-3xl font-bold'>
                      Habilidades y Tecnologías
                    </h2>
                    <p className='mb-6 text-gray-500'>
                      Desarrollador Fullstack con mas de 5 años de experienca.
                      Hablidades de liderazgo, comunicativas y manejo de
                      requerimentos.
                    </p>

                    <div className='grid gap-x-6 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3'>
                      <div className='mb-6'>
                        <p className='flex items-center'>
                          <svg
                            className='mr-2 h-4 w-4 text-gray-900'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                          >
                            <path
                              fill='currentColor'
                              d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
                            ></path>
                          </svg>
                          ReactJs
                        </p>
                      </div>

                      <div className='mb-6'>
                        <p className='flex items-center'>
                          <svg
                            className='mr-2 h-4 w-4 text-gray-900'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                          >
                            <path
                              fill='currentColor'
                              d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
                            ></path>
                          </svg>
                          React Native
                        </p>
                      </div>

                      <div className='mb-6'>
                        <p className='flex items-center'>
                          <svg
                            className='mr-2 h-4 w-4 text-gray-900'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                          >
                            <path
                              fill='currentColor'
                              d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
                            ></path>
                          </svg>
                          NestJs
                        </p>
                      </div>
                      <div className='mb-6'>
                        <p className='flex items-center'>
                          <svg
                            className='mr-2 h-4 w-4 text-gray-900'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                          >
                            <path
                              fill='currentColor'
                              d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
                            ></path>
                          </svg>
                          NextJs
                        </p>
                      </div>

                      <div className='mb-6'>
                        <p className='flex items-center'>
                          <svg
                            className='mr-2 h-4 w-4 text-gray-900'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                          >
                            <path
                              fill='currentColor'
                              d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
                            ></path>
                          </svg>
                          AWS
                        </p>
                      </div>

                      <div className='mb-6'>
                        <p className='flex items-center'>
                          <svg
                            className='mr-2 h-4 w-4 text-gray-900'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                          >
                            <path
                              fill='currentColor'
                              d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
                            ></path>
                          </svg>
                          CD/CI
                        </p>
                      </div>
                      <div className='mb-6'>
                        <p className='flex items-center'>
                          <svg
                            className='mr-2 h-4 w-4 text-gray-900'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                          >
                            <path
                              fill='currentColor'
                              d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
                            ></path>
                          </svg>
                          Python
                        </p>
                      </div>

                      <div className='mb-6'>
                        <p className='flex items-center'>
                          <svg
                            className='mr-2 h-4 w-4 text-gray-900'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                          >
                            <path
                              fill='currentColor'
                              d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
                            ></path>
                          </svg>
                          Postgres
                        </p>
                      </div>

                      <div className='mb-6'>
                        <p className='flex items-center'>
                          <svg
                            className='mr-2 h-4 w-4 text-gray-900'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                          >
                            <path
                              fill='currentColor'
                              d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
                            ></path>
                          </svg>
                          Serverless
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='md:mb-12 lg:mb-0'>
                  <Image
                    src='https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
                    className='rotate-lg-6 w-full rounded-lg shadow-lg'
                    alt='image_code'
                    width={440}
                    height={550}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

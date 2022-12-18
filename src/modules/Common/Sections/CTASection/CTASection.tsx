export default function CTASection() {
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
                  <div className='flex-row md:flex'>
                    <input
                      type='text'
                      className='form-control m-0 mb-2 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none md:mb-0 md:mr-2'
                      placeholder='Correo electrónico'
                    />
                    <button
                      type='submit'
                      className='inline-block rounded bg-yellow-300 px-7 py-3 font-primary text-sm font-medium uppercase leading-snug text-gray-800 shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
                      data-mdb-ripple='true'
                      data-mdb-ripple-color='light'
                    >
                      Subscribirme
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

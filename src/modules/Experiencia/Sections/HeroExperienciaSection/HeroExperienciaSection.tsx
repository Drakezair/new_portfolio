export default function HeroExperienciaSection() {
  return (
    <div>
      <section className='mb-40'>
        <div
          className=' relative overflow-hidden bg-cover bg-no-repeat max-lg:bg-bottom lg:bg-center'
          style={{
            backgroundImage: `url('/images/image_2.png')`,
            height: 500,
          }}
        ></div>
        <div className='container mx-auto px-6 md:px-12 xl:px-32'>
          <div className='text-center text-gray-800'>
            <div
              className='block rounded-lg px-6 py-6 shadow-lg '
              style={{
                marginTop: -120,
                background: 'hsla(0, 0%, 100%, 0.7)',
                backdropFilter: 'blur(3px)',
              }}
            >
              <h1 className='text-5xl font-bold  md:text-6xl xl:text-7xl'>
                Luis Andrade <br />
                <small className='text-lg'>
                  FullStack Javascript | DevOps | Apps | Tech lead
                </small>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

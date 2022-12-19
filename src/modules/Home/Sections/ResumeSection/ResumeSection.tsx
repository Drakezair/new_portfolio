export default function ResumeSection() {
  return (
    <div className='container mx-auto px-6 lg:my-24'>
      <section className='background-radial-gradient text-white lg:mb-32'>
        <div className='px-6 py-12 text-center md:px-12 lg:text-left'>
          <div className='container mx-auto'>
            <div className='grid items-center gap-12 lg:grid-cols-2'>
              <div className='mt-12 lg:mt-0'>
                <h1 className='mb-12  font-mono text-5xl tracking-tight text-white md:text-6xl xl:text-7xl'>
                  Enseñando aprendemos
                </h1>
                <p className='font-primary text-lg text-white '>
                  Aprender y enseñar siempre me ha apasionado por lo que inicie
                  este proyecto en el cual comparto mis conocimientos y
                  experiencias como Fullstack Developer. Me alegra mucho que
                  estes aqui.
                </p>
              </div>
              <div className='mb-12 lg:mb-0'>
                <div
                  className='embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg'
                  style={{ paddingTop: '56.25%' }}
                >
                  <iframe
                    className='embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full'
                    src='https://www.youtube.com/embed/rhVgud3hncc?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com'
                    data-gtm-yt-inspected-2340190_699='true'
                    id='240632615'
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

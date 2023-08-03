import Image from 'next/image'

function Work() {
  return (
    <>
      <div className='w-full flex flex-col items-center justify-center h-full'>
        <h2 className='text-left text-2xl text-gray-400 mb-4 font-bold'>Estamos trabajando en esto...</h2>
        <Image src='/workInProgress.svg' alt='svg-work-in-progress' width={400} height={400} className='w-10/12 opacity-80'/>
      </div>
    </>
  )
}

export default Work
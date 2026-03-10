import NotFound from '../../assets/404svg.jpg'

const ErrorPage = () => {
  return (
    <>
    <div className='mx-auto w-full flex  justify-center'>
        <img src={NotFound} alt=""  width={500}/>
    </div>
        <h1 className='text-2xl font-semibold text-center'>404 Not found</h1>
    </>
  )
}

export default ErrorPage
    
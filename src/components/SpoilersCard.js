import Carroussel from './Carroussel'
import CrossTransition from './CrossTransition'

const SpoilersCard = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="w-[80vw] bg-[#26093A] relative rounded-[80px] px-20 py-10 flex flex-col gap-5 text-white">
          <div className='flex items-center flex-col gap-5'>

          <h1>CUIDADO, AO ROLAR PODE CONTER...</h1>
          <CrossTransition />
          <img src="/assets/Spoilers.png" alt="spoilers"></img>
          <img
            className="w-5 my-10"
            src="/assets/ArrowDown.png"
            alt="spoilers"
          ></img>
          <p className="font-bold">VOCÊ JA ESTAVA SABENDO?</p>
          </div>
          <Carroussel />
        </div>
      </div>
    </>
  )
}

export default SpoilersCard

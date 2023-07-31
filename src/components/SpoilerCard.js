import Card from './Card'
import Carroussel from './Carroussel'
import PlusTransition from './PlusTransition'

const SpoilersCard = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <Card className='w-[60vw]  px-20 py-10 rounded-[80px]'>
            <div className="flex items-center flex-col gap-14">
              <h1
                className="text-[#26093A] text-bold text-4xl mt-10"
                style={{
                  textShadow:
                    '1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff',
                }}
              >
                CUIDADO, AO ROLAR PODE CONTER...
              </h1>
              <PlusTransition />
              <img className='w-3/4 mb-14' src="/assets/tittle1.svg" alt="spoilers" />
              <img
                className="w-8 my-10"
                src="/assets/arrow-down.png"
                alt="arrow down"
              />
              <p className="font-bold text-2xl">VOCÊ JA ESTAVA SABENDO?</p>
            </div>
            <Carroussel />
        </Card>
      </div>png
    </>
  )
}

export default SpoilersCard

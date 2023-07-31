import React, { useEffect, useState, forwardRef } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Arrow from './Arrow'

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('active')
      })
    }
    function addActive(idx) {
      slider.slides[idx].classList.add('active')
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on('created', () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on('animationStarted', (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

const Carroussel = forwardRef((props, ref) => {
  const imagesCarroussel = [
    {
      url: '/assets/imagem.jpg?a=1',
      date: '16 DE MARÇO',
    },
    {
      url: '/assets/imagem.jpg?a=2',
      date: '17 DE MARÇO',
    },
    {
      url: '/assets/imagem.jpg?a=3',
      date: '18 DE MARÇO',
    },
    {
      locked: true,
      date: '21 DE MARÇO',
    },
    {
      locked: true,
      date: '23 DE MARÇO',
    },
    {
      locked: true,
      date: '25 DE MARÇO',
    },
  ]
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  })

  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    instanceRef.current.on('slideChanged', (a) =>
      setActiveSlide(a.track.details.abs)
    )
  }, [])

  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 5,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <>
      <div className="relative" ref={ref}>
        <div ref={sliderRef} className="keen-slider">
          {imagesCarroussel.map((img) => {
            return !img.locked ? (
              <div className="keen-slider__slide rounded-2xl cursor-pointer overflow-hidden">
                <img src={img.url} alt="Florianopolis" className='w-full' />
                <div className="absolute w-full right-0 left-0 flex justify-center items-center h-20 opacity-[.9] bg-[#000000] share-spoilers -bottom-full">
                  <div className='flex items-center gap-3'>
                    <p className='font-bold'>Espalhe este SPOILER:</p>
                  <img src='/assets/facebook.svg' alt='Facebook' />
                  <img src='/assets/linkedin.svg' alt='Linkedin' />
                  <img src='/assets/whatsapp.svg' alt='WhatsApp' />
                  <img src='/assets/twitter.svg' alt='Twitter' />
                  </div>
                </div>
              </div>
            ) : (
              <div className="keen-slider__slide bg-[#280031] flex flex-col items-center justify-center rounded-2xl cursor-pointer">
                <img className="w-10" src="/assets/lock.svg" alt="lock" />
                <p className="text-2xl bold mt-2">EM BREVE</p>
              </div>
            )
          })}
        </div>
        <p className="text-center mt-10 mb-2 font-bold text-xl">
          CONFIRA O QUE JÁ SAIU E O QUE ESTÁ POR VIR!
        </p>
        <div ref={thumbnailRef} className="keen-slider thumbnail mb-6">
          {imagesCarroussel.map((img, i) => {
            return (
              <>
                {!img.locked ? (
                  <div className="keen-slider__slide flex flex-col items-center justify-center gap-1">
                    <div
                      className={[
                        'rounded-2xl m-2 cursor-pointer',
                        activeSlide === i && 'shadow-[0_0_0_5px_white]',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <img
                        onClick={() => instanceRef.current.moveToIdx(i)}
                        src={img.url}
                        className="rounded-2xl"
                        alt="Florianopolis"
                      />
                    </div>
                    <p
                      className={
                        activeSlide !== i
                          ? 'text-[#FC2BEE] font-bold'
                          : 'text-white font-bold'
                      }
                    >
                      {img.date}
                    </p>
                  </div>
                ) : (
                  <div className="keen-slider__slide flex flex-col items-center justify-center gap-1 px-2">
                    <div
                      className={[
                        'bg-[#280031] flex-grow w-full flex items-center justify-center rounded-2xl m-2 cursor-pointer',
                        activeSlide === i && 'shadow-[0_0_0_5px_white]',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <img className="w-10" src="/assets/lock.svg" alt="lock" />
                    </div>
                    <p
                      className={
                        activeSlide !== i
                          ? 'text-[#FC2BEE] font-bold'
                          : 'text-white font-bold'
                      }
                    >
                      {img.date}
                    </p>
                  </div>
                )}
              </>
            )
          })}
        </div>
        <div className="flex items-center justify-center rounded-full gap-3">
          {imagesCarroussel.map((_, idx) => (
            <div
              className={[
                'w-3 rounded-full h-3',
                activeSlide === idx ? 'bg-white' : 'bg-gray-400',
              ]
                .filter(Boolean)
                .join(' ')}
            />
          ))}
        </div>
        <Arrow onClick={() => instanceRef.current.next()} direction="right" />
        <Arrow onClick={() => instanceRef.current.prev()} direction="left" />
      </div>
    </>
  )
})

export default Carroussel

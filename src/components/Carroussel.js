import React, { useEffect, useState, forwardRef } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
// import "./projects.css";

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
      url: '/assets/Florianopolis.jpg?a=1',
      date: '16 DE MARÇO',
    },
    {
      url: '/assets/Florianopolis.jpg?a=2',
      date: '17 DE MARÇO',
    },
    {
      url: '/assets/Florianopolis.jpg?a=3',
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
              <img
                className="keen-slider__slide rounded-2xl cursor-pointer"
                src={img.url}
                alt=""
              />
            ) : (
              <div className="keen-slider__slide bg-[#280031] flex flex-col items-center justify-center rounded-2xl cursor-pointer">
                <img className="w-10" src="/assets/Cadeado.png" alt="" />
                <p className='text-2xl bold mt-2'>EM BREVE</p>
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
                        alt="a"
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
                      <img className="w-10" src="/assets/Cadeado.png" alt="" />
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
        <div
          onClick={() => instanceRef.current.prev()}
          className="w-10 h-10 absolute bottom-[6rem] -left-14 bg-white rounded-full flex items-center justify-center cursor-pointer button-shadow"
        >
          <img className="invert w-4 mr-1" src="/assets/ArrowLeft.png" alt=""></img>
        </div>
        <div
          onClick={() => instanceRef.current.next()}
          className="w-10 h-10 absolute bottom-[6rem] -right-14 bg-white rounded-full flex items-center justify-center cursor-pointer button-shadow"
        >
          <img className="invert w-4 ml-1" src="/assets/ArrowRight.png" alt=""></img>
        </div>
      </div>
    </>
  )
})

export default Carroussel

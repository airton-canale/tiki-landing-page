import { ToastContainer } from 'react-toastify'
import Background from './components/Background'
import CompanyLogo from './components/CompanyLogo'
import CrossTransition from './components/CrossTransition'
import FormCard from './components/FormCard'
import SpoilersCard from './components/SpoilerCard'

function App() {
  return (
    <>
      <Background />
      <CompanyLogo />
      <SpoilersCard />
      <div className="flex justify-center mt-10 mb-24 flex-col items-center gap-10">
        <img
          className="text-center relative w-[45vw] mt-10 mb-10"
          src="/assets/QueroFazerParte.png"
          alt=""
        />
        <CrossTransition />
      </div>
      <FormCard />
      <ToastContainer />
    </>
  )
}

export default App

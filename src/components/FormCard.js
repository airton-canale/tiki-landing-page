import { useState } from 'react'
import Card from './Card'
import RadioInput from './RadioInput'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PlusTransition from './PlusTransition'

const FormCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const [checked, setChecked] = useState(false)

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const [isLoading, setIsLoading] = useState(false)

  const handleCheck = () => {
    setChecked((prevChecked) => !prevChecked)
  }

  const handleSubmit = () => {
    console.log(formData)
    const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000))
    setFormData({
      name: '',
      email: '',
    })
    setChecked(false)
    setIsLoading(true)
    toast
      .promise(resolveAfter3Sec, {
        pending: 'Carregando...',
        success: `Obrigado ${formData.name}, seu cadastro com o email ${formData.email} foi realizado com sucesso!`,
      })
      .then(() => {
        setIsLoading(false)
      })
  }

  const isNameValid =
    formData.name.length > 5 && formData.name.trim().includes(' ')
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)

  return (
    <div className="w-full flex items-center justify-center">
      <Card className="w-[25vw]  px-10 py-5 rounded-[40px] pb-16">
        <p className="font-bold text-center text-xl mt-8">
          CADASTRE-SE E FIQUE POR DENTRO DAS NOVIDADES
        </p>
        <input
          onChange={handleChange}
          name="name"
          className="p-4 rounded-3xl bg-[#26093A] border border-white text-sm outline-none focus:border-[#FC2BEE] focus:text-[#FC2BEE] focus:placeholder:text-[#FC2BEE]"
          type={'text'}
          value={formData?.name}
          placeholder={'Nome Completo'}
        />
        <input
          onChange={handleChange}
          name="email"
          className="p-4 rounded-3xl bg-[#26093A] border border-white text-sm outline-none focus:border-[#FC2BEE] focus:text-[#FC2BEE] focus:placeholder:text-[#FC2BEE]"
          type={'email'}
          value={formData?.email}
          placeholder={'meuemail@gmail.com'}
        />
        <label
          onClick={handleCheck}
          className="w-full text-xs flex items-center gap-1"
        >
          <RadioInput checked={checked} /> Declaro que li e aceito a politica de
          privacidade
        </label>
        <button
          onClick={handleSubmit}
          disabled={(!checked || !isNameValid || !isEmailValid) && !isLoading}
          className={
            'bg-white rounded-3xl flex justify-center text-black text-xl font-bold p-3 w-full uppercase button-shadow disabled:bg-slate-400 disabled:shadow-none'
          }
        >
          {!isLoading ? 'Enviar' : <PlusTransition horizontal />}
        </button>
      </Card>
    </div>
  )
}

export default FormCard

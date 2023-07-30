import { useState } from 'react'
import Card from './Card'
import RadioInput from './RadioInput'

const FormCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })

  const handleChange = ({target: {name, value}}) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  console.log(formData)

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
          placeholder={'Nome'}
        />
        <input
        onChange={handleChange}
          name="email"
          className="p-4 rounded-3xl bg-[#26093A] border border-white text-sm outline-none focus:border-[#FC2BEE] focus:text-[#FC2BEE] focus:placeholder:text-[#FC2BEE]"
          type={'email'}
          placeholder={'meuemail@gmail.com'}
        />
        <label className="w-full text-xs flex items-center gap-1">
          <RadioInput checked={true} /> Declaro que li e aceito a politica de
          privacidade
        </label>
        <button className='bg-white rounded-3xl text-black text-xl font-bold p-3 w-full uppercase button-shadow'>Enviar</button>
      </Card>
    </div>
  )
}

export default FormCard

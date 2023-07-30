const RadioInput = ({ onClick, checked }) => {
  return (
    <div onClick={onClick} className="rounded-full w-4 h-4 border-2	border-white border-solid flex items-center justify-center">
      {checked && <div className="rounded-full w-2 h-2 bg-[#FC2BEE]" />}
    </div>
  )
}

export default RadioInput

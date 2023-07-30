const Card = ({children, className = ''}) => {
  return (
    <div className={`bg-[#26093A] relative flex flex-col gap-5 text-white ${className}`}>
      {children}
    </div>
  )
}

export default Card

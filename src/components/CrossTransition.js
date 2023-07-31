const PlusSign = ({ idx }) => {
  return (
    <div
      className={`plus-blink bold text-yellow-400 text-2xl leading-[1.3rem]`}
      style={{ animationDelay: `${idx * 0.1}s` }}
    >
      +
    </div>
  )
}

const CrossTransition = ({horizontal = false}) => {
  return (
    <div>
      <div className={["flex gap-0", horizontal ? "flex-row" : "flex-col"].filter(Boolean).join(' ')}>
        {[1, 2, 3].map((_, i) => (
          <PlusSign idx={i} />
        ))}
      </div>
    </div>
  )
}

export default CrossTransition

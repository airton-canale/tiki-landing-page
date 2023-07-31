const Arrow = ({ onClick, direction }) => {
  return (
    <div
      onClick={onClick}
      className={[
        'w-10 h-10 absolute bottom-[7rem] bg-white rounded-full flex items-center justify-center cursor-pointer button-shadow',
        direction === 'right' ? '-right-14' : '-left-14',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {direction === 'right' ? (
        <img src="/assets/arrow-right.svg" className="invert" alt="arrow right" />
      ) : (
        <img src="/assets/arrow-left.svg" className="invert" alt="arrow left" />
      )}
    </div>
  )
}

export default Arrow

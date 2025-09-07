const BritishFlag = () => {
  return (
    <div className="w-10 h-8">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <clipPath id="a">
          <path d="M0 0v200h300V0z" />
        </clipPath>
        <clipPath id="b">
          <path d="M150 100h150v100zv100H0zH0V0zV0h150z" />
        </clipPath>
        <g clipPath="url(#a)">
          <path fill="#012169" d="M0 0v200h300V0z" />
          <path stroke="#fff" strokeWidth="20" d="m0 0 300 200m0-200L0 200" />
          <path
            stroke="#C8102E"
            strokeWidth="12"
            d="m0 0 300 200m0-200L0 200"
            clipPath="url(#b)"
          />
          <path stroke="#fff" strokeWidth="34" d="M150 0v200M0 100h300" />
          <path stroke="#C8102E" strokeWidth="20" d="M150 0v200M0 100h300" />
        </g>
      </svg>
    </div>
  )
}

export default BritishFlag

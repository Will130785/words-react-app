import type { ButtonHTMLAttributes } from 'react'

export type StandardButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string
}

const StandardButton = ({ text, ...props }: StandardButtonProps) => {
  return (
    <button
      className="w-full p-2 text-center border-1 rounded-lg cursor-pointer hover:bg-white hover:text-black"
      {...props}
    >
      {text}
    </button>
  )
}

export default StandardButton

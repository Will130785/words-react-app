import type { InputHTMLAttributes } from 'react'

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {}

const TextInput = ({ ...props }: TextInputProps) => {
  return (
    <div className="my-4">
      <input className="w-full p-2 border-1" {...props} />
    </div>
  )
}

export default TextInput

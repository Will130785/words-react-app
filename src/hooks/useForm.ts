import { useState } from 'react'

export const useForm = (defaultValues: { [key: string]: string }) => {
  const [formValues, setFormValues] = useState(defaultValues)

  const handleInput = (e: string, name: string) => {
    const formValuesCopy = { ...formValues }
    formValuesCopy[name] = e
    setFormValues(formValuesCopy)
  }

  return {
    handleInput,
    formValues,
  }
}

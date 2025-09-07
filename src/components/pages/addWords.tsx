import { useForm } from '../../hooks/useForm'
import { addWord } from '../../services'
import TextInput from '../global/inputs/textInput'
import StandardButton from '../global/buttons/standardButton'
import StandardAlert from '../global/alerts/standardAlert'
import { useState } from 'react'

const AddWords = () => {
  const { handleInput, formValues, resetFormValues } = useForm({
    english: '',
    italian: '',
  })
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = async () => {
    setShowAlert(false)
    if (!formValues.english || !formValues.italian) {
      setShowAlert(true)
      return
    }
    const res = await addWord(
      formValues as { english: string; italian: string }
    )
    if (!res) {
      setShowAlert(true)
      return
    }
    resetFormValues()
    return
  }

  return (
    <div>
      <div>
        <h1>Add Word</h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          handleSubmit()
        }}
      >
        <TextInput
          id="english"
          name="english"
          onChange={(e) => handleInput(e.target.value, 'english')}
          value={formValues['english']}
          placeholder="English Word"
        />
        <TextInput
          id="italian"
          name="italian"
          onChange={(e) => handleInput(e.target.value, 'italian')}
          value={formValues['italian']}
          placeholder="Italian Word"
        />
        <div>
          <StandardButton text="Add Word" type="submit" />
        </div>
      </form>
      {showAlert && (
        <StandardAlert text="Error adding word, please ensure you have entered both an English and Italian version of the word" />
      )}
    </div>
  )
}

export default AddWords

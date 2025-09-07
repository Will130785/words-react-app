import { useForm } from '../../hooks/useForm'
import { addWord } from '../../services'
import TextInput from '../global/inputs/textInput'
import StandardButton from '../global/buttons/standardButton'

const AddWords = () => {
  const { handleInput, formValues } = useForm({
    english: '',
    italian: '',
  })

  const handleSubmit = async () => {
    const res = await addWord(
      formValues as { english: string; italian: string }
    )
    if (!res) {
      console.log('FAIL')
      return
    }
    console.log('SUCCESS')
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
    </div>
  )
}

export default AddWords

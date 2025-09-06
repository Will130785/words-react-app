import { useForm } from '../../hooks/useForm'
import { addWord } from '../../services'

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
        <div>
          <input
            id="english"
            name="english"
            onChange={(e) => handleInput(e.target.value, 'english')}
            value={formValues['english']}
          />
          <label>English Word</label>
        </div>
        <div>
          <input
            id="italian"
            name="italian"
            onChange={(e) => handleInput(e.target.value, 'italian')}
            value={formValues['italian']}
          />
          <label>Italian Word</label>
        </div>
        <div>
          <button className="cursor-pointer" type="submit">
            Add Word
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddWords

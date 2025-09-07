import { useEffect, useState } from 'react'
import { useParams } from '@tanstack/react-router'
import type { IWord } from '../../types'
import { getWord } from '../../services'
import { useForm } from '../../hooks/useForm'
import { editWord } from '../../services'

const EditWord = () => {
  const [word, setWord] = useState<IWord | null>(null)
  const { id } = useParams({ from: '/edit-word/$id' })
  const { handleInput, formValues, setFormValues } = useForm({
    english: '',
    italian: '',
  })

  const handleGetWord = async () => {
    const res = (await getWord(id)) as unknown as { word: IWord }
    console.log(res)
    if (!res) {
      return
    }
    setWord(res.word)
  }

  const handleSubmit = async () => {
    const res = await editWord(
      id,
      formValues as { english: string; italian: string }
    )
    if (!res) {
      console.log('FAIL')
      return
    }
    console.log('SUCCESS')
    return
  }

  useEffect(() => {
    handleGetWord()
  }, [id])

  useEffect(() => {
    setFormValues({
      english: word?.english ?? '',
      italian: word?.italian ?? '',
    })
  }, [word])

  return (
    <div>
      <div>
        <h1>Edit Word</h1>
      </div>
      {word && (
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
              Edit Word
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default EditWord

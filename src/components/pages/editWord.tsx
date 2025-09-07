import { useEffect, useState } from 'react'
import { useParams, useNavigate } from '@tanstack/react-router'
import type { IWord } from '../../types'
import { getWord } from '../../services'
import { useForm } from '../../hooks/useForm'
import { editWord } from '../../services'
import TextInput from '../global/inputs/textInput'
import StandardButton from '../global/buttons/standardButton'
import StandardAlert from '../global/alerts/standardAlert'

const EditWord = () => {
  const [word, setWord] = useState<IWord | null>(null)
  const [showAlert, setShowAlert] = useState(false)
  const { id } = useParams({ from: '/edit-word/$id' })
  const navigate = useNavigate()
  const { handleInput, formValues, setFormValues } = useForm({
    english: '',
    italian: '',
  })

  const handleGetWord = async () => {
    const res = (await getWord(id)) as unknown as { word: IWord }
    if (!res) {
      return
    }
    setWord(res.word)
  }

  const handleSubmit = async () => {
    setShowAlert(false)
    if (!formValues.english || !formValues.italian) {
      setShowAlert(true)
      return
    }
    const res = await editWord(
      id,
      formValues as { english: string; italian: string }
    )
    if (!res) {
      setShowAlert(true)
      return
    }
    navigate({ to: '/view-words' })
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
        <>
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
              <StandardButton text="Edit Word" type="submit" />
            </div>
          </form>
          {showAlert && (
            <StandardAlert text="Error adding word, please ensure you have entered both an English and Italian version of the word" />
          )}
        </>
      )}
    </div>
  )
}

export default EditWord

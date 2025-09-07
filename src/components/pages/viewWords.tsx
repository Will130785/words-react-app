import { useEffect, useState } from 'react'
import { deleteWord, getWords } from '../../services'
import type { IWord } from '../../types'
import { v4 } from 'uuid'
import { Link } from '@tanstack/react-router'

const ViewWords = () => {
  const [words, setWords] = useState<IWord[]>([])

  const handleGetWords = async () => {
    const res = (await getWords()) as unknown as { words: IWord[] }
    if (!res) {
      return
    }
    setWords(res.words)
  }

  const handleDeleteWord = async (id: string) => {
    const res = await deleteWord(id)
    if (!res) {
      return
    }
    return
  }

  useEffect(() => {
    handleGetWords()
  }, [])
  return (
    <div>
      <div>
        <h1>Words</h1>
      </div>
      <div className="my-10">
        {words &&
          words.length > 0 &&
          words.map((word) => (
            <Link key={v4()} to="/edit-word/$id" params={{ id: word.id }}>
              <div className="flex gap-5">
                <p>{word.english}</p>
                <p>{word.italian}</p>
                <button onClick={() => handleDeleteWord(word.id)}>
                  Delete
                </button>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default ViewWords

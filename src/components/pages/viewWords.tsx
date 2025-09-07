import { useEffect, useState } from 'react'
import { deleteWord, getWords } from '../../services'
import type { IWord } from '../../types'
import { v4 } from 'uuid'
import { Link } from '@tanstack/react-router'
import { LoaderCircle } from 'lucide-react'
import { Trash2 } from 'lucide-react'

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
    handleGetWords()
    return
  }

  useEffect(() => {
    handleGetWords()
  }, [])
  return (
    <div>
      {!words || !words.length ? (
        <div className="flex justify-center animate-spin">
          <LoaderCircle />
        </div>
      ) : (
        <div>
          <div className="my-10">
            {words &&
              words.length > 0 &&
              words.map((word) => (
                <div
                  className="flex gap-5 justify-between hover:bg-white hover:text-black p-2"
                  key={v4()}
                >
                  <Link
                    className="w-full"
                    to="/edit-word/$id"
                    params={{ id: word.id }}
                  >
                    <div className=" w-full grid grid-cols-2 justify-center items-center gap-5">
                      <p>{word.english}</p>
                      <p>{word.italian}</p>
                    </div>
                  </Link>
                  <button
                    className="cursor-pointer"
                    onClick={() => handleDeleteWord(word.id)}
                  >
                    <Trash2 className="text-red-400" />
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ViewWords

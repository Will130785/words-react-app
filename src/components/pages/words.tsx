import { useEffect, useState } from 'react'
import { getWords } from '../../services'
import type { IWord } from '../../types'
import { LoaderCircle } from 'lucide-react'
import ItalyFlag from '../global/svg/italyFlag'
import EnglandFlag from '../global/svg/englandFlag'
import StandardButton from '../global/buttons/standardButton'

const Words = () => {
  const [words, setWords] = useState<IWord[]>([])
  const [language, setLanguage] = useState('english')
  const [currentWord, setCurrentWord] = useState<IWord | null>(null)

  const handleGetWords = async () => {
    const res = (await getWords()) as unknown as { words: IWord[] }
    if (!res) {
      return
    }
    console.log(res.words)
    setWords(res.words)
  }

  const handleToggleLanguage = () => {
    if (language === 'italian') {
      setLanguage('english')
    } else {
      setLanguage('italian')
    }
  }

  const handleGetNextWord = () => {
    setCurrentWord(words[Math.floor(Math.random() * words.length)])
  }

  useEffect(() => {
    handleGetWords()
  }, [])

  useEffect(() => {
    if (words && words.length) {
      handleGetNextWord()
    }
  }, [words])

  return (
    <div>
      {!words || !words.length ? (
        <div className="flex justify-center animate-spin">
          <LoaderCircle />
        </div>
      ) : (
        <div>
          <div className="flex justify-end">
            {language === 'english' ? (
              <button
                className="cursor-pointer"
                onClick={() => handleToggleLanguage()}
              >
                <EnglandFlag />
              </button>
            ) : (
              <button
                className="cursor-pointer"
                onClick={() => handleToggleLanguage()}
              >
                <ItalyFlag />
              </button>
            )}
          </div>
          <div className="my-10">
            {currentWord && (
              <div className="flex justify-center">
                <p className="text-4xl">
                  {language === 'italian'
                    ? currentWord.italian.toUpperCase()
                    : currentWord.english.toUpperCase()}
                </p>
              </div>
            )}
          </div>
          <div>
            <StandardButton
              text="Next Word"
              onClick={() => handleGetNextWord()}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Words

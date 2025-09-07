import { useEffect, useState } from 'react'
import { getWords } from '../../services'
import type { IWord } from '../../types'

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
        <div>
          <p>There are currently no words loaded</p>
        </div>
      ) : (
        <div>
          <div>
            <button onClick={() => handleToggleLanguage()}>
              {language === 'english' ? 'Italian' : 'English'}
            </button>
          </div>
          <div>
            {currentWord && (
              <div>
                <p>
                  {language === 'italian'
                    ? currentWord.italian
                    : currentWord.english}
                </p>
              </div>
            )}
          </div>
          <div>
            <button onClick={() => handleGetNextWord()}>Next Word</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Words

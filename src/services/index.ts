export const getWords = async () => {}

export const getWord = async () => {}

export const addWord = async (payload: {
  english: string
  italian: string
}) => {
  try {
    const res = await fetch(`http://localhost:4000/add-word`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    if (!res.ok) {
      throw new Error('Error adding word')
    }
    return true
  } catch {
    return null
  }
}

export const editWord = async () => {}

export const deleteWord = async () => {}

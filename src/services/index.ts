export const getWords = async () => {
  try {
    const res = await fetch(`http://localhost:4000/get-words`)
    if (!res.ok) {
      throw new Error('Error getting words')
    }
    const parsedRes = await res.json()
    return parsedRes
  } catch {
    return null
  }
}

export const getWord = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:4000/get-word/${id}`)
    if (!res.ok) {
      throw new Error('Error getting word')
    }
    const parsedRes = await res.json()
    return parsedRes
  } catch {
    return null
  }
}

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

export const editWord = async (
  id: string,
  payload: {
    english: string
    italian: string
  }
) => {
  try {
    const res = await fetch(`http://localhost:4000/edit-word/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    if (!res.ok) {
      throw new Error('Error editing word')
    }
    return true
  } catch {
    return null
  }
}

export const deleteWord = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:4000/delete-word/${id}`, {
      method: 'DELETE',
    })
    if (!res.ok) {
      throw new Error('Error deleteing word')
    }
    return true
  } catch {
    return null
  }
}

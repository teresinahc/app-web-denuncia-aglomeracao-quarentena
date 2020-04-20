import { useState, useEffect } from 'react'

function usePersistedState(key: string, initialState: any) {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default usePersistedState

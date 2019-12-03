import { useState, useCallback } from 'react'

const useArray = (initialValue = []) => {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    setValue,
    removeByIndex: useCallback(i => {
      setValue(arr => {
        const copy = arr.slice()
        copy.splice(i, 1)
        return copy
      })
    }, []),
    removeById: useCallback(id => {
      setValue(arr => {
        return arr.filter(item => item.id !== id)
      })
    }, []),
    add: useCallback(v => setValue(arr => [...arr, v]), []),
    clear: useCallback(() => setValue(() => []), [])
  }
}

export default useArray

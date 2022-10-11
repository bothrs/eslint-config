import { useEffect } from 'react'

const Component = () => {
  useEffect(() => {
    console.log('I do stuff!')
  }, [])

  return <div>Don't look at me, I'm just a component!</div>
}

export { Component }

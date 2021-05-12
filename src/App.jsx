import React, {useState} from 'react'

const App = () => {
  const [greeting, setGreeting] = useState('Venus')
  return (
    <>
      <h1>Hello {greeting}</h1>
    </>
  )
}

export default App

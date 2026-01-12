import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('/landing.html')

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === 'GO_HOME') {
        window.history.pushState({}, '', '/home')
        setPage('/home.html')
      }

      if (event.data === 'GO_SHOP') {
        window.history.pushState({}, '', '/shop')
        setPage('/shop.html')
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <iframe
      src={page}
      title="Landing"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        border: 0,
      }}
    />
  )
}

export default App

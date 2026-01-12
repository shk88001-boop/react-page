import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('/landing.html')

  // Sync URL on first load
  useEffect(() => {
    const path = window.location.pathname

    if (path === '/home') {
      setPage('/home.html')
    } else if (path === '/shop') {
      setPage('/shop.html')
    } else {
      window.history.replaceState({}, '', '/')
      setPage('/landing.html')
    }
  }, [])

  // Listen iframe navigation
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
      title="App Frame"
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

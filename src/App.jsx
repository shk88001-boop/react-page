import { useEffect, useState } from 'react'
import './App.css'

function getInitialPage() {
  const path = window.location.pathname

  if (path === '/home') return '/home.html'
  if (path === '/shop') return '/shop.html'

  // default landing
  window.history.replaceState({}, '', '/')
  return '/'
}


function App() {
  const [page, setPage] = useState(getInitialPage)

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
      key={page}
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

import { useEffect } from 'react'
import './App.css'
import { toast } from 'react-hot-toast'
import Footer from './components/footer';

function App() {

  useEffect(() => {
    toast.success("hello");
  })

  return (
    <Footer />
  )
}

export default App

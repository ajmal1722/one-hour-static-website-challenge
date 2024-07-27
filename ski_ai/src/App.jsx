import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <div className='grid grid-cols-10'>
      <Sidebar />
      <HomePage />
    </div>
    </>
  )
}

export default App

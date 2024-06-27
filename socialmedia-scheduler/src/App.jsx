import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])

  return (


    <>
      <Post/>
      <AddPost/>
    </>
  )
}

export default App

function Post() {
  return (
    <div className='border m-4 w-1/2'>
      <h1 className="text-xl m-4">
        image description
      </h1>

    </div>
  )
}

function AddPost () {
  const [inputs, setInputs] = useState([{}])
  const [data, setData] = useState([])

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  function handleSubmit(event) {
    event.preventDefault();

    const imageData = {
      description: event.target.description.value,
      url: event.target.url.value,
      time: event.target.time.value,
    }
    console.log(imageData);

    setData([...data, imageData])
  }
  console.log(data);
  return (
    <div className='border w-1/2 p-4'>
      <form onSubmit={handleSubmit}>
        <input
          type="text" 
          name='description'
          value={inputs.description || ''}
          placeholder='description...'
          className='border p-2'
          onChange={handleChange}
        />
        <input
          type="text" 
          name='url'
          value={inputs.url || ''}
          placeholder='image Url...'
          className='border p-2'
          onChange={handleChange}
        />
        <input
          type="number" 
          name='time'
          value={inputs.time || ''}
          placeholder='Time duration in seconds...'
          className='border p-2'
          onChange={handleChange}
        />
        <button type='submit' className='bg-green-600 px-5 py-2 rounded-lg text-white m-4'>
          submmit
        </button>
      </form>
    </div>
  )
}
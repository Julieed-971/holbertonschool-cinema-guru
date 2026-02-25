import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import Authentication from './routes/auth/Authentication'

export default function App() {
  const [text, setText] = useState('')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userUsername, setUserUsername] = useState('')

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    const authentication = async () => {
      try {
        const request = await axios.post('/api/auth', {}, {
          headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        if (request.status === 200) {
          setIsLoggedIn(true);
          setUserUsername(request.data.username);
        }
      } catch (error) {
        console.error('Error during authentication', error)
      }
    }
    authentication();
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
      )}
    </div>
  )
}
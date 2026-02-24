import { useState, useEffect } from 'react'
import './App.css'
import Input from './components/general/Input'
import SearchBar from './components/general/SearchBar'
import SelectInput from './components/general/SelectInput'
import Button from './components/general/Button'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

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
          headers: { 'Authorization': `Bearer ${accessToken}` } });
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
    { isLoggedIn ? (
      <Dashboard />
    ) : (
      <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
    )}
      <Input icon={faUser} label="Username" type="text" value={text} setValue={setText} className="username-input" />
      <SearchBar title={search} setTitle={setSearch} />
      <SelectInput
        label="Sort"
        options={['Latest', 'Oldest', 'Highest Rated', 'Lowest Rated']}
        value={sort}
        setValue={setSort}
      />
      <Button label="Load more..." onClick={() => console.log('clicked')} />
    </div>
  )
}
import { useState } from 'react'
import './App.css'
import Input from './components/general/Input'
import SearchBar from './components/general/SearchBar'
import SelectInput from './components/general/SelectInput'
import Button from './components/general/Button'
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  const [text, setText] = useState('')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')

  return (
    <div className="App">
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
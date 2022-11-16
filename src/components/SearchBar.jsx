import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from "@mui/material"
import { Search } from "@mui/icons-material"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  function handleSubmit() {
    if(searchTerm) {
        navigate(`/search/${searchTerm}`)
        setSearchTerm('')
    }
  }
  return (
    <Paper
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            p1: 5,
            boxShadow: 'none',
            mr: {sm: 5}
        }}
    >
        <input 
            className="search-bar"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton 
            onClick={handleSubmit}
            sx={{
                p:'10px',
                color: '#402c85'
            }}
        >
            <Search />
        </IconButton> 
    </Paper>
  )
}

export default SearchBar
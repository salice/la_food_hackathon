import React from 'react'
import { useState } from 'react'
import { TextField } from '@material-ui/core';

function SearchBar(){
   const [data, setData] = useState({})

   const handleChange = (e) => {
       getData(e.target.value)
   }
   const getData = async(data) => {
       const dataResponse = await fetch(`http://localhost:3030/data/search/${data}`)
       const json = await dataResponse.json()

       setData({
           json
       })
   }
   return(
       <div>
           <TextField id="full-width-text-field" label="Search Data" width={300} onChange={handleChange} name="data" />
       </div>
   )
}

export default SearchBar
import {React,useState} from 'react'
import ModelsAndAge from './ModelsAndAge'

const FilterByAge = () => {
  const [selected,setSelect]=useState('Select')

  //function to change the range depending on the dropdown value
  const ChangeFilter=(e)=>{
    if(e.target.value!=='Select'){
      setSelect(e.target.value)
    }

  }
  return (
    <div>
      <div className='Filter'> 
      {/* Drop down to select the range age of user to filter their preference */}
        <label>Filter Users Age Range :  
        <select value={selected} onChange={(e)=>ChangeFilter(e)}>
          <option>Select</option>
          <option>20-25</option>
          <option>25-30</option>
          <option>30-35</option>
          <option>35-40</option>
          <option>40-45</option>
          <option>45-50</option>
          <option>50-55</option>
          <option>55-60</option>
          <option>60-65</option>
          <option>65-70</option>
          <option>70-75</option>
          <option>75-80</option>
        </select>
        </label>
      </div>
      {/* component of polar chart according to user's age range */}
      <ModelsAndAge range={selected} />
    </div>
  )
}

export default FilterByAge;
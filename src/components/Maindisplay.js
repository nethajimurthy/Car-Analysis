import React from 'react'
import './stylesheets/Maindisplay.css'
import CountryAnalysis from'./CountryAnalysis.js'
import BrandAnalysis from './BrandAnalysis'
import CarsAge from './CarsAge'
import FilterByAge from './FilterByAge'
import Home from './Home'
import ListOfCars from './ListOfCars'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Link,Outlet} from 'react-router-dom'

// Display area that displays the selected chart or list.
const Maindisplay = () => {

  return (
    <div className='Maindisplay'>
        <BrowserRouter>
        <nav className='MainCatagories'>
          <ul><Link className='link' to='/'>HOME</Link></ul>
          <ul><Link className='link' to='/Users Analysis'>USER ANALYSIS</Link></ul>
          <ul><Link className='link' to='/Brand Analysis'>BRAND ANALYSIS</Link></ul>
          <ul><Link className='link' to='/Age of Cars Analysis'>AGE OF CARS</Link></ul>
          <ul><Link className='link' to='Filter By Age'>FILTER BY AGE</Link></ul>
          <ul><Link className='link' to='List of cars'>LIST OF CARS</Link></ul>
        </nav>
        <Outlet/>    
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="Users Analysis" element={<CountryAnalysis/>}/>
            <Route path="Brand Analysis" element={<BrandAnalysis/>}/>
            <Route path="Age of Cars Analysis" element={<CarsAge/>}/>
            <Route path="Filter By Age" element={<FilterByAge/>}/>
            <Route path="List of cars" element={<ListOfCars/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Maindisplay;
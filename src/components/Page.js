import React from 'react'

// Page component that returs each array data as list element 
const Page = ({pageData}) => {
  return (
    <div className='ListPage'>
        {pageData.map((model) => {
        return <ul className="CarElement">{model}</ul>
      })}
    </div>
  )
}

export default Page;
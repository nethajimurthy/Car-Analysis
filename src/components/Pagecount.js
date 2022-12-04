import React from "react";

// returning page numbers component with respect to models in the data
const Pagecount = ({ carsCount, dataCount, change }) => {

  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(carsCount / dataCount); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <div className="PagesCount">
        {pageNumbers.map((number) => {
          return (
            <button className='PageNumber' value={number} onClick={(e) => change(e.target.value)}>{number}</button>
          );
        })}
      </div>
    </div>
  );
};

export default Pagecount;

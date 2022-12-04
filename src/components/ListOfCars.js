import { React, useState } from "react";
import { models } from "../Data/UserData";
import PageCount from "./Pagecount.js";
import Page from "./Page";
import './stylesheets/ListOfCars.css';

//Functional component for displaying paginated list of cars as mentioned in the assignment description (sixth).
const ListOfCars = () => {
  // Defining values for current page, car counts per page
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);

  let pageLastData = currentPage * dataPerPage;
  let pageFirstData = pageLastData - dataPerPage;
  let pageData = models.slice(pageFirstData, pageLastData); //slicing the data required per page

// Fuction to change the page and change other values to slice the data required for that page.
  const Change=(number)=> {
    setCurrentPage(number)
      pageLastData = currentPage * dataPerPage;
      pageFirstData = pageLastData - dataPerPage;
      pageData = models.slice(pageFirstData, pageLastData);
    }

  return (
    <div className="CarsList">
      {/* Rendering page component and page number component with respect to the data sliced */}
      <Page currentPage={currentPage} pageData={pageData} />
      <PageCount
        carsCount={models.length}
        dataCount={dataPerPage}
        change={Change}
      />
    </div>
  );
};

export default ListOfCars;

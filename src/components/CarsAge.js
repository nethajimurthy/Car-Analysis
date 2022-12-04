import React from "react";
import { Pie } from "react-chartjs-2";
import { modelAge } from "../Data/UserData";
import { faker } from "@faker-js/faker";

import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js"; //Importing chart configs.

Chart.register(ArcElement, Title, Tooltip, Legend); //Registering imported chart configs.

//Functional component for displaying pie chart as mentioned in the assignment description (Third).
const CarsAge = () => {
  
  //Constructing seperate arrays models and their age
  let [models, age] = [[], []];
  modelAge.forEach((key, val) => {
    models.push(key);
    age.push(val);
  });

    // Obtaining colors for each section of Pie chart
  let colors = [];
  for (let i of models) {
    colors.push(faker.color.rgb({ format: "css" }));
  }

  //constructing data for pie chart
  const data = {
    labels: age,
    datasets: [
      {
        data: models,
        backgroundColor: colors,
        borderColor: "white",
        borderWidth: 1,
      },
    ],
  };
  return <Pie className="PieChart" data={data} />; //returning pie chart with constructed data
};

export default CarsAge;

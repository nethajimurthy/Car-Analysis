import { React, useContext } from "react";
import { Pie } from "react-chartjs-2";
import { userContextData } from "../App";
import { faker } from "@faker-js/faker";

//Importing chart configs.

import { Chart, ArcElement, Title, Tooltip, Legend } from "chart.js";

//Registering imported chart configs.

Chart.register(ArcElement, Title, Tooltip, Legend);

//Functional component for displaying pie chart as mentioned in the assignment description (secound).

const BrandAnalysis = () => {
  const massData = useContext(userContextData); // Extracting entire data through useContext hook

  const brandModels = new Map(); //A Map for storing brands with their models by iterating through the maddData
  let brand;
  let model;
  let temp;

  // Iterating through massData to store the models to their currespondence brand according to the users

  massData.forEach((user) => {
    brand = user.vehicleInfo.maker;
    model = user.vehicleInfo.model;
    if (brandModels.has(brand)) {
      temp = brandModels.get(brand);
      if (!temp.includes(model)) {
        temp.push(model);
        brandModels.set(brand, temp);
      }
    } else {
      brandModels.set(brand, [model]);
    }
  });

  // Obtaining models count of each brand
  const modelsCount = [];
  brandModels.forEach((key, value) => {
    modelsCount.push(value.length);
  });

  // Obtaining colors for each slice
  let colours = [];
  for (let i of modelsCount) {
    colours.push(faker.color.rgb({ format: "css" }));
  }

  // Constructing data for the pie chart
  const data = {
    labels: [...brandModels.keys()],
    datasets: [
      {
        data: modelsCount,
        backgroundColor: colours,
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  return <Pie className="PieChart" data={data} />; // returning a Pie chart with constructed data
};

export default BrandAnalysis;

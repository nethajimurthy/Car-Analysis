import React from "react";
import { useContext } from "react";
import { userContextData } from "../App";
import { faker } from "@faker-js/faker";
import { Bar } from "react-chartjs-2";

//Importing chart configs.
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

//Registering imported chart configs.

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

//Functional component for displaying bar chart as mentioned in the assignment description (First).
const CountryAnalysis = () => {
  const massData = useContext(userContextData); // Extracting entire data through useContext hook

  const countryBelongs = new Map(); // A creating a Map of country and number user from currespondance country.
  massData.forEach((user) => {
    countryBelongs.has(user.address)
      ? countryBelongs.set(user.address, countryBelongs.get(user.address) + 1)
      : countryBelongs.set(user.address, 1);
  });

  const [country, belongings] = [
    [...countryBelongs.keys()],
    [...countryBelongs.values()],
  ]; // seperating country list and belongings count list

  // Obtaining colors for each slice of bar
  let colours = [];
  for (let i of country) {
    colours.push(faker.color.rgb({ format: "css" }));
  }

  // Constructing data for the bar chart
  const data = {
    labels: country,
    datasets: [
      {
        labels: belongings,
        data: belongings,
        backgroundColor: colours,
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  return (
    <Bar className="BarChart" data={data} /> // returning bar chart with constructed data
  );
};

export default CountryAnalysis;

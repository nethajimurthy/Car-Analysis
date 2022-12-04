import {React,useContext} from 'react'
import {PolarArea} from 'react-chartjs-2'
import { userContextData } from '../App';
import { faker } from '@faker-js/faker';
import { modelAge } from '../Data/UserData';

//Importing chart configs.
import {
    Chart,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    registerables
} from 'chart.js'

//Registering imported chart configs.
Chart.register(
    ...registerables,
    ArcElement,
    Title,
    Tooltip,
    Legend
)

//Functional component to display polar chart as mentioned in the assignment (Fourth)
const ModelsAndAge=({range})=>{
    const [min,max]=range.split('-').map((e)=>Number(e))
    
    const massData=useContext(userContextData) // Extracting entire data through useContext hook
    const modelsAgeData=new Map() // A Map for storing model and car's age according to selected user's age range
    let carage
    let model
    massData.forEach((user)=>{
        if(user.age>=min && user.age<=max){
            model=user.vehicleInfo.model
            carage=modelAge.get(model)
            if(!modelsAgeData.has(model)) modelsAgeData.set(model,carage)
        }
    })

      // Obtaining colors for each slice of polar 
    let colours=[]
for(let i in [...Array(modelsAgeData.size)]){
    colours.push(faker.color.rgb({format:'css'}))
}

const chartLabels=[]
const chartData=[]
// Seperating model and car's age 
modelsAgeData.forEach((key,val)=>{
    chartLabels.push(val)
    chartData.push(key)
})

 // Constructing data for the bar chart
const data={
    labels: chartLabels,
    datasets:[{
        data:chartData,
        backgroundColor:colours,
        borderColor:'black',
        borderWidth:1
    }]
}
return (
    <PolarArea className='PieChart' data={data} /> // returning polar chart with constructed data
)
}

export default ModelsAndAge;
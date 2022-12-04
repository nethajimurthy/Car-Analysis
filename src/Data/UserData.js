import { faker } from '@faker-js/faker';

export const country=[...new Set([...Array(20)].map(()=>faker.address.country()))] // Creating an array of unique country names
export const brands=[...new Set([...Array(20)].map(()=>faker.vehicle.manufacturer()))] // creating an array of unique car makers companies
export const models=[...new Set([...Array(40)].map(()=>faker.vehicle.model()))] // creating an array of unique model names regardless of brand

export const modelAge=new Map()

// A Map of data with model and their average age as key value pairs

models.forEach((model)=>{
    modelAge.set(model,faker.datatype.number({min:10,max:20}))
})

const userCount=100000 // <------------- specify required user counts here 


// Creating an object of user

export const userData=[...Array(userCount)].map((e)=>{ 
   return e=
{
    id:faker.random.alpha(10),
    address:country[faker.datatype.number({max:country.length-1})],
    userName:faker.name.fullName(),
    age:faker.datatype.number({min:20, max:80}),
    phone:faker.phone.number('+91 ##########'),
    occupation:faker.name.jobType(),
    vehicleInfo:{
        maker:brands[faker.datatype.number({max:brands.length-1})],
        model:models[faker.datatype.number({max:models.length-1})],
        carAge:faker.datatype.number({min:10,max:20})
    }
}
})

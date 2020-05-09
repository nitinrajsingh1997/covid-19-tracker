import axios from 'axios';
import CountryPicker from '../components/Country-Picker/CountryPicker';


const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changeableUrl = url;

    if(country){
        changeableUrl = `${url}/countries/${country}`
    }
    try{
        const { data } = await axios.get(url);
        const modData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }
        return modData;
    } catch(error){
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try{
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
       }));

       return modifiedData;
    }
    catch(error){

    }
}

export const fetchCountries = async () => {
    try{
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    }
    catch{
        
    }
}
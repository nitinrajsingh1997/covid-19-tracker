import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/Country-Picker/CountryPicker';
import { fetchData } from './api/data';



class App extends Component{

  state = {
    result: {},
    country: '' 
  }

  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({ result: fetchedData })
    console.log(fetchedData);
  }

  handleCountryChange = async (country) => {
    console.log(country);
    const fetchedData = await fetchData(country);
    this.setState({ result: fetchedData, country: country });
  }
  render(){
    return(
      <div className="container">
        <Cards result={this.state.result} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </div>
    );
  }
}

export default App;

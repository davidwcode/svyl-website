import React from 'react';
import SearchBar from './components/SearchBar';

const App = () => {
  const profiles = [
    {name:"David", studentid:5128345, lastTestDate:6, testImage:"https://i.postimg.cc/6pqKqCSB/covid-19-testing-shutterstock.jpg", currentstatus: "Cleared"},
    {name:"Paul", studentid:2356543, lastTestDate:10, testImage:"https://i.postimg.cc/6pqKqCSB/covid-19-testing-shutterstock.jpg", currentstatus: "Uncleared"},
    {name:"Daurush", studentid:5123345, lastTestDate:6, testImage:"https://i.postimg.cc/6pqKqCSB/covid-19-testing-shutterstock.jpg", currentstatus: "Pending"},
    {name:"Derick", studentid:3292392, lastTestDate:6, testImage:"https://i.postimg.cc/6pqKqCSB/covid-19-testing-shutterstock.jpg", currentstatus: "Cleared"},
    {name:"Aaron", studentid:5928345, lastTestDate:6, testImage:"https://i.postimg.cc/6pqKqCSB/covid-19-testing-shutterstock.jpg", currentstatus: "Uncleared"},
    {name:"Aadip", studentid:5121345, lastTestDate:1, testImage:"https://i.postimg.cc/6pqKqCSB/covid-19-testing-shutterstock.jpg", currentstatus: "Pending"},
    {name:"Dave", studentid:5912345, lastTestDate:6, testImage:"https://i.postimg.cc/6pqKqCSB/covid-19-testing-shutterstock.jpg", currentstatus: "Cleared"},
    {name:"Jackson", studentid:5123545, lastTestDate:6, testImage:"https://i.postimg.cc/6pqKqCSB/covid-19-testing-shutterstock.jpg", currentstatus: "Uncleared"},
    {name:"Peter", studentid:5123245, lastTestDate:6, testImage:"https://i.postimg.cc/6pqKqCSB/covid-19-testing-shutterstock.jpg", currentstatus: "Pending"}
  ]
  return (
    <div>
      <SearchBar profiles = {profiles}></SearchBar>

    </div>
  );
}

export default App;
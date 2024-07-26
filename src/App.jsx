import "./App.css";
import "./index.css";
import BusinessCard from "./businessCard.jsx";
import Navigation from "./navigation.jsx";
import AirBnB from "./airBnB.jsx";
import TravelJourney from "./travelJourney.jsx";
import data from "./data.jsx";
import Header from "./header.jsx";
import MemeGenerator from "./memeGenerator.jsx";
import Star from "./star.jsx"
import MenuList from "./MenuList.jsx";


function App() {
  


  const result = data.map(item => {
    return (
      < TravelJourney 
          location={item.location}
          title={item.title}
          startdate={item.startDate}
          enddate={item.endDate}
          paragraph={item.description}
          image={item.imageUrl}
      />
    )
  })


  return (
      <div>
        < Navigation />
        < BusinessCard />
        < AirBnB />
        < Header />
        { result }
        < MemeGenerator />
        < Star darkMode={true} on={true}/> 
        < MenuList />       
      </div>
  );
}

export default App;

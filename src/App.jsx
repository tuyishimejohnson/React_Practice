import "./App.css";
import "./index.css";
import BusinessCard from "./businessCard.jsx";
import Navigation from "./navigation.jsx";
import AirBnB from "./airBnB.jsx";
import Contacts from "./contacts.jsx";
import TravelJourney from "./travelJourney.jsx";
import data from "./data.jsx";


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
      {/*   < Navigation />
        < BusinessCard />
        < AirBnB />
        { result } */}

        
        {result}
      </div>
  );
}

export default App;

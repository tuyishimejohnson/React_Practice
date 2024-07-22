import "./App.css";
import "./index.css";
import BusinessCard from "./businessCard.jsx";
import Navigation from "./navigation.jsx";
import AirBnB from "./airBnB.jsx";
import Contacts from "./contacts.jsx";
import TravelJourney from "./travelJourney.jsx";
import data from "./data.jsx";


function App() {
  const newArr = [
    {
        name:"Johnson",
         phone:"(212) 555-1234",
         email:"j.arobase@gmail.com"
    },
      
    {
      name:"Tuyishime",
      phone:"31431953-5432",
       email:"adflajfn@gmail.com",
    },

    {
         name:"Qween", 
         phone:"4543193-5432", 
         email:"adfaldkigali@gmail.com"
    },

    {
      name:"King", 
      phone:"1453753-5432",
       email:"adggfjfn@yahoo.fr"
    }
  ]


  const result = newArr.map(item => {
    return (
      < Contacts 
          name={item.name}
          phone={item.phone}
          email={item.email}
      />
    )
  })

  return (
      <div>
      {/*   < Navigation />
        < BusinessCard />
        < AirBnB />
        { result } */}

        < TravelJourney />

      </div>
  );
}

export default App;

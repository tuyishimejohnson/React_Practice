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
import foodList from "./foodList.jsx";
import Title from './title'


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
  
  
  
  const foods = foodList.map(food => {
    return (
      < MenuList 
      itemName={food.itemName}
        description={food.description}
        image={food.foodImage}
        price={food.price}
        favorite={food.isFavorite}
        
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

        < Title />
        { foods }   
      </div>
  );
}

export default App;

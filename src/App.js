import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((element) => {
    console.log(element);
    return (
      <Card
        // img={element.coverImg}
        rating={element.stats.rating}
        reviewCount={element.stats.reviewCount}
        location={element.location}
        title={element.title}
        price={element.price}
      />
    );
  });

  console.log(cards);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        {/* {cards} */}
        <Card
          img="katie-zaferes.png"
          rating="5.0"
          reviewCount={6}
          country="US"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
      </header>
    </div>
  );
}

export default App;

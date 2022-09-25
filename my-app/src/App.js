import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              //spread operator
              {...item}

              // destructuring
              //  item = {item}

              //assigning each element
              // img={item.coverImg}
              // rating={item.stats.rating}
              // reviewCount={item.stats.reviewCount}
              // location={item.location}
              // price={item.price}
              // openSpot={item.openSpots}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;

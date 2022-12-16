import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './data';


function App() {
  const cards = data.map(card => {
    return <Card
      key={card.id}
      // img={card.coverImg}
      // rating={card.stats.rating}
      // reviewCount={card.stats.reviewCount}
      // title={card.title}
      // price={card.price}
      // openSpots={card.openSpots}
      // location={card.location}
      card={card}
    />
  })
  // console.log(cards)

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='card__container'>
        {cards}
      </section>
    </div>
  )
}

export default App

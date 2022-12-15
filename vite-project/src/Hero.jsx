import heroImg from './assets/hero.svg'


const Hero = () => {
    return (
        <section className="hero">
            <img className="hero__logo" src={heroImg} alt="lifestyle images" />
            <h1 className='hero__title'>Online Experiences</h1>
            <p className='hero__text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero; 
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <Products />
        <Services />
        <Team />
        <Contact />
      </main>
    </>
  );
}

export default App;
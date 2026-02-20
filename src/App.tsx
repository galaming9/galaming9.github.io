import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import CharacterShowcase from './sections/CharacterShowcase';
import Factions from './sections/Factions';
import ElementsClasses from './sections/ElementsClasses';
import TierList from './sections/TierList';
import Footer from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <CharacterShowcase />
        <Factions />
        <ElementsClasses />
        <TierList />
      </main>
      <Footer />
    </div>
  );
}

export default App;

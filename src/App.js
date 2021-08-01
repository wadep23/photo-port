import { useState } from 'react';
import './App.css';
import About from './components/About/index';
import Nav from './components/Nav/index';
import Gallery from './components/Gallery';
import ContactForm from '../src/components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },    
  ])
  
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
<div>
    <Nav
    categories={ categories }
    setCurrentCategory={ setCurrentCategory }
    currentCategory={ currentCategory }
    contactSelected={ contactSelected }
    setContactSelected={ setContactSelected } />
  <main>
    {!contactSelected ? (
      <>
      <Gallery currentCategory={currentCategory} />
      <About />
      </>      
      ) : (        
    <ContactForm />
      )}
  </main>
</div>
  );
}

export default App;
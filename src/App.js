import './App.css';
import Header from './components/Header.jsx';
import HeroArea from './components/HeroArea.jsx';
import Product from './components/Product.jsx';
import Special from './components/Special.jsx';

function App() {
  return (
    <div className="content">
      <Header />
        <HeroArea />
          <Product />
            <Special />
    </div>
  );
}


export default App;

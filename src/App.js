import './App.scss';

import Header from './Components/layouts/Header';
import Footer from './Components/layouts/Footer';
import WeatherCart from './Components/WeatherCart/WeatherCart';
import WeatherDataProvider from './store/WeatherDataProvider';

function App() {
  return (
    <div className="container-grid">
      <WeatherDataProvider>
        <Header />
        <main>
          <WeatherCart />
        </main>
        <Footer />
      </WeatherDataProvider>
    </div>
  );
}

export default App;

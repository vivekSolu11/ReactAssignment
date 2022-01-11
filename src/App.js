import './App.css';
import './assests/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import WhySection from './Components/WhyShopSection/WhySection';
import ArrivalSection from './Components/Arrival/ArrivalSection';
import SubscribeSection from './Components/Subscribe/SubscribeSection';
import ProductSection from './Components/Product/ProductSection';
import ClientSection from './Components/Client/ClientSection';

function App() {
  return (
    <div className='App'>
    <Header/> 
    <Banner/>
    <WhySection/>
    <ArrivalSection/>
    <ProductSection/>
    <SubscribeSection/>
    <ClientSection/>
    <Footer/>
      </div>
  );
}

export default App;

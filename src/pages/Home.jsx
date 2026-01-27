import './page.css';
import Slider from '../components/Slider/Slider.jsx';
import CardSection from '../components/CardSection/CardSection.jsx';
import InfoSection from '../components/InfoSection/InfoSection.jsx';
const Home = () => {
    return (
        <div>
            <Slider />
            <CardSection />
            <InfoSection />
            
        </div>
    );
}
export default Home;
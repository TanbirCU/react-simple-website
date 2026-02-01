
import './Page.css';
import Slider from '../components/Slider/Slider.jsx';
import WhoWeAre from '../components/About/WhoWeAre.jsx';
import MissionVision from '../components/About/MissionVision.jsx';
import WhatWeDo from '../components/About/WhatWeDo.jsx';
import WhyChooseUs from '../components/About/WhyChooseUs.jsx';
import Stats from '../components/About/Stats.jsx';
import AboutCTA from '../components/About/AboutCTA.jsx';
const About = () => {
    return (
        <div>
            <Slider />
            <WhoWeAre />
            <MissionVision />
            <WhatWeDo />
            <WhyChooseUs />
            <Stats />
            <AboutCTA />

        </div>
    );
}
export default About;
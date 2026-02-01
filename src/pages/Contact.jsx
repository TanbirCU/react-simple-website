import './page.css';
import '../components/Contact/Contact.css';
import ContactSlider from '../components/Contact/ContactSlider.jsx';
import ContactInfo from '../components/Contact/ContactInfo.jsx';
import ContactForm from '../components/Contact/ContactForm.jsx';
import ContactCTA from '../components/Contact/ContactCTA.jsx';
const Contact = () => {
    return (    
        <div className="contact-page">
             <ContactSlider />
            <ContactInfo />
            <ContactForm />
            <ContactCTA />
        </div>
    );
}
export default Contact;
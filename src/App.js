import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard 
                                title="Alexa" 
                                handle="@alexa99" 
                                imgSrc={AlexaImage} 
                                description="Bacon ipsum dolor amet turkey drumstick spare ribs capicola t-bone cupim."
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard 
                                title="Cortana" 
                                handle="@cortana32" 
                                imgSrc={CortanaImage} 
                                description="Landjaeger sirloin frankfurter jerky ribeye shankle pork loin alcatra cupim ham hock corned beef shank fatback kevin salami."
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard 
                                title="Siri" 
                                handle="@siri01" 
                                imgSrc={SiriImage} 
                                description="Biltong cow pork chop capicola tongue tri-tip pork venison tail turkey kielbasa jowl landjaeger strip steak beef ribs."
                            />
                        </div>
                    </div>
                </section>
            </div>           
        </div>
    );
}

export default App;
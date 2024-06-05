import Transition from '../Components/Transition';
import '../styles/Home.css'
function Home() {

    return (<div className='information-panel'>
        <h1>Bonjour!</h1>
        <h3 className='center-text'>Je m'appelle James Brutus et je suis un récent diplomé d'un baccalauréat en génie logiciel à Polytechnique Montréal. Je suis intéressée par le développement Full-stack, que ca soit Front-end ou Back-end, les jeux vidéos et la sécurité dans le développement web. J'ai travaillé avec de nombreuses langages de programmation relié aux développements web parmis plusieurs projets et quelqu'un en jeux vidéo.</h3>

    </div>)
}
export default Transition(Home)

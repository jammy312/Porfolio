import Transition from '../Components/Transition';
import '../styles/Home.css'
function Home() {

    return (<div className='information-panel'>
        <h1>Bonjour!</h1>
        <h3 className='center-text'>Je m'appelle James Brutus et je suis récemment diplômé d'un baccalauréat en génie logiciel à Polytechnique Montréal. Je suis passionné par le développement Full-stack, que ce soit Front-end ou Back-end, les jeux vidéo et la sécurité dans le développement web. J'ai acquis de l'expérience avec de nombreux langages de programmation liés au développement web à travers divers projets, y compris certains en jeux vidéo.</h3>

    </div>)
}
export default Transition(Home)

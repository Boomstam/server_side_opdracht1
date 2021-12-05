import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import {GameProvider} from "./contexts/cardsContext";
import {GameCreator} from "./components/GameCreator";
import {Navbar} from "react-bootstrap";


function ProvidedApp() {
    return <>
        <header>
            <Navbar fixed="top" className="p-0 shadow-sm">
            </Navbar>
        </header>
        <GameCreator/>
    </>;
}

function App() {
    return <GameProvider>
        <ProvidedApp/>
    </GameProvider>;
}

export default App;

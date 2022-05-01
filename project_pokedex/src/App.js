import GlobalState from "./global/globalState";
import Routes from "./routes/routes";

export default function App(){
    return(
        <GlobalState>
            <Routes/>    
        </GlobalState>
    )
}
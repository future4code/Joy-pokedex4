import HomePage from "../pages/homePage/HomePage";
import DetailsPage from "../pages/detailsPage/DetailsPage";
import PokedexPage from "../pages/pokedexPage/PokedexPage";
import GlobalStyle from "../styles/global";
import {BrowserRouter, Route, Switch} from "react-router-dom";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage/>
                </Route>
                <Route exact path={"/pokedex"}>
                    <PokedexPage/>
                </Route>
                <Route exact path={"/details/:id"}>
                    <DetailsPage/>
                </Route>
            </Switch>
            <GlobalStyle/>
        </BrowserRouter>
    )
}
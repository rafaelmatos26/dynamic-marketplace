// Libs
import { Switch, Route } from 'react-router-dom';

// Components
import {WaterPokemonPage} from './pages/WaterPokemonPage';
import {FirePokemonPage} from './pages/FirePokemonPage';
import { DragonPokemonPage } from './pages/DragonPokemonPage';

export function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={WaterPokemonPage} />
            <Route path="/waterpokemon" component={WaterPokemonPage} />
            <Route path="/firepokemon" component={FirePokemonPage} />
            <Route path="/dragonpokemon" component={DragonPokemonPage} />
        </Switch>
    );
}
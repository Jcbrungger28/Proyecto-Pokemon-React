import ShowCardsOfPokemon from './ShowCardsOfPokemon';
import { useState } from 'react';

const Index = () => {

    const [filter, setFilter] = useState('ver-todos');

    const handleButtonClick = (e) => {
        const buttonId = e.currentTarget.id;
        setFilter(buttonId);
    };

    return (
        <>
            <header>
                <nav className="nav">
                    <img className='logo-nav' src="../img/logo.png" alt="Logo Pokedex" />
                    <ul className="nav-list">
                        <li className="nav-item"><button onClick={handleButtonClick} className="btn btn-header" id="ver-todos">See all</button></li>
                        <li className="nav-item"><button onClick={handleButtonClick} className="btn btn-header normal" id="normal">Normal</button></li>
                        <li className="nav-item"><button onClick={handleButtonClick} className="btn btn-header fire" id="fire">Fire</button></li>
                        <li className="nav-item"><button onClick={handleButtonClick} className="btn btn-header water" id="water">Water</button></li>
                        <li className="nav-item"><button onClick={handleButtonClick} className="btn btn-header grass" id="grass">Grass</button></li>
                        <li className="nav-item"><button onClick={handleButtonClick} className="btn btn-header electric" id="electric">Electric</button></li>
                        <li className="nav-item"><button onClick={handleButtonClick} className="btn btn-header ice" id="ice">Ice</button></li>
                        <li className="nav-item"><button onClick={handleButtonClick} className="btn btn-header fighting" id="fighting">Fighting</button></li>
                        <li className="nav-item"><button onClick={handleButtonClick} className="btn btn-header poison" id="poison">Poison</button></li>
                        <li className="nav-item"><button onClick={handleButtonClick} className="btn btn-header ground" id="ground">Ground</button></li>
                        <li className="nav-item"><button onClick={handleButtonClick} className="btn btn-header flying" id="flying">Flying</button></li>
                        <li className="nav-item"><button onClick={handleButtonClick} className="btn btn-header psychic" id="psychic">Psychic</button></li>
                        <li className="nav-item"><button onClick={handleButtonClick} className="btn btn-header bug" id="bug">Bug</button></li>
                        <li className="nav-item"><button onClick={handleButtonClick} className="btn btn-header rock" id="rock">Rock</button></li>
                        <li className="nav-item"><button onClick={handleButtonClick} className="btn btn-header ghost" id="ghost">Ghost</button></li>
                        <li className="nav-item"><button onClick={handleButtonClick} className="btn btn-header dragon" id="dragon">Dragon</button></li>
                        <li className="nav-item"><button onClick={handleButtonClick} className="btn btn-header steel" id="steel">Steel</button></li>
                        <li className="nav-item"><button onClick={handleButtonClick} className="btn btn-header fairy" id="fairy">Fairy</button></li>
                    </ul>
                </nav>
            </header>
            <main>
                <div id="todos">
                    <ShowCardsOfPokemon
                        filter={filter}
                    />
                </div>
            </main>

        </>
    )
}


export default Index





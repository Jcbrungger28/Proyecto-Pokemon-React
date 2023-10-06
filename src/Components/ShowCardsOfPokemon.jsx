import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const ShowCardsOfPokemon = ({ filter }) => {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Número deseado de solicitudes
                const numberOfRequests = 151;
                const requests = [];

                for (let i = 1; i <= numberOfRequests; i++) {
                    // Crea una promesa para cada solicitud y agrégala al array de promesas
                    const requestPromise = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`Error en la solicitud ${i}`);
                            }
                            return response.json();
                        });

                    requests.push(requestPromise);
                }

                // Espera a que todas las promesas se resuelvan
                const results = await Promise.all(requests);

                // Establece los datos en el estado
                setDataList(results);


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };


        fetchData();
    }, []);

    const ShowMoreInfo = e => {
        console.log(e);
    }

    return (
        <>
            <div className="pokemon-todos" id="listaPokemon">

                {dataList.filter((pokemon) => {
                    if (filter === "ver-todos") return true;
                    const tipos = pokemon.types.map((type) => type.type.name)
                    return tipos.includes(filter);
                })

                    .map(pokes => {

                        let tipos = pokes.types.map((type, index) =>
                            <p key={index} className={`${type.type.name} tipo`}>{type.type.name}</p>)

                        let pokeId = pokes.id.toString();
                        if (pokeId.length === 1) {
                            pokeId = '00' + pokeId;
                        } else if (pokeId.length === 2) {
                            pokeId = '0' + pokeId;
                        }

                        return (
                            <div key={pokeId} className="pokemon">
                                <p className="pokemon-id-back">#{pokeId}</p>
                                <div className="pokemon-imagen">
                                    <img src={pokes.sprites.other["official-artwork"].front_default} />
                                </div>
                                <div className="pokemon-info">
                                    <div className="nombre-contenedor">
                                        <p className="pokemon-id">#{pokeId}</p>
                                        <h2 className="pokemon-nombre">{pokes.name}</h2>
                                    </div>
                                    <div className="pokemon-tipos">
                                        {tipos}
                                    </div>
                                    <div className="pokemon-stats">
                                        <p className="stat">{pokes.height}m</p>
                                        <p className="stat">{pokes.weight}kg</p>
                                    </div>
                                    <Link to={`/detalles/${pokes.id}`}>
                                        <button className='btn-see-all' onClick={() => ShowMoreInfo(pokes)}>Show Details</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
            </div >
        </>
    )
}

export default ShowCardsOfPokemon

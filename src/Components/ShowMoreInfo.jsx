import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ShowMoreInfo = () => {
    const [dataList, setDataList] = useState([]);
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Número deseado de solicitudes

                const requests = [];

                // Crea una promesa para cada solicitud y agrégala al array de promesas
                const requestPromise = fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Error en la solicitud ${params.id}`);
                        }
                        return response.json();
                    });

                requests.push(requestPromise);

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

    const volverAInicio = e => {
        console.log(e)
    }

    return (
        <>
            <div className="pokemon-todos-individual" id="listaPokemon">

                {dataList.map(pokes => {

                    let tipos = pokes.types.map((type, index) =>
                        <p key={index} className={`${type.type.name} tipo`}>{type.type.name}</p>)

                    let habilidades = pokes.abilities.map((ability, index) =>
                        <p key={index} className={`${ability.ability.name} tipo`}>{ability.ability.name}</p>)

                    let stat = pokes.stats.slice(0, 4).map((stat, index) =>
                        <p key={index} className={`${stat.stat.name} tipo`}>{stat.stat.name}</p>)

                    let moves = pokes.moves.slice(0, 5).map((move, index) =>
                        <p key={index} className={`${move.move.name} tipo`}>{move.move.name}</p>)


                    let pokeId = pokes.id.toString();
                    if (pokeId.length === 1) {
                        pokeId = '00' + pokeId;
                    } else if (pokeId.length === 2) {
                        pokeId = '0' + pokeId;
                    }

                    return (
                        <>
                            <div key={pokeId} className='pokemon-todos-individual'>
                                <div key={pokeId} className="pokemon-individual">
                                    <p className="pokemon-id-back-individual">#{pokeId}</p>

                                    <div className="pokemon-info-individual">
                                        <div className="nombre-contenedor-individual">
                                            <p className="pokemon-id-individual">#{pokeId}</p>
                                            <hr />
                                            <h2 className="pokemon-nombre-individual">{pokes.name}</h2>
                                        </div>
                                        <div className="pokemon-tipos-individual">
                                            {tipos}
                                        </div>
                                        <div className="pokemon-stats-individual">
                                            <p className="stat">{pokes.height}m</p>
                                            <hr />
                                            <p className="stat">{pokes.weight}kg</p>
                                        </div>

                                    </div>
                                </div>
                                <div className='pokemon-individual'>
                                    <div className="pokemon-imagen-individual">
                                        <img className='pokemon-imagen-individual' src={pokes.sprites.other["official-artwork"].front_default} />
                                        <br />
                                    </div>
                                    <ul>
                                        <h3>Stats</h3>
                                        {stat}
                                        <Link to={`/`}>
                                            <button className='btn-see-all' onClick={() => volverAInicio()}>See All</button>
                                        </Link>
                                    </ul>
                                </div>

                                <div className='pokemon-individual'>
                                    <ul className='info-extra-poke'>
                                        <h3>Moves</h3>
                                        <li>{moves}</li>
                                        <h3>Skills</h3>
                                        <li>{habilidades}</li>
                                    </ul>
                                </div>
                            </div>
                        </>

                    )
                })}
            </div >
        </>
    )
}

export default ShowMoreInfo

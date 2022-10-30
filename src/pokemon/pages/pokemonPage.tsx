import React from "react"
import axios from "axios";

import PokedexLayout from "../../common/layouts/pokedexLayout";
import { getTypeColor } from "../../common/utils";
import { useParams } from "react-router-dom";

import HeightIcon from '@mui/icons-material/Height';
import ScaleIcon from '@mui/icons-material/Scale';

import "./pokemonPage.css"

const baseURL = "https://pokeapi.co/api/v2";

const PokemonPage = () => {
    let { id } = useParams();

    const [pokemon, setPokemon] = React.useState<any>(null);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        setLoading(true)
        axios.get(baseURL + "/pokemon/" + id).then(async (response: any) => {
            console.log(response.data)
            setPokemon(response.data)
            setLoading(false)
        });
    }, []);

    return (
        <PokedexLayout>
            {loading ? <div className="pokedex-loader"></div> : 
                <div className="pokemon-container">
                    <div className="flex justify-center">
                        <img className="pokemon-img" src={pokemon.sprites.other.home ? pokemon.sprites.other.home.front_default : pokemon.sprites.front_default} alt="" />
                    </div>
                    
                    <div className="flex column justify-center">
                        <div className="pokedex-card">
                            <h2 className="text-center" style={{ margin: 0 }}>
                                { pokemon.name.toUpperCase() }
                            </h2>

                            <div className="flex items-center justify-center">
                                {pokemon.types.map((typeSlot: any, index: number) => 
                                    <div key={index} style={{backgroundColor: getTypeColor(typeSlot.type.name), color: "white", margin: ".5rem", padding: "5px", borderRadius: "5px"}}>
                                        { typeSlot.type.name }
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex column items-center">
                                    <div>{ pokemon.height }m</div>
                                    <div className="flex items-center">
                                        <HeightIcon></HeightIcon>
                                        Height
                                    </div>
                                </div>
                                <div className="flex column items-center">
                                    <div>{ pokemon.weight }Kg</div>
                                    <div className="flex items-center">
                                        <ScaleIcon></ScaleIcon>
                                        Weight 
                                    </div>
                                </div>
                            </div>

                            <br />
                            <div className="text-center">GENERAL STATS</div>
                            <div className="flex justify-evenly wrap">                            
                                {pokemon.stats.map((stat: any) =>
                                    <div className="flex column items-center" style={{ padding: "5px", minWidth: "100px", textAlign: "center" }}>
                                        <div> {stat.base_stat} </div>
                                        <div> { stat.stat.name.replace("-", " ").replace("special", "SP.").toUpperCase() } </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            }            
        </PokedexLayout>
    )
}

export default PokemonPage
import React from "react"
import { useNavigate } from "react-router-dom";
import { getTypeColor } from "../../common/utils";

const PokemonCard = (props: any) => {
    const pokemon = props.pokemon;
    const navigate = useNavigate();

    return (
        <div onClick={ () => navigate("/pokemon/" + pokemon.id) } className="pokedex-card flex column items-center cursor-pointer">
            <img style={{maxWidth: "100%"}} src={pokemon.sprites.other.home != null ? pokemon.sprites.other.home.front_default : pokemon.img_url} alt="" />
            <div className="flex items-center">
                {pokemon.types.map((typeSlot: any, index: number) => 
                    <div key={index} style={{backgroundColor: getTypeColor(typeSlot.type.name), color: "white", margin: ".5rem", padding: "5px", borderRadius: "5px"}}>
                        { typeSlot.type.name }
                    </div>
                )}
            </div>
            <div>
                { pokemon.name.toUpperCase() }
            </div>
        </div>
    )
}

export default PokemonCard
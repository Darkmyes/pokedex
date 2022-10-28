import React from "react"
import { Grid } from "@mui/material";
import axios from "axios";

import Generation from "../components/generation";
import PokedexLayout from "../../common/layouts/pokedexLayout";
import { useParams } from "react-router-dom";

const baseURL = "https://pokeapi.co/api/v2";
const imgBaseURL = "https://www.serebii.net/pokemongo/pokemon/";
const imgBaseURL2 = "https://www.pkparaiso.com/imagenes/xy/sprites/animados/"

const GenerationPage: React.FC<any> = (props) => {
    let { id } = useParams();

    const [pokemons, setPokemons] = React.useState<any>([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        setLoading(true)
        axios.get(baseURL + "/generation/" + id).then(async (response: any) => {
            let pokemonRequests = response.data.pokemon_species
                .map(
                (pokemon: any) => axios.get(pokemon.url));
            
            Promise.all(pokemonRequests)
                .then( (res: any) => {                    
                    let generationsArray = res.map( (resp: any) => {
                        let extraZeros = "";
                        if (resp.data.id < 10) {
                            extraZeros = "00"
                        } else if (resp.data.id < 100) {
                            extraZeros = "0"
                        }

                        return {
                            id: resp.data.id,
                            name: resp.data.name,
                            color: resp.data.color,
                            img_url: imgBaseURL + extraZeros + resp.data.id + ".png",
                            img_url2: imgBaseURL2 + resp.data.name.replace(" ", "-") + ".svg"
                        };
                    }).sort( (a: any, b: any) => a.id - b.id )

                    setLoading(false);
                    setPokemons(generationsArray);
                })
                .catch(err => {
                    console.log(err)
                })
        });
    }, []);

    return (
        <PokedexLayout>
            <Grid className="flex justify-center" container spacing={2}>
                {loading ? <div className="pokedex-loader"></div> : <></> }
                {pokemons.map((element: any, index: number) => 
                    <Grid item xs={10} sm={4} md={3} >
                        <div className="pokedex-card flex column items-center cursor-pointer">
                            <img src={element.img_url} alt="" />
                            <div>
                                {element.name.toUpperCase()}
                            </div>
                        </div>
                    </Grid>                
                )}
            </Grid>
        </PokedexLayout>
    )
}

export default GenerationPage
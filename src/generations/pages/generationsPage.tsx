import React from "react"
import { Grid } from "@mui/material";
import axios from "axios";

import Generation from "../components/generation";
import PokedexLayout from "../../common/layouts/pokedexLayout";

const baseURL = "https://pokeapi.co/api/v2";

const GenerationsPage = () => {

    const [generations, setGenerations] = React.useState<any>([]);

    React.useEffect(() => {
        axios.get(baseURL + "/generation").then(async (response: any) => {
            let generationRequests = response.data.results.map(
                (generation: any) => axios.get(generation.url));

            Promise.all(generationRequests)
                .then(res => {
                    let generationsArray = res.map(resp => {
                        return {
                            id: resp.data.id,
                            name: resp.data.name,
                            region: resp.data.main_region.name,
                            url: "/generation/" + resp.data.id
                        };
                    })

                    setGenerations(generationsArray);
                })
                .catch(err => {
                    console.log(err)
                })
        });
    }, []);

    return (
        <PokedexLayout>
            <Grid className="flex justify-center" container spacing={2}>
                {generations.map((element: any, index: number) => 
                    <Grid item xs={10} sm={6} md={4} >
                        <Generation
                            key={index}
                            generation={element}
                        ></Generation>
                    </Grid>                
                )}
            </Grid>
        </PokedexLayout>
    )
}

export default GenerationsPage
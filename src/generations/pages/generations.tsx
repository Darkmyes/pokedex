import React from "react"
import { Container, Grid } from "@mui/material";
import axios from "axios";

import Generation from "../../generations/components/generation";
import PokedexLayout from "../../common/layouts/pokedexLayout";

const baseURL = "https://pokeapi.co/api/v2";

const Generations = () => {

    const [generations, setGenerations] = React.useState<any>([]);

    React.useEffect(() => {
        axios.get(baseURL + "/generation").then(async (response: any) => {
            let generationRequests = response.data.results.map(
                (generation: any) => axios.get(generation.url));

            Promise.all(generationRequests)
                .then(res => {
                    let generationsArray = res.map(resp => {
                        return {
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
            <Container>
                <Grid className="flex justify-center" container spacing={2}>
                    {generations.map((element: any, index: number) => 
                        <Grid item xs={10} sm={4} md={3} >
                            <Generation
                                key={index}
                                generation={element}
                            ></Generation>
                        </Grid>                
                    )}
                </Grid>            
            </Container>
        </PokedexLayout>
    )
}

export default Generations
import React from "react"
import { Button, CardActions, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const baseURL = "https://pokeapi.co/api/v2";

const Generation = (props: any) => {
    return (
        <div className="pokedex-card" >
            <Typography align="center" gutterBottom variant="h5" component="div">
                { props.generation.name.toUpperCase().replace("-", " ") }
            </Typography>
            <Typography align="center" variant="h5" color="text.secondary">
                { props.generation.region.toUpperCase() }
            </Typography>
            <CardActions className="flex justify-center">
                <Button
                    to={"/generation/" + props.generation.id}
                    component={ Link }
                    className="pokedex-button"
                    size="small"
                >
                    Select
                </Button>
            </CardActions>
        </div>
    )
}

export default Generation
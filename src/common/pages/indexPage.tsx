import React from "react"
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom"

import "./indexPage.css"

const IndexPage = () => {

    return (
        <Box className="index-pokedex-background" sx={{backgroundColor: '#bef5ff', display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center'}}>            
            <div id="index-pokedex-loading-top">
                <div className="index-pokedex-corner-circle-left"></div>
                <div className="index-pokedex-corner-circle-left-small"></div>

                <div className="index-pokedex-corner-circle-right"></div>
                <div className="index-pokedex-corner-circle-right-small"></div>

                <div className="index-pokedex-center-semi-circle-top"></div>
                <div className="index-pokedex-center-line"></div>
                <div className="index-pokedex-center-semi-circle-top-inner"></div>
            </div>
            <div id="index-pokedex-loading-center"></div>
            <div id="index-pokedex-loading-bottom">
                <div className="index-pokedex-corner-circle-left"></div>
                <div className="index-pokedex-corner-circle-left-small"></div>

                <div className="index-pokedex-corner-circle-right"></div>
                <div className="index-pokedex-corner-circle-right-small"></div>

                <div className="index-pokedex-center-semi-circle-bottom"></div>
                <div className="index-pokedex-center-line"></div>
                <div className="index-pokedex-center-semi-circle-bottom-inner"></div>
            </div>
            <div className="initial-hidden show-late pokedex-card">
                <div>
                    <h1>Pokedex Project</h1>
                </div>
                <div className="text-center">
                    <b>Github</b> github.com/Darkmyes
                </div>
                <br />
                <div className="flex justify-center">
                    <Button to="/generations" component={ Link } className="pokedex-button">
                        Start
                    </Button>
                </div>
            </div>
        </Box>
    )
}

export default IndexPage

/* 
            <Container>
                <div>Pokedex</div>   
                <Button>Start</Button>
            </Container>
*/
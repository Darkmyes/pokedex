import React from "react"
import { Box } from "@mui/material";

import "./pokedexLayout.css"

const PokedexLayout: React.FC<any> = ({ children }) => {

    return (
        <Box className="pokedex-background" sx={{backgroundColor: '#bef5ff', display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center'}}>            
            <div id="pokedex-loading-top">
                <div className="pokedex-corner-circle-left"></div>
                <div className="pokedex-corner-circle-left-small"></div>

                <div className="pokedex-corner-circle-right"></div>
                <div className="pokedex-corner-circle-right-small"></div>

                <div className="pokedex-center-semi-circle-top"></div>
                <div className="pokedex-center-line"></div>
                <div className="pokedex-center-semi-circle-top-inner"></div>
            </div>
            <div id="pokedex-loading-bottom">
                <div className="pokedex-corner-circle-left"></div>
                <div className="pokedex-corner-circle-left-small"></div>

                <div className="pokedex-corner-circle-right"></div>
                <div className="pokedex-corner-circle-right-small"></div>

                <div className="pokedex-center-semi-circle-bottom"></div>
                <div className="pokedex-center-line"></div>
                <div className="pokedex-center-semi-circle-bottom-inner"></div>
            </div>
            { children }
        </Box>
    )
}

export default PokedexLayout
import React from "react"
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

import "./pokedexLayout.css"

const PokedexLayout: React.FC<any> = ({ children }) => {
    const navigate = useNavigate();

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
            <div className="pokedex-container">
                { children }
                <Button
                    onClick={() => history.length > 2 ? navigate(-1) : navigate("/")}
                    className="pokedex-back-button pokedex-button initial-hidden show-late"
                    aria-label="add"
                >
                    <KeyboardReturnIcon></KeyboardReturnIcon>
                </Button>       
            </div>
        </Box>
    )
}

export default PokedexLayout
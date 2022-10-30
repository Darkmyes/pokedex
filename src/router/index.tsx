import React from 'react';
import { Route, Routes } from "react-router-dom";
import GenerationsPage from '../generation/pages/generationsPage';
import GenerationPage from '../generation/pages/generationPage';

import { IndexPage } from "./../common/pages";
import PokemonPage from '../pokemon/pages/pokemonPage';

const RouterComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPage/>}></Route>
            <Route path="/generations" element={<GenerationsPage/>}></Route>
            <Route path="/generation/:id" element={<GenerationPage/>}></Route>
            <Route path="/pokemon/:id" element={<PokemonPage/>}></Route>
            <Route path="*" element={<IndexPage/>}></Route>
        </Routes>
    );
}

export default RouterComponent
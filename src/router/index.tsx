import React from 'react';
import { Route, Routes } from "react-router-dom"
import GenerationsPage from '../generations/pages/generationsPage';
import GenerationPage from '../generations/pages/generationPage';

import { IndexPage } from "./../common/pages"

const RouterComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPage/>}></Route>
            <Route path="/generations" element={<GenerationsPage/>}></Route>
            <Route path="/generation/:id" element={<GenerationPage/>}></Route>
        </Routes>
    );
}

export default RouterComponent
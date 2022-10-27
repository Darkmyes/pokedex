import React from 'react';
import { Route, Routes } from "react-router-dom"
import Generations from '../generations/pages/generations';

import { IndexPage } from "./../common/pages"

const RouterComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPage/>}></Route>
            <Route path="/generations" element={<Generations/>}></Route>
        </Routes>
    );
}

export default RouterComponent
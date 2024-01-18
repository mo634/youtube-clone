import {Box} from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import components
import {Navbar , Feed, VideoDetail , ChannelDetail, SearchFeed} from './components';


const App = () => (
    <BrowserRouter>
        <Box>
            
        {/* render nav component  */}
        <Navbar />
        
            {/* configure routes  */}
        <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
            
            
        </Box>
    </BrowserRouter>
);

export default App;

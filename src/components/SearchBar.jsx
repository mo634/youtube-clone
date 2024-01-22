import {IconButton, Paper} from "@mui/material";
import React, {useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
    //states
    const [searchTerm, setSearchTerm] = useState("");

    //funcs
    const onhandleSubmit = (e) => {};

    return (
        <Paper
            component="form"
            onSubmit={onhandleSubmit}
            sx={{
                borderRadius: 20,
                border: "1px solid #e3e3e3",
                pl: 2,
                boxShadow: "none",
                mr: {sm: 5},
            }}
        >
            
            <input
                type="text"
                style={{border:"none"}}
                placeholder="Search..."
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                }}
                value={searchTerm}
            />

            <IconButton
                type="submit"
                sx={{
                    p: "10px",
                    color: "red",
                }}
                aria-label="search"
            >
                <SearchIcon />
            </IconButton>

        </Paper>
    );
};
export default SearchBar;

import React, { useState } from 'react';

const SearchMovie = () => {
    return (
        <>
            <h1> Recherche...</h1>
            <form>
                <input>
                    type= "text"
                    name= "search"
                    placeholder="Rechercher un titre"
                </input>
                <button type="submit">Rechercher</button>
            </form>
        
        </>
    )
}

export default SearchMovie
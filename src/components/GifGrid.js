import React, { useState, useEffect } from 'react'
import { getGifts } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifts( category )
            .then( setImages );
    }, [ category ]);

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem
                            key = { img.id }
                            { ...img } 
                        />
                    )) 
                }
            </div>
        </>
    )
}

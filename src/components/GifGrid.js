import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);


    useEffect( () => {
        getGifts();
    }, []);

    const getGifts = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=mickey&limit=10&api_key=puvheGF2U8EIXwmjP4iZbwsoqUj0d9cH';
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages( gifs );

    }

    return (
        <div>
            <h3>{ category }</h3>
            {
                images.map( img => (
                    <GifGridItem
                        key = { img.id }
                        { ...img } 
                    />
                )) 
            }
        </div>
    )
}

import React, { useState, useEffect } from 'react'

export const GifGrid = ({ category }) => {


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

    }

    return (
        <div>
            <h3>{ category }</h3>
            <ol>
                <li>Item</li>
            </ol>
        </div>
    )
}

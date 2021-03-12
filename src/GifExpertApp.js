import React, { useState } from 'react'

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setcategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {
        //setcategories( ['HunterXHunter', ...categories] );
        setcategories( cats => [ ...cats, 'HunterXHunter' ] );
    }

    console.log(categories);

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={ handleAdd }>Agregar</button>

            <ol>
                {
                    categories.map( ( category ) => {
                        return <li key={ category }> { category} </li>
                    })
                }
            </ol>
        </>
    )
}

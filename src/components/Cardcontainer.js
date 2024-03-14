import React from 'react'
import Card from './Card';
// import data from '../database/data';

function Cardcontainer({data}) {
    return (
        <div className="filter-container">
            <div className='cards'>
                {
                    data.map((item) => (
                        <Card key={item.id} {...item} ></Card>
                ))
                }
            </div>

            {/* <Card
                id={1}
                title={'React.js'}
                info={"infoi"}
                image={"https://cdn.thecodehelp.in/Agra.jpeg"}
                price={844}
            /> */}

        </div>
    )
}

export default Cardcontainer;
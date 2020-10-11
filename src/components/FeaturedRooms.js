// import React, { Component } from 'react'
// import { RoomContext } from "../context";

// export default class FeaturedRooms extends Component {
//     static contextType = RoomContext;
//     render() {
//         const { name, greeting } = this.context;
//         console.log(name);

//         return <div>
//             {greeting} {name}
//             {/* Hello From Featurd Rooms {value} */}
//         </div>;
//     }
// }

import React, { useContext } from 'react';
import { RoomContext } from "../context";
import Title from "./Title";
import Loading from './Loading'
import Room from './Room';


const FeaturedRooms = () => {
    const context = useContext(RoomContext);
    let { featuredRooms: rooms, loading } = context;
    // console.log(rooms);
    rooms = rooms.map(room => <Room key={room.id} room={room} />)
    return (
        <section className="featured-rooms">
            <Title title="Featured Rooms" />
            <div className="featured-rooms-center">
                {loading ? <Loading /> : rooms}
            </div>
        </section>
    )
}

export default FeaturedRooms


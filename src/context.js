import React, { useEffect, useState } from 'react'
import items from './data';

const RoomContext = React.createContext();

const RoomProvider = props => {
    const initialState = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    };
    const [state, setSate] = useState(initialState);
    // getData

    useEffect(() => {
        let rooms = formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        setSate({ ...state, rooms, featuredRooms, loading: false });
    }, []);

    const formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { ...item.fields, images: images, id };
            return room;
        })

        return tempItems;
    }

    const getRoom = (slug) => {
        // console.log(slug);
        let tempRooms = [...state.rooms];
        // console.log(tempRooms);
        const room = tempRooms.find(room => room.slug === slug);
        console.log(room);
        return room;
    }

    return (
        <RoomContext.Provider value={{ ...state, getRoom: getRoom }}>
            {props.children}
        </RoomContext.Provider>
    )
}

const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };

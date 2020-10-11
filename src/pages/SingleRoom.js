import React, { Component } from 'react';
import defaultBg from "../images/room-1.jpeg";
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from "../context";

class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBg
        };
    }
    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return <div className="error">
                <h3>No such room could be found</h3>
                <Link to="rooms" className="btn-primary">NO SUCH ROOM COULD BE FOUND</Link>
            </div>
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
        return (
            <div>
                Hello form Single Room Page {room.name}
            </div>
        )
    }
}
export default SingleRoom;

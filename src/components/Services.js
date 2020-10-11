import React from 'react'
import Title from './Title';
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from "react-icons/fa";
const Services = () => {
    const services = [
        {
            icon: <FaCocktail />,
            title: "Free Cocktails",
            info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, architecto?'
        },
        {
            icon: <FaHiking />,
            title: "Endless Hinking",
            info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, architecto?'
        },
        {
            icon: <FaShuttleVan />,
            title: "Free Buses",
            info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, architecto?'
        },
        {
            icon: <FaBeer />,
            title: "Strongest Beer",
            info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, architecto?'
        }
    ]
    // const [services, setServices] = useState(services)
    return (
        <section className="services ">
            <Title title="Services" />
            <div className="services-center">
                {services.map((item, index) =>
                    <article className="service" key={index} >
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>)}
            </div>
            <p></p>
        </section>
    )
}

export default Services

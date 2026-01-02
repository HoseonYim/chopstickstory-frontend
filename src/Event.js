import React from 'react';
import backgroundImage from './assets/Sample/adrien-bruneau-8cpR_Yf0rQs-unsplash.jpg';
import './Event.css';
import Header from './Header';

export default function Event() {
    const events = [
        {
            id: 0,
            date: '2025-12-1',
            name: 'Elementary School Chopstick Volunteer',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem elit, interdum at euismod nec, faucibus eu arcu. Proin hendrerit quis dolor molestie iaculis. Suspendisse nulla leo, ultricies ac turpis vel, euismod tincidunt ligula. Nulla quis viverra enim. Nullam risus elit, blandit vel congue in, pulvinar eget ligula. Praesent maximus at erat ut volutpat. Cras ullamcorper pellentesque nulla id vehicula. Praesent maximus consectetur malesuada. Morbi nibh sem, finibus id suscipit sit amet, sagittis et ante. In hac habitasse platea dictumst. Praesent ornare commodo ex. Nullam eu accumsan mi, vitae aliquet turpis. Donec risus ex, fringilla id malesuada at, ultrices in massa. Fusce lectus enim, condimentum ut molestie at, semper vitae justo. Fusce lacinia erat vel mattis ',
            imageId: backgroundImage,
            time: '10:00 AM - 1:00 PM',
        },
        {
            id: 1,
            date: '2025-12-2',
            name: 'Elementary School Chopstick Volunteer',
            description: 'This is a description',
            imageId: 'ASD213',
            time: '10:00 AM - 1:00 PM',
        },
        {
            id: 2,
            date: '2025-12-3',
            name: 'Elementary School Chopstick Volunteer',
            description: 'This is a description',
            imageId: 'ASD213',
            time: '10:00 AM - 1:00 PM',
        },
        {
            id: 3,
            date: '2025-12-4',
            name: 'Elementary School Chopstick Volunteer',
            description: 'This is a description',
            imageId: 'ASD213',
            time: '10:00 AM - 1:00 PM',
        },
    ];

    const eventList = events.map((i) => (
        <li key={i.id} className="event-card">
            <div class="image-section">
                <img src={i.imageId} alt={i.name} />
                <div class="date-badge">26</div>
            </div>
            <div class="content-section">
                <div className="title">{i.name}</div>
                <div class="description">{i.description}</div>
                <div class="time">{i.time}</div>

                <div class="arrow-container">
                    <span class="arrow"></span>
                </div>
            </div>
        </li>
    ));

    return (
        <div className="event-page">
            <Header />
            <div className="navigation">
                <div className="line" />
                <p>EVENT</p>
                <div className="line" />
            </div>
            <div className="part2">
                <div className="search-bar">
                    <input />
                    Search
                </div>
                <div className="event-bar" />
                <ul className="event-list">{eventList}</ul>
            </div>
        </div>
    );
}

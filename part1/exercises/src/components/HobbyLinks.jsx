import React from 'react';

export default function HobbyLinks() {
    const hobbyLinks = [
        "https://www.flyball.org/",
        "https://www.amctheatres.com/"
    ];

    return(
        <div>
            <h3>My hobbies</h3>
            <ul>
                <li><a href = {hobbyLinks[0]}>Flyball</a></li>
                <li><a href = {hobbyLinks[1]}>Going to the theater</a></li>
            </ul>
        </div>
    )
}
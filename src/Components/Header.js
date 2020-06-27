import React from "react";
import { Link, Router } from "react-router-dom";


export default () => (
    <header>
        <ul>
            <li>
                <a href="/">Movie</a>
            </li>
            <li>
                <a href="/tv">TV</a>
            </li>
            <li>
                <a href="/search">Search</a>
            </li>
        </ul>
    </header>
)
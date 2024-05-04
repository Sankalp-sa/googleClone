import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='p-3'>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link className='nav-link text-dark' to="/">Gmail</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark" to="#">Images</Link>
                </li>
                <button class="material-symbols-outlined p-1 ms-3 fs-3 fw-lighter btn rounded-circle">
                    apps
                </button>
                <li className="nav-item px-3">
                    <button className="btn btn-success rounded-circle fw-bold" style={{ width: "105%" }}>
                        S
                    </button>
                </li>
            </ul>

        </div>
    )
}

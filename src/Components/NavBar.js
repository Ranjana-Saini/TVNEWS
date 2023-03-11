import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class NavBar extends Component {
    
    darkmode = () => { 
        let x = document.getElementById('flexSwitchCheckDefault');
        // console.log(x.checked);
        this.props.toggleMode(x.checked);
    }

    render() {
        return (
            <div>
                <nav className={`navbar navbar-expand-lg bg-${this.props.bg}`}>
                    <div className="container-fluid ">
                        <Link className={`navbar-brand text-${this.props.color}`} to="/">TV News</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ">
                                <li className="nav-item"><Link className={`nav-link text-${this.props.color}`} to="/business">Business</Link></li>
                                <li className="nav-item"><Link className={`nav-link text-${this.props.color}`} to="/entertainment">Entertainment </Link></li>
                                <li className="nav-item"><Link className={`nav-link text-${this.props.color}`} to="/general">General</Link></li>
                                <li className="nav-item"><Link className={`nav-link text-${this.props.color}`} to="/health">Health</Link></li>
                                <li className="nav-item"><Link className={`nav-link text-${this.props.color}`} to="/science">Science</Link></li>
                                <li className="nav-item"><Link className={`nav-link text-${this.props.color}`} to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className={`nav-link text-${this.props.color}`} to="/technology">Technology</Link></li>
                            </ul>
                        </div>
                        <div className="form-check form-switch">
                            <input onClick={this.darkmode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                <label className={`form-check-label text-${this.props.color}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}

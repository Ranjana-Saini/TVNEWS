import React, { Component } from 'react'
import {Link} from "react-router-dom";
import newsIcon from "../resource/newsIcon.png"

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
                    <div className="container-fluid">
                        <img src={newsIcon} alt="" style={{width : `20px`, height: `20px`, background : "white"}}/>
                        <Link className={`navbar-brand text-${this.props.color}`} to="/"> <h3><b> TV News</b></h3></Link>
                        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                            <ul className="navbar-nav" >
                                <li className="nav-item"><Link className={`nav-link text-${this.props.color}`} to="/politics">Politics</Link></li>
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
                        <button className={`navbar-toggler btn  btn-outline-${this.props.color}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </div>

        )
    }
}

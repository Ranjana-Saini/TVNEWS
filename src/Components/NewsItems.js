import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        let {title , desc, imgUrl, url, bg, color} = this.props
        return (
            <div>
                <div className={`card bg-${bg} border border-${color}`} style={{width: "18rem"}}>
                    <img src={imgUrl} style={{height: "8rem"}} className="card-img-top" alt=""/>
                        <div className={`card-body text-${color}`}>
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{desc}...</p>
                            <a href={url} target ="_blank" rel="noreferrer" className="btn btn-success ">Deep Dive</a>
                        </div>
                </div>
            </div>
        )
    }
}

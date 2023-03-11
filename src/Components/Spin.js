import React, { Component } from 'react'
import load from '../resource/load.gif';

export default class Spin extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <img src={load} alt="" />
            </div>
        )
    }
}

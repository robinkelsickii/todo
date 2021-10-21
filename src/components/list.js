import React, { Component } from "react";
import Item from "./Item";
import '../index.css'

export default class List extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="container border border-dark">
                <div className='row border-border-warning'>
                    <div className='col border border-danger text-center'>
                        <Item />
                    </div>
                </div>

            </div>
        )

    }
}
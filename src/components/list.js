import react, { Component } from "react";
import Items from "./Items";
import '../index.css'

export default class List extends Component {
    render() {
        return (
            <div className="container border border-dark">
                <div className='row border-border-warning'>
                    <div className='col border border-danger'>
                        <Items />
                    </div>
                </div>

            </div>
        )

    }
}
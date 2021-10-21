import React, { Component } from "react";
import List from "./List";

export default class Item extends Component {
    render() {
        const { task, DeleteItem, CompletedItem} = this.props

        return (
            <div className='container'>
                <li className='list-group-item d-flex justify-content-between my-1'>
                    <div class="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick = {CompletedItem} />
                        <label className="form-check-label" for="flexCheckDefault">
                            {task}
                        </label>
                    </div>
                    <div className='editDelete'>
                        <button type='button' className='m-2 btn btn-danger' onClick={DeleteItem}><i class="bi bi-x-square"></i></button>
                    </div>
                </li>
            </div>
            
        );


    }
}
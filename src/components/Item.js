import React, { Component } from "react";



export default class Item extends Component {
    render() {
        const { task, DeleteItem, CompleteTask } = this.props

        return (
            <div className='container'>
                <li className='list-group-item d-flex justify-content-between'>
                    <div className="form-check p-2">
                        <button type = 'button' className = 'btn btn-primary' onClick={CompleteTask}>O</button>
                        <label className="form-check-label" for="flexCheckDefault">
                            <h3> {task} </h3>
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
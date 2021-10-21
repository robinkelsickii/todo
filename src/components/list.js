import React, { Component } from "react";
import Item from "./Item";
import '../index.css'
import Completed from './Completed'

export default class List extends Component {
    render() {
        console.log(this.props)
        const { taskList, ClearList, DeleteItem, CompleteItem } = this.props
        return (

            <div className="container">
                
                <div className='row'>
                    <div className='col text-center'>
                    <h3 className='text-center'>Tasks</h3>
                        <ul>
                        {taskList.map(item => { return (<Item key={item.id} 
                        task={item.task} 
                        DeleteItem={() => DeleteItem(item.id)}  />) })}
                        </ul>
                        <div className='btn-group' role='group' arial-label='Staus'>
                    <p className = 'me-3'>Active Tasks:</p>
                    <button type="button" className="btn btn-primary">All</button>
                    <button type="button" className="btn btn-primary" onClick ={CompleteItem}>Completed</button>
                    <button type="button" className="btn btn-primary">Active</button>
                    <button type="button" className="btn btn-danger" onClick = {ClearList}>Clear List</button>
                    
                    
                </div>

                    </div>
                </div>
            </div>
        )

    }
}
import react, { Component } from "react";
import List from "./List";
import '../index.css'

export default class TaskInput extends Component {
    render() {
        return (
            <div className="container">
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <div className='input-group mb-3'>
                            <button type='button' className='btn btn-success'><i class="bi bi-plus-lg"></i></button>
                            <input type="text" className="form-control" placeholder="Add Task" aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
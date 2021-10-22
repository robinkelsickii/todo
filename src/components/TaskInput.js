import react, { Component } from "react";
import List from "./List";
import '../index.css'

export default class TaskInput extends Component {
    render() {

        const { item, ChangeState, AddTask } = this.props;

        return (
            <div className="container">
                <div className='row justify-content-center'>
                    <div className='col-6'>
                    <form onSubmit={AddTask}> 
                        <div className='input-group mb-3'>
                            <button type='submit'  className='btn btn-success'><i class="bi bi-plus-lg"></i></button>
                            <input onChange={ChangeState} value={item} type="text" className="form-control" placeholder="Add Task" aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );

    }
}
import { render } from "@testing-library/react";
import React from "react";

function Completed() {
   
        const { task, DeleteItem } = this.props;

        return (
            <li className='list-group-item d-flex justify-content-between'>
                <div className="form-check p-2">
                    <button type='button' className = 'btn btn-primary' >X</button>
                    <label className="form-check-label" for="flexCheckDefault">
                        <h3> {task} </h3>
                    </label>
                </div>
                <div className='editDelete'>
                    <button type='button' className='m-2 btn btn-danger' onClick={DeleteItem}><i class="bi bi-x-square"></i></button>
                </div>
            </li>
        );
    }
export default Completed;
import React from "react";

function Completed(){

    const {task} = this.props

    return(
        <div>
            <h3>Look what you've done Today!</h3>
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
    {task}
  </label>
  </div>
</div>
    )
}
export default Completed
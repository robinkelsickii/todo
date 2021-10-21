import React, { Component } from 'react';
import TaskInput from './components/TaskInput'
import List from './components/List'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskList: [],
      item: '',
      complete: false,
    };
  }

  ChangeState = (e) => {
    this.setState({
      item: e.target.value
    })
  };
  AddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      task: this.state.item,
      complete: false
    };
    const updateState = [...this.state.taskList, newTask];

    this.setState({
      taskList: updateState,
      item: '',

    })

  };
  ClearList = () => {
    this.setState({
      taskList: []
    });
  };
  DeleteItem = (id) => {
    const updatedItems = this.state.taskList.filter(item => item.id !== id);
    this.setState({
      taskList: updatedItems
    })
  };
//   CompletedItem = (id) => {
   
// }
// ShowAll = ()=>{
//   console.log('All items')
// };
// ShowComplete = ()=>{
//   console.log('completed items')
// };
// ShowActive = ()=>{
//   console.log('todo...')
// }
// CountItems(){

// };




render() {

  console.log(this.state)

  return (

    < div className="App" >
      <div className='container'>
        <div className='row'>
          <div className='col text-center mt-5'>
            <h1>Todo or Not Todo</h1>
          </div>
        </div>
      </div>

      <TaskInput item={this.state.item}
        ChangeState={this.ChangeState}
        EditItem={this.EditItem}
        AddTask={this.AddTask}
      />

      <List taskList={this.state.taskList}
        ClearList={this.ClearList}
        EditItem={this.EditItem}
        DeleteItem={this.DeleteItem}
      />


    </div >
  )
}
import React, { Component } from 'react';
import TaskInput from './components/TaskInput'
import List from './components/List'
import Items from './components/Items';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskList: [],
      id: Date.now(),
      item: '',
      editItem: false
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
      id: this.state.id,
      task: this.state.item
    };
    const updateState = [...this.state.taskList, newTask];

    this.setState({
      taskList: updateState,
        item: '',
          id: Date.now(),
            editItem: false
    }, 
    () => console.log(this.state))
  };
  ClearList = () => {
    console.log('list is clear')
  };
  DeleteItem = () => {
    console.log('item deleted')
  };
  EditItem = () => {
    console.log('item changed')
  };
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
          DeleteItem={this.DeleteItem}
        />
      </div >

    );
  }
}
export default App;

import React, { Component } from 'react';
import TaskInput from './components/TaskInput'
import List from './components/List'
import Items from './components/Items';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskList: [{ id: 1, title: 'hello' }],
      id: Date.now,
      item: '',
      editItem: false
    };
  }
  UpdateState = ()=>{
    console.log('state is updated')
  };
  AddTask = ()=>{
    console.log('task added')
  };
  ClearList = ()=>{
    console.log('list is clear')
  };
  DeleteItem = ()=>{
    console.log('item deleted')
  };
  EditItem = ()=>{
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

    // console.log(this.state.id)

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
        UpdateState={this.UpdateState} 
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

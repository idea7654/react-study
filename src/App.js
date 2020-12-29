import './App.css';
import React, {Component} from 'react';
import TodoList from './components/TodoList';
import Input from './components/Input';

class App extends Component{
  id = 2;
  state = {
    //btflag: false,
    value: '',
    todoList: [
      {id: 0, context: '운동'},
      {id: 1, context: '공부'},
    ]
  };

  // handleUpdate = (id, context) => {
  //   const {todoList} = this.state;
  //   this.setState({
  //     // todoList: [
  //     //   ...todoList.splice(0, id),
  //     //   {id, context},
  //     //   ...todoList.splice(id + 1, todoList.length - 1)
  //     // ]
  //   });
  // };

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  // handleCreate = () => {
  //   this.setState({
  //     todoList: [
  //       ...this.state.todoList,
  //       {id: this.id, context: this.state.value}
  //     ],
  //     value: ''
  //   });
  //   this.id++;
  // };

  render(){
    const {todoList} = this.state;
    const {handleUpdate, ButtonUpdate} = this;
    return(
      <div>
        <TodoList todoList={todoList} onUpdate={handleUpdate} />
        {/* <Input /> */}
        <h2>추가</h2>
        <input placeholder="여기에 내용을 입력하세요" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleCreate}>추가</button>
      </div>
    );
  }
}

export default App;
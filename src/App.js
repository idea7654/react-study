import './App.css';
import React, {Component} from 'react';
import TodoList from './components/TodoList';
import Input from './components/Input';

class App extends Component{
  id = 2;
  state = {
    value: '',
    todoList: [
      {id: 0, context: '운동'},
      {id: 1, context: '공부'},
    ]
  };
  // 0 1 2 3 인덱스 4개 2번을 바꿔줌 -> 0 1을 그대로 복사하고, 2를 골라서 바꿔주고, 3을 또 복사하면
  handleUpdate = (id, context) => {
    const {todoList} = this.state;
    this.setState({
      todoList: [
        ...todoList.slice(0, id),
        {
          ...todoList[id],
          context : context
        },
        ...todoList.slice(id + 1)
      ]
    });
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  handleCreate = async() => {
    await this.setState({
      todoList: [
        ...this.state.todoList,
        {id: this.id, context: this.state.value}
      ],
      value: ''
    });
    await this.id++;
  };

  handleDestroy = (id) => {
    const {todoList} = this.state;
    this.setState({
      todoList: [
        ...todoList.slice(0, id),
        ...todoList.slice(id + 1)
      ]
    });
  }

  render(){
    const {todoList} = this.state;
    const {handleUpdate, handleDestroy} = this;
    return(
      <div>
        <TodoList todoList={todoList} onUpdate={handleUpdate} onDestroy={handleDestroy} />
        {/* <Input /> */}
        <h2>추가</h2>
        <input placeholder="여기에 내용을 입력하세요" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleCreate}>추가</button>
      </div>
    );
  }
}

export default App;
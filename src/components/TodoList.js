import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
    render() {
        const {todoList, onUpdate, onDestroy} = this.props;
        //console.log(todoList); //array
        //반복문, for문, foreach ...
        //불변성을 지키기 위해 사용x
        //기존의 배열을 건드리지 않으면서(카피하면서) 반환을 하는 메소드를 사용
        //map, reduce, ...
        //array.map((data) => {
            //data -> array의 방 하나하나값
        //});
        //삼항 연산자 if(){}else{}
        // 조건 ? true : false
        return (
            <div>
                <ul>
                    {todoList.map((data) => {
                        //return <li onClick={() => onUpdate(data.id, data.context)} key={data.id}>{data.context} <button>수정</button></li>
                        return <TodoListItem onDestroy={onDestroy} onUpdate={onUpdate} context={data} />
                    })}
                    
                    {/* 0번째방 data.context
                    1번째방 data.context */}
                </ul>
            </div>
        );
    }
}

export default TodoList;
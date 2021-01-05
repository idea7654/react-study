import React, { Component } from 'react';

class TodoListItem extends Component {
    state = {
        btflag: false,
        context: ''
    };
    
    ButtonUpdate = () => {
        this.setState({
            btflag: !this.state.btflag
        });
    };

    handleUpdate = (id) => {
        const {onUpdate} = this.props;
        const {context} = this.state;
        onUpdate(id, context);
        this.setState({
            context: '',
            btflag: !this.state.btflag
        });
    };

    handleChange = (e) => {
        this.setState({
            context: e.target.value
        });
    };

    handleDestroy = (id) => {
        this.props.onDestroy(id);
    };

    render() {
        const {context} = this.props;
        const {btflag} = this.state;
        const {ButtonUpdate, handleUpdate, handleChange, handleDestroy} = this;
        const btnText = btflag ? '확인' : '수정';
        return (
            <div>
                <li key={context.id}>
                    {btflag ? <input onChange={handleChange} value={this.state.context} /> : context.context}
                    {btflag ? <button onClick={() => handleUpdate(context.id)}>{btnText}</button>
                     : <button onClick={() => ButtonUpdate()}>{btnText}</button>}
                    <button onClick={() => handleDestroy(context.id)}>삭제</button>
                </li>
            </div>
            
        );
    }
}

export default TodoListItem;

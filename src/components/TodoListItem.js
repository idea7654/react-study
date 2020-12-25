import React, { Component } from 'react';

class TodoListItem extends Component {
    

    render() {
        const {context, onClick, btflag, ButtonUpdate} = this.props;
        const btnText = btflag ? '확인' : '수정';
        //const ctxTag = this.state.btflag ? <input /> : {btnText};
        //console.log(id, context);
        return (
            // <li key={context.id} onClick={() => onClick(context.id, context.context)}>
            //     {context.context} <button onClick={this.ButtonUpdate}>{ctxTag}</button> </li>
            <div>
                <li key={context.id} onClick={() => onClick(context.id, context.context)}>
                    {btflag ? <input /> : context.context}
                    <button onClick={() => ButtonUpdate(context.id)}>{btnText}</button>
                </li>
            </div>
            
        );
    }
}

export default TodoListItem;



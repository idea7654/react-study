import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div>
                <h2>추가</h2>
                <input placeholder="여기에 내용을 입력하세요" />
                <button>추가</button>
            </div>
        );
    }
}

export default Input;

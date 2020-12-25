import React, {Component} from 'react';
import './Virtual.css';

// class Virtual extends Component{
//     render(){
//         return(
//             <div>
//                 <h4>가상돔이에용 {this.props.value}</h4>
//                 <input type="text" onChange={this.props.handleChange} value={this.props.value} />
//                 <button onClick={this.props.handleDestroy}>삭제</button>
//             </div>
//         )
//     }
// }

// export default Virtual;

// rcc -> 클래스형 컴포넌트, rfcp -> 함수형 컴포넌트
//클래스형 -> 조금 무거움 but 쓸 수 있는 기능이 함수형보다 많음 ex)라이프사이클, state
//함수형 -> 클래스형의 반대
//Props -> 프로퍼티스의 줄임말로, 이거를 통해서 부모 자식간의 데이터 바인딩이 이루어짐.

const Virtual = ({value, handleChange, handleDestroy}) => {
    return (
        <div>
            <h4>가상돔이에용 {value}</h4>
            <input type="text" onChange={handleChange} value={value} />
            <button onClick={handleDestroy}>삭제</button>
        </div>
    );
};

//const 컴포넌트명 = ({props값}) => {
    //return(
        //render될 명령어들
    //)
//}
// Virtual.propTypes = {

// };
//Hooks -> 함수형 컴포넌트에서 클래스형 컴포넌트에서만 사용이 가능한 것들을 사용할 수 있게 도와주는 모듈

export default Virtual;

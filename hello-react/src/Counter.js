import { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state 조회시 this.state로 조회한다
    return (
      <div>
        <h1>{number}</h1>
        <h2>불변값:{fixedNumber}</h2>
        <button
          onClick={() => {
            // this.setState를 사용해 state에 새로운 값을 입력
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("방금 setState를 호출했습니다");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;

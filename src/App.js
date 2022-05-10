import logo from './logo.svg';
import './App.css';

//JSX문법
//1.class 넣을 땐 className
//2.변수 넣을 땐 {중괄호}

function App() {

  //대충 서버에서 가져온 실제 데이터라고 가정
  let post = '강남 우동 맛집';

  //변수에 있던 자료를 html에 넣고 싶으면 javascript같은 경우
  //document.querySelector('h4').innerHTML = post;

  return (
    <div className="App">
      <div className = "black-nav">
        <h4>블로그임</h4>
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;

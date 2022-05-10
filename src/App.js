import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//JSX문법
//1.class 넣을 땐 className
//2.변수 넣을 땐 {중괄호} : 데이터바인딩
//3.style 넣을 땐 style = {{스타일명:'값'}}

//에러메세지는 터미널/ 브라우저에서 확인

function App() {

  //대충 서버에서 가져온 실제 데이터라고 가정
  //자료 잠깐 저장할 땐 변수
  let post = '강남 우동 맛집';

  //state쓰는 이유
  //일반 변수는 갑자기 변경되면 html에 자동으로 반영안됨
  //state는 갑자기 변경되면 state쓰던 html은 자동 재렌더링됨
  //변동시 자동으로 html에 반영되게 만들고 싶으면 state쓰자
  //자주 변경될 꺼 같은 html 부분은 state로 만들어놓기
  
  //자료 잠깐 저장할 땐 state써도 된다
  //state 만드는법
  //1.import {useState}
  //2.useState{보관할 자료}
  //3.let[작명,작명]
  //a = sgtate에 보곤했던 자료 나옴
  //b = state 변경 도와주는 함수
 
  let [글제목, b] = useState('남자 코트 추천');

   //array안에 있는 자료를 변수로 뺴고 싶을 때
   //let num = [1,2];//1과2를 변수로 빼고 싶다.
   //let a = num[1];
   //let c = num[2];

  //(참고)Destructuring 문법
  //a = 1 , c = 2
  //let [a,c] = [1,2];

  //return()안에는 병렬로 태그2개 이상 기입금지
  return ( //html 짜는 공간
    <div className="App">
      <div className = "black-nav">
        <h4 style = {{color:'red', fontSize: '16px'}}>블로그임!</h4>
        <div className = "list">
        <h4>글제목</h4> 
        <p>2월 17일 발행</p> 
        </div>
      </div>
      <h4>{ 글제목 }</h4>
    </div>
  );
}

export default App;

//Lint끄는 기능:Warning메세지 없애는 부분
/* eslint-disable */


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
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉,따봉변경] = useState(0);
  
  function 함수(){//긴 코드를 한 단어로 묶어주는 문법
    console.log(1);
  }
  
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
        <h4 style = {{color:'red', fontSize: '16px'}}>ReactBlog</h4>
      </div>
      {/* button 클릭 시 여자 코트 추천으로 바뀌도록
       확장성을 위해 일부만 바꿔서 state변경함수에 넣어도 될듯
      참고)array/object 다룰 때 원본은 보존하는게 좋음 
      [state변겨함수 특징]
      기존state === 신규state의 경우 변경 안해줌
      [array/object특징]
      array/object담은 변수엔 화살표만 저장됨: 가상의 공간에 저장됨.
      변수1&변수2화살표가 같으면 변수1 == 변수2 비교해도 true나옴
      */}
      <button onClick = { ()=>{
        //state가 array/object면 독립적 카피본을 만들어서 수정해야함
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        console.log(copy == 글제목);
        글제목변경(copy);//여기에 넣은 걸로 기존 state를 갈아치워준다.
      }} >글수정</button>
      {/* onClick={}안엔 함수이름을 넣어야함 
      함수 만드는 문법 바로 넣어도 상관없음 ex) {()=> { }} 
      state변경하는법
      state변경함수(새로운state)*/}
      <div className = "list">
        <h4>{ 글제목 [0] } <span onClick={()=>{따봉변경(따봉+1) } }>👍</span> {따봉} </h4> 
        <p>2월 17일 발행</p> 
      </div>
      <div className = "list">
        <h4>{글제목[1]}</h4> 
        <p>2월 17일 발행</p> 
      </div>
      <div className = "list">
        <h4>{글제목[2]}</h4> 
        <p>2월 17일 발행</p> 
      </div>
    </div>
  );
}

export default App;

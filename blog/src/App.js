/*eslint-disable*/ 

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '다모토리']); 
  let [날짜, 날짜변경] = useState(['2022-12-20', '2021-05-03', '2020-01-01']); 



  
  let posts2 = {color : 'white', fontSize : '30px' };
  let posts = '강남 고기 맛집'
  let [따봉, 따봉변경] = useState(0);
 


  return (
    <div className="App">
      <div className="black-nav">
        <div style={ posts2 }>개발 Blog</div>
      </div>
      <button onClick={ () => { } }>버튼</button>
      <div className='list'>
        <h3>{ 글제목[0] } <span onClick={ ()=> { 따봉변경(따봉+1)} }>👍</span> {따봉} </h3>
        <p>{날짜[0]}</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{ 글제목[1] }</h3>
        <p>{날짜[1]}</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{ 글제목[2] }</h3>
        <p>{날짜[2]}</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;

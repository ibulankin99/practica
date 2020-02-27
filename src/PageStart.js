import React from 'react';
import './App.css';
import Image from './mainPage.jpg';

export class PageStart extends React.Component {
  render() {
  return(
    <div>
      <img src={Image} className="mainPicture">
      </img>
      <button className="startBtn" onClick={()=>this.props.goNewPage(2)}>Начать</button>

    </div>
  ) 
  }

}


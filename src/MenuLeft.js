import React from 'react';
import './App.css';


export class MenuLeft extends React.Component {
  render() {
  return(
    <div className="contener">
      <div className="menu">
          <div className={`menuItem ${this.props.page===2?"active-menuItem":""}`} >Эпоха Петра I </div>
          <div className={`menuItem ${this.props.page===3?"active-menuItem":""}`}>Эпоха Екатерины II</div>
          <div className={`menuItem ${this.props.page===4?"active-menuItem":""}`}>Революция 1917</div>
          <div className={`menuItem ${this.props.page===5?"active-menuItem":""}`}>Современная Россия</div>
        </div>
    </div>
  ) 
  }
}


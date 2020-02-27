import React from 'react';
import './App.css';
import {PageStart} from './PageStart';
import {Peter1} from './Peter1';
import {MenuLeft} from "./MenuLeft";
import {Ekaterina2} from "./Ekaterina2";
import {RussiaNow} from "./RussiaNow";
import {Revolution} from "./Revolution";
import {AboutSait} from "./AboutSait";
import {AboutAuthor} from "./AboutAuthor";
import {Help} from "./Help";


export class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { page: 1, };
    this.goNewPage = this.goNewPage.bind(this);
  }

  render() {
  return(
    <div >
      <div className="title">
        <AboutSait/>
        <AboutAuthor/>
        <Help/>
      </div>
      <div className="content">
     {this.state.page!==1 && <div className="menuLeft-conteiner">
       <MenuLeft 
      page={this.state.page}
      /></div>}
      {(()=>{
        switch (this.state.page){
          case 1:
            return <PageStart
            goNewPage={this.goNewPage}
            />;
          case 2:
              return <Peter1
              goNewPage={this.goNewPage}
              />;
          case 3:
                return <Ekaterina2
                goNewPage={this.goNewPage}
                />;
          case 4:
                  return <Revolution
                  goNewPage={this.goNewPage}
                  />;
                  case 5:
                    return <RussiaNow
                    goNewPage={this.goNewPage}
                    />;
          default:
            return null;
        }
      })()}
      </div>
    </div>
  ) 
  }

  goNewPage=(newPage)=>{
    this.setState({page:newPage})
  }
}


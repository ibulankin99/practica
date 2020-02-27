import Popover, { ArrowContainer } from 'react-tiny-popover';
import React from 'react';
import './App.css';


export class Help extends React.Component{
  constructor(props) {
    super(props);
    this.state = { isPopoverOpen: false, };
  }

  render() {    
  return(
    <div >
<Popover
    isOpen={this.state.isPopoverOpen}
    position={['bottom', 'right', 'left']}
    padding={10}
    onClickOutside={this.handlerOpenPopup}
    content={({ position, targetRect, popoverRect }) => (
        <ArrowContainer 
            position={position}
            targetRect={targetRect}
            popoverRect={popoverRect}
            arrowColor={'white'}
            arrowSize={10}
        >
            <div
               className="pop-up-style"
            >
               Сайт представлен в виде четырех важнейших эпох в истории России. Чтобы перейти на следующий уровень Вам предстоит ответить на вопрос, который находится внизу каждой эпохи. Если ответ верный, Вы переходите на следующий этап иначе всё начнется заново.
            </div>
        </ArrowContainer>
    )}
>
    <div className="top-btn" onClick={this.handlerOpenPopup}>
        Помощь
    </div>
</Popover>      
    </div>
  ) 
  }

  handlerOpenPopup=()=>{
    this.setState({isPopoverOpen:!this.state.isPopoverOpen})
  }
}




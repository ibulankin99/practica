import Popover, { ArrowContainer } from 'react-tiny-popover';
import React from 'react';
import './App.css';


export class AboutSait extends React.Component{
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
               Сайт разработан и предназначен для обучения школьников истории в игровой форме.
            </div>
        </ArrowContainer>
    )}
>
    <div className="top-btn" onClick={this.handlerOpenPopup}>
        О сайте
    </div>
</Popover>      
    </div>
  ) 
  }

  handlerOpenPopup=()=>{
    this.setState({isPopoverOpen:!this.state.isPopoverOpen})
  }
}




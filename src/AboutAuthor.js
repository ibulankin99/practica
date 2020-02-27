import Popover, { ArrowContainer } from 'react-tiny-popover';
import React from 'react';
import './App.css';


export class AboutAuthor extends React.Component{
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
               Студент ИТА ЮФУ
               Буланкин И.А. КТбо3-2
            </div>
        </ArrowContainer>
    )}
>
    <div className="top-btn" onClick={this.handlerOpenPopup}>
        Об авторе
    </div>
</Popover>      
    </div>
  ) 
  }

  handlerOpenPopup=()=>{
    this.setState({isPopoverOpen:!this.state.isPopoverOpen})
  }
}




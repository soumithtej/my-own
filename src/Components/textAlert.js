import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class textAlert extends React.Component
{
    constructor()
    {
        super();
        this.state={
            textInput:'',
            alertModalIsOpen:false
        }
    }

    handleText=(event)=>
    {
        const textInput=event.target.value;
        this.setState({textInput:textInput});
    }

    handleClick=()=>
    {
        this.setState({alertModalIsOpen:true});
    }

    handleModal=()=>
    {
        this.setState({alertModalIsOpen:false});
        this.setState({textInput:''});
    }

    render()
    {
        const {textInput,alertModalIsOpen}=this.state;
        return(
            <div style={{textAlign:"center", marginTop:"50px"}}>
                <label>Enter some text</label>
                <input type="text" value={textInput} onChange={this.handleText} style={{marginLeft:"20px"}}/>
                <button className="btn btn-primary" onClick={()=>this.handleClick(textInput)} style={{marginLeft:"20px"}}>Click me</button>
                <Modal isOpen={alertModalIsOpen} style={customStyles} >
                    <div>Entered text = {textInput} </div>
                    <button className="btn btn-primary" onClick={this.handleModal}>Close</button>
                </Modal>
            </div>
        )
    }
}

export default textAlert;
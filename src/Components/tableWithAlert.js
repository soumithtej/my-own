import React from 'react';
import Modal from 'react-modal';
import'../Styles/switchButton.css';

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

class tableWithAlert extends React.Component
{
    constructor()
    {
        super();
        this.state={
            textInput:'',
            alertModalIsOpen:false,
            company:'',
            isSwitchON:0
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
        this.setState({isModalClosed:true});
    }

    handleDropdown=(event)=>
    {
        const company=event.target.value;
        this.setState({company:company});
    }

    handleCheckbox=()=>
    {
        const {isSwitchON}=this.state;
        if(isSwitchON)
        {
            this.setState({isSwitchON:0});
        }
        else
        {
            this.setState({isSwitchON:1});
        }
    }

    render()
    {
        const {textInput,alertModalIsOpen,company,isSwitchON,isModalClosed}=this.state;
        return(
            <div style={{textAlign:"center", marginTop:"50px"}}>
                <label>Enter some text</label>
                <input type="text" value={textInput} onChange={this.handleText} style={{marginLeft:"20px"}}/>
                <select onChange={this.handleDropdown} style={{marginLeft:"20px"}}>
                    <option>Select</option>
                    <option value='TechnoBrain'>Technobrain</option>
                    <option value='Deloitte'>Deloitte</option>
                    <option value='TCS'>TCS</option>
                    <option value='Capgemini'>Capgemini</option>
                    <option value='Wipro'>Wipro</option>
                    <option value='Tech Mahindra'>Tech Mahindra</option>
                </select>
                
                <label class="switch">
                    <input type="checkbox" onChange={this.handleCheckbox} />
                    <span class="slider round"></span>
                </label>

                <div>
                    <button className="btn btn-primary" onClick={()=>this.handleClick(textInput)} style={{marginLeft:"20px",textAlign:"center"}}>Click me</button>
                </div>

                <Modal isOpen={alertModalIsOpen} style={customStyles} >
                    <div>Entered text = {textInput} </div>
                    <div>Company = {company} </div>
                    <div>Switch button = {isSwitchON} </div>
                    <button className="btn btn-primary" onClick={this.handleModal}>Close</button>
                </Modal>
                {isModalClosed ? 
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col" className="col-sm-4" style={{marginLeft:"20px",textAlign:"center"}}>Name</th>
                        <th scope="col" className="col-sm-4" style={{marginLeft:"20px",textAlign:"center"}}>Company</th>
                        <th scope="col" className="col-sm-4" style={{marginLeft:"20px",textAlign:"center"}}>Switch button : 0 or 1</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="col-sm-4">{textInput}</td>
                        <td className="col-sm-4">{company}</td>
                        <td className="col-sm-4">{isSwitchON}</td>
                    </tr>
                    </tbody>
                </table> : null}
            </div>
        )
    }
}

export default tableWithAlert;
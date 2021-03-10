import React from 'react';
import '../Styles/calculator2.css';

class calculator2 extends React.Component
{
    constructor()
    {
        super();
        this.state={
              result:'',
              count:0,
              result2:'',
              isPercentAtLast:false
        }
    }

    handleNum1=()=>
    {
        const  {result,count,result2}=this.state;
        if(count==1)
        {
            this.setState({result:'1'});
            this.setState({result2:'1'});
            this.setState({count:0});
        }
        else
        {
            this.setState({result:result+'1'});
            this.setState({result2:result2+'1'});
        }
    }
    handleNum2=()=>
    {   
        const   {result,count,result2}=this.state;
        if(count==1)
        {
            this.setState({result:'2'});
            this.setState({result2:'2'});
            this.setState({count:0});
        }
        else
        {
            this.setState({result:result+'2'});
            this.setState({result2:result2+'2'});
        }
    }
    handleNum3=()=>
    {   
        const   {result,count,result2}=this.state;
        if(count==1)
        {
            this.setState({result:'3'});
            this.setState({result2:'3'});
            this.setState({count:0});
        }
        else
        {
            this.setState({result:result+'3'});
            this.setState({result2:result2+'3'});
        }
    }

    handleNum4=()=>
    {
        const   {result,count,result2}=this.state;
        if(count==1)
        {
            this.setState({result:'4'});
            this.setState({result2:'4'});
            this.setState({count:0});
        }
        else
        {
            this.setState({result:result+'4'});
            this.setState({result2:result2+'4'});
        }
    }
    handleNum5=()=>
    {   
        const   {result,count,result2}=this.state;
        if(count==1)
        {
            this.setState({result:'5'});
            this.setState({result2:'5'});
            this.setState({count:0});
        }
        else
        {
            this.setState({result:result+'5'});
            this.setState({result2:result2+'5'});
        }
    }
    handleNum6=()=>
    {   
        const   {result,count,result2}=this.state;
        if(count==1)
        {
            this.setState({result:'6'});
            this.setState({result2:'6'});
            this.setState({count:0});
        }
        else
        {
            this.setState({result:result+'6'});
            this.setState({result2:result2+'6'});
        }
    }

    handleNum7=()=>
    {
        const   {result,count,result2}=this.state;
        if(count==1)
        {
            this.setState({result:'7'});
            this.setState({result2:'7'});
            this.setState({count:0});
        }
        else
        {
            this.setState({result:result+'7'});
            this.setState({result2:result2+'7'});
        }
    }
    handleNum8=()=>
    {   
        const   {result,count,result2}=this.state;
        if(count==1)
        {
            this.setState({result:'8'});
            this.setState({result2:'8'});
            this.setState({count:0});
        }
        else
        {
            this.setState({result:result+'8'});
            this.setState({result2:result2+'8'});
        }
    }
    handleNum9=()=>
    {   
        const   {result,count,result2}=this.state;
        if(count==1)
        {
            this.setState({result:'9'});
            this.setState({result2:'9'});
            this.setState({count:0});
        }
        else
        {
            this.setState({result:result+'9'});
            this.setState({result2:result2+'9'});
        }
    }

    handleNum0=()=>
    {   
        const   {result,count,result2}=this.state;
        if(count==1)
        {
            this.setState({result:'0'});
            this.setState({result2:'0'});
            this.setState({count:0});
        }
        else
        {
            this.setState({result:result+'0'});
            this.setState({result2:result2+'0'});
        }
    }

    handleSum=()=>
    {
        const   {result,count,result2}=this.state;
        this.setState({result:result+'+'});
        this.setState({result2:result2+'+'});
        if(count==1)
        {
            this.setState({count:0});
        }
    }
    handleSub=()=>
    {
        const   {result,count,result2}=this.state;
        this.setState({result:result+'-'});
        this.setState({result2:result2+'-'});
        if(count==1)
        {
            this.setState({count:0});
        }
    }
    handleProd=()=>
    {
        const   {result,count,result2}=this.state;
        this.setState({result:result+'*'});
        this.setState({result2:result2+'*'});
        if(count==1)
        {
            this.setState({count:0});
        }
    }
    handleDiv=()=>
    {
        const   {result,count,result2}=this.state;
        this.setState({result:result+'/'});
        this.setState({result2:result2+'/'});
        if(count==1)
        {
            this.setState({count:0});
        }
    }
    handlePercent=()=>
    {
        const   {result,count,result2,isPercentAtLast}=this.state;
        if(isPercentAtLast)
        {
            this.setState({result:result+'*0.01'})
        }
        else
        {
            this.setState({result:result+'*0.01*'});
        }
        this.setState({result2:result2+'%'});
        if(count==1)
        {
            this.setState({count:0});
        }
    }

    handleDecimal=()=>
    {
        const   {result,count,result2}=this.state;
        if(count==1)
        {
            this.setState({result:'.'});
            this.setState({result2:'.'});
            this.setState({count:0});
        }
        else
        {
            this.setState({result:result+'.'});
            this.setState({result2:result2+'.'});
        }
    }
    

    handleEqualTo=()=>
    {
        const  {result,count,result2}=this.state;
        let output=0;
        if (result2[result2.length-1]=='%')
        {
            this.setState({isPercentAtLast:true});
            this.setState({result:result+'*0.01'})
        }
        
        if (result[result.length-1] == '+' || result[result.length-1] == '-' || result[result.length-1] == '*' || result[result.length-1] == '/')
        {
           output='invalid expression';

        }
        else if(result.includes('++') || result.includes('+-') || result.includes('+*') || result.includes('+/') ||
                result.includes('-+') || result.includes('--') || result.includes('-*') || result.includes('-/') ||
                result.includes('*+') || result.includes('*-') || result.includes('**') || result.includes('*/') ||
                result.includes('/+') || result.includes('/-') || result.includes('/*') || result.includes('//') ||
                result.includes('invalid') )
        {
            output='invalid expression';
        }
        else
        {
            output=eval(result);
        }
        this.setState({result:output});
        this.setState({result2:output});
        if (result2 === 'invalid expression')
        {
            this.setState({count:0});
        }
        else
        {
            this.setState({count:1});
        }
    }

    handleClear=()=>
    {
        const {result2}=this.state;
        this.setState({ result:''});
        this.setState({result2:''});
        if (result2 === 'invalid expression')
        {
            this.setState({count:0});
        }
        else
        {
            this.setState({count:1});
        }
    }
    handleCE=()=>
    {
        const  {result,count,result2}=this.state;
        if (count!=1)
        {
            let display=result2.slice(0,-1);
            this.setState({result:display});
            this.setState({result2:display});
        }
        else
        {
            this.setState({result:result});
            this.setState({result2:result2});
        }
        
    }

    render()
    {
        const { result2}=this.state;
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-8">
                            <div className="display"> {result2} </div>
                            <div className="box"></div>
                            <div className="overall">
                                <div>
                                    <span className="row1Btn"> <button className="btn1" onClick={this.handleNum1}>1</button> </span>
                                    <span className="row1Btn"> <button className="btn1" onClick={this.handleNum2}>2</button> </span>
                                    <span className="row1Btn"> <button className="btn1" onClick={this.handleNum3}>3</button> </span>
                                </div>
                                <div>
                                    <span className="row1Btn"> <button className="btn1 " onClick={this.handleNum4}>4</button> </span> 
                                    <span className="row1Btn"> <button className="btn1 " onClick={this.handleNum5}>5</button> </span>
                                    <span className="row1Btn"> <button className=" btn1" onClick={this.handleNum6}>6</button> </span>
                                </div>
                                <div>
                                    <span className="row1Btn"> <button className="btn1 " onClick={this.handleNum7}>7</button> </span>
                                    <span className="row1Btn"> <button className="btn1 " onClick={this.handleNum8}>8</button> </span>
                                    <span className="row1Btn"> <button className="btn1 " onClick={this.handleNum9}>9</button> </span>
                                </div>
                                <div>
                                    <span className="row1Btn"> <button className="btn1 " onClick={this.handleNum0}>0</button> </span>
                                    <span className="row1Btn"> <button id="+" className="btn1 " onClick={this.handleSum}>+</button> </span>
                                    <span className="row1Btn"> <button id="-" className="btn1" style={{padding:"10px 21px",marginLeft:"-2px"}} onClick={this.handleSub}>-</button> </span>
                                </div>
                                <div>
                                    <span className="row1Btn"> <button id="*" className="btn1 " onClick={this.handleProd}>*</button> </span>
                                    <span className="row1Btn"> <button id="/" className="btn1 " onClick={this.handleDiv}>/</button> </span>
                                    <span className="row1Btn"> <button className="btn1 " onClick={this.handlePercent} style={{paddingLeft:"17px",marginLeft:"3px"}}>%</button> </span>
                                </div>
                                <div>
                                    <span className="row1Btn"> <button className="btn1 " onClick={this.handleDecimal}>.</button> </span>
                                    <span className="row1Btn"> <button className="btn1 " onClick={this.handleEqualTo}>=</button> </span>
                                    <span className="row1Btn"> <button className="btn1 " onClick={this.handleClear}>C</button> </span>
                                </div>
                                <div>
                                    <button className="CE-btn" onClick={this.handleCE}>CE</button>
                                </div>
                            </div> {/*overall*/}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4"></div>    
                        <div className="col-md-4"></div>
                    </div>
                </div>        
            </div>
        )
    }
}

export default calculator2;
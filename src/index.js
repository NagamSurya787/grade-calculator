import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={assmarks:0,mttmarks:0,mptmarks:0,status:'',grade:'',name1:''}
    }
    calculate=(event)=>{
        
        var x=this.state.assmarks;
        var y=this.state.mttmarks;
        var z=this.state.mptmarks;
        var name=this.state.name1;
        this.setState({name1:name});
         var a1=parseFloat(((x/100)*100))*0.15;
         var b1=parseFloat(((y/64)*100))*0.15;
         var c1=parseFloat(((z/70)*100))*0.70;
         var total=a1+b1+c1;
         
         if(total<50){
             this.setState({grade:'0',status:'Fail'});
         }
         else if(total>49 && total<60)
         {
            this.setState({grade:'1',status:'Fail'});
         }
         else if(total>59 && total<70)
         {
            this.setState({grade:'2',status:'Pass'});
         }
         else if(total>69 && total<80)
         {
            this.setState({grade:'3',status:'Pass'});
         }
         else if(total>79 && total<90)
         {
            this.setState({grade:'4',status:'Pass'});
         }
          else
          {
            this.setState({grade:'5',status:'Pass'});
          }
          event.preventDefault();
    
    }
    render(){
        return (
              <div>
                  <form onSubmit={this.calculate} >
                     
                  <div>
                      <lable>Enter trainee name : </lable>
                      <input type='text' id="name1" onChange={(e)=>{this.setState({name1:e.target.value})}} ></input><br/>
                      </div>
                     
                      <div>
                      <lable>Enter Assignment Marks(max-100) : </lable>
                      <input type='number'  min='0' max='100' onChange={(e)=>{this.setState({assmarks:e.target.value})}}></input><br/>
                      </div>
                      <div >
                      <lable>Enter MTT Marks(max-64) : </lable>
                      <input type='number'  min='0' max='64' onChange={(e)=>{this.setState({mttmarks:e.target.value})}}></input><br/>
                      </div>
                      <div >
                      <lable>Enter MPT Marks(max-70) : </lable>
                      <input type='number'   min='0' max='70' onChange={(e)=>{this.setState({mptmarks:e.target.value})}}></input><br/>
                      </div>
                      <button type='submit'>Calculate</button>
                  </form>
        <h2 > {this.state.name1} grade is  {this.state.grade} and status is {this.state.status} </h2>
        
              </div>
        );

    }
}
ReactDOM.render(<App/>,document.querySelector("#root"));





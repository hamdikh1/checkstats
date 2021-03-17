import './App.css';
import React, { Component } from 'react'
 
 export default class App extends Component {
 state = {
  fullName : "Hamdi",
  bio : "student" ,
  profession: "ingenieur"
 // Profile : "<img  src={require('./image/goodpic.jpg').default} ></img> "

 }
 componentWillMount() {
 alert (`TRUE`)
 }

 render() {
   return (
  <div>
  <p>Hello I m  : {this.state.fullName}</p>
  <p>and I m :{this.state.bio}</p>
  <p>my job  is :{this.state.profession}</p>
  <button onClick={()=>this.setState({fullName: " ahmed" , bio:"ing", profession :"doctor"})}>change</button>
  </div>
   )
 }
} 


class LifeCycle extends React.Component {
   constructor(props) {
      super(props)
      this.state ={
         name : 'vishaws'
      }
      console.log('LifeCycle constructor ')
   }
  componentWillMount() {
      console.log('Component will mount!')
   }
  componentDidMount() {
      console.log('Component did mount!')
      
   }


export default class App extends Component {
  state = {
   time : 0
  }
  tichhandler=()=> {
  this.setState({time: this.state.time + 1})
 }

 componentDidMount(){
   var timer =setInterval(this.tichhandler , 1000 )
   this.setState({time : timer})
 }
  render() {
    const displaytime =()=>{
      if(this.state.time, 60){
        return this.state.time + `seconds`
      }
      const SS = this.state.time % 60 ;
      const MM = ((this.state.time / 60) % 60).toFixed(0)
      const HH = (this.state.time/(60*60 )).toFixed(0)
      return `${HH} H: ${MM} m: ${SS} s: `
    }
    return (
   <div>
     <p>{displaytime()}</p>
   </div>
    )
  }
 } 







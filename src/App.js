import logo from './logo.svg';
import Button from './components/Button';
import {SayHello} from './components/SayHello';
import SayHelloClass from './components/SayHelloClass';
import SayHelloFn from './components/SayHelloFn';
import CounterCls from './components/CounterCls';
import CounterFn from './components/CounterFn';
import { useState } from 'react';
function App() {
  const [show , setShow] = useState(false)
  function Alert(message) {
    alert(message)
  }

  function toggleShow (){
    setShow(!show)
  }
  const counters=  [
    {
      start:1 , 
      step : 2 
    },
    {
      start:2 , 
      step : 3 
    },
    {
      start:4 , 
      step : 1 
    },
    {
      start:1 , 
      step : 2 
    },
    {
      start:10 , 
      step : 5 
    },
  ]
  return (
    <div>
      {/* <CounterFn  start={2} step={10}/> */}
      {
        counters.map((x)=><CounterFn start={x.start} step={x.step}></CounterFn> )
      }
    </div>
  )
  // if (show) {
    // return (
    //   <div>
    //     <button onClick={toggleShow}>{show ? "Hide" : "Show"}</button>
    //     {
    //       show && <CounterFn fn={toggleShow} />
    //     }
      
    //   </div>
    // )
  // }else {
  //   return <div>
  //     <button onClick={toggleShow}>Show</button>
      
  //     No Counter Available</div>
  // }
  
  // return (
  //   <div className="App">
  //     {/* <SayHelloClass name="mohamed"></SayHelloClass>
  //     <SayHelloClass name="saeed"></SayHelloClass> */}
  //     {/* <SayHelloClass name="Ahmed"></SayHelloClass> */}
  //     {/* <SayHello></SayHello>
  //    <Button></Button> */}
  //    {/* <SayHelloFn name="sameh" ></SayHelloFn>
  //    <SayHelloFn name="ali" ></SayHelloFn>
  //    <SayHelloFn name="mohamed" ></SayHelloFn>
  //    <SayHelloFn name="ahmed" ></SayHelloFn>
  //   */}
  //   <CounterFn fn={Alert} start={10} step={4}/>
  //   {/* <CounterFn start={8} step={3}/>
  //   <CounterFn start={5} step={2}/>
  //   <CounterFn start={4} step={-1}/> */}
  //   {/* <CounterFn /> */}
  //   </div>
  // );
}

export default App;

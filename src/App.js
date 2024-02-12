import logo from './logo.svg';
// import Button from './components/Button';
import SayHello from './components/SayHello';
import SayHelloClass from './components/SayHelloClass';
import SayHelloFn from './components/SayHelloFn';
import CounterCls from './components/CounterCls';
import CounterFn from './components/CounterFn';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import MyForm from './components/MyForm';
import ComponentA from './components/ComponentA';
function App() {
  
  const [show , setShow] = useState(true)
  function Alert(message) {
    alert(message)
  }

  function toggleShow (){
    setShow(!show)
  }
  function delete_counter(id) {
    const new_counters = countersState.filter((counter) => counter.id !== id)
    // console.log(new_counters)
    // const new_c = [...new_counters]
    setCountersState(new_counters)

  }
  const counters=  [
    {
      id:1 , 
      start:1 , 
      step : 2 
    },
    {
      id:2 ,
      start:2 , 
      step : 3 
    },
    {
      id:3 , 
      start:4 , 
      step : 1 
    },
    {
      id:4 , 
      start:1 , 
      step : 2 
    },
    {
      id:5 ,
      start:10 , 
      step : 5 
    },
  ]
  const [countersState , setCountersState] = useState(counters)
  // delete_counter(2)
  return (
    <div>
   { show &&  <ComponentA start={9} name="hamada"></ComponentA> }
   <button onClick={toggleShow}>Toggle Show</button>
      {/* <MyForm></MyForm> */}
      {/* <Button variant='secondary'>Helel</Button> */}
      
      {/* <CounterFn  start={2} step={10}/> */}
      {/* <button className='button'>Hello World</button>
      {
        countersState.map((x)=><div key={x.id}>
          <CounterFn fn={delete_counter} ids={x.id} start={x.start} step={x.step}></CounterFn>
          </div>
           )
      } */}
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

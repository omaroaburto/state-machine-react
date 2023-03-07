import React from 'react';
import { useMachine } from '@xstate/react';
import { Nav } from '../Components/Nav';
import { StepsLayout } from './StepsLayout';
import bookingMachine from '../Machines/bookingMachine';
import './BaseLayout.css';
import{ListPassengers} from '../Components/ListPassengers.jsx';

export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine);
  console.log("El state");
  console.log(state);
  console.log("fin state")
  console.log('nuestra maquina', state.value);
  console.log( state.context.passengers ) 
  return (
    <div className='BaseLayout'>
      <Nav state={state} send={send} />
      <StepsLayout state={state} send={send}/>
      {(!!state.context.passengers.length) && <ListPassengers passengers={state.context.passengers}/> }
    </div>
  );
}
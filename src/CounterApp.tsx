import PropTypes from 'prop-types';
import { useState } from 'react';


const CounterApp = ({ value }: { value: number }) => {
    const [counter, setCounter] = useState( value )

    const handleAdd = () => {
        const suma = counter + 1;
        setCounter( suma )
    }
    
    const handSubstract = () =>   setCounter( counter - 1 )

    const handleReset = () => {
        setCounter( value )
    } 

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        {/* si no mando un EVENTO solo nombro la funcion */}
        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handSubstract }> -1 </button>
        <button onClick={ handleReset }> Reset </button>
    </>
  )
}

CounterApp.prototype = {
    value: PropTypes.number.isRequired
}

export { CounterApp }
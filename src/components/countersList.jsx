import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: 'Ненужная вещь' }, 
        { id: 1, value: 2, name: 'Ложка' }, 
        { id: 2, value: 2, name: 'Вилка' }, 
        { id: 3, value: 4, name: 'Тарелка' },
        { id: 4, value: 4, name: 'Набор' },
    ]

    const [counters, setCounters] = useState(initialState)
    
    const handleIncrement = (id) => {
        const indexTC = counters.findIndex(cnt => cnt.id === id)
        const countersNew = [...counters]
        countersNew[indexTC].value += 1
        setCounters(countersNew)
    } 
    const handleDecrement = (id) => {
        const indexTC = counters.findIndex(cnt => cnt.id === id)
        const countersNew = [...counters]
        countersNew[indexTC].value -= 1
        setCounters(countersNew)
    }
    const handleDelete = (id) => {
        const newCounters = counters.filter(c => c.id !== id)
        setCounters(newCounters)
    }
    const handleReset = () => {
        setCounters(initialState)
    }
    
    return (
        <>
            { counters.map((counter) => ( 
                <Counter key={counter.id} {...counter} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete} />
            )) }
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
        </>
    )
}

export default CountersList
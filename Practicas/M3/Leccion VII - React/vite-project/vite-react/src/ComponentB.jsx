const ComponentB = ({ counter, onIncrement }) => {
    return (
        <div>
            <p>Componente B - Counter: {counter}</p>
            <button onClick={onIncrement}>Incrementar counter</button>
        </div>
    )
}

export default ComponentB;
import './App.css'
import CardList from './CardList';
import styles from './App.module.css'
import { CustomButton } from './CustomButton';

function App() {
    const counter = 0;

    return (
        <>
            <h1 className={styles.title}>Mi primera App</h1>
            <h2 className={styles.subtitle}>Contador: {counter}</h2>
            <CustomButton>Contador de clics</CustomButton>
            <CardList/>
        </>
    )
}

export default App

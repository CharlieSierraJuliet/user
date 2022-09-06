import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.css'
const ErrorModal=props=>{

    const handleOk=()=>{
        props.onOk()
    }

    return(
        <div>
        <div className={classes.backdrop} onClick={handleOk}/>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>
                    {props.title}
                </h2>
            </header>
            <div className={classes.content}>
                <p>
                    {props.message}
                </p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={handleOk}>OK</Button>
            </footer>
        </Card>
        </div>
    )


}

export default ErrorModal;
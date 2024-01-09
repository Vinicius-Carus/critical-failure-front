import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/input'
import styles from '../Form.module.css'

export default function FormLogin({login}) {

    function handleSubmit() {
        console.log("Ola")
    }

    return (
        <>
            <h1 className={styles.formTitle}>Login</h1>
            <form className={styles.form} action="">
                <Input type="email" nameInput="email" title="E-mail"/>
                <Input type="password" nameInput="password" title="Senha"/>
                <Button value="Entrar" onClickFunc={handleSubmit} type="submit"/>
            </form>
            <a onClick={() => login(false)}>Cadastre-se</a>
        </>
    )
}

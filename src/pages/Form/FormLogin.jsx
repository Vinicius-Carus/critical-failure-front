import Input from '../../components/Input/input'
import styles from './FormLogin.module.css'

export default function FormLogin() {
  return (
        <div className={styles.formDiv}>
            <h1 className={styles.formTitle}>Login</h1>
            <form className={styles.form} action="">
                <Input type="email" nameInput="email" title="E-mail"/>
                <Input type="password" nameInput="password" title="Senha"/>
                <input type="submit" value="Logar" className={styles.formButton}/>
            </form>
        </div>
    )
}

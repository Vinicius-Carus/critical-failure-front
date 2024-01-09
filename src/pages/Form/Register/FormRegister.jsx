import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/input'
import styles from '../Form.module.css'

export const FormRegister = ({login}) => {
  return (
    <>
        <h1 className={styles.formTitle}>Cadastrar</h1>
        <form className={styles.form} action="">
            <Input type="text" nameInput="nickname" title="Nome"/>
            <Input type="email" nameInput="email" title="E-mail"/>
            <Input type="password" nameInput="password" title="Senha"/>
            <Button value="Cadastrar" onClickFunc={() => console.log("oi")} type="submit"/>
        </form>
        <a onClick={() => login(true)}>Entrar</a>
    </>
  )
}

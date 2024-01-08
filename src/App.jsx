import styles from "./App.module.css"
import FormLogin from "./pages/Form/FormLogin"
import logo from '/abulele.png'

function App() {

  return (
    <>
      <main className={styles.main}>
        <div className={styles.divLogo}>
          <img className={styles.imgLogo} src={logo} alt="" />
        </div>
        <FormLogin/>
      </main>
    </>
  )
}

export default App

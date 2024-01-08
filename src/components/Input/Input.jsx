import styles from "./Input.module.css"

export default function Input({type, nameInput, title}) {

  console.log(type)
  return (
    <>
        <div className={styles.inputContainer}>
          <input type={type === "email" ? "text" : type} id={nameInput} required="required"/>
          <label htmlFor={nameInput} className={styles.label}>{title}</label>
          <div className={styles.underline}></div>
        </div>
    </>
  )
}

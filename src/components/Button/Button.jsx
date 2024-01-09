import styles from "./Button.module.css"

export default function Button({onClickFunc, value, type}) {
  return (
    <button className={styles.button} onClick={onClickFunc} type={type} >{value}</button>
  )
}


import React, { useState } from 'react'
import FormLogin from './Login/FormLogin'
import logo from '/abulele.png'
import styles from './Form.module.css'
import { FormRegister } from './Register/FormRegister'

export const Form = () => {

    const [login, setLogin] = useState(true)

    return (
        <>
            <div className={styles.divLogo}>
                <img className={styles.imgLogo} src={logo} alt="" />
            </div>
            <div className={styles.formDiv}>
                {login ? <FormLogin login={setLogin}/> : <FormRegister login={setLogin}/>}
            </div>
        </>
    )
}

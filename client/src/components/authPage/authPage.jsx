import React, { useEffect, useState } from 'react';
import { useHistory} from 'react-router-dom';
import "./authPage.scss";
const AuthPage = () => {
    const [data, setData] = useState({ login: "" });
    const [errors, setErrors] = useState({});
    const history = useHistory();
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, login: target.value }))
    };
    useEffect(() => {
        validate();
    }, [data])// eslint-disable-line react-hooks/exhaustive-deps
    const validate = () => {
        const errors = {}
        for (const fieldName in data) {
            if (data[fieldName].trim() === '') {
                errors[fieldName] = `поле должно быть заполнено`
            }
        }
        setErrors(errors)
        return Object.keys(errors).length === 0
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate();
        if (!isValid) return;
        history.push(`/messages/${data.login}`)
        console.log(data)
    };
    const isValid = Object.keys(errors).length === 0
    return (<div className='container'>
        <div className="login">
            <form onSubmit={handleSubmit} className="login__inner">
                <div className="login__inner-title">
                    Введите логин
                </div>
                <input type="text" name="login" className="login__inner-auth" onChange={handleChange} />
                {errors && <p className='error'>{errors.login}</p>}
                <button
                    className='button-auth'
                    type='submit'
                    onClick={handleSubmit}
                    disabled={!isValid}
                >Вход</button>
            </form>
        </div>

    </div>);
}

export default AuthPage;
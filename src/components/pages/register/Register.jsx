import React, { useState, useContext, useEffect } from "react";

import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { TimeContext } from '../../../contexts/time/TimeContext';
import { useNavigate } from 'react-router-dom'

import { Register, RegisterCard, LoginToCard, ButtonToLogin, RegisterInput, RegisterPassInput, RegisterTitle, RegisterButton, RegisterLabel, FormRegister } from './styles';

export default function RegisterPage() {

    const [image, setImage] = useState('');
    const [imageUrl, setImageUrl] = useState(null);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { loading, logged, registerNewTime } = useContext(TimeContext);
    const navigate = useNavigate()

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    async function register(e) {
        e.preventDefault();
        try {
            var response = await registerNewTime(email, values.password, nome, image, () => {
                navigate('/login', { replace: true });
            });
        } catch (error) {
            setErrorMessage(error)
        }
    }


    async function verifyAuth() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        if (logged) {
            navigate('/');
        }
    }

    useEffect(() => { verifyAuth() }, [])

    useEffect(() => {
        if (image) {
            setImageUrl(URL.createObjectURL(image));
        }
    }, [image]);

    return (
        <React.Fragment>
            <Register>
                <RegisterCard>
                    <RegisterTitle>
                        Fa??a o cadastro de seu Time
                    </RegisterTitle>
                    <FormRegister>
                        {
                            errorMessage && (<div className="alert alert-danger" role="alert">
                                {errorMessage}
                            </div>)
                        }
                        <RegisterLabel>Nome Time</RegisterLabel>
                        <RegisterInput
                            type="text"
                            name="time"
                            onChange={e => setNome(e.target.value)}
                            disabled={loading}
                        />
                        <RegisterLabel>E-mail</RegisterLabel>
                        <RegisterInput
                            type="text"
                            name="email"
                            onChange={e => setEmail(e.target.value)}
                            disabled={loading}
                        />
                        <RegisterLabel>Senha</RegisterLabel>
                        <div>
                            <RegisterPassInput
                                type={values.showPassword ? "text" : "password"}
                                onChange={handlePasswordChange("password")}
                                value={values.password}
                                disabled={loading}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                name="password"
                            />
                        </div>
                        <RegisterLabel>Logo</RegisterLabel>
                        <RegisterInput type={"file"} accept={".png, .jpg, .jpeg"} name={"logo"} onChange={(e) => { setImage(e.target.files[0]) }} />
                        {/* <img src={imageUrl} alt={image.name} width='150px'/><br /> */}
                        <RegisterButton onClick={register} disabled={loading}>Registrar</RegisterButton>
                    </FormRegister>
                </RegisterCard>
                <LoginToCard>
                    <h2 style={{ fontWeight: '800' }}>J?? tem seu time{<br />}cadastrado?</h2>
                    <ButtonToLogin to="/login">Login</ButtonToLogin>
                </LoginToCard>
            </Register>
        </React.Fragment>
    )
}
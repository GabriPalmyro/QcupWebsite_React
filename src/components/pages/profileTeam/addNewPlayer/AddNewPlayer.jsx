import React, { useState, useContext } from 'react'
import { TimeContext } from '../../../../contexts/time/TimeContext';
import { FormNewPlayer } from '../styles'
import { useNavigate } from 'react-router-dom'


function AddNewPlayer() {


    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [nickname, setNickname] = useState('');
    const [funcao, setFuncao] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { addNewPlayer, time } = useContext(TimeContext);
    const navigate = useNavigate()

    function handleChange(e) {
        let funcao = e.target;
        setFuncao(funcao)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        // try {
        addNewPlayer(email, nome, nickname, funcao, () => { navigate('/meu-time/' + time.id, { replace: true }) })
            .then((response) => {
                setErrorMessage(response)
            }).catch((error) => { console.log(error); setErrorMessage(error); limparDados()});
        // } catch (error) {
        // setErrorMessage(error)
        // }
    }

    function limparDados() {
        setEmail('')
        setFuncao('')
        setNickname('')
        setNome('')
    }

    return (
        <FormNewPlayer>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="inputEmail4" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputName4" className="form-label">Nome Completo</label>
                    <input type="text" name="name" className="form-control" id="inputName4" onChange={e => setNome(e.target.value)} />
                </div>
                <div className="col-md-8">
                    <label htmlFor="inputNick" className="form-label">Nickname</label>
                    <input type="text" name="nickname" className="form-control" id="inputNick" onChange={e => setNickname(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">Função</label>
                    <select id="inputState" className="form-select" value={funcao} onChange={(e) => setFuncao(e.target.value)} >
                        <option value="">Escolha uma opção</option>
                        <option value="suporte">Suporte</option>
                        <option value="suporte 2">Suporte 2</option>
                        <option value="intermediário">Intermediário</option>
                        <option value="entry fragger">Entry Fragger</option>
                        <option value="mid">Mid</option>
                        <option value="sup">Sup</option>
                        <option value="bottom">Bottom</option>
                    </select>
                </div>
                {/* <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            É estudante do IF?
                        </label>
                    </div>
                </div> */}
                <div className="col-12">
                    <button type="submit" className="btn btn-danger">Cadastrar Jogador</button>
                </div>
            </form>
            <br />
            {
                errorMessage && (<div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>)
            }
        </FormNewPlayer>
    )
}

export default AddNewPlayer
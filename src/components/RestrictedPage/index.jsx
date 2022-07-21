import { useState } from 'react';
import './styles.css';

const RestrictedPage = ({ isLoggedIn, user, login, logout }) => {

    let [popupDisplay, setPopupDisplay] = useState('none');

    function makeLogin(){
        login();
        setPopupDisplay('flex');
        setTimeout(() => {
            setPopupDisplay('none');
        }, 2000)
    }

    return (
        <>
            <div id='container'>
                {
                    isLoggedIn ?
                        (
                            <>
                                <h2 className='page-info'>Bem vindo {user}!</h2>
                                <button className='page-button text-red' onClick={logout}>SAIR</button>
                            </>

                        )
                        :
                        (
                            <>
                                <h2 className='page-info'>Você não pode acessar essa página</h2>
                                <button className='page-button text-green' onClick={makeLogin}>ENTRAR</button>
                            </>
                        )
                }

            </div>
            <div className='login-notification__container' style={{display: popupDisplay}}>
                <div className='login-notification__card'>
                    <h4 className='text-green'>Login efetuado com sucesso!</h4>
                </div>
            </div>
        </>

    );
}

export default RestrictedPage;
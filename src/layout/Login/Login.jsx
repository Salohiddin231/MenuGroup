import AdminLogo from '../../assets/icons/AdminLogo.svg'

export default function LogIn() {
    return (
        <div className="loginContainer">
            <div className="loginBg"></div>
            <div className="loginCenter">
                <form className="login">
                    <img src={AdminLogo} alt="" />
                    <h1>Добро пожаловать</h1>
                    <div className="loginwrap1">
                        <label htmlFor="phone">Введите номер телефона</label>
                        <input
                            type="number"
                            placeholder="+ 996 "
                            style={{
                                MozAppearance: 'textfield',
                                WebkitAppearance: 'none',
                                appearance: 'none'
                            }}
                        />
                    </div>
                    <div className="loginwrap2">
                        <label htmlFor="password">Пароль</label>
                        <input
                            type="password"
                            placeholder="Введите пароль"
                        />
                    </div>
                    <button className="loginBtn">Войти</button>
                </form>
            </div>
        </div>
    )
}
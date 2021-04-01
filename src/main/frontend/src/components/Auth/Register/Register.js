const Register = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3 vh-75">
                    <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                        <div className="p-3 shadow w-100">
                            <form method="POST" action="#" className="w-100">
                                <h2 className="text-center">Registration</h2>
                                <div className="form-group">
                                    <label htmlFor="username">Enter login: </label>
                                    <input id="username" type="text" name="username" placeholder="Username" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Enter password: </label>
                                    <input id="password" type="password" name="password" placeholder="Password" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password2">Confirm password: </label>
                                    <input id="password2" type="password" name="passwordConfirm" className="form-control" placeholder="Repeat password"/>
                                </div>
                                <button type="submit" className="btn btn-warning">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register

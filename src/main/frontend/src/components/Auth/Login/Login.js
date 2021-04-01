const Login = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3 vh-75">
                    <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                        <div className="p-3 shadow w-100">
                            <h2 className="text-center">Login</h2>
                            {/* if param.error */}
                            <div>
                                Invalid username or password.
                            </div>
                            {/* if param.logout */}
                            <div>
                                You have been logged out.
                            </div>
                            <form action="#" method="post">
                                <div className="form-group">
                                    <label htmlFor="login">Enter login: </label>
                                    <input type="text" name="username" className="form-control" id="login"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password"> Password: </label>
                                    <input type="password" name="password" className="form-control" id="password"/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-warning">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

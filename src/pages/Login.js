import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import API from '../axios/axios'
function Login() {
    const route = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})
    useEffect(() => {
        if (localStorage.getItem("token"))
            route.push("/")
    })
    const handleLogin = (e) => {
        e.preventDefault()
        const data = {
            email: email,
            password: password
        }
        API.login(data)
            .then(res => {
                setErrors({ message: 'Logged In Successfully.', type: 'success' })
                localStorage.setItem("token", JSON.stringify(res.data))
                return route.push("/")
            }
            )
            .catch(e => {
                if (e.response.status === 422) {
                    setErrors({ message: e.response.data.errors[0].message, type: 'danger' })
                }
                else {
                    setErrors({ message: e.response.data.message, type: 'danger' })
                }
            }
            )
    }
    return (
        <div className="h-100" style={{ marginTop: 120 }}>
            <div className="authincation h-100">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-md-6">
                            <div className="authincation-content">
                                <div className="row no-gutters">
                                    <div className="col-xl-12">
                                        <div className="auth-form">
                                            <h4 className="text-center mb-4">Sign in your account</h4>
                                            <form>
                                                <div className="form-group">
                                                    <label><strong>Email</strong></label>
                                                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <label><strong>Password</strong></label>
                                                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                                <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                                    <div className="form-group">
                                                        <a href="page-forgot-password.html">Forgot Password?</a>
                                                    </div>
                                                </div>
                                                {errors ? <div className={`alert alert-${errors.type} solid`}><strong>{errors.message}</strong></div> : ''}
                                                <div className="text-center">
                                                    <button type="submit" onClick={(e) => handleLogin(e)} className="btn btn-primary btn-block">Sign me in</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <script src="vendor/global/global.min.js"></script>
            <script src="vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
            <script src="js/custom.min.js"></script>
            <script src="js/dlabnav-init.js"></script>

        </div>
    )
}

export default Login

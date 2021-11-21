import React, { Component } from 'react'
import PageBanner from '../PageBanner';
import AdminPanel from './Editor/AdminPanel';
import {baseUrl} from '../../../App';
class Login extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        this.state = {
            username: undefined,
            password: undefined,
            signUp: {
                success: undefined,
                message: undefined
            },
            logged: false,
           
            user:null,
            error: undefined
        }
    }
    
    handleSubmit(e) {
      
        e.preventDefault();
        this.setState({error: null})
        let dataToSend = {
            Username: this.state.email,
            Password: this.state.password
        };
        //console.log(JSON.stringify(dataToSend))
        console.log(baseUrl)
        let url = `${baseUrl}auth/login`;

        fetch(url, {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(responseJson => {
                    console.log(responseJson);
                    if(responseJson.token){
                        localStorage.setItem('x-access-token', responseJson.token);
                        this.setState({
                            logged: true,
                            error: undefined,
                            user: responseJson.user
                        })
                    }else{
                        this.setState({ error: responseJson })
                        console.log(this.state.error.msg)
                    }
                    
                   
                    
                  
            }).catch(err => {
                this.setState({ error: err })
                console.log(err)
            });

        e.target.reset()
    }
    handleLogout = () => {
        this.setState({logged:false})
    }


    componentDidMount(){
        const token = localStorage.getItem('x-access-token');
        if(token){
            
            this.setState({ logged: true})
        }else{
            console.log("not logined")
        }
        
    }


    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    


    render() {
        return (
            <div>

                {
                     this.state.logged ? (
                         <AdminPanel isLoggedIn={this.state.logged} handleLogout={()=> this.handleLogout()}/>
                     ):(
                        <div>
                            <PageBanner name="Login" head='Admin' />
                            <div className="contenti">
                                <div className="container">
                                    <div className="page-content">
                                        <div className="col-md-5">   
                                        <h4 className="classic-title"><span>Login for Admin Panel</span></h4>

                                        <form id='login' acceptCharset='UTF-8' onSubmit={this.handleSubmit}>
                                            {
                                                this.state.error ? (
                                                    <div className="alert alert-danger" role="alert">
                                                        { this.state.error.msg }
                                                    </div>
                                                ) : null
                                            }
                                            <input type='hidden' name='submitted' id='submitted' value='1' />
        
                                            <div className="form-group">
                                                <div className="controls">
                                                    <input type="text" placeholder="Enter Username" name="Username" id="email" className="email"
                                                        required="required" onChange={this.handleEmailChange} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="controls">
                                                    <input type="password" className="email" placeholder="Password" name="password" id="password"
                                                        required="required" onChange={this.handlePasswordChange} />
                                                </div>
                                            </div>
        
                                            <button type="submit" id="submit" className="btn-system btn-large">Login</button>
                                            
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                    )  
                }
               
            </div>
        );
    }
}

export default Login;

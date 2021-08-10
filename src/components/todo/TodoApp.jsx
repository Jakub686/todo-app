import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

class TodoApp extends Component {
    render(){
        return(
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/welcome/:name" component={WelcomeComponent}/>
                            <Route path="/todos" component={ListTodosComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
        )
    }
}

class HeaderComponent extends Component {
    render() {
        return(
            <header>
                <nav className="navbar navbar-expand-md">
                    <div><a>in28minutes</a></div>
                    <ul className="navbar-nav">
                        <li className="navbar-nav">Home</li>
                        <li className="navbar-nav">Todos</li>
                    </ul>
                    <ul  className="navbar-nav">
                        <li className="nav-link">Login</li>
                        <li className="nav-link">Logout</li>
                    </ul>        
                </nav>
            </header>

        )
    }
}

class FooterComponent extends Component {
    render() {
        return(
            <div>
               <hr/> Footer 
            </div>
        )
    }
}


class WelcomeComponent extends Component {
    render(){
        return( 
         <div>
            Welcome {this.props.match.params.name}. You can megane Your todos <Link to="/todos">here</Link>.
        </div>
        )
    }
}

class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos : 
            [
                {id: 1, description: 'Todo1',done:false, targetDate: new Date},
                {id: 2, description: 'Todo2',done:false, targetDate: new Date},
                {id: 3, description: 'Todo3',done:false, targetDate: new Date}
            ]
        }
    }

    render(){
        return(
             <div>
                 <h1>List todos</h1>
                 <table>
                     <thead>
                         <tr>
                             <th>id</th>
                             <th>description</th>
                             <th>Target Date</th>
                             <th>Is Completed?</th>
                         </tr>
                     </thead>
                     <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr>
                                        <td>{todo.id}</td> 
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td> 
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                            )
                        }
                     </tbody>
                </table>
            </div>
        )    
    }
}

function ErrorComponent(){
    return <div>An Error Occured</div>
}

class LoginComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            username: 'in28minutes',
            password: 'dummy',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        //console.log(this.state)
        this.setState(
            {
                [event.target.name]
                :event.target.value
            }
        )
    }

    // handleUsernameChange(event) {
    //     console.log(event.target.value)
    //     this.setState({username:event.target.value})
    // }
    // handlePasswordChange(event) {
    //     console.log(event.target.value)
    //     this.setState({password:event.target.value})
    // }

    loginClicked(){
        //in28minutes,dummy
        console.log(this.state)
        if(this.state.username==='in28minutes' && this.state.password==='dummy'){
            this.props.history.push(`/Welcome/${this.state.username}`)
            // console.log('Successful')
            // this.setState({showSuccessMessage:true})s
            // this.setState({hasLoginFailed:false})
        }
        else{

        }
            console.log('Failed')
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
       // console.log(this.state)

    }
    render(){

        return(
            <div>
                {/* <ShowInvalidCredentials hasLoginFailed={this.hasLoginFailed}/> */}
                {this.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                {/* <ShowLoginSuccessMessage showLoginSuccessMessage={this.state.ShowLoginSuccessMessage}/> */}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//     return null

// }

// function ShowLoginSuccessMessage(props){
//     if(props.showLoginSuccessMessage) {
//         return <div>Login Successful</div>
//     }
//     return null 

// }

export default TodoApp
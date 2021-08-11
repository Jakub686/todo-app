class AuthenticationService {
    registerSuccessfulLogin(username,password){
        console.log('registerSuccessfulLogin')

        sessionStorage.setItem('authenticatedUser', username)

    }
    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
    }


}

export default new AuthenticationService()
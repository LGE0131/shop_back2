import { Router } from 'express'
import { Signup, Login } from './controller/auth.controller'

export const routes = (router: Router) => {

    router.post('/signup2', Signup)
    router.post('/login', Login)

}

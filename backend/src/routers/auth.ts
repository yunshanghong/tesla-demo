const trimRequest = require('trim-request');

import AuthController from "../controllers/auth"
import { AuthForgetPwdDto, AuthLoginDto, AuthRegisterDto, AuthResetPwdDto } from "../controllers/auth.validate";
import Route from "./base";
import passport from 'passport';

class AuthRoute extends Route{

    private authController: AuthController = new AuthController();
    private requireAuth = passport.authenticate('jwt', { session: false });

    constructor() {
        super();
        this.setRoutes();
    }

    protected setRoutes() {

        this.router.post(
            '/register',
            trimRequest.all,
            this.authController.validateModel(AuthRegisterDto),
            this.authController.register,
        );

        this.router.post(
            '/login', 
            trimRequest.all,
            this.authController.validateModel(AuthLoginDto),
            this.authController.login,
        );

        this.router.post(
            '/resetPwd',
            this.requireAuth,
            trimRequest.all,
            this.authController.validateModel(AuthResetPwdDto),
            this.authController.resetPwd,
        )

        this.router.post(
            '/forgetPwd',
            this.requireAuth,
            trimRequest.all,
            this.authController.validateModel(AuthForgetPwdDto),
            this.authController.forgetPwd,
        )
    }
}

export default AuthRoute;

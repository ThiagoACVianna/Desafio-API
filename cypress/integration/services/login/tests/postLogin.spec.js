/// <reference types="cypress" />

import * as Postlogin from '../requests/postLogin.request'

describe('Login',() => {
   
    it('Login',() => {

        Postlogin.entrar().should((resLogin) => {
            expect(resLogin.status).to.eq(200)
        })




    })
})
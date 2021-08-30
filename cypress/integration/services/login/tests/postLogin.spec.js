/// <reference types="cypress" />

import * as PostLogin from '../requests/postLogin.request';
import * as PostUsuarios from  '../../usuarios/requests/postUsuarios';

var faker = require('faker')

describe('Login',() => {
   
    it('Login',() => {

        var email = faker.internet.email()
        var password = faker.internet.password()

        

        PostUsuarios.criarUsuario(email, password).should((resPost) => {
            cy.log(resPost.body)
            expect(resPost.status).to.eq(201)             
            expect(resPost.body.message).to.eq("Cadastro realizado com sucesso")




            PostLogin.entrar(email, password).should((resLogin) => {
                cy.log(resLogin.body)
                expect(resLogin.status).to.eq(200)
                expect(resLogin.body.message).to.eq("Login realizado com sucesso")  

        
            })
        })


    })
})
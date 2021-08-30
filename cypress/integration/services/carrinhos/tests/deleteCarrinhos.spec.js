/// <reference types="cypress" />

import * as PostLogin from '../../login/requests/postLogin.request';
import * as PostUsuarios from '../../usuarios/requests/postUsuarios';
import * as PostProdutos from '../../produtos/requests/postProdutos.request';
import * as PostCarrinhos from '../requests/postCarrinhos.request';
import * as DeleteCarrinhos from '../requests/deleteCarrinhos.requests';

var faker = require('faker')

describe('Validar a criação do carrinho com sucesso',() =>{
    it('Validar carrinho',() => {

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

                
                PostProdutos.adicionarprodutos(resLogin.body.authorization).should((resProdutos) => {
                    cy.log(resProdutos.body)
                    expect(resProdutos.status).to.eq(201)
                    expect(resProdutos.body.message).to.eq("Cadastro realizado com sucesso")                        
                                                        
                    PostCarrinhos.postCarrinhos(resLogin.body.authorization, resProdutos.body._id).should((resCarrinhos) => {
                        cy.log(resCarrinhos.body)
                        expect(resCarrinhos.status).to.eq(201)
                        expect(resCarrinhos.body.message).to.eq("Cadastro realizado com sucesso")

                        DeleteCarrinhos.deleteCarrinhos(resLogin.body.authorization).should((resDelete) => {
                            expect(resDelete.status).to.eq(200)




                        }) 
                    });
                        
                });

            });

        });
        
    });

});
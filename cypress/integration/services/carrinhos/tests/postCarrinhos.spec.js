/// <reference types="cypress" />

import * as PostLogin from '../../login/requests/postLogin.request';
import * as PostProduto from '../../produtos/requests/postProdutos.request';
import * as PostCarrinho from '../requests/postCarrinhos.request';
import * as PostUsuarios from '../../usuarios/requests/postUsuarios';

var faker = require('faker')

describe('Criar carrinho',() => {
   
    it('Criar carrinho',() => {
        var email = faker.internet.email()
        var password = faker.internet.password()
        
        PostUsuarios.criarUsuario(email, password).should((resPost) => {
            cy.log(resPost.body)
            expect(resPost.status).to.eq(201)             
            expect(resPost.body.message).to.eq("Cadastro realizado com sucesso")
            
            PostLogin.entrar(email, password).should((resLogin) => {
                expect(resLogin.status).to.eq(200)

                PostProduto.adicionarprodutos(resLogin.body.authorization).should((resProduto) => {
                    expect(resProduto.status).to.eq(201)


                    PostCarrinho.postCarrinhos(resLogin.body.authorization, resProduto.body._id).should((resCarrinho) =>{
                        expect(resCarrinho.status).to.eq(201)
                    })

                })

            })

        })

    });

});
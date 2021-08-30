/// <reference types="cypress" />

import * as PostProdutos from '../requests/postProdutos.request';
import * as PostLogin from '../../login/requests/postLogin.request';
import * as PostUsuarios from '../../usuarios/requests/postUsuarios';
import * as DeleteProdutos from '../requests/deleteProdutos.request';

var faker = require('faker');


describe('Post Produtos', () => {

    var email = faker.internet.email()
    var password = faker.internet.password()
    
    it('Adicionar um novo produto', () => {
        PostUsuarios.criarUsuario(email, password).should((resPost) => {
            cy.log(resPost.body)
            expect(resPost.status).to.eq(201)             
            expect(resPost.body.message).to.eq("Cadastro realizado com sucesso")
                        
            PostLogin.entrar(email, password).should((resLogin) =>{
                expect(resLogin.status).to.eq(200)
                                
                PostProdutos.adicionarprodutos(resLogin.body.authorization).should((resProdutos) => {
                    expect(resProdutos.status).to.eq(201)
                    expect(resProdutos.body.message).to.eq("Cadastro realizado com sucesso")
                      
                        DeleteProdutos.deletarProdutos(resLogin.body.authorization, resProdutos.body._id).should((resDelete) => {
                        expect(resDelete.status).to.eq(200)
                        expect(resDelete.body.message).to.eq("Registro excluído com sucesso")
                    });
                });

            });
          
        });

    });


}); 
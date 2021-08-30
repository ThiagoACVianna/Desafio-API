/// <reference types="cypress" />

import * as PostLogin from '../../login/requests/postLogin.request';
import * as PostUsuarios from '../../usuarios/requests/postUsuarios';
import * as PostProdutos from '../../produtos/requests/postProdutos.request';
import * as PostCarrinhos from '../requests/postCarrinhos.request';
import * as DeleteCarrinhos from '../requests/deleteCarrinhos.requests';


describe('Validar a criação do carrinho com sucesso',() =>{
    it('Validar carrinho',() => {

        
        PostLogin.entrar().should((resLogin) => {
            cy.log(resLogin.body)
            expect(resLogin.status).to.eq(200)
            expect(resLogin.body.message).to.eq("Login realizado com sucesso") 

            
            PostProdutos.adicionarprodutos(resLogin.body.authorization).should((resProdutos) => {
                expect(resLogin.status).to.eq(200)
                expect(resProdutos.body.message).to.eq("Cadastro realizado com sucesso")                        
                                                    
                PostCarrinhos.postCarrinhos(resLogin.body.authorization, resProdutos.body._id).should((resCarrinhos) => {
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
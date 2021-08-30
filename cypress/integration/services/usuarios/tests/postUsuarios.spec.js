/// <reference types="cypress" />

import * as PostUsuarios from '../requests/postUsuarios';

var faker = require('faker')




/* for (let index = 0; index < 10; index++){ */
    describe('Criar usuário',() =>{
        it('Criar um novo usuário', () => {
        
        
            var email = faker.internet.email()
            var password = faker.internet.password()
            
            PostUsuarios.criarUsuario(email, password).should((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.message).to.eq("Cadastro realizado com sucesso")
            });

        });

    });
/* } */
/// <reference types="cypress" />

import usuariosSchema from '../contratct/usuarios.contract';
import * as GetUsuarios from '../requests/getUsuarios'

describe('Get usuários', () => {
    it('Listar os usuários com sucesso',()=>{
        GetUsuarios.listar().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null

        });
    });


    it('Validar o contrato da lista de usuários', () => {
        GetUsuarios.listar().should((response) =>{
            return usuariosSchema.validateAsync(response.body)
        });
    
    });


});
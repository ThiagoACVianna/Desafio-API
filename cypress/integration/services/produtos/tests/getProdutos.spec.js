/// <reference types="cypress" />

import * as GetProdutos from '../requests/getProdutos.request';
import produtosSchema from '../contract/produtos.contract';

describe('Get Produtos', () => {
    it('Listar Produtos', () => {
        GetProdutos.listarprodutos().should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.not.null;
        });                
    });    

    it('Validar o contrato da lista de produto', () => {
        GetProdutos.listarprodutos().should((response) =>{
            return produtosSchema.validateAsync(response.body) 
        });
    });  
}); 
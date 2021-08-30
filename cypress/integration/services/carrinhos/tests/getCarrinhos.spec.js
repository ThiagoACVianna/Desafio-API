import getCarrinhoSchema from '../contract/carrinhos.contract';
import * as GetCarrinho from '../requests/getCarrinhos.requests';


describe('Get carrinhos', () => {
    it('Listar os carrinhos com sucesso', () => {
        GetCarrinho.getCarrinhos().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        });
    });    

    it('Validar o contrato dos carrinhos', () => {
        GetCarrinho.getCarrinhos().should((response) =>{
            return getCarrinhoSchema.validateAsync(response.body)
        });
    });
});
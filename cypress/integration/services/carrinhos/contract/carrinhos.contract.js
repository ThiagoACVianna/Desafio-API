import Joi from 'joi';

const produtoSchema = Joi.object({
    idProduto: Joi.string(),
    quantidade: Joi.number(),
    precoUnitario: Joi.number(),
})

const carrinhoSchema = Joi.object({
    produtos: Joi.array().items(produtoSchema),
    precoTotal: Joi.number(),
    quantidadeTotal: Joi.number(),
    idUsuario: Joi.string(),
    _id: Joi.string(),

})

const getCarrinhoSchema = Joi.object({
    quantidade: Joi.number(),
    carrinhos: Joi.array().items(carrinhoSchema),

})

export default getCarrinhoSchema;
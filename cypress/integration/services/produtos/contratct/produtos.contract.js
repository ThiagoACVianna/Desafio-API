import Joi from 'joi';

const produtoSchema = Joi.object({
    quantidade: Joi.number(),
    produtos: Joi.array().items(
        Joi.object({
            nome: Joi.string(),
            preco: Joi.number(),
            descricao: Joi.string(),
            quantidade: Joi.number(),
            _id: Joi.string(),


        })

    )




})

export default produtoSchema;



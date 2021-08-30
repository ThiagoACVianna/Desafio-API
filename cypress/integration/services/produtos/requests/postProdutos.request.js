/// <reference types="cypress" />

let payloadAddProduto = require('../payload/add-produto.payload.json');
let faker = require('faker');


function adicionarprodutos(auth) {
    payloadAddProduto.nome = faker.commerce.productName();
    payloadAddProduto.quantidade = faker.datatype.number();

    return cy.request({
        method: "POST",
        url: "produtos",
        headers: {
            accept: "application/json",
            authorization: auth

        },
        failOnStatusCode: false,
        body: payloadAddProduto
    })

}

export {adicionarprodutos};
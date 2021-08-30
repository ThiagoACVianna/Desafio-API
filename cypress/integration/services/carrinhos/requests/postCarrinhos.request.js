/// <reference types="cypress" />

let payloadAddCarrinhos = require('../payload/add-carrinhos.payload.json')


function postCarrinhos(auth, idProduto) {
    payloadAddCarrinhos.produtos[0].idProduto = idProduto

    return cy.request({
        method: "POST",
        url: "carrinhos",
        headers: {
            accept: "application/json",
            authorization: auth

        },
        failOnStatusCode: false,
        body: payloadAddCarrinhos
    })


}
export {postCarrinhos}
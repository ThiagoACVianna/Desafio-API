/// <reference types="cypress" />

function editarProdutos(auth, _id) {
    return cy.request({
        method: 'PUT',
        url: `produtos/${_id}`,
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false,
        authorization: auth
    })

}

export {editarProdutos};
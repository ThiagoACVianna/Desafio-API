/// <reference types="cypress" />

function deletarProdutos(auth, _id) {
    return cy.request({
        method: 'DELETE',
        url: `produtos/${_id}`,
        headers: {
            accept: "application/json",
            authorization: auth
        },
        failOnStatusCode: false,
        
    })

}

export {deletarProdutos};
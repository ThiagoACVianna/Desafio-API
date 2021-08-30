/// <reference types="cypress" />

function deleteCarrinhos(auth) {
    return cy.request({
        method: "DELETE",
        url: "carrinhos/concluir-compra",
        headers: {
            accept: "application/json",
            authorization: auth


        },
        failOnStatusCode: false

    })


}
export {deleteCarrinhos}
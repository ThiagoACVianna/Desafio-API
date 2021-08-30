/// <reference types="cypress" />

function deleteCarrinhos() {
    return cy.request({
        method: "POST",
        url: "carrinhos",
        headers: {
            accept: "application/json"


        },
        failOnStatusCode: false

    })


}
export {deleteCarrinhos}
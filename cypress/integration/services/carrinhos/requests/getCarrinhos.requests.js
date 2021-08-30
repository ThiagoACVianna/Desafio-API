/// <reference types="cypress" />

function getCarrinhos() {
    return cy.request({
        method: "GET",
        url: "carrinhos",
        headers: {
            accept: "application/json"


        },
        failOnStatusCode: false

    })


}
export {getCarrinhos}
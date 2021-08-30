/// <reference types="cypress" />

function mudarcarrinhos() {
    return cy.request({
        method: "PUT",
        url: "carrinhos",
        headers: {
            accept: "application/json"


        },
        failOnStatusCode: false

    })


}
export {mudarcarrinhos}
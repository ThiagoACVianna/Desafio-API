/// <reference types="cypress" />


function deletar(_id) {
    return cy.request({
        method: "DELETE",
        url: `usuarios/${_id}`,
        headers: {
            accept: "application/json"


        },
        failOnStatusCode: false

    })


}
export {deletar}
/// <reference types="cypress" />


function editar(_id) {
    return cy.request({
        method: 'PUT',
        url: `usuarios/${_id}`,
        headers: {
            accept: "application/json"

        },
        failOnStatusCode: false

    })




}

export {editar}
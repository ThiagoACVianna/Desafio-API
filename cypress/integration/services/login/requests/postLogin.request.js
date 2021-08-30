/// <reference types="cypress" />


function entrar(email, password) {

    


    return cy.request({
        method: 'POST',
        url: "login",
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false,
        body: {email, password}
    })

}

export {entrar};
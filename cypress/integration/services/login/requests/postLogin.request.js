/// <reference types="cypress" />

let payloadLogin = require('../payload/add-login.payload.json');

function entrar(email, password) {
    


    return cy.request({
        method: 'POST',
        url: "login",
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false,
        body: payloadLogin
    })

}

export {entrar};
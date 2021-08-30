/// <reference types="cypress" />


function listarprodutos() {
   

    return cy.request({
        method: "GET",
        url: "produtos",
        headers: {
            accept: "application/json",
            

        },
        failOnStatusCode: false,
        
    })

}

export {listarprodutos};
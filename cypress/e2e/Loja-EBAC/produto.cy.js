/// <reference types = 'cypress' />

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        //cy.visit('http://lojaebac.ebaconline.art.br/produtos')
        
        cy.visit('produtos')

    });

    it('Deve adicionar produto específico no carrinho com sucesso', () => {
        cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.button-variable-item-Green').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain','foram adicionados no seu carrinho')
    });

    it('Deve adicionar um produto da lista no carrinho', () => {
        cy.get('.product-block') //lembrar de colocar o "." antes do nome da lista
            //.last().click()
            //.first().click()
            //.eq(4).click()
            //.eq(0).click()
            .contains('Abominable Hoodie').click() //nesse caso o nome do produto é clicável
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.button-variable-item-Green').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain','foram adicionados no seu carrinho') //nesse caso a mensagem está no plural
    });



});
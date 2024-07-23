/// <reference types = 'cypress' />
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        //cy.visit('http://lojaebac.ebaconline.art.br/produtos')
        //cy.visit('produtos')
        produtosPage.visitarUrl()

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

    it('Deve buscar um produto na lista com sucesso - Usando Page Objects', () => {
        produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
        cy.get('.product_title').should('contain','Aero Daily Fitness Tee')
    });

    it('Deve buscar um produto com sucesso através da barra de pesquisa - Usando Page Objects', () => {
        var produto = 'Aero Daily Fitness Tee'

        //produtosPage.buscarProduto('Aero Daily Fitness Tee')
        //cy.get('.product_title').should('contain', 'Aero Daily Fitness Tee')
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    })

    it('Deve visitar produto com sucesso - Usando Page Objects', () => {
        produtosPage.visitarPaginaProduto('Aero Daily Fitness Tee')
        cy.get('.product_title').should('contain', 'Aero Daily Fitness Tee')
    });

    it('Deve adicionar o produto no carrinho - Usando Massa de Dados em lista', () => {
        var produto = 'Aero Daily Fitness Tee'
        var quantidade = '4'

        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
        produtosPage.addProdutoCarrinho('M', 'Brown', quantidade)
        cy.get('.woocommerce-message').should('contain',quantidade + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
    });

});
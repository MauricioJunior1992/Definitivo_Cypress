/// <reference types = 'cypress' />
const login = require('../../fixtures/login.json') //ref testes usando Arquivo de Dados e Fixture

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        ///cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.visit('minha-conta')
    });

    it('Deve fazer o login com sucesso', () => {
        cy.get('#username').type('mauricioteste1992@teste.com')
        cy.get('#password').type('mauricioteste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
    });
    
    it('Deve ter insucesso no login e aparecer mensagem de email incorreto', () => {
        cy.get('#username').type('mauriciotest@teste.com')
        cy.get('#password').type('mauricioteste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido')
    });

    it('Deve ter insucesso no login e aparecer mensagem de senha incorreta', () => {
        cy.get('#username').type('mauricioteste1992@teste.com')
        cy.get('#password').type('mauriciotest')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Perdeu a senha?')
    });

    it('Deve fazer login com sucesso - Usando variáveis', () => {
        var email = 'mauricioteste1992@teste.com'
        var senha = 'mauricioteste'

        cy.get('#username').type(email)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
    });

    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
        cy.get('#username').type(login.email)
        cy.get('#password').type(login.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
    //arquivo referência está na pasta fixtures
    });

    it('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('login').then(dados => {
            cy.get('#username').type(dados.email)
            cy.get('#password').type(dados.senha, {log:false}) //log:false é para esconder informações na hora do teste
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
    //arquivo referência está na pasta fixtures
        })
    })

    it.only('Deve fazer login com sucesso - Usando Comandos Customizados', () => {
        //cy.login('mauricioteste1992@teste.com', 'mauricioteste')
        cy.login(login.email, login.senha)
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
        
    });

});
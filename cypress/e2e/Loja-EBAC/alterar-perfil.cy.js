/// <reference types = 'cypress' />
import { faker } from '@faker-js/faker'
const login = require('../../fixtures/login.json')

describe('Funcionalidade: Alterar perfil', () => {

    beforeEach(() => {
        ///cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

        cy.visit('minha-conta')
        
    })

    it('Deve alterar perfil com sucesso', () => {
        cy.get('#username').type('mauricioteste1992@teste.com')
        cy.get('#password').type('mauricioteste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').clear().type('Mauricio')
        cy.get('#account_last_name').clear().type('Junior')
        cy.get('#account_display_name').clear().type('Mauricio Junior')
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    });

    it('Deve cadastrar perfil com sucesso e alterar perfil com mesmas informações - Usando Fake e Variáveis', () => {
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()
        var email = faker.internet.email(nome)
        var senha = faker.internet.password()
        var usuario = faker.internet.userName(nome, sobrenome)
        
        cy.visit('minha-conta')
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').clear().type(nome)
        cy.get('#account_last_name').clear().type(sobrenome)
        cy.get('#account_display_name').clear().type(usuario)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    });

    it('Deve alterar perfil com sucesso - Usando Comandos Customizados', () => {
        //cy.get('#username').type(login.email)
        //cy.get('#password').type(login.senha)
        //cy.get('.woocommerce-form > .button').click()
        cy.login('mauricioteste1992@teste.com','mauricioteste') //login via comando customizado
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.alteracoes('Mauricio', 'Junior', 'Mauricio Junior')
        //cy.alteracoes(faker.person.firstName(), faker.person.lastName(), faker.internet.userName())
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    });

})
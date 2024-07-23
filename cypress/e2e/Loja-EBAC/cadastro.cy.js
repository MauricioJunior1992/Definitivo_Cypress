/// <reference types = 'cypress' />
import { faker } from '@faker-js/faker'

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        ///cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.visit('minha-conta')
    });

    //it('Deve fazer cadastro com sucesso', () => {
        //cy.get('#reg_email').type('mauricioteste2024@gmail.com')
        //cy.get('#reg_password').type('mauricioteste')
        //cy.get(':nth-child(4) > .button').click()
        //cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
    //});
    // teste acima não é sustentável pois só pode ser feito uma vez

    it('Deve ter insucesso ao fazer cadastro e aparecer mensagem de email já cadastrado', () => {
        cy.get('#reg_email').type('mauricioteste1992@teste.com')
        cy.get('#reg_password').type('mauricioteste')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.')
    });

    it('Deve ter insucesso ao fazer cadastro e aparecer mensagem de email inválido', () => {
        cy.get('#reg_email').type('mauricioteste1992@teste')
        cy.get('#reg_password').type('mauricioteste')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Erro: Informe um endereço de e-mail válido.')
    });

    it('Deve fazer cadastro com sucesso - Usando Faker', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
    });

    it('Deve fazer cadastro com sucesso - Usando faker e variáveis', () => {
        var email = faker.internet.email()
        var senha = faker.internet.password()

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
    });

    it('Deve fazer cadastro com sucesso - Usando Comandos Customizados', () => {
        cy.cadastro(faker.internet.email() , faker.internet.password())
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
    });

});
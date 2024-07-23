class ProdutosPage {

    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto) //como é atributo + elemento (name="s"), precisa estar entre []
        //cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group')
        cy.get('.button-search').eq(1)
        .click()
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.product-block')
        .contains(nomeProduto).click()
    }

    visitarPaginaProduto(nomeProduto) {
        //cy.visit(`produtos/${nomeProduto}`)
        const urlFormatada = nomeProduto.replace(/ /g, '-')
        cy.visit(`produto/${urlFormatada}`)
    }

    addProdutoCarrinho(tamanho, cor, quantidade) {
        cy.get('.button-variable-item-' + tamanho).click() //forma de unir duas infomações com "+"
        cy.get(`.button-variable-item-${cor}`).click() //forma de unir duas informações com crase e "${}"
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

}

export default new ProdutosPage()
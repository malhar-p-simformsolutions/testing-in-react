describe('Form', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('It focuses the input', () => {
        cy.focused().should('have.class', 'form-control')
    })

    it('accepts imput', () => {
        const input = "Learn about Cypress"
        cy.get('.form-control')
        .type(input)
        .should('have.value', input)
    })

    it('displays list of todo', () => {
        cy.get('li').should('have.length', 2)
    })

    it('adds a new todo', () => {
        const input = "Learn about cypress"
        cy.get('.form-control')
        .type(input)
        .type('{enter}')
        .get('li')
        .should('have.length', 3)
    })

    it('deletes a todo', () => {
        cy.get('li')
        .first()
        .find('.btn-danger')
        .click()
        .get('li')
        .should('have.length', 1)
    })

    it.only('deletes all todo', () => {
        cy.get('li')
          .first()
          .find('.btn-danger')
          .click()
          .get('li')
          .first()
          .find('.btn-danger')
          .click()
          .get('.no-task')
          .should('have.text', 'All of your tasks are complete. Nicely done!')
      })
})
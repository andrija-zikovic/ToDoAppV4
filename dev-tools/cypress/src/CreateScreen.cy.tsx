import { CreateScreen } from '@shared/create'
import { MessageContextProvider, TodoContextProvider } from '@shared/context'
import { MemoryRouter } from 'react-router'

const renderScreen = () => {
    cy.mount(
        <TodoContextProvider>
            <MessageContextProvider>
                <MemoryRouter>
                    <CreateScreen />
                </MemoryRouter>
            </MessageContextProvider>
        </TodoContextProvider>
    )
}

it('should render the Create form', () => {
    renderScreen()
    cy.get('form').should('exist')
    cy.get('input[name="description"]').should('exist')
    cy.get('button[type="submit"]').should('exist')
})

it.only('should call the onSubmit', () => {
    renderScreen()
    cy.intercept('POST', 'http://localhost:3000/todos').as('create')
    cy.get('input[name="description"]').type('Testing the form')
    cy.get('button').contains('Submit').click()
    cy.wait('@create').its('request.body').should('include', {
        description: 'Testing the form',
        stage: 'pending',
    })
})

it('should show an error on short message', () => {
    renderScreen()
    cy.get('input[name="description"]').type('aaa')
    cy.get('button').contains('Submit').click()
    cy.get('p').contains('Description is too short').should('exist')
})

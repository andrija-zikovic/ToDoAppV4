import { mount } from 'cypress/react'
// with a <reference path="./component" /> at the top of your spec.
declare global {
    namespace Cypress {
        interface Chainable {
            mount: typeof mount
        }
    }
}

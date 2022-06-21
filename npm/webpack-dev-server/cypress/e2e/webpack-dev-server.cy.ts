/// <reference path="../support/e2e.ts" />

describe('Config options', () => {
  it('supports supportFile = false', () => {
    cy.scaffoldProject('webpack5_wds4-react')
    cy.openProject('webpack5_wds4-react', ['--config-file', 'cypress-webpack-no-support.config.ts'])
    cy.startAppServer('component')

    cy.visitApp()
    cy.contains('App.cy.jsx').click()
    cy.waitForSpecToFinish()
    cy.get('.passed > .num').should('contain', 1)
  })

  it('supports @cypress/webpack-dev-server', () => {
    cy.scaffoldProject('webpack5_wds4-react')
    cy.openProject('webpack5_wds4-react', ['--config-file', 'cypress-webpack-dev-server-function.config.ts'])
    cy.startAppServer('component')

    cy.visitApp()
    cy.contains('App.cy.jsx').click()
    cy.waitForSpecToFinish()
    cy.get('.passed > .num').should('contain', 1)
  })
})

describe('The Home Page', () => {
    // cy.viewport(width, height)
    it('successfully loads', () => {
        // baseUrl / dashboardにアクセス
        cy.visit('/')
        console.log('cypress.config.js baseUrl: ', Cypress.config('baseUrl'))
        // data-testidがSidebarTab-dashboardの要素を取得
        cy.get('[data-testid="SidebarTab-dashboard"]')//.click()
            .should('contain.text', 'ダッシュボード');
        //cy.getDataCy("SidebarTab-dashboard").click()
        cy.get('[data-testid="SidebarTab-experience"]').click();
        // 2秒待機
        cy.wait(2000);
        // data-testidがSidebarTab-experienceの要素を取得
        cy.get('[data-testid="SidebarTab-ingredients"]').click();
        // 1秒待機
        cy.wait(2000);
    })
})

// cypress run--browser chrome
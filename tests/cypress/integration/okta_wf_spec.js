describe('Workflows landing page (en-US)', () => {
  beforeEach(() => {
    cy.visit('wf/en-us/Content/Topics/Workflows/workflows-main.htm')
  })

  it('displays expected content structures in English', () => {
    cy.hasOktaHOCBanner('Okta Support')
    cy.hasCopyright()
    cy.hasLeftSideNav()
    cy.hasTOC(10)
    cy.hasBreadcrumbs('Okta Workflows')
    cy.hasTopMenuBar(5, 11)
    cy.hasBodyContent()
    cy.hasTiles(9)
    cy.hasDeferAttrsCorrectlyApplied()
    cy.hasQualtrics()
    cy.hidesCoveoSearchBar()
  })
})

describe('Workflows landing page (ja-JP)', () => {
  beforeEach(() => {
    cy.visit('wf/ja-jp/Content/Topics/Workflows/workflows-main.htm')
  })

  it('displays expected content structures in Japanese', () => {
    cy.hasOktaHOCBanner('Oktaサポート')
    cy.hasCopyright()
    cy.hasLeftSideNav()
    cy.hasTOC(10)
    cy.hasBreadcrumbs('Okta Workflows')
    cy.hasTopMenuBar(5, 9)
    cy.hasBodyContent()
    cy.hasTiles(9)
    cy.hasDeferAttrsCorrectlyApplied()
    cy.hasQualtrics()
    cy.hasCoveoSearchBar()
  })
})

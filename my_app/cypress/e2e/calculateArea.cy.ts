  //rectangle
  describe('calcul area of rectangle', () => {
  beforeEach(function (){
    cy.visit('http://localhost:4200')
    cy.get('#operation').select('area').should('have.value','area')
    cy.get('#figureName').select('rectangle').should('have.value','rectangle')
  })
  it('area of rectangle width = 7 length = 4', () =>{
    cy.get('#width').type('7')
    cy.get('#length').type('4')
    cy.contains("Get Result").click()
    cy.get('#result').should('have.value', 7*4)
  })
  it('area of rectangle width = 7 length = -12', () =>{
    cy.get('#width').clear().type('5')
    cy.get('#length').clear().type('-12')
    cy.contains("Get Result").click()
    cy.get('#result').should('have.value', undefined)
  })
  it('area of rectangle width = 2 length = 8', () =>{
    cy.get('#width').clear().type('2')
    cy.get('#length').clear().type('8')
    cy.contains("Get Result").click()
    cy.get('#result').should('have.value', undefined)
  })
})

  //square
  describe('calcul area of square', () => {
  beforeEach(function (){
    cy.visit('http://localhost:4200')
    cy.get('#operation').select('area').should('have.value','area')
    cy.get('#figureName').select('square').should('have.value','square')
  })
  it('area of square side = 7', () =>{
    cy.get('#side').type('7')
    cy.contains("Get Result").click()
    cy.get('#result').should('have.value', Math.pow(7,2))
  })
  it('area of square side = -5', () =>{
    cy.get('#side').clear().type('-5')
    cy.contains("Get Result").click()
    cy.get('#result').should('have.value', undefined)
  })

})

  //circle
  describe('calcul area of circle', () => {
  beforeEach(function (){
    cy.visit('http://localhost:4200')
    cy.get('#operation').select('area').should('have.value','area')
    cy.get('#figureName').select('circle').should('have.value','circle')
  })
  it('area of square radius = 9', () =>{
    cy.get('#radius').type('9')
    cy.contains("Get Result").click()
    cy.get('#result').should('have.value', Math.PI*Math.pow(9,2))
  })
  it('area of square radius = -5', () =>{
    cy.get('#radius').clear().type('-5')
    cy.contains("Get Result").click()
    cy.get('#result').should('have.value', undefined)
  })
})
  

  //triangle
  describe('calcul area of triangle', () => {
    beforeEach(function (){
      cy.visit('http://localhost:4200')
      cy.get('#operation').select('area').should('have.value','area')
      cy.get('#figureName').select('triangle').should('have.value','triangle')
    })
  
    it('area of square base = 9 height = 9', () =>{
      cy.get('#side1').type('9')
      cy.get('#side2').type('9')
      cy.contains("Get Result").click()
      cy.get('#result').should('have.value', 9*9/2)
    })
    it('area of square base = -9 height = 9', () =>{
      cy.get('#side1').clear().type('-9')
      cy.get('#side2').clear().type('9')
      cy.contains("Get Result").click()
      cy.get('#result').should('have.value', undefined)
    })
  })

  //convertion to unitSquare
  describe('test of convertion', () => {
    it('convertion to Km²', () => {
      cy.visit('http://localhost:4200')
      cy.get('#operation').select('area').should('have.value','area')
      cy.get('#figureName').select('square').should('have.value','square')
      // cy.get('.result').contains('area')
      cy.get('#side').clear().type('5')
      cy.contains("Get Result").click()
      cy.get('#result').should('have.value', Math.pow(5,2))
      cy.get('#unit').select('km²').should('have.value','km²')
      cy.contains("= Convert").click()
      cy.get('#dataConverted').should('have.value', Math.pow(5,2)*Math.pow(10,-6))
    })
    it('convertion to m²', () => {
      cy.get('#unit').select('m²').should('have.value','m²')
      cy.contains("= Convert").click()
      cy.get('#dataConverted').should('have.value', Math.pow(5,2)*Math.pow(10,0))
    })
    it('convertion to dm²', () => {
      cy.get('#unit').select('dm²').should('have.value','dm²')
      cy.contains("= Convert").click()
      cy.get('#dataConverted').should('have.value', Math.pow(5,2)*Math.pow(10,2))
    })
    it('convertion to cm²', () => {
      cy.get('#unit').select('cm²').should('have.value','cm²')
      cy.contains("= Convert").click()
      cy.get('#dataConverted').should('have.value', Math.pow(5,2)*Math.pow(10,4))
    })
  })

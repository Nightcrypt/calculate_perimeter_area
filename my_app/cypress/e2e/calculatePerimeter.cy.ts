  //rectangle
  describe('perimeter area of rectangle', () => {
    beforeEach(function (){
      cy.visit('http://localhost:4200')
      cy.get('#operation').select('perimeter').should('have.value','perimeter')
      cy.get('#figureName').select('rectangle').should('have.value','rectangle')
    })
    it('perimeter of rectangle width = 7 length = 4', () =>{
      cy.get('#width').type('7')
      cy.get('#length').type('4')
      cy.contains("Get Result").click()
      cy.get('#result').should('have.value', 2*(7+4))
    })
    it('perimeter of rectangle width = 7 length = -12', () =>{
      cy.get('#width').clear().type('5')
      cy.get('#length').clear().type('-12')
      cy.contains("Get Result").click()
      cy.get('#result').should('have.value', undefined)
    })
    it('perimeter of rectangle width = 2 length = 8', () =>{
      cy.get('#width').clear().type('2')
      cy.get('#length').clear().type('8')
      cy.contains("Get Result").click()
      cy.get('#result').should('have.value', undefined)
    })
  })
  
    //square
    describe('perimeter area of square', () => {
    beforeEach(function (){
      cy.visit('http://localhost:4200')
      cy.get('#operation').select('perimeter').should('have.value','perimeter')
      cy.get('#figureName').select('square').should('have.value','square')
    })
    it('perimeter of square side = 7', () =>{
      cy.get('#side').type('7')
      cy.contains("Get Result").click()
      cy.get('#result').should('have.value', 7*4)
    })
    it('perimeter of square side = -5', () =>{
      cy.get('#side').clear().type('-5')
      cy.contains("Get Result").click()
      cy.get('#result').should('have.value', undefined)
    })
  
  })
  
    //circle
    describe('perimeter area of circle', () => {
    beforeEach(function (){
      cy.visit('http://localhost:4200')
      cy.get('#operation').select('perimeter').should('have.value','perimeter')
      cy.get('#figureName').select('circle').should('have.value','circle')
    })
    it('perimeter of square radius = 9', () =>{
      cy.get('#radius').type('9')
      cy.contains("Get Result").click()
      cy.get('#result').should('have.value', (2*Math.PI*9))
    })
    it('perimeter of square radius = -5', () =>{
      cy.get('#radius').clear().type('-5')
      cy.contains("Get Result").click()
      cy.get('#result').should('have.value', undefined)
    })
  })
    
  
    //triangle
    describe('perimeter area of triangle', () => {
      beforeEach(function (){
        cy.visit('http://localhost:4200')
        cy.get('#operation').select('perimeter').should('have.value','perimeter')
        cy.get('#figureName').select('triangle').should('have.value','triangle')
      })
    
      it('perimeter of square side1 = 9 side2 = 9 side3 = 12', () =>{
        cy.get('#side1').type('9')
        cy.get('#side2').type('9')
        cy.get('#side3').type('12')
        cy.contains("Get Result").click()
        cy.get('#result').should('have.value', (9+9+12))
      })
      it('perimeter of square side1 = -9 side2 = 9 side3 = 12', () =>{
        cy.get('#side1').clear().type('-9')
        cy.get('#side2').clear().type('9')
        cy.get('#side3').type('12')
        cy.contains("Get Result").click()
        cy.get('#result').should('have.value', undefined)
      })
    })
  
    //convertion to unit
    describe('test of convertion', () => {
      it('convertion to Km', () => {
        cy.visit('http://localhost:4200')
        cy.get('#operation').select('perimeter').should('have.value','perimeter')
        cy.get('#figureName').select('square').should('have.value','square')
        // cy.get('.result').contains('area')
        cy.get('#side').clear().type('5')
        cy.contains("Get Result").click()
        cy.get('#result').should('have.value', 5*4)
        cy.get('#unit').select('km').should('have.value','km')
        cy.contains("= Convert").click()
        cy.get('#dataConverted').should('have.value', 5*4*Math.pow(10,-3))
      })
      it('convertion to m', () => {
        cy.get('#unit').select('m').should('have.value','m')
        cy.contains("= Convert").click()
        cy.get('#dataConverted').should('have.value', 5*4*Math.pow(10,0))
      })
      it('convertion to dm', () => {
        cy.get('#unit').select('dm').should('have.value','dm')
        cy.contains("= Convert").click()
        cy.get('#dataConverted').should('have.value', 5*4*Math.pow(10,1))
      })
      it('convertion to cm', () => {
        cy.get('#unit').select('cm').should('have.value','cm')
        cy.contains("= Convert").click()
        cy.get('#dataConverted').should('have.value', 5*4*Math.pow(10,2))
      })
    })
  
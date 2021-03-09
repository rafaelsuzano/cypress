describe('My First Test', () => {
    it.skip('Does not do much!', () => {
      expect(true).to.equal(true)
    })
    it.skip('Does not do much!', () => {
        expect(true).to.equal(false)
      })

  })


  describe('Visita site da uol', () => {
    it.skip('Does not do much!', () => {
     cy.visit('http://www.uol.com.br')  
    
    })
    
  })

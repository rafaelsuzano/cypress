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

  describe('Teste Página Local', () => {
    it.skip('Página local', () => {
     cy.visit('http://localhost:8070/teste.html')  
    
    })
    
  })


  describe('Teste Página Local', () => {
    it('Página local', () => {
     cy.visit('http://localhost:8070/teste.html')  
     cy.get('input#name').type('rafael')
     cy.get('input#mail').type('rafaelsuzano@hotmail.com')
     cy.get('button[type="submit"]').click()
     cy.reload(true)

 
    })
    
  })
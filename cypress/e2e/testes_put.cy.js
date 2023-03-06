describe('template spec', () => {
    it('passes', () => {
      cy.request({
        method: 'PUT',
        url: 'https://reqres.in/api/users/',
        body: {
            "name": "dougls",
            "job": "feioso"
          }
        }).as('response')
    
    
       
       })
    })
  
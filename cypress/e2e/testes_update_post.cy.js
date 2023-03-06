describe('template spec', () => {
    it('passes', () => {
      cy.request({
        method: 'PATCH',
        url: 'https://reqres.in/api/users/192',
        body: {
            "name": "morpheus",
            "job": "zion resident",
          }
        }).as('response')
    
       cy.get('@response').then(res => {
         console.log(res)
          expect(res.status).to.be.equal(200)
       })
    })
  })
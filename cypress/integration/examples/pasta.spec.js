describe("My First Test", function() {
    it('Finds an element', function() {
        cy.visit('https://www.pastapass.com/')

        var link;
        while(1){
            link = cy.get('.links')
            if(link != null){
                link.click();
            }
        }
        
    })
})
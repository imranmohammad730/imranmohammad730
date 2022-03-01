describe('amazon task suite',function(){


    it('test case 1',function(){
  
    cy.visit(' https://www.amazon.in' )
  
    cy.get('#nav-cart').click()

    cy.get('.a-row > h2').should('contains.text', 'Your Amazon Basket is empty')

    cy.get('#twotabsearchtextbox').type('boAt Rockerz 400 Bluetooth On-Ear Headphone with Mic(Carbon Black)')
    cy.get('#nav-search-submit-button').click()
     
    cy.get('[data-asin="B074ZF7PVZ"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .s-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium').invoke('removeAttr', 'target')

     //cy.get('[data-asin="B074ZF7PVZ"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .s-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium').click() 

    cy.visit('https://www.amazon.in/Boat-BassHeads-900-Wired-Headphone/dp/B074ZF7PVZ/ref=sr_1_3?crid=2QPDDVLOYV27W&keywords=boAt+Rockerz+400+Bluetooth+On-Ear+Headphone+with+Mic%28Carbon+Black%29&qid=1646040999&sprefix=boat+rockerz+400+bluetooth+on-ear+headphone+with+mic+carbon+black+%2Caps%2C396&sr=8-3' )

     cy.get('#add-to-cart-button').click()
     cy.get('#attach-popover-lgtbox').click()
     
     cy.get('#sw-subtotal-item-count').should('contains.text','Cart subtotal (1 item):')

     cy.get('#nav-cart').click()

     cy.get('#sw-subtotal-item-count').should('contains.text','Cart subtotal (1 item):') 

      cy.get('.sc-action-delete > .a-declarative > .a-color-link').click()
      cy.get('.a-row > .a-spacing-mini').should('contains.text','Your Amazon Cart is empty.')
     
  
    
     
      
    }  
    )})
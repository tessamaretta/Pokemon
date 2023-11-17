import datajson from './../fixtures/example.json'

describe('Search Pikachu', () => {
    it('user scroll down all pokemon', () => {
        cy.visit('https://www.pokemon.com', {
        headers: {
            'User-Agent': 'Chrome/91.0.4472.124',
        },
        });

        cy.contains('Accept All').click();
        
        //Click CTA Pokedex
        cy.contains('Pokédex').click()
      
        // Search Pokemon “Pikachu”
        cy.get('#searchInput').type('Pikachu').type('{enter}');
      
        // Wait for the search results to load
        cy.wait(2000);
      
        //Select “Pikachu”
        cy.get('[src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"]').click({force: true});
      
        //Wait for Pikachu details to load
        cy.wait(2000);
      
        //Scrolling down to show all detail about “Pikachu”
        cy.scrollTo('bottom');
      
        // Click CTA “Explore More Pokemon”
        cy.contains('Explore More Pokémon').click();

        // Wait for the page to load
        cy.wait(2000);
      
        // Scrolling down to show all Pokemon
        cy.scrollTo('bottom');
      
        // Additional waiting time (adjust as needed)
        cy.wait(2000);

    })
  })
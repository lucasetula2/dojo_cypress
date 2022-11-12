require('cypress-xpath');

describe("login", () => {
  it.skip("Busqueda en Google", () => {
    cy.visit("https://www.google.com.ar/")
    cy.get('.gLFyf.gsfi').type("enanos") // Utilizo el # si tengo el id del elemento, entonces pongo #id_del_elemento
    cy.xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[4]/center/input[1]').click({force: true})
  });
  
  it.skip("Busqueda en Youtube", () => {
    cy.visit("https://www.youtube.com/"); // Entrar en una URL

  });

  it.skip("Login en Facebook", () => {
    cy.visit("https://www.facebook.com/"); // Entrar en una URL

  });

  it.skip("Login en Instagram", () => {
    cy.visit("https://www.instagram.com/"); // Entrar en una URL

  });
});
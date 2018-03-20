


async function generateToken() {
    return Date.now();
}

describe('My First Test', () => {
    let token;
    beforeEach(async () => {
        token = await generateToken();
    });

    it('Visits kitchen sink', () => {
        cy.visit(`?token=${token}`);

        cy.contains('type')
            .click();
    });
});
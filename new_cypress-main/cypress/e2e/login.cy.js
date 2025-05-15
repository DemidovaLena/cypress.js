describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Нашли кнопку "забыли...", проверили цвет

        cy.get('#mail').type('german@dolnikov.ru'); // Нашли поле логин, ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // Нашли поле пароль, ввели пароль
        cy.get('#loginButton').click(); // Нашли войти, кликнули

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Нашли текст после автор., проверили наличие текста
        cy.get('#messageHeader').should('be.visible'); // Нашли текст, виден польз.
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Нашли крестик, виден пользов.

    })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)').should('be.visible');
        cy.get('#forgotEmailButton').click(); // Нашли "забыли пароль", кликнули
        
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Нашли поле ввода, ввели логин
        cy.get('#restoreEmailButton').click(); // Нашли "отправить код", кликнули

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Нашли "успешно...", проверили наличие текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Нашли крестик, виден польз.
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        
        cy.get('#mail').type('german@dolnikov.ru'); // Нашли поле логин, ввели логин
        cy.get('#pass').type('iLoveqastudio11'); // Нашли поле пароль, ввели неверный пароль
        cy.get('#loginButton').click(); // Нашли войти, кликнули

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Нашли текст., проверили наличие текста
        cy.get('#messageHeader').should('be.visible'); // Нашли текст, виден польз.
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Нашли крестик, виден пользов.

    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        
        cy.get('#mail').type('german@dolnikovv.ru'); // Нашли поле логин, ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Нашли поле пароль, ввели пароль
        cy.get('#loginButton').click(); // Нашли войти, кликнули

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Нашли текст., проверили наличие текста
        cy.get('#messageHeader').should('be.visible'); // Нашли текст, виден польз.
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Нашли крестик, виден пользов.

    })

    it('Логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        
        cy.get('#mail').type('germandolnikov.ru'); // Нашли поле логин, ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Нашли поле пароль, ввели пароль
        cy.get('#loginButton').click(); // Нашли войти, кликнули

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Нашли текст., проверили наличие текста
        cy.get('#messageHeader').should('be.visible'); // Нашли текст, виден польз.
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Нашли крестик, виден пользов.

    })

    it('Логин с заглавными буквами и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Нашли поле логин, ввели логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Нашли поле пароль, ввели пароль
        cy.get('#loginButton').click(); // Нашли войти, кликнули

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Нашли текст., проверили наличие текста
        cy.get('#messageHeader').should('be.visible'); // Нашли текст, виден польз.
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Нашли крестик, виден пользов.

    })
})





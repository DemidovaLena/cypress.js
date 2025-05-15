describe('Покупка аватара', function () {                 
    it('e2e тест на покупку аватара', function () {   
         cy.visit('https://pokemonbattle.ru/login'); // Зашли на сайт

         cy.get('#k_email').should('be.visible').type('USER_LOGIN'); // Нашли поле почты, виден польз., ввели логин
         cy.get('#k_password').should('be.visible').type('USER_PASSWORD');// Нашли поле пароля, виден польз., ввели пароль
         cy.get('.MuiButton-root').click(); // Нашли кнопку "войти", кликнули

         cy.get('.header_card_trainer').click(); // Нашли кнопку информации о тренере, кликнули
         cy.get('.k_mobile > :nth-child(5)').click(); // Нашли кнопку "сменить аватар", кликнули

         cy.get('.available > button').first().click(); // Нашли кнопку "купить" у свободного автара, кликнули

         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996'); // Нашли поле для ввода карты, ввели номер
         cy.get(':nth-child(1) > .style_1_base_input').type('1226'); // Нашли поле для ввода срока, ввели дату
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); // Нашли поле для ввода cvv, ввели код
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('DEMIDOVA ELENA'); // Нашли поле для ввода ФИ, ввели
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Нашли кнопку "Оплатить", кликнули
         cy.get('.style_1_base_input').type('56456') // Нашли поле для ввода, ввели код
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Нашли кнопку "Оплатить", кликнули

         cy.contains('Покупка прошла успешно').should('be.visible');
         



  
     });
 });
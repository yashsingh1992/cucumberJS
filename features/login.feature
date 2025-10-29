Feature: Login to the application


  Scenario: Successful login with valid credentials
    Given I am on login page
    When I enter 'anshika@gmail.com', 'Iamking@000' and click the sign in
    Then I should be redirected to the dashboard





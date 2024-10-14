Feature: Login functionality

  Scenario Outline: As a user, I can log into the secure area
    Given I am on the login page
    When I login with <email> and <password>
    Then I should be redirected to <page> page

    Examples:
      | email              | password  | page      |
      | riezq.25@gmail.com | password | dashboard |

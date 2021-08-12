Feature: Login Test
    
  # Scenarios for Valid Test Cases  
  Scenario: Valid Login Test
    Given I visit the login page
     Then I login as "tomsmith"
     And I enter password as "SuperSecretPassword!"
     When I click on Login button
     Then I am in the "Secure Area"

  Scenario: Valid Logout Test
    Given I visit the login page
    Then I login as "tomsmith"
    And I enter password as "SuperSecretPassword!"
    When I click on Login button
    Then I am in the "Secure Area"
    When I click on Logout button
    Then I see the message "You logged out of the secure area!"

# Scenarios for Invalid Test Cases
  Scenario: Invalid Login Details
    Given I visit the login page
    Then I login as "invalidusername"
    And I enter password as "invalidpassword"
    When I click on Login button
    Then Error message "Your username is invalid!" is displayed

  Scenario: Invalid Login Username
    Given I visit the login page
    Then I login as "invalidusername"
    And I enter password as "SuperSecretPassword!"
    When I click on Login button
    Then Error message "Your username is invalid!" is displayed

  Scenario: Incomplete Login Username
    Given I visit the login page
    Then I login as "tomsmit"
    And I enter password as "SuperSecretPassword!"
    When I click on Login button
    Then Error message "Your username is invalid!" is displayed
 
  Scenario: Invalid Login Password
    Given I visit the login page
    Then I login as "tomsmith"
    And I enter password as "invalidpassword"
    When I click on Login button
    Then Error message "Your password is invalid!" is displayed

  Scenario: Incomplete Login Password
    Given I visit the login page
    Then I login as "tomsmith"
    And I enter password as "SuperSecretPassword"
    When I click on Login button
    Then Error message "Your password is invalid!" is displayed
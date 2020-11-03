Feature: Search
  As a Customer 
  I would like to search for particular job titles 

  Background:
  Given I have open Landing Page

  Scenario: Search job titles containing particular queries
    Given I select "Careers" button
    And I am on "/careers" page
    When I type "Automation" into the "Search" field
    Then I should see roles containing "Automation"
    
Feature: Roles
  As a Customer 
  I would like to search for open roles on the Career list

  Background:
  Given I have open Landing Page

  Scenario: I can see particular role open
    When I select "Careers" button
    Then I am on "/careers" page
    And I should see exactly 1 "QA Automation Engineer" role open

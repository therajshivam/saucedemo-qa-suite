Feature: User Login

  Scenario: Successful login with valid credentials
    Given user is on the login page
    When user enters username "standard_user" and password "secret_sauce"
    Then user should be redirected to inventory page

  Scenario: Login with invalid credentials
    Given user is on the login page
    When user enters username "invalid_user" and password "wrongpassword"
    Then user should see an error message

  Scenario: Login with locked out user
    Given user is on the login page
    When user enters username "locked_out_user" and password "secret_sauce"
    Then user should see locked out error message
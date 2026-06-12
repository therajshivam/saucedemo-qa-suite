Feature: Checkout Process

  Scenario: Complete checkout successfully
    Given user is logged in
    And user adds first product to cart
    And user opens the cart
    When user proceeds to checkout
    And user enters first name "Shivam" last name "Raj" postal code "160001"
    And user clicks continue
    Then user should see order summary
    When user clicks finish
    Then user should see order confirmation
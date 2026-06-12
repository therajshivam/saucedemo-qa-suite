Feature: Shopping Cart

  Scenario: Add product to cart
    Given user is logged in
    When user adds first product to cart
    Then cart count should show 1

  Scenario: Remove product from cart
    Given user is logged in
    When user adds first product to cart
    And user opens the cart
    And user removes the product
    Then cart should be empty
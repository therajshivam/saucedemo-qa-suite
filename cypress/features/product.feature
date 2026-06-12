Feature: Product Listing

  Scenario: Products are displayed on inventory page
    Given user is logged in
    Then user should see 6 products

  Scenario: Sort products by price low to high
    Given user is logged in
    When user sorts products by "lohi"
    Then products should be sorted by price ascending
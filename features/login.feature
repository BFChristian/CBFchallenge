Feature: Challenge

  Scenario: Realizar busqueda en eBay

    Given Ingresar a eBay
    When Ingresar en el campo Search la palabra Pilas
    Then Hacer tap sobre la lupa
    Then Mostrar por consola la cantidad de items encontrados


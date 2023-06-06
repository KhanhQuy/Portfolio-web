def apply_discount(product, discount):
    price = int(product['price'] * (1.0 - discount))
    assert 0 <= price <= product['price'], 'Price out of expected range'
    return price

product = {'name': 'iPhone', 'price': 1000}

print(apply_discount(product, 0.25))
print(apply_discount(product, 1.5))
vegetables = ('Carrot', 'Cucumber', 'Potato', 'Tomato', 'Mushroom')
print(len(vegetables))

print(sorted(vegetables))

vegetables1, vegetables2, vegetables3, *rest = vegetables
print(vegetables1)
print(vegetables2)
print(vegetables3)
print(rest)



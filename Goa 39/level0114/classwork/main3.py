num1 = {1, 2 , 3 , 4, 0 ,6}
num2 = {1, 7 , 8 ,9 , 0 ,10}
num1.add(40)
print(num1)

num2.add(40)
print(num2)

num1.remove(1)
print(num1)

num2.remove(0)
print(num2)

print(num1 | num2) 
print(num1.intersection(num2)) 
print(num1.difference(num2))



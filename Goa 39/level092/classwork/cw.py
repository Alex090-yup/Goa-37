def even_numbers():
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    result1 = []
    for i in numbers:
        if i%2==0:
            result1.append(i*2)
    return result1

print(even_numbers())
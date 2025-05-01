def even_numbers():
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    result1 = []
    result2=[]
    for i in numbers:
        if i%2==0:
            result1.append(i*2)
        else:
            result2.append(i)
    total= sum(result1) + sum(result2)
    return total

print(even_numbers())
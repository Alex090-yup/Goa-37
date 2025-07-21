def result_of_set(my_set: set) -> set:
    my_set.add(True)
    my_set.add('Hello')
    my_set.add(8.9)

    my_set.remove('string')

    return my_set

print(result_of_set(my_set =  {'string', 7.8, 0}))
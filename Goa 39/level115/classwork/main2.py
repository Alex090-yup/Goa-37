my_list = []

for num in range(21):
    my_list.append(num)
print(my_list)

my_list2 = [num for num in range(21)]
print(my_list2)

my_list3 = []

for num in range(10):
    my_list3.append(num*num)
print(my_list3)

my_list4 = [num*num for num in range(10)]
print(my_list4)

my_list5 = []

for num in range(20, 40):
    if num % 2 == 0:
        my_list5.append(num)
print(my_list5)

my_list6 = [num for num in range(20, 40) if num%2 == 0]
print(my_list6)

my_list7 = [1, 2, 3, 4, 5]
my_list8 = []

for num in my_list7:
    if num%2 == 1:
        my_list8.append(num*2)
print(my_list8)

my_list7 = [1, 2, 3, 4, 5]
my_list8 = [num*2 for num in my_list7 if num%2 == 1]
print(my_list8)




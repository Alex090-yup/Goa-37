num1 = 5
num2 = 0

try:
    print(num1/num2)
except ZeroDivisionError:
    print("{} can't devide by zero".format(num1))


try:
    print(int("Hello"))
except ValueError:
    print("value error")


try:
    print("hey")
except SyntaxError:
    print("syntax error")

try:
    my_list = [1, 8, 9]
    print(my_list[100])
except IndexError:
    print("IndexError")


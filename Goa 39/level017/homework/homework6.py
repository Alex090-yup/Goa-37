#for loop:

for i in range(6):
    print('alex')

for i in range(10):
    print(i+2)

for i in range(5):
    print(i-3)

for i in range(4):
    print(i**2)

worb=input('Enter the worb: ')
how_many=int(input('Enter how many againg you want: '))
for i in range(how_many):
    print(worb)


#for while:

i=0
while i<10:
    print(i)
    i=i+1

i=20
while i>10:
    print('hello')
    i=i-1

num1=45
num2=int(input('Guess the number: '))
while num2!=num1:
    num2=int(input('Guess the number: '))
print('Nice!')

worb='GOA'
worb2=input('Guess the worb: ')
while worb2!=worb:
    worb2=input('Guess the worb: ')
print('You guess the worb! Good job!')

i=4
print('2+2=?')
i2=int(input('Write the corect answer: '))
while i2!=i:
    print('Ops, its wrong<')
    i2=int(input('Write the corect answer: '))
print('Ya, its correct answer!')
    
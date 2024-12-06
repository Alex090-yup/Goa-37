#1. დაპრინტეთ Hello world.
#2. შექმენით 2 int ტიპის ცვლადი და გამოიტანეთ მათი ჯამი.
#3. შექმენით 2 str ტიპის ცვლადი 
# და გამოიტანეთ მათი შეერთებული ვერსია (ასევე კომენტარის სახით აღწერეთ რა არის concatenation).
#4. შექმენით 2 int ტიპის ცვლადი და გამოიტანეთ მათი განაყოფი, 
# შემდეგ კი ახსენით რატომ გამოიტანა float-ი და რა ქვია ამ convert-ს (implicit or explicit).
#5. გაიხსენეთ ყველა შედარების ოპერატორი და ჩამოწერეთ ყველაზე 1 მაგალითი.
#6. შეურიეთ შედარების ოპერატორები და მათემატიკური ოპერაციები (მაგ: 5 + 5 == 8  + 2).
#7. გაიხსენეთ ლოგიკური ოპერატორი და ჩამოწერეთ ყველა კომბინაცია.
#8. შეურიეთ ერთმანეთს ლოგიკური და შედარების ოპერატორები და მოიყვანეთ 5 მაგალითი.
#9. შექმენით for loop-ი 1-დან 10-მდე რიცხვების დასაბეჭდად.
#10. შექმენით for loop-ი თითოეული სიმბოლოს დასაბეჭდად სტრინგში -> "Hello, World!".
#11. შექმენით while loop-ი 1-დან 10-მდე რიცხვების დასაბეჭდად.
#12. შექმენით while loop-ი, რომელიც დაიწყებს რიცხვების შეკრებას 1-დან, სანამ ჯამი არ გაუტოლდება 50-ს.
#13. შექმენით ფუნქცია რომელსაც გადაეცემა 
# რიცხვების სია,თქვენი მოვალეობააა გამოითვალე ამ სიის საშუალო არითმეტიკული. 
# test case: [1,3,4,5,2] | output: 3
#14. შექმენით ფუნქცია რომელსაც გადაეცემა  
# რიცხვების სია,თქვენი მოვალეობააა შექმნათ ახალი სია 
# და ამ ახალ სიაში გამოიტანოთ ყოველი რიცხვის კვადრატი (append) და შემდეგ დააბრუნეთ ახალი სია.
#test case: [3,12,5,2,6] | output: [9,144,25,4,36]
#15. გაიხსენეთ ყველა list-ის და string-ის მეთოდები და გამოიყენეთ თავისი მაგალითებით.

#1
print('Hello world!')

#2
num1=2
num2=5
print(num1+num2)

#3
word1='Hello'
word2='World!'
print(word1+word2)
#concatenation- сумма двух слов

#4
num1=49
num2=7
print(num1/num2)
#Вывело float потому, что в питоне число делят точно. 7.0 рподразумывается как число 7 с ноль делыми.
#implicit

#5
5<7
5>7
5<=7
5>=7
5==7
5!=7

#6
operation= 7+8<=4+11
print(operation)

#7
True and False
True and True
False and False
False and True
False or False
True or True
True or False
False or True

#8
5<7 and True
6>0 or False
7<=89 and False
78!=78 or True
56==89 and True

#9
for numbers in range(10):
    print(numbers+1)

#10
for i in 'Hello world':
    print(i)

#11
i=1
while i!=10:
    print(i)
    i=i+1

#12
i=1
while i!=50:
    sum=0
    sum=sum+i
    i=i+1
print(sum)


#13
def arithmeyic_mean(list1):
    calculation1=sum(list1)
    calculation2=calculation1/5
    return calculation2
result=arithmeyic_mean([1,6,7,8,9])
print(result)

#14
def i(list1):
    for numbers in list1:
        calculation=list1**2
    list2=[]
    list2.append(calculation)
    print(list2)

result=i([1,7,8,9,60])
print(i)

#Random Functions:
#4. შექმენით ფუნქცია, რომელიც არგუმენტად იღებს რიცხვს და ამოწმებს, არის თუ არა ის დადებითი.

def examination(num1):
    if num1>0:
        print('This nummber is positive')
    else:
        print('This nummber is negative')
examination(int(input("Write your number: ")))
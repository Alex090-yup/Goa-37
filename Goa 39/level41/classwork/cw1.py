#1. შექმენით ფუნქცია, სადაც გექნებათ 5 სიტყვიანი სია, შემდეგ მომხმარებელს შემოატანინეთ 0-იდან 5-მდე რიცხვი, 
# და დაუპრინტეთ ეგ index თქვენი შექმნილი სიიდან.

list=['violet', 'toyota','lisa', 'shopify', 'stripe']

def index(user_choise):
    print(list[user_choise])

index(int(input('Enter your number: ')))
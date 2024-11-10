#შექმენით ფუნქცია, vending-machine, გექნებათ პროდუქტების სია, მომხმარებელმა, კი უნდა აირჩიოს სასურველი პროდუქტი, თქვენ კი ის უნდა დაუპრინტოთ,

#Bonus:
#თუმცა მომხმარებელს საწყისად უნდა გააჩნდეს რაღაც კონკრეტული თანხა, ხოლო პროდუქტიც რაღაც გაარკეული თანხა უნდა ღირდეს, თუ მომხმარებელს არ ექნება საკმარისი ფული, არ უნდა დაუპრინტოთ შესაბამისი ინდექსის პროდუქტი.
print('Average product:')
print(" ")
print('''Cola(0)=6$, Sprite(1)=5$, Pepsi(2)=7$, Fanta(3)=3$
Lays'(4)=1$, Doritos(5)=1$, Pringles(6)=3$, Cheetos(7)=4$
Bounty(8)=5$, Twix(9)=6$, Snikers(10)=8$, Kinder(11)=10$  ''')

list=['Cola', 'Sprite', 'Pepsi', 'Fanta', 'Lays', 'Doritos', 'Pringles', 'Cheetos', 'Bounty', 'Twix', 'Snikers', 'Kinder']


def vending_machine(user_choise, index):
    price1=6
    price2=5
    price3=7
    price4=3
    price5=1
    price6=1
    price7=3
    price8=4
    price9=5
    price10=6
    price11=8
    price12=10
    if price==price1:
        print(list[user_choise])
        print('You have successfully purchased the product')
    elif price==price2:
        print(list[user_choise])
        print('You have successfully purchased the product')
    elif price==price3:
        print(list[user_choise])
        print('You have successfully purchased the product')
    elif price==price4:
        print(list[user_choise])
        print('You have successfully purchased the product')
    elif price==price5:
        print(list[user_choise])
        print('You have successfully purchased the product')
    elif price==price6:
        print(list[user_choise])
        print('You have successfully purchased the product')
    elif price==price7:
        print(list[user_choise])
        print('You have successfully purchased the product')
    elif price==price8:
        print(list[user_choise])
        print('You have successfully purchased the product')
    elif price==price9:
        print(list[user_choise])
        print('You have successfully purchased the product')
    elif price==price10:
       print(list[user_choise])
       print('You have successfully purchased the product')
    elif price==price11:
        print(list[user_choise])
        print('You have successfully purchased the product')
    elif price==price12:
        print(list[user_choise])
        print('You have successfully purchased the product')
    else:
        print('Not enough money')

user_choise1=int(input('Choose your product: '))
price=(int(input('Deposit the amount: ')))
vending_machine(user_choise1, price)
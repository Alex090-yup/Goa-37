print('''Avaible products: 
      
Cola(1), Fanta(2), Pepsi(3), Sprite(4)
Lays(5), Pringles(6), Doritos(7), Chips(8)
Bounty(9), Snikers(10), Twix(11), Kinder(12)
      ''')

user_choise=int(input('Write your product number: '))

products= ['Cola', 'Fanta', 'Pepsi', 'Sprite',
'Lays', 'Pringles', 'Doritos', 'Chips',
'Bounty', 'Snikers', 'Twix', 'Kinder']

poduct_to_user=(products[user_choise-1])
print(' ')
print('Get your product: ' + poduct_to_user + '!')





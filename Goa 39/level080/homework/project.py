def p():
    a = int(input('Guess number: '))
    while a!=5:
        a = int(input('Guess number: '))
        if a==5:
           print('You guess number!')
           break
        else:
            print('You dont guess number!')

p()

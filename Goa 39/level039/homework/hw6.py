#6. შექმენით def ფუნქცია რომელიც არგუმენტად აიღებს list-ს რომელშიც მომხმარებელი 
# შეიყვანს მინიმუმ 5 რიცხვს და დაპრინტავს ამ list-ის მაქსიმალურ რიცხვს, მინიმალურ რიცხვს, 
# რიცხვების ჯამს და list-ის სიგრძეს.

def list1(list2):
    max_in_list=max(list2)
    min_in_list=min(list2)
    len_of_list=len(list2)

    print(max_in_list)
    print(min_in_list)
    print(len_of_list)

list1([4,78,56,45,23])

    

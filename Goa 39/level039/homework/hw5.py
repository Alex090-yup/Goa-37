#შექმენით 4 სხვადასხვა list-ი, თითოში დაამატეთ მინიმუმ 10 ელემენტი
#და დაპრინტეთ:
#1) პირველ list-ის პირველიდან მეოთხე ელემენტამდე ცვლადები.
#2) მეორე list-ის მეოთხედან მერვე ელემენტამდე ცვლადები ფორ ციკლის გამოყენებით.
#3) მესამე list-ის მეცხრედან მეექვსე ელემენტამდე ცვლადები გაითვალისწინეთ არა 6დან 9მდე არამედ 9დან 6მდე გამოიყენეთ 
# უარყოფითი რიცხვები.
#4) მეოთხე list-ში დაპრინტეთ მისი ყველა ცვლადი while ცოკლის გამოყენებით.

list1=[345,789,'kiu',990,'iyyiu',9,'uiyuh','giini',7,'ygh']
list2=[345,789,'hyi',86,'iyyiu',99,'uiyuh','giini',77,'ygu']
list3=[345,789,'kiu',789,'iyyiu',979,'uiyuh','giini',78797,'ghu']
list4=[345,789,'iohiu',0,'iyyiu',987,'uiyuh','giini',78767,'yhu']

#1)

print(list1[1:5])

#2)
for i in list2:
    print(list2[4:9])
    break

#3)

print(list3[-1:-3])

#4)

while list4==list4:
    print(list4)
    break
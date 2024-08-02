print('Write your age: ')
your_age = input()

print('Write your dad age: ')
your_dad_age = input()

your_dad_age_after_23_years = int(your_dad_age) + 23
calculation = your_dad_age_after_23_years - int(your_age)
print("Your father will be older than you in 23 years by: " + str(calculation))

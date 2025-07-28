num = 2
num2 = 0
try:
    result = num/num2 
except:
    print("number can't devide by zero")
else:
    print(f"Successfully, {result=}")

finally:
    print("Hey")


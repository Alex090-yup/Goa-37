f = open("./lomi.txt", "r")
content = f.read()
print(content)

with open("hey.txt", "a") as f:
    f.write("hello bro")
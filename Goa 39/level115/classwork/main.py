person = {
    "name": "Ken",
    "hobby": "Football",
    "age":  15,
    "job": "teacher"

}



same_dict = person.copy()
print(same_dict)

person.get("name")
person.items()
person.keys()
person.values()
person.pop("name")
person.popitem()
new_info = {"graduate": True}
person.update(new_info)
person.clear()
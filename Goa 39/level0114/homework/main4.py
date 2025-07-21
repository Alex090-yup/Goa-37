def count_el_in_list(my_list: list) -> str:
    result = []
    for el in set(my_list):
        count_el = my_list.count(el)
        if count_el>=2:
            text = f"{el} - {count_el}"
            result.append(text)
        

    return ", ".join(result)

print(count_el_in_list(my_list = ['apple', 'apple', 'banana', 'cherry', 'cherry']))
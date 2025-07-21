def tuple_info(my_tuple: tuple) -> str:
    lenght = len(my_tuple)
    text = f"{lenght}, {my_tuple[0]}, {my_tuple[-1]}"
    return text

print(tuple_info(my_tuple = ('crocodile', 'lion', 'tiger', 'hippo', 'eagle', 'lion')))
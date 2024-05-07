
while True:
    rows = input("Enter the number of rows of stars you wanna print: ").strip()
    if rows.isdigit():
        
        # always use int() after this
        rows = int(rows)
        break
    else:
        print("Please enter a number")

white_space = rows - 1
for i in range (rows):
    print(" "*white_space, end=" ") # Here end is used because i want to print the star just after this is the next print
                                    # The SPECIALITY of end='' is that it connects to print() statements untill an
                                    # empty print statement is put in between them
    for j in range (0, i+1):
        print("*",end=" ")
    print()
    white_space -= 1


# SAME = using WHILE loop 
print()
row = rows
col = 1
white_space = row - 1
while row > 0:
    print(" "*white_space, end="")
    b = 0
    while col > b:
        print("*", end="")
        b += 1
    print()
    white_space -= 1
    col += 2
    row -= 1

# Tried but got miscellaneous outputs 
print()
row = rows
col = 1
white_space = row - 1
while row > 0:
    print(" "*white_space, end=" ")
    b = 0
    while col > b:
        print("*", end=" ")
        b += 1
    print()
    white_space -= 1
    col += 2
    row -= 1

    
row = rows
col = 1
white_space = row - 1
while row > 0:
    print(" "*white_space, end=" ")
    b = 0
    while col > b:
        print("*", end=" ")
        b += 1
    print()
    col += 2
    row -= 1

    

row = rows
col = 1
white_space = row - 1
while row > 0:
    print(" "*white_space, end=" ")
    b = 0
    while col > b:
        print("*", end=" ")
        b += 1
    print()
    white_space -= 2
    col += 2
    row -= 1


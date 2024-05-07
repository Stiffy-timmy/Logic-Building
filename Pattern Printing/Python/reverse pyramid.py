

# reverse left-pyramid only
#Checking user input
while True:
    rows = input("Enter the number of rows of reverse pyramid you want to print:").strip()
    if rows.isdigit():
        
        # always use int() after this
        rows = int(rows)
        break
    else:
        print("Please enter a number")

col = rows
for i in range (rows):
    for _ in range (col):
        print("*",end=" ")
    print()
    col -= 1

print()


# Reverse full pyramid
row = rows 
col = row
white_space = 0
for i in range (row):
    print(" "*white_space,end="")
    for _ in range (col):
        print("*",end=" ")
    print()
    white_space += 1
    col -= 1
print()


# To print Reverse right pyramid, do just a simple change in above code
row = rows 
col = row
white_space = 0
for i in range (row):
    print("  "*white_space,end="") #A BIT ONE MORE SPACE ADDED HERE, TO COVER THE HALF-SPACED GAP
    for _ in range (col):
        print("*",end=" ")
    print()
    white_space += 1
    col -= 1
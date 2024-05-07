
# Right pyramid star
while True:
    a = input("Enter the number of rows of stars you wanna print: ").strip()
    if a.isdigit():
        
        # always use int() after this
        a = int(a)
        break
    else:
        print("Please enter a number")

for i in range(a):
    for _ in range(0,i+1):
        print("*",end=" ")
    print()

# Using while loop (same)
row = a
col = 1
while row > 0:
    b = 0
    while col > b:
        print("* ",end=" ")
        b += 1
    print()
    row -= 1
    col += 1

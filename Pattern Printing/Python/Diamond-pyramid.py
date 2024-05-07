
# Diamond Pyramid
rows = int(input("Enter the number of of rows you want in a pyramid (will also give a dropdown pyramid attached to it):"))
back_col = rows - 1 #After experiments, this step was really importat to do back_col = rows - 1 instead of directly
                    #doing back_col = 4
space = rows 
# DON'T DO SPACE = ROWS-1 UNLIKE PREVIOUS PYRAMID PROGRAMS
for i in range(rows):
    if space != 0:
        print(" "*space,end=" ")
        for j in range(0,i+1):
            print("*",end=" ")
        print()
        space -= 1
        
    if space == 0:
        rows -= 1
        for i in range(rows):
            print(" "*space,end="  ")
            for j in range (0, back_col):
                print(" *",end="")
            print()
            space += 1
            back_col -= 1

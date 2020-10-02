import random
No1 = random.randint(0,9)
No2 = random.randint(0,9)

if No1 < No2:
    No1, No2 = No2, No1

answer= eval(input("What is "+ str(No1)+ "-"+ str(No2) + "?"))

while No1 - No2 != answer:

answer= eval(input("wrong, what is "+ str(No1) + "-" + str(No2) + "?"))

 print("correct")

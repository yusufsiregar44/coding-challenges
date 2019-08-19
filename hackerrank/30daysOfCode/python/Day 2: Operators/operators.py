import math
import sys

def solve(meal_cost, tip_percent, tax_percent):
    # initiate variable to contain total cost
    totalCost = 0

    # convert meal_cost to float
    base_cost = float(meal_cost)

    # calculate tip
    total_tip = base_cost * float(tip_percent)/100

    # calculate tax
    total_tax = base_cost * float(tax_percent)/100

    # calculate and round total cost
    totalCost = round(base_cost + total_tax + total_tip)

    print(totalCost)
    
    return totalCost

solve(sys.argv[1], sys.argv[2], sys.argv[3])
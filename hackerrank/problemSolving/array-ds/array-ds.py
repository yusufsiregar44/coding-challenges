def reverseArray(a):
    reversedArray = []
    index = len(a) - 1

    while (index >= 0):
      reversedArray.append(a[index])
      index -= 1

    print(reversedArray)
    return reversedArray

a = [1, 2, 3]

reverseArray(a)
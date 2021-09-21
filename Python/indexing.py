import numpy as np

people_height = [189, 170,171, 189, 163, 183, 171, 185, 
168, 173, 183, 173, 173, 175, 178, 183, 193, 178, 
173, 174, 183, 183, 180,170, 178, 182, 180, 
183, 178, 182, 188, 175, 179, 183, 193, 182, 183, 177, 
185, 188, 188, 182, 185, 191,155]


people_ages = [51,51, 57, 61, 66,57,40 ,87,57, 58, 
57, 61, 54, 68, 51, 49, 64, 
50, 48, 65, 52, 38,56, 46,51, 47, 55, 55, 54, 42, 51,
56, 55, 51, 54, 51, 60, 62, 43, 33,55, 56, 61, 52, 69]

#indexing
people_height= np.array(people_height)
print(people_height[10:])
print(people_height[:6])
print(people_height[-10:])
print(people_height[:-20])

people_ages = np.array(people_ages)
print (people_ages[4:])
print (people_ages[0:15])
print (people_ages[20:])
print (people_ages[-45:])
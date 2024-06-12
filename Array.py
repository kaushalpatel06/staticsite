# array in python
import array as arr
vals=arr.array('i',[1,2,5,3,8,4,2])
# for i in range(6):
#     print(vals[i]) -- this take a index value
vals.reverse()
print(vals)
# take the number directly:
for i in vals:
    print(i)
for i in range(len(vals)):
    print(vals[i])
# create an array without knowing the type of it:
arrunknown=arr.array(vals.typecode,(a*a for a in vals))
for e in arrunknown:
    print(e)

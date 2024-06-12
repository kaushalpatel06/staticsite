#Types of varriable in python

x=2
y=x+8
print(y)

s='kaushal'
print(s[0:2])
print(s[0:4:2])

temp='my name is kaushal'
print(temp[0:8:4])
print(temp[:4])

# --------------List-----------------
number=[50,10,11,20]
print(number)
print(number[1])
number.pop(2)
print(number)
number.append(100)
print(number)
number.insert(2,300)
print(number)
print(number.pop())
r=list(range(20))
new_r=list(range(1,10,3))
print(r)
print(new_r)
d={
    'index1':'value1',
    'index2':'value2',
    'index3':'value3'
}
print(d.keys())
print(d.values())
print(d['index1'])
print(d.get('index2'))

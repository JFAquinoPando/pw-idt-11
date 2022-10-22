"""Hacer un programa que imprima la suma de los 
números del 1 al 10"""
def sumar ():
    final = 10 #int(input("suma hasta el numero 10:"))
    suma = 0 
    for i in range(1,final+1):
        suma = suma + i
    print("suma de numeros", suma )

sumar()





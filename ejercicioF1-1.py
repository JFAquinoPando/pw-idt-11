"""- Hacer un programa que imprima del 10 al 0 en orden 
decreciente."""
def programaQueImprime (hasta):
    desde = 0
    while(desde <= hasta):
      print ("valor: ", hasta - desde)
      desde=desde + 1

numeroAgregado = int(input("introducir numero:"))
programaQueImprime (numeroAgregado)
from manejoArchivos import manejoArchivos

#manejo de contexto with : sintaxis simplificada, abre y cierra el archivo
#with open('prueba.txt', 'r', encoding='utf8') as archivo:
 #   print(archivo.read())
#no hace falta ni el try, ni el finally
#en el contecto de with lo que se ejecuta de manera automatica
#utiliza diferentes metodos: __enter__ este es el que abre
#y el que cierra es : __exit__

with manejoArchivos('prueba.txt') as archivo:
    print(archivo.read())
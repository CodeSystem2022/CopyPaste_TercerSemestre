archivo = open('prueba.txt', 'r', encoding='utf8') # las letras son: r(read) a(append), w(write), x
#print(archivo.read())
 #print(archivo.read(5))#muestra la cantidad de carateres que indicamos
#print(archivo.read(21))#se continua desde la linea anterior

#print(archivo.readline())#lee la sig linea

#vamos a iterar el archivo, cada una de las lineas
#for linea in archivo:
    #print(linea) iteramos todos los elementos del archivo
    #print(archivo.readlines()) #accedemos al archivo como si fuera una lista osea una sola linea

#anexamos info, copiamos a otro
archivo2 = open('copia.txt', 'w', encoding='utf8')
archivo2.write(archivo.read())
archivo.close()# cerramos el primer archivo
archivo2.close()#cerramos el 2do archivo

print('Se ha terminado el proceso de leer y copiar archivos')

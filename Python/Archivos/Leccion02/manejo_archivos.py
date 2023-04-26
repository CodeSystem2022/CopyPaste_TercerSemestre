#DEclaramos una variable
try:
    archivo = open('prueba.txt', 'w', encoding='utf8') #la w es de write significa escribir
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n')
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write('como por ejemplo: acción, ejecución\n')
    archivo.write('\nt esta es para texto o text, \nb archivos binarios, \nw+(lee y escribe), \nr+escribe y lee\n')
    archivo.write('Con esto terminamos.\n')
    archivo.write('Saludos a los alumnos de la tecnicatura\n')
    archivo.write('las letras son:\nr(read) \na(append - anexar), \nw(write), \nx (crea un archivo)')



except Exception as e:
    print(e)
finally: #siempre se ejecuta
    archivo.close() # con esto se debe cerrar el archivo
#archivo.write('todo quedo perfecto') no se puede poner nada despues de cerrar el archivo

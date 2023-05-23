import psycopg2 as bd #esto es para poder conectarnos a Postgres
conexion = bd.connect(

    user='postgres',
    password='4271369.',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)
try:
    conexion.autocommit= False
    cursor = conexion.cursor()
    sentencia= 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    valores= ('maria', 'Esparza', 'mesparza@mail.com')
    cursor.execute(sentencia, valores)
    print('Termina la transaccion')

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()

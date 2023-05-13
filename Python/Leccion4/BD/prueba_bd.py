import psycopg2 #esto es para poder conectarnos a Postgres

conexion = psycopg2.connect(
    user='postgres',
    password='4271369.',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'SELECT * FROM persona'
            cursor.execute(sentencia) #de esta manera ejecutamos la sentencia
            registros = cursor.fetchall()#recuperamos todos los registros que seran una lista
            print(registros)

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()

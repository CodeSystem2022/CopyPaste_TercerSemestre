import psycopg2 as bd #esto es para poder conectarnos a Postgres 
conexion = bd.connect(
    user='postgres',
    password='4271369.',
    host='127.0.0.1',
    port='5432',
    database='test_bd')

try:
    conexion.autocommit= False # esto directament eno deberia estar, inicia la transaccion
    cursor = conexion.cursor()
    sentencia= 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    valores= ('Carlos', 'Lara', 'clara@mail.com')
    cursor.execute(sentencia, valores)

    sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    valores = ('Juan', 'Juarez', 'jcjuarez@mail.com', 1)
    cursor.execute(sentencia, valores)

    conexion.commit() #hacemos el commit manualmente, se cierra la transaccion
    print('Termina la transaccion')

except Exception as e:
    conexion.rollback()
    print(f'Ocurrio un error, se hizo un rollback: {e}')

finally:
    conexion.close()
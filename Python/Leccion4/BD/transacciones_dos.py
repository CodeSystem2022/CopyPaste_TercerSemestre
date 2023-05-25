import psycopg2 as bd #esto es para poder conectarnos a Postgres 
conexion = bd.connect(
    user='postgres',
    password='4271369.',
    host='127.0.0.1',
    port='5432',
    database='test_bd')
    
from logger_base import log
from conexion import Conexion
class CursorDelPool
    def __init__(self):
        self.conexion = None
        self._cursor = None

    def __enter__(self):
        log.debug('Inicio del metodo with y __enter__')
        self._conexion = Conexion.obtenerConexion()
        self._cursor = self._conexion.cursor()
        return self._cursor
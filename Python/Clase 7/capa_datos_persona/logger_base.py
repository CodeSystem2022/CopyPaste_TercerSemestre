import logging as log
#log = logging sino se puede poner asi
# llamamos una configuracion basica
if __name__ == '__main__':
    log.basicConfig(level=log.DEBUG)
    log.debug('Mensaje a nivel debug')
    log.info('Mensaje a nivel info')
    log.warning('Mensaje a nivel warning')
    log.error('Mensaje a nivel error')
    log.critical('Ḿensaje a nivel critical')

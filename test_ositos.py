# Archivo Python para probar funcionalidades básicas

def contar_ositos(lista_ositos):
    # Cuenta la cantidad de ositos en la lista
    return len(lista_ositos)

def saludar_osito(nombre):
    print(f"Hola, {nombre}! Bienvenido a Ositos Dulces")

if __name__ == "__main__":
    ositos = ["Pelusa", "Chispa", "Dulce", "Mimoso"]

    # Llamada correcta
    cantidad = contar_ositos(ositos)
    print(f"Cantidad de ositos: {cantidad}")

    # Error intencional: llamar función con argumento faltante
    saludar_osito()

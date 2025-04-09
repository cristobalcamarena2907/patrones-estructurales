Parte 1: Investigación

Principales diferencias
Decorator: Añade responsabilidades o comportamientos adicionales a un objeto dinámicamente sin modificar su estructura. Se enfoca en extender la funcionalidad.
Proxy: Proporciona un sustituto o representante de otro objeto para controlar el acceso a este. Se enfoca en controlar el acceso.

Escenarios de uso
Decorator: Usaría este patrón cuando necesito añadir funcionalidades a objetos sin afectar a otros objetos de la misma clase, cuando extender mediante herencia no es práctico o posible, o cuando necesito añadir o quitar responsabilidades dinámicamente en tiempo de ejecución.
Proxy: Implementaría este patrón para control de acceso a un objeto (proxy de protección), cargar objetos pesados bajo demanda (proxy virtual), cuando necesito implementar caché (proxy de caché), para crear un punto de acceso remoto (proxy remoto), o para registro de accesos a un objeto (proxy de registro).

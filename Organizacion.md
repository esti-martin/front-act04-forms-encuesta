## ORGANIZACIÓN IOE
**Scrumm Master:** Esti
**Colaboradores:** Ion y Orlando

## DISTRIBUCIÓN DEL TRABAJO
Secciones 1 y 2: Ion
Sección 3: Orlando
Sección 4: Esti

## REUNIONES
### 12/3
- Organización del archivo HTML 
    Realización de la estructura de hmtl con form entre todos
- Distribución para realizar el HTML (trabajo individual)
    - Ion: Sección 1 y 2
    - Orlando: Sección 3
    - Esti: sección 4
- Planteamiento de cómo trabajar en equipo en GitHub
    - Inicialmente se decide trabajar en una única rama, pero con la intención de prácticar un día a día real...
    - Se decide trabajar con varias ramas (branch) que luego habrá que fusionar llegado el momento
        - Orlando: rama de trabajo de Orlando
        - Ion: rama de trabajo de Ion
        - Esti: rama de trabajo de Esti
        - Docu: rama de documentación del proceso de trabajo
        - Main: rama principal donde se irán fusionando las ramas

### 13/3
- Arreglar problema con ramas por haber hecho cambios en main después de haber hecho las subramas
    - Para solucionar el problema:
        - Subir a origin/main los cambios realizados
        - Cada miembro hacer un pull de main en su local (origin/main --> local/main)
        - Cada miembro tuvo que poner en stash el trabajo que había avanzado en su rama
        - Cada miembro hizo pull de la rama origin/main a local/"rama de cada uno" (MALA PRÁCTICA)
        - Por último, se aplicó el stash en la rama propia actualizada con el main
- Seguimos trabajando el HTML individualmente
- Fusionamos (no eliminar) las ramas individuales con la rama main
    - Lo hicimos uno por uno en equipo
        - Orlando:
            - Hizo push a origin/orlando
            - Cambio a la rama main
            - Hizo pull origin orlando (MALA PRÁCTICA)
            - No dio problemas, porque no había conflictos por ser el primero
        - Esti:
            - Hizo push a origin/esti
            - Cambió a la rama main
            - Hizo pull de origin/main a local/origin
            - Hizo pull origin esti (MALA PRÁCTICA)
            - CONFLICTOS
            - Arreglar con la herramienta de corregir conflictos y aceptar los cambios
            - Hizo push a origin main
        - Ion:
            - Hizo push a origin/ion
            - Cambió a la rama main
            - Hizo pull de origin/main a local/origin
            FORMA CORRECTA DE HACERLO
            - En vez de pull, utilizamos el comando merge para fusionar las ramas local/main y local/ion
            - CONFLICTOS
            - Arreglar con la herramienta de corregir conflictos y aceptar los cambios
            - Hizo push a origin main
- Prototipo en Penpot.
    - Decisión de que cada sección, estaría en una página nueva para ser más adaptativo a mobile
    - Nos damos cuenta, de que necesitamos una barra de navegación
- Hacemos la barra de navegación en HTML
- Empezamos a mirar cómo hacer los apartados del formulario en JS
- Nos damos cuenta de que necesitamos dar algo de cuerpo al formulario y a la barra de navegación
- Dejamos JS de momento
- Empezamos a poner estilos (CSS) al formulario y a la barra de navegación

### 14/3
- Preparación del documento para presentar nuestra experiencia de equipo
---
title: 'De autocompletar a delegar: mi experiencia de desarrollo con agentes'
description: 'Cómo pasé de autocompletar código con Cursor a delegar tareas completas a agentes, y qué aprendí sobre specs, harnesses y sobre no casarse con un solo modelo.'
date: 2026-10-19
lang: es
---

## 1. Punto de partida

Recuerdo mis primeras interacciones con modelos de IA. Creo que dentro de mis primeros pasos estuvo la creación de una cuenta de Claude cuando todavía se trataba de una experiencia web y donde debías copiar y pegar el contenido. Hasta este momento, mi trabajo seguía siendo el trabajo de antes: escribía código a mano, pasaba horas tal vez intentando arreglar un bug o encontrar cómo llevar a cabo lo que necesitaba hacer. Poco después llegó Cursor. Recuerdo mi asombro por empezar a contar con herramientas que no solo autocompletaban el código sino que empezaban a dar sugerencias o que trataban de adivinar el siguiente fragmento de código. Sin embargo, de la misma manera que estaba asombrado, también tenía cierto escepticismo. La mayoría de los casos de uso que veía eran con Javascript y como desarrollador Flutter creía que le faltaba tiempo para que todas esas funcionalidades maravillosas pudiesen sernos útiles.

Para aquel entonces, debíamos esperar más tiempo para acceder a mejores modelos. Las skills tampoco existían. Yo mientras tanto, seguía probando Claude a través de su sitio web despejando algunas dudas, preguntándole sobre algún tema puntual con un BLoC o Cubit pero no mucho más. Fue pasando el tiempo y lo que parecía lejano ya empezaba a ser una realidad: el autocompletado de Cursor comenzaba a funcionar de manera decente con Flutter. Las sugerencias que iba recibiendo tenían sentido pero muchas veces terminaba por rechazarlas porque o no aplicaban o no era lo que quería hacer.

Y después, llegó el chat. **Ese fue el primer punto de inflexión: ya no era copiar y pegar desde el sitio web de Claude sino que el cambio se aplicaba directamente sobre el código.** Era maravilloso.

## 2. El primer cambio: conversar y dar contexto

Comencé a tener mis primeras conversaciones. Sentía que los resultados iban mejorando, pero no porque yo hubiera mejorado mi forma de preguntar, sino porque lentamente los modelos eran cada vez más capaces. Además, de a poco comenzaban a aparecer nuevos conceptos como *contexto*, *tokens*, *memoria*. Y no solo aparecían nuevos conceptos sino nuevas formas de interactuar con estos modelos. Recuerdo cuando se empezaban a ver los primeros artículos sobre *prompt engineering* y los beneficios de aplicarlo. Todavía era relativamente sencillo mantenerse al día porque el ritmo al cual se publicaban nuevos conceptos o herramientas permitía incorporarlos de a poco.

Cada día que pasaba me encontraba utilizando cada vez más esta nueva manera de interactuar con los modelos en mi flujo de desarrollo. Sin embargo, muchas veces me frustraba y terminaba borrando toda la sugerencia y volviendo a empezar de cero. En muchos casos se notaba que todavía daban sugerencias que podían hacerse mejor: por ejemplo, usar un `Container` injustificadamente, cuando en realidad un `SizedBox` aplicaba mejor (para aquel entonces los modelos no eran los modelos que conocemos hoy en día: súper completos, performantes, etc.).

## 3. El salto a delegar

Para entonces, Cursor se había transformado en mi IDE por defecto, dejando atrás VS Code. Sin embargo, cuando Claude Code surge como producto y empezó a ser esa herramienta de la que todo el mundo hablaba en redes, lo empecé a probar y ahí me di cuenta de que esto ya era otra cosa: las sesiones parecían infinitas, los resultados eran cada vez mejores y el consumo parecía no acabarse nunca. El momento de salto de calidad había llegado.

En paralelo tenía Cursor y Claude Code, tirando prompts, viendo cómo se modificaba el código, metiendo mano de vez en cuando. Eso de a poco fue transicionando a lo que hoy conocemos como desarrollo agéntico. **Lentamente, y sin darme cuenta, mi rol empezaba a ser el de un orquestador que delegaba tareas a varios agentes y no el de un programador que tiraba líneas de código.**

## 4. De tirar prompts a escribir specs

Consumo mucho X, y por formar parte del mundo IT, tengo la posibilidad de mantenerme a la vanguardia de lo que va surgiendo y de lo que la comunidad va comentando. El salto al *spec-driven development* fue, de nuevo, mucho de ir viendo cómo se manejaba la comunidad, qué iba probando, qué reportaban que les servía, y de prueba y error en mi trabajo y en proyectos personales.

Para ese momento los modelos ya eran capaces de hacer el trabajo completo y se transformó en una realidad que le diera rienda suelta al modelo para escribir el código. Ahí empecé a aprender también sobre harness engineering, otro término que fue migrando: lo que en su momento era aprender cómo escribirle al modelo, ahora la comunidad lo habla en términos los documentos que guían y acompañan el trabajo del agente. El tema la verdad me interesó mucho así que comencé a leer [Learn Harness Engineering](https://walkinglabs.github.io/learn-harness-engineering) y como resultado logré hacer mi propio harness para uno de mis proyectos personales, Telar.

## 5. Dónde estoy hoy

**Considero que la inestabilidad que antes existía respecto a qué modelo era mejor se asentó: Claude y ChatGPT conviven como los dos líderes del desarrollo agéntico**, cada uno con sus propios modelos, y, además, día a día surgen nuevos modelos o herramientas de distintas empresas con diferentes capacidades o que sirven a distintos propósitos (por ejemplo, Jev de TypeSafe AI). Esa lección se nota en algo muy concreto en cómo organizo mis herramientas. Tanto mi suscripción de Claude Code como la de ChatGPT son mensuales, no anuales. Esto me da la flexibilidad necesaria de cambiar según necesite. La única que tengo anual es Cursor por la propuesta de valor de tener varios modelos metidos ahí. Cursor quedó como la base estable; los modelos, como piezas intercambiables arriba.

Siento que me tengo mucho camino por delante (modelos OOS, profundizar en harnesses por fuera de Claude y ChatGPT, etc.). **Lo importante es ir adaptándose a una realidad** (muchas veces muy abrumadora) **que día a día nos pone sobre la mesa nuevas oportunidades.**

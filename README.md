<img src="https://www.chileconvencion.cl/wp-content/themes/convencionconstitucional/assets/images/logo_cc.svg">

---
# 🇨🇱 CONVENCIÓN VODS (VIDEOS ON DEMAND) 🇨🇱

Pequeño script que parsea la página del [Archivo de Transmisiones de la Convención Constitucional](https://convencion.tv/archivo-transmisiones) para obtener información de cada transmisión.

## ¡DAME LOS VIDEOS!
Si no quieres correr el script, puedes encontrar la lista de videos en 2 formatos:

1. `CSV` ⬇️ [Descargar](videos/vods.csv)
2. `JSON` ⬇️ [Descargar](videos/vods.json)

---
## ¿Como usar?

### Dependencias

- `node` y `npm`
- `axios`

Instala las dependencias del proyecto `node` usando:
```shell
npm i
```

Luego elige de acuerdo a lo que quieras obtener:

| Formato Salida | Comando                                       |
| ---            | ---                                           |
| Por pantalla   | `npm run print` o `npm run print {csv\|json}` |
| CSV            | `npm run csv`                                 |
| JSON           | `npm run json`                                |
| TEXTO PLANO    | `npm run text` o `npm run txt`                |

---
# EJEMPLOS DE SALIDA

## Formato CSV
Incluye una cabecera en la primera fila

- `FECHA`: Formato ISO
- `TIPO`: Puede ser `subcomision`, `comision`, `pleno`, `cuenta_publica` u `otro`
- `TITULO`: Titulo con un poco de limpieza para quitar informacion redundante que ya está en los otros campos
- `DESCARGAR`: Link de descarga desde `mediastream`
- `SITIO OFICIAL CONVENCION`: Ver el video en `convencion.tv`

```csv
FECHA;TIPO;TITULO;DESCARGAR;SITIO OFICIAL CONVENCION
2021-07-21T14:03:32.409Z;pleno;pleno 10° sesion 1ª parte;https://mdstrm.com/video/60f829342f78d508285c3f68.mp4;https://convencion.tv/video/pleno-10-sesion-convencion-constitucional-1-parte
2021-07-20T23:24:29.591Z;comision;comision nº1 de reglamento (segunda parte) martes 20 de julio;https://mdstrm.com/video/60f75b2d0ac743642c5dbb00.mp4;https://convencion.tv/video/comision-n1-de-reglamento-convencion-constitucional-segunda-parte-martes-20-de-julio-2021
```

## Formato JSON
Arreglo de videos donde cada elemento tiene los siguientes campo

- `date`: Formato ISO
- `type`: Puede ser `subcomision`, `comision`, `pleno`, `cuenta_publica` u `otro`
- `title`: Titulo con un poco de limpieza para quitar informacion redundante que ya está en los otros campos
- `watch`: Ver el video en `https://convencion.tv`
- `download`: Link de descarga directa

```json
[
  {
    "date": "2021-10-19T20:12:08.114Z",
    "type": "comision",
    "title": "comision de forma de estado nº 1 martes 19 de octubre",
    "watch": "https://convencion.tv/video/comision-de-forma-de-estado-n-1-convencion-constitucional-martes-19-de-octubre-2021",
    "download": "https://mdstrm.com/video/616f26989af044082f036d6f.mp4"
  }
  (...)
]
```

---

Gracias 🤐 `m e d i a s t r e a m`
<img src="https://www.chileconvencion.cl/wp-content/themes/convencionconstitucional/assets/images/logo_cc.svg">

---
# 🇨🇱 CONVENCIÓN VODS (VIDEOS ON DEMAND) 🇨🇱

Pequeño script que parsea la página del [Archivo de Transmisiones de la Convención Constitucional](https://convencion.tv/archivo-transmisiones) para obtener información de cada transmisión.

## ¡DAME LOS VIDEOS!
Si no quieres correr el script, puedes encontrar la lista de videos en 2 formatos dentro de la carpeta [Videos](videos/)

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
FECHA,TIPO,TITULO,DESCARGAR,SITIO OFICIAL CONVENCION
2021-10-01T15:37:50.304Z,pleno,pleno 26° sesion (1°parte) viernes 01 de octubre,https://mdstrm.com/video/61572b4ede844208223a020f.mp4,https://convencion.tv/video/pleno-26-sesion-1parte-convencion-constitucional-viernes-01-de-octubre-2021
2021-10-01T15:09:54.889Z,otro,intervencion elisa loncon (no categorizar),https://mdstrm.com/video/615724c2a1b87508305b29c4.mp4,https://convencion.tv/video/intervencion-elisa-loncon-no-categorizar
2021-10-06T12:39:36.119Z,comision,comision reglamento miercoles 06 de octubre 0,https://mdstrm.com/video/615d9908f6076c0821b21a6d.mp4,https://convencion.tv/video/comision-reglamento-convencion-constitucional-miercoles-06-de-octubre-20210
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
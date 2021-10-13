<img src="https://www.chileconvencion.cl/wp-content/themes/convencionconstitucional/assets/images/logo_cc.svg">

---
# 🇨🇱 CONVENCIÓN VODS (VIDEOS ON DEMAND) 🇨🇱

Pequeño script que parsea la página del [Archivo de Transmisiones de la Convención Constitucional](https://convencion.tv/archivo-transmisiones) para obtener información de cada transmisión.

---

## Dependencias

- `node` y `npm`
- `axios`

## ¿Como usar?

`npm i`

Luego elige de acuerdo a lo que quieras obtener:

| Formato Salida | Comando                                         |
| ---            | ---                                             |
| Por pantalla   | `npm run print`                                 |
| CSV            | `npm run csv`                                   |

---
# EJEMPLO DE SALIDA

## Formato CSV

- `FECHA`: Formato ISO
- `TIPO`: `subcomision`, `comision`, `pleno`, `cuenta publica` u `otro`
- `TITULO`: El título está un poco más que el que aparece en `convencion.tv``
- `DESCARGAR`: Link de descarga desde `mediastream`
- `SITIO OFICIAL CONVENCION`: Ver el video en `convencion.tv`

```csv
FECHA;TIPO;TITULO;DESCARGAR;SITIO OFICIAL CONVENCION
2021-07-21T14:03:32.409Z;pleno;pleno 10° sesion 1ª parte;https://mdstrm.com/video/60f829342f78d508285c3f68.mp4;https://convencion.tv/video/pleno-10-sesion-convencion-constitucional-1-parte
2021-07-20T23:24:29.591Z;comision;comision nº1 de reglamento (segunda parte) martes 20 de julio;https://mdstrm.com/video/60f75b2d0ac743642c5dbb00.mp4;https://convencion.tv/video/comision-n1-de-reglamento-convencion-constitucional-segunda-parte-martes-20-de-julio-2021
```

---

*Gracias mediastream ;)*
/* ============================================================
   NYXAR — productos.js  ★ ÚNICO ARCHIVO QUE EDITAS
   ============================================================

   CÓMO CAMBIAR PRECIOS
   ─────────────────────
   Cada producto tiene:
     precio:        lo que paga el cliente
     precioTachado: el precio "antes" tachado (trampa visual)
   Búscalo con Ctrl+F por nombre de colección y cámbialo.

   RECARGOS CORTE (solo L y XL)
   ─────────────────────────────
     Oversize → +$1 en L y XL
     Boxy     → +$2 en L y XL
   Ajusta en STORE_CONFIG.recargos abajo.

   ESTELAR XL
   ───────────
     XL suma $1 extra. Ajusta en STORE_CONFIG.estelarXLExtra

   MÁS VISTOS
   ───────────
   Cambia masVisto:true en los productos con más clics del mes.
   Solo aparecen los primeros 6.
   ============================================================ */

const STORE_CONFIG = {
  recargos: {
    oversize: { L:1, XL:1 },
    boxy:     { L:2, XL:2 },
  },
  estelarXLExtra:    1.00,
  premiumExtra:      2.99,
  envio2x1:          4.67,
  whatsapp:          "50300000000",   // ← pon tu número sin + ni espacios
  proximoLanzamiento:"2025-10-31T00:00:00",
  dropActivo: {
    titulo:      "Colección Básica",
    descripcion: "Diseños premium desde El Salvador. Tallas XS–XL.",
    linkBoton:   "#productos",
  },
};

const COLECCIONES = [
  { id:"basica",    nombre:"Colección Básica"    },
  { id:"estelar",   nombre:"Colección Estelar"   },
  { id:"hallownyx", nombre:"Hallownyx"            },
  { id:"nooc",      nombre:"NXR Outlaw Club"      },
  { id:"2x1",       nombre:"Colección 2×1"        },
  { id:"sivarx",    nombre:"SivarxNyxar"          },
];

const PRODUCTOS = [

  /* ═══════ COLECCIÓN BÁSICA ═══════ */
  {
    id:101, nombre:"All Eyes On Me", coleccion:"basica", categoria:"prendas",
    precio:25.99, precioTachado:30.00,
    colores:[
      {nombre:"Blanco",hex:"#f0f0f0",imagen:"assets/productos/basica/all-eyes-blanco.webp"},
      {nombre:"Negro", hex:"#111111",imagen:"assets/productos/basica/all-eyes-negro.webp"},
    ],
    slideshow:[],
    tallas:["XS","S","M","L","XL"], cortes:["Regular","Oversize","Boxy"],
    descripcion:"Diseño icónico de la Colección Básica.",
    masVisto:true, destacado:true, disponible:true, linkPago:"#",
  },
  {
    id:102, nombre:"Griega", coleccion:"basica", categoria:"prendas",
    precio:25.99, precioTachado:30.00,
    colores:[
      {nombre:"Blanco",hex:"#f0f0f0",imagen:"assets/productos/basica/griega-blanco.webp"},
      {nombre:"Negro", hex:"#111111",imagen:"assets/productos/basica/griega-negro.webp"},
    ],
    slideshow:[],
    tallas:["XS","S","M","L","XL"], cortes:["Regular","Oversize","Boxy"],
    descripcion:"Arte clásico sobre tela premium.",
    masVisto:false, destacado:false, disponible:true, linkPago:"#",
  },
  {
    id:103, nombre:"NXR CLB", coleccion:"basica", categoria:"prendas",
    precio:25.99, precioTachado:30.00,
    colores:[
      {nombre:"Blanco",      hex:"#f0f0f0",imagen:"assets/productos/basica/nxrclb-blanco.webp"},
      {nombre:"Negro",       hex:"#111111",imagen:"assets/productos/basica/nxrclb-negro.webp"},
      {nombre:"Azul Oscuro", hex:"#1a237e",imagen:"assets/productos/basica/nxrclb-azul.webp"},
      {nombre:"Beige",       hex:"#d6c3a3",imagen:"assets/productos/basica/nxrclb-beige.webp"},
      {nombre:"Rosa Black",  hex:"#e8a0b0",imagen:"assets/productos/basica/nxrclb-rosa-black.webp"},
      {nombre:"Rosa White",  hex:"#f9d0dc",imagen:"assets/productos/basica/nxrclb-rosa-white.webp"},
      {nombre:"Blanco Black",hex:"#e8e8e8",imagen:"assets/productos/basica/nxrclb-blanco-black.webp"},
      {nombre:"Blanco Red",  hex:"#f5dede",imagen:"assets/productos/basica/nxrclb-blanco-red.webp"},
    ],
    slideshow:[],
    tallas:["XS","S","M","L","XL"], cortes:["Regular","Oversize","Boxy"],
    descripcion:"El emblema de la marca en 8 variantes de color.",
    masVisto:true, destacado:true, disponible:true, linkPago:"#",
  },
  {
    id:104, nombre:"Pieza de Ajedrez", coleccion:"basica", categoria:"prendas",
    precio:25.99, precioTachado:30.00,
    colores:[{nombre:"Negro",hex:"#111111",imagen:"assets/productos/basica/ajedrez-negro.webp"}],
    slideshow:[],
    tallas:["XS","S","M","L","XL"], cortes:["Regular","Oversize","Boxy"],
    descripcion:"Diseño estratégico. Solo en negro.",
    masVisto:false, destacado:false, disponible:true, linkPago:"#",
  },
  {
    id:105, nombre:"The Nyxar Club", coleccion:"basica", categoria:"prendas",
    precio:25.99, precioTachado:30.00,
    colores:[
      {nombre:"Negro", hex:"#111111",imagen:"assets/productos/basica/thenyxarclub-negro.webp"},
      {nombre:"Blanco",hex:"#f0f0f0",imagen:"assets/productos/basica/thenyxarclub-blanco.webp"},
    ],
    slideshow:[],
    tallas:["XS","S","M","L","XL"], cortes:["Regular","Oversize","Boxy"],
    descripcion:"La identidad del club.",
    masVisto:true, destacado:true, disponible:true, linkPago:"#",
  },
  {
    id:106, nombre:"Esencia", coleccion:"basica", categoria:"prendas",
    precio:25.99, precioTachado:30.00,
    colores:[
      {nombre:"Blanco",    hex:"#f0f0f0",imagen:"assets/productos/basica/esencia-blanco.webp"},
      {nombre:"Negro",     hex:"#111111",imagen:"assets/productos/basica/esencia-negro.webp"},
      {nombre:"Azul Oscuro",hex:"#1a237e",imagen:"assets/productos/basica/esencia-azul.webp"},
      {nombre:"Beige",     hex:"#d6c3a3",imagen:"assets/productos/basica/esencia-beige.webp"},
      {nombre:"Rosa",      hex:"#f9a8c9",imagen:"assets/productos/basica/esencia-rosa.webp"},
      {nombre:"Blanco Alt",hex:"#e8e8e8",imagen:"assets/productos/basica/esencia-blanco-alt.webp"},
    ],
    slideshow:[],
    tallas:["XS","S","M","L","XL"], cortes:["Regular","Oversize","Boxy"],
    descripcion:"Seis colores para un solo diseño.",
    masVisto:false, destacado:true, disponible:true, linkPago:"#",
  },
  {
    id:107, nombre:"Dragón de Batalla", coleccion:"basica", categoria:"prendas",
    precio:25.99, precioTachado:30.00,
    colores:[
      {nombre:"Blanco",hex:"#f0f0f0",imagen:"assets/productos/basica/dragon-blanco.webp"},
      {nombre:"Negro", hex:"#111111",imagen:"assets/productos/basica/dragon-negro.webp"},
    ],
    slideshow:[],
    tallas:["XS","S","M","L","XL"], cortes:["Regular","Oversize","Boxy"],
    descripcion:"Dragón de batalla. Colección Básica.",
    masVisto:false, destacado:false, disponible:true, linkPago:"#",
  },

  /* ═══════ COLECCIÓN ESTELAR ═══════ */
  {id:201,nombre:"STLR 001",coleccion:"estelar",categoria:"prendas",precio:34.99,precioTachado:40.00,
   colores:[{nombre:"Negro",hex:"#111111",imagen:"assets/productos/estelar/stlr-001.webp"}],
   slideshow:[],tallas:["XS","S","M","L","XL"],cortes:["Regular","Oversize","Boxy"],
   descripcion:"Colección Estelar. Solo negro. XL +$1.",masVisto:false,destacado:true,disponible:true,linkPago:"#"},
  {id:202,nombre:"STLR 002",coleccion:"estelar",categoria:"prendas",precio:34.99,precioTachado:40.00,
   colores:[{nombre:"Negro",hex:"#111111",imagen:"assets/productos/estelar/stlr-002.webp"}],
   slideshow:[],tallas:["XS","S","M","L","XL"],cortes:["Regular","Oversize","Boxy"],
   descripcion:"Colección Estelar. Solo negro. XL +$1.",masVisto:false,destacado:false,disponible:true,linkPago:"#"},
  {id:203,nombre:"STLR 003",coleccion:"estelar",categoria:"prendas",precio:34.99,precioTachado:40.00,
   colores:[{nombre:"Negro",hex:"#111111",imagen:"assets/productos/estelar/stlr-003.webp"}],
   slideshow:[],tallas:["XS","S","M","L","XL"],cortes:["Regular","Oversize","Boxy"],
   descripcion:"Colección Estelar. Solo negro. XL +$1.",masVisto:false,destacado:false,disponible:true,linkPago:"#"},
  {id:204,nombre:"STLR 004",coleccion:"estelar",categoria:"prendas",precio:34.99,precioTachado:40.00,
   colores:[{nombre:"Negro",hex:"#111111",imagen:"assets/productos/estelar/stlr-004.webp"}],
   slideshow:[],tallas:["XS","S","M","L","XL"],cortes:["Regular","Oversize","Boxy"],
   descripcion:"Colección Estelar. Solo negro. XL +$1.",masVisto:false,destacado:false,disponible:true,linkPago:"#"},
  {id:205,nombre:"STLR 005",coleccion:"estelar",categoria:"prendas",precio:34.99,precioTachado:40.00,
   colores:[{nombre:"Negro",hex:"#111111",imagen:"assets/productos/estelar/stlr-005.webp"}],
   slideshow:[],tallas:["XS","S","M","L","XL"],cortes:["Regular","Oversize","Boxy"],
   descripcion:"Colección Estelar. Solo negro. XL +$1.",masVisto:false,destacado:false,disponible:true,linkPago:"#"},

  /* ═══════ HALLOWNYX — todas agotadas ═══════ */
  {id:301,nombre:"Calabaza",   coleccion:"hallownyx",categoria:"prendas",precio:29.99,precioTachado:35.00,colores:[{nombre:"Negro",hex:"#111111",imagen:"assets/productos/hallownyx/calabaza.webp"}],  slideshow:[],tallas:["XS","S","M","L","XL"],cortes:["Regular","Oversize","Boxy"],descripcion:"Edición especial Hallownyx.",masVisto:false,destacado:false,disponible:false,linkPago:"#"},
  {id:302,nombre:"Fantasma",   coleccion:"hallownyx",categoria:"prendas",precio:29.99,precioTachado:35.00,colores:[{nombre:"Negro",hex:"#111111",imagen:"assets/productos/hallownyx/fantasma.webp"}],  slideshow:[],tallas:["XS","S","M","L","XL"],cortes:["Regular","Oversize","Boxy"],descripcion:"Edición especial Hallownyx.",masVisto:false,destacado:false,disponible:false,linkPago:"#"},
  {id:303,nombre:"Hallownyx",  coleccion:"hallownyx",categoria:"prendas",precio:29.99,precioTachado:35.00,colores:[{nombre:"Negro",hex:"#111111",imagen:"assets/productos/hallownyx/hallownyx.webp"}], slideshow:[],tallas:["XS","S","M","L","XL"],cortes:["Regular","Oversize","Boxy"],descripcion:"Edición especial Hallownyx.",masVisto:false,destacado:true, disponible:false,linkPago:"#"},
  {id:304,nombre:"Wazpsmoke",  coleccion:"hallownyx",categoria:"prendas",precio:29.99,precioTachado:35.00,colores:[{nombre:"Negro",hex:"#111111",imagen:"assets/productos/hallownyx/wazpsmoke.webp"}], slideshow:[],tallas:["XS","S","M","L","XL"],cortes:["Regular","Oversize","Boxy"],descripcion:"Edición especial Hallownyx.",masVisto:false,destacado:false,disponible:false,linkPago:"#"},
  {id:305,nombre:"Hallonyx",   coleccion:"hallownyx",categoria:"prendas",precio:29.99,precioTachado:35.00,colores:[{nombre:"Negro",hex:"#111111",imagen:"assets/productos/hallownyx/hallonyx.webp"}],  slideshow:[],tallas:["XS","S","M","L","XL"],cortes:["Regular","Oversize","Boxy"],descripcion:"Edición especial Hallownyx.",masVisto:false,destacado:false,disponible:false,linkPago:"#"},
  {id:306,nombre:"Zombie",     coleccion:"hallownyx",categoria:"prendas",precio:29.99,precioTachado:35.00,colores:[{nombre:"Negro",hex:"#111111",imagen:"assets/productos/hallownyx/zombie.webp"}],    slideshow:[],tallas:["XS","S","M","L","XL"],cortes:["Regular","Oversize","Boxy"],descripcion:"Edición especial Hallownyx.",masVisto:false,destacado:false,disponible:false,linkPago:"#"},

  /* ═══════ NXR OUTLAW CLUB ═══════ */
  {
    id:401, nombre:"NOOC — Básico", coleccion:"nooc", categoria:"prendas",
    precio:25.99, precioTachado:35.00,
    colores:[
      {nombre:"Blanco",hex:"#f0f0f0",imagen:"assets/productos/nooc/basico-blanco.webp"},
      {nombre:"Negro", hex:"#111111",imagen:"assets/productos/nooc/basico-negro.webp"},
      {nombre:"Beige", hex:"#d6c3a3",imagen:"assets/productos/nooc/basico-beige.webp"},
      {nombre:"Rosa",  hex:"#f9a8c9",imagen:"assets/productos/nooc/basico-rosa.webp"},
    ],
    slideshow:[],tallas:["XS","S","M","L","XL"],cortes:["Regular","Oversize","Boxy"],
    descripcion:"Diseño clásico Outlaw Club. 4 colores.",
    masVisto:false,destacado:true,disponible:true,linkPago:"#",
  },
  {
    id:402, nombre:"NOOC — No Robos", coleccion:"nooc", categoria:"prendas",
    precio:25.99, precioTachado:35.00,
    colores:[{nombre:"Negro",hex:"#111111",imagen:"assets/productos/nooc/norobos-negro.webp"}],
    slideshow:[],tallas:["XS","S","M","L","XL"],cortes:["Regular","Oversize","Boxy"],
    descripcion:"Diseño No Robos. Solo negro.",
    masVisto:false,destacado:false,disponible:true,linkPago:"#",
  },
  {
    id:403, nombre:"NOOC — Snppy", coleccion:"nooc", categoria:"prendas",
    precio:25.99, precioTachado:35.00,
    colores:[
      {nombre:"Blanco",hex:"#f0f0f0",imagen:"assets/productos/nooc/snppy-blanco.webp"},
      {nombre:"Negro", hex:"#111111",imagen:"assets/productos/nooc/snppy-negro.webp"},
    ],
    slideshow:[],tallas:["XS","S","M","L","XL"],cortes:["Regular","Oversize","Boxy"],
    descripcion:"Diseño Snppy edición Outlaw.",
    masVisto:false,destacado:false,disponible:true,linkPago:"#",
  },

  /* ═══════ SivarxNyxar — muy pronto ═══════ */
  {id:501,nombre:"SivarxNyxar — 1",coleccion:"sivarx",categoria:"prendas",precio:25.99,precioTachado:30.00,colores:[{nombre:"Negro",hex:"#111111",imagen:"assets/productos/sivarx/sivarx-01.webp"}],slideshow:[],tallas:["XS","S","M","L","XL"],cortes:["Regular","Oversize","Boxy"],descripcion:"Próximamente — SivarxNyxar.",masVisto:false,destacado:true, disponible:false,linkPago:"#"},
  {id:502,nombre:"SivarxNyxar — 2",coleccion:"sivarx",categoria:"prendas",precio:25.99,precioTachado:30.00,colores:[{nombre:"Negro",hex:"#111111",imagen:"assets/productos/sivarx/sivarx-02.webp"}],slideshow:[],tallas:["XS","S","M","L","XL"],cortes:["Regular","Oversize","Boxy"],descripcion:"Próximamente — SivarxNyxar.",masVisto:false,destacado:false,disponible:false,linkPago:"#"},
  {id:503,nombre:"SivarxNyxar — 3",coleccion:"sivarx",categoria:"prendas",precio:25.99,precioTachado:30.00,colores:[{nombre:"Negro",hex:"#111111",imagen:"assets/productos/sivarx/sivarx-03.webp"}],slideshow:[],tallas:["XS","S","M","L","XL"],cortes:["Regular","Oversize","Boxy"],descripcion:"Próximamente — SivarxNyxar.",masVisto:false,destacado:false,disponible:false,linkPago:"#"},
];

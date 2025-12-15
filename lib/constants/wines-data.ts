export interface Wine {
  name: string
  region: string
  price: string
  description?: string
}

export interface WineCategory {
  id: string
  title: string
  wines: Wine[]
}

export const winesData: Record<string, Wine[]> = {
  champagne: [
    {
      name: "Jacques Selosse 'Initial'",
      region: 'Grand Cru Blanc de Blancs',
      price: '280',
      description: 'Champagne excepcional con notas de avellanas y brioche.',
    },
    {
      name: 'Krug Grande Cuvée',
      region: 'Reims',
      price: '350',
      description: 'Mezcla de múltiples añadas, elegancia absoluta.',
    },
    {
      name: 'Dom Pérignon Vintage 2012',
      region: 'Épernay',
      price: '320',
      description: 'Icónico champagne con estructura y fineza incomparables.',
    },
  ],
  blancs: [
    {
      name: "Chablis Grand Cru 'Les Clos' 2018",
      region: 'Bourgogne',
      price: '125',
      description: 'Mineralidad pura, tensión y elegancia.',
    },
    {
      name: 'Puligny-Montrachet 1er Cru',
      region: 'Côte de Beaune',
      price: '180',
      description: 'Chardonnay refinado con notas de flores blancas.',
    },
    {
      name: 'Sancerre Blanc',
      region: 'Loire',
      price: '75',
      description: 'Sauvignon Blanc vibrante con acidez refrescante.',
    },
  ],
  rouges: [
    {
      name: 'Château Margaux',
      region: 'Premier Grand Cru Classé 2005',
      price: '1200',
      description: 'Vino legendario de Bordeaux, potencia y elegancia.',
    },
    {
      name: 'Domaine de la Romanée-Conti',
      region: 'Échézeaux 2014',
      price: '2800',
      description: 'Pinot Noir de ensueño, complejidad suprema.',
    },
    {
      name: "Châteauneuf-du-Pape 'Vieux Télégraphe'",
      region: 'Rhône',
      price: '98',
      description: 'Blend de Grenache con profundidad y especias.',
    },
    {
      name: 'Gevrey-Chambertin 1er Cru',
      region: 'Bourgogne',
      price: '165',
      description: 'Pinot Noir estructurado con taninos sedosos.',
    },
  ],
}

export const wineCategories: WineCategory[] = [
  {
    id: 'champagne',
    title: 'Champagne & Bulles',
    wines: winesData.champagne,
  },
  {
    id: 'blancs',
    title: 'Vins Blancs',
    wines: winesData.blancs,
  },
  {
    id: 'rouges',
    title: 'Vins Rouges',
    wines: winesData.rouges,
  },
]

// Información de maridaje
export const pairingInfo = {
  title: "L'Accord Parfait",
  description:
    'Ofrecemos una opción de maridaje completo diseñado por nuestra sommelier Claire Dubois para acompañar nuestro menú degustación de temporada.',
  price: '110',
  details: 'Incluye 5 copas (10cl) cuidadosamente seleccionadas para realzar cada etapa del menú "Lune". Incluye una copa de Champagne de bienvenida y un vino dulce para el postre.',
}

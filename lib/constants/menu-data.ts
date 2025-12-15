export interface MenuItem {
  name: string
  price: string
  desc: string
  image?: string // Opcional: será agregado por el usuario
}

export interface MenuCategory {
  id: string
  title: string
  subtitle: string
  items: MenuItem[]
}

export const menuData: Record<string, MenuItem[]> = {
  entrees: [
    {
      name: 'Velouté de Châtaignes',
      price: '24',
      desc: 'Crema de castañas ahumadas, aceite de trufa blanca, crujiente de parmesano.',
      image: '/images/pagina-menu/entrées-1.jpg',
    },
    {
      name: 'Tartare de Boeuf',
      price: '28',
      desc: 'Solomillo cortado a cuchillo, yema curada, alcaparras fritas, mostaza antigua.',
      image: '/images/pagina-menu/entrées-2.jpg',
    },
    {
      name: 'Escargots de Bourgogne',
      price: '22',
      desc: 'Caracoles salvajes, mantequilla de perejil y ajo negro, migas de brioche.',
      image: '/images/pagina-menu/entrées-3.jpg',
    },
    {
      name: 'Carpaccio de Saint-Jacques',
      price: '32',
      desc: 'Vieiras laminadas, caviar cítrico, aceite de vainilla, flores comestibles.',
      image: '/images/pagina-menu/entrées-4.jpg',
    },
  ],
  plats: [
    {
      name: 'Sole Meunière',
      price: '52',
      desc: 'Lenguado salvaje, mantequilla noisette, limón confitado, alcaparras, puré de apio nabo.',
      image: '/images/pagina-menu/plats-1.jpg',
    },
    {
      name: 'Filet Mignon Rossini',
      price: '65',
      desc: 'Solomillo de ternera, foie gras a la plancha, trufa negra fresca, salsa Madeira.',
      image: '/images/pagina-menu/plats-2.jpg',
    },
    {
      name: 'Magret de Canard',
      price: '48',
      desc: 'Pato asado, glaseado de miel y lavanda, higos asados, gratin dauphinois.',
      image: '/images/pagina-menu/plats-3.jpg',
    },
    {
      name: 'Risotto aux Champignons',
      price: '38',
      desc: 'Arroz Carnaroli, selección de setas silvestres, mascarpone, polvo de ceps.',
      image: '/images/pagina-menu/plats-4.jpg',
    },
  ],
  desserts: [
    {
      name: 'Soufflé au Grand Marnier',
      price: '20',
      desc: 'Ligero y aireado, servido inmediatamente, coulis de naranja sanguina.',
      image: '/images/pagina-menu/desserts-1.jpg',
    },
    {
      name: 'Mille-Feuille Vanille',
      price: '18',
      desc: 'Capas de hojaldre caramelizado, crema diplomática de vainilla de Tahití.',
      image: '/images/pagina-menu/desserts-2.jpg',
    },
    {
      name: 'Paris-Brest',
      price: '18',
      desc: 'Masa choux, crema praliné de avellanas y almendras tostadas.',
      image: '/images/pagina-menu/desserts-3.jpg',
    },
  ],
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'entrees',
    title: 'Entrées',
    subtitle: 'Primer Acto',
    items: menuData.entrees,
  },
  {
    id: 'plats',
    title: 'Plats Principaux',
    subtitle: 'Segundo Acto',
    items: menuData.plats,
  },
  {
    id: 'desserts',
    title: 'Douceurs',
    subtitle: 'Final',
    items: menuData.desserts,
  },
]

const GateInfo = {
  'Henry/Gate1': {
    'Mon-Fri': '0600 ~ 1800',
    'Sat-Sun': 'Closed',
  },
  'Henry/Gate2': {
    'Mon-Fri': '24/7',
    'Sat-Sun': '24/7',
  },
  'Walker/Gate4': {
    'Mon-Fri': '24/7',
    'Sat-Sun': '24/7',
  },
  'Walker/Gate6': {
    'Mon-Fri': '0500 ~ 2100',
    'Sat-Sun': '0600 ~ 2100',
  },
  'George/Gate3': {
    'Mon-Fri': '0600 ~ 1900',
    'Sat-Sun': 'Closed',
    Holiday: 'Closed',
  },
  'Carroll/Gate1': {
    'Mon-Fri': '24/7',
    'Sat-Sun': '24/7',
  },
  'Carroll/Gate2': {
    'Mon-Fri': '0530 ~ 1730',
    'Sat-Sun': 'Closed',
    Holiday: 'Closed',
  },
  'Carroll/Gate4': {
    'Mon-Fri': '24/7',
    'Sat-Sun': '24/7',
  },
};

const BarberShopInfo = {
  Henry: {'Mon-Fri': '0900 ~ 1800', Sat: '1000 ~ 1700', Sun: 'Closed'},
  Walker: {'Mon-Fri': '1000 ~ 1900', 'Sat-Sun': '1000 ~ 1800'},
  Carroll: {'Mon-Fri': '0900 ~ 1800', 'Sat-Sun': '0900 ~ 1800'},
};

export {GateInfo, BarberShopInfo};

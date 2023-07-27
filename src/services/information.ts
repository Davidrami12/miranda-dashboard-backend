export const information = () => {
  return {
    hotel: 'Miranda',
    login: {
      route: '/login',
      type: 'public',
      methods: ['POST']
    },
    bookings: { 
      route: '/bookings',
      type: 'private',
      methods: ['POST', 'GET', 'PUT', 'DELETE']
    },
    rooms: { 
      route: '/rooms',
      type: 'private',
      methods: ['POST', 'GET', 'PUT', 'DELETE']
    },
    users: { 
      route: '/users',
      type: 'private',
      methods: ['POST', 'GET', 'PUT', 'DELETE']
    },
    contacts: { 
      route: '/contacts',
      type: 'private',
      methods: ['GET']
    }
  };
};
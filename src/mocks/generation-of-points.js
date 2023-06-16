const pointTypes = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

export const genereatePoint = (destination, offers) => ({
  basePrice: 1703,
  dateFrom: '2023-06-10T23:55:56.845Z',
  dateTo: '2023-06-11T11:21:13.375Z',
  destination: destination,
  id: 0,
  offers: offers.offers,
  type: pointTypes[Math.floor(Math.random() * pointTypes.length)]
});

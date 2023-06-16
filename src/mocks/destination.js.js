export const genereateDestination = (desc, cit) => ({
  id: 1,
  description: desc,
  name: cit,
  pictures: [
    {
      src: 'http://picsum.photos/300/200?r=0.0762563005163317',
      description: 'Some buildings from this city'
    }
  ]
});


export const DESCRIPTION = (`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna,
non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.
 Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae,
 sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
 Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.
 In rutrum ac purus sit amet tempus.`).split('. ');

export const CITIES = ['Berlin', 'Milan', 'Moscow', 'Barselona', 'Madrid', 'Dublin', 'Rome', 'Warsaw', 'London'];

export function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a)) + a;
}

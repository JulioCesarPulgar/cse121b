let myProfile = {
  name: "Julio Cesar Pulgar",
  photo: "images/placeholder.jpeg",
  favoriteFoods: [
    'Hallacas',
    'Empanadas',
    'lasagna',
    'Tequeños',
    'Cachapas'
  ],
  hobbies: ['Reading', 'Soccer', 'Volleyball'],
  placesLived: []
};
myProfile.placesLived.push(
  {
    place: 'Cabimas, VE',
    length: '27 year'
  },

);
document.querySelector('#name').textContent = myProfile.name;

document.getElementById('photo').src = myProfile.photo;

document.getElementById('photo').alt = myProfile.name;
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});
myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  let dd = document.createElement('dd');
  dt.textContent = place.place;
  dd.textContent = place.length;
  document.querySelector('#places-lived').appendChild(dt);
  document.querySelector('#places-lived').appendChild(dd);
});

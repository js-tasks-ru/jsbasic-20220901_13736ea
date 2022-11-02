function makeFriendsList(friends) {
  // ваш код...
  const list = document.createElement('ul');

  for (let name of friends) {
    list.innerHTML += `<li>${name.firstName} ${name.lastName}</з>`;
  }
  return list;
}

// Лабораторна №4. Варіант з then/catch

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve({ id: 1, name: 'Ігор' });
    } else {
      reject('Не вдалося отримати користувача');
    }
  }, 1000);
});

const getPosts = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!user) {
        reject('Дані користувача відсутні');
      } else {
        resolve([
          { id: 1, title: `Пост користувача ${user.name}` },
          { id: 2, title: `Ще один пост від ${user.name}` },
        ]);
      }
    }, 1000);
  });
};

// Послідовний виклик промісів
getUser
  .then((user) => {
    console.log('Отримано користувача:', user);
    return getPosts(user);
  })
  .then((posts) => {
    console.log('Отримано пости:', posts);
  })
  .catch((error) => {
    console.error('Помилка:', error);
  })
  .finally(() => {
    console.log('Завершення роботи промісів');
  });
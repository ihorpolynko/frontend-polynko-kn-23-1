// Лабораторна №4. Варіант з async/await

const getUserAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ id: 1, name: 'Ігор' });
      } else {
        reject('Не вдалося отримати користувача');
      }
    }, 1000);
  });
};

const getPostsAsync = (user) => {
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

async function fetchData() {
  try {
    const user = await getUserAsync();
    console.log('Отримано користувача:', user);

    const posts = await getPostsAsync(user);
    console.log('Отримано пости:', posts);
  } catch (error) {
    console.error('Помилка:', error);
  } finally {
    console.log('Завершення роботи async/await');
  }
}

fetchData();
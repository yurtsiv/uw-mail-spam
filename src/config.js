const defaultMessage = {
  from: process.env.EMAIL,
  subject: 'Прекартите войну',
  html: `
  <p>Вам подло врут. В Украине сейчас полномасштабная война! Убивают мирних граждан, детей, разрушают дома и больницы.</p> 
  <p>Также вам не говорят о потерях. На данний момент погибло около 6000 ваших слодат. За что они погибли? За какую идею?</p>
  <p>Если у вас есть родственники или знакомые, которых отправили на "учения", то они могли оказаться среди погибших.
  Есть сайт https://200rf.com/ на котором можно найти информацию о пленных и убитых. Если сайт заблокирован, то есть
  тоже телеграмм канал https://t.me/rf200_now.</p>
  <p>Вот стаття на Википедии о том, что на самом деле происходит: https://ru.wikipedia.org/wiki/%D0%92%D1%82%D0%BE%D1%80%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8_%D0%BD%D0%B0_%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D1%83_(2022)</p>
  <h3>Прекратите это безумие, спасайте свою страну и своих людей. Выходите на протесты, делайте что-то!</h3>
  <img src="https://i.ibb.co/0qD5CWc/photo-2022-02-28-17-38-04.jpg" alt="dead" />
  <img src="https://i.ibb.co/CmNSs7T/photo-2022-02-28-06-37-55.jpg" alt="dead" />
  <img src="https://i.ibb.co/gt94d0d/photo-2022-02-25-11-41-21.jpg" alt="dead" />
  <img src="https://i.ibb.co/DfWzfg6/photo-2022-02-25-11-41-20.jpg" alt="dead" />
  <img src="https://i.ibb.co/26FqGsL/photo-2022-02-24-21-47-01.jpg" alt="dead" />
`,
};

const filename = 'email.txt';

module.exports = {
  defaultMessage,
  filename,
};

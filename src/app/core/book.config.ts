import {Book} from './models/models';

export const BookItems: Book[] = [
  {
    name: 'Javascript и jQuery. Интерактивная веб-разработка',
    author: 'Дакетт Джон',
    year: 2017,
    publishing: 'Эксмо',
    description: 'Эта книга предназначена для веб-дизайнеров и программистов, контент-менеджеров и редакторов контента, маркетологов и менеджеров по электронным продажам, блогеров и любителей.\n' +
      'Мы не только объясним вам, как читать и создавать сценарии, но также изложим вам основы компьютерного программирования в простой и наглядной форме.',
    isbn: '978-5-699-80285-2',
    countPages: 640,
    image: 'book-1',
    rating: 5
  },
  {
    name: 'Architecting Angular Applications with Redux, RxJs and NgRx\n',
    author: 'Christoffer Noring\n',
    year: 2018,
    publishing: 'Packt Publishing\n',
    description: 'Книга "Architecting Angular Applications with Redux, RxJs and NgRx".\n',
    isbn: '9781787122406',
    countPages: 364,
    image: 'book-2',
    rating: 2
  },
  {
    name: 'Чистая архитектура. Искусство разработки программного обеспечения ',
    author: 'Мартин Роберт',
    year: 2018,
    publishing: 'Питер',
    description: '"Идеальный программист" и "Чистый код" - легендарные бестселлеры Роберта Мартина - рассказывают, как достичь высот профессионализма. "Чистая архитектура" продолжает эту тему, но не предлагает несколько вариантов в стиле "решай сам", а объясняет, что именно следует делать, по какой причине и почему именно такое решение станет принципиально важным для вашего успеха.',
    isbn: '978-5-4461-0772-8',
    countPages: 352,
    image: 'book-3',
    rating: 4
  },


];

const slides = [
  {
    id: 1,
    image: 'https://picsum.photos/1600/900/?image=931',
    title: 'Suspendisse Eget Mollis Erat Morbi Fermentum Bibendum Purus'
  },
  {
    id: 2,
    image: 'https://picsum.photos/1600/900/?image=943',
    title: 'Ac Malesuada Justo Facilisis Vitae Quisque Molestie'
  },
  {
    id: 3,
    image: 'https://picsum.photos/1600/900/?image=911',
    title: 'Ligula Ac Dapibus Auctor Velit Nisl Rutrum Ipsum'
  }
];

const articles = [
  {
    id: 6,
    image: 'https://picsum.photos/1600/900/?image=830',
    title: 'Ac Rutrum Velit Neque Eget Neque Proin',
    author: 'John Doe',
    category: 'Nature & Culture',
    published: '6 days ago',
    excerpt: 'Morbi blandit tellus maximus, dignissim nunc vel, accumsan ex. Donec condimentum maximus velit vitae dictum. Curabitur sed neque ultrices orci malesuada pharetra.'
  },
  {
    id: 5,
    image: 'https://picsum.photos/1600/900/?image=810',
    title: 'Lacus Non Leo Varius Dictum At Ut Dolor Donec Malesuada Dolor Eu Ex Euismod Ultricies',
    author: 'Joanna Doe',
    category: 'Nature & Culture',
    published: '5 days ago',
    excerpt: 'Nunc velit eros, consequat et tempus eu, dapibus ut turpis. Donec eget massa vel lorem congue.'
  },
  {
    id: 4,
    image: 'https://picsum.photos/1600/900/?image=723',
    title: 'Vivamus Pretium Magna Mi Ac Finibus Mauris Gravida',
    author: 'Johnny Doe',
    category: 'Nature & Culture',
    published: '4 days ago',
    excerpt: 'Venenatis a non sapien. Duis diam nunc, pretium et mi ac, convallis dictum erat. Quisque ut eros quis libero bibendum varius. Praesent accumsan rutrum feugiat.'
  },
  {
    id: 3,
    image: 'https://picsum.photos/1600/900/?image=721',
    title: 'Fusce Pellentesque Mauris Eget Pretium Elementum Elit Leo Dictum Urna Non Fermentum Quam',
    author: 'John Deep',
    category: 'Nature & Culture',
    published: '3 days ago',
    excerpt: 'Nullam tempus, magna nec tincidunt lacinia, turpis odio placerat lectus, non mattis arcu risus non est.'
  },
  {
    id: 2,
    image: 'https://picsum.photos/1600/900/?image=715',
    title: 'Eros Vitae Quam Aliquam Aliquet',
    author: 'Joanna Deep',
    category: 'Nature & Culture',
    published: '2 days ago',
    excerpt: 'Ut placerat nulla ut odio congue malesuada. Nulla rutrum arcu elit, id interdum nisl posuere non. Sed scelerisque mollis est ut sagittis. Vivamus suscipit.'
  },
  {
    id: 1,
    image: 'https://picsum.photos/1600/900/?image=681',
    title: 'Ex Non Faucibus Rhoncus Nibh Sapien Vehicula Erat Et Pulvinar Turpis Leo Non Risus',
    author: 'Johnny Deep',
    category: 'Nature & Culture',
    published: '1 day ago',
    excerpt: 'Justo quis bibendum ornare, mauris enim sagittis nisi, non accumsan erat arcu vel magna. In vel massa euismod, aliquet.'
  }
];

const article = {
  title: 'Fusce Pellentesque Mauris Eget Pretium Elementum Elit Leo Dictum Urna',
  author: 'John Doe',
  category: 'Nature & Culture',
  published: '2 days ago',
  excerpt: 'Pellentesque suscipit leo vitae venenatis congue. Pellentesque feugiat augue nisl, vitae aliquet ex accumsan quis. Duis quam sapien, volutpat quis dui at?',
  content: '<img class="img-fluid" src="https://picsum.photos/1600/900/?image=931" alt="" /> <span class="caption">Suspendisse in lacus vel massa vulputate ornare. Ut sit amet auctor ex. Nulla quis nibh posuere, pulvinar enim eu, sagittis eros. Sed vehicula consequat ipsum quis ornare. (Unsplash/Paul Earle)</span> <p class="paragraph">Aliquam vitae nibh vel neque vehicula fermentum et id nunc. Aenean sit amet lectus in justo iaculis volutpat. Aliquam facilisis, ligula et bibendum laoreet, metus enim viverra nulla, euismod faucibus justo velit eu tortor. Nulla facilisi. Aliquam dui ligula, varius quis feugiat at, luctus ac dui. Suspendisse lobortis tincidunt orci, sed hendrerit sapien vulputate nec. Maecenas rhoncus, velit dictum pretium mollis. </p> <p class="paragraph">Morbi imperdiet ut arcu eu malesuada. Integer vestibulum leo eget enim facilisis scelerisque. Nam justo augue, mollis a porttitor sed, finibus interdum lacus. Pellentesque a lacus mi. Sed eleifend imperdiet arcu, eu sollicitudin neque rhoncus eu. Donec malesuada consectetur molestie. Praesent dignissim pellentesque enim, vel dictum nisi condimentum vitae. Duis pharetra ultricies nulla, a facilisis risus sodales id. </p> <p class="paragraph">Nunc mollis iaculis purus eu commodo. Vestibulum rutrum cursus purus, eu efficitur lorem. Pellentesque urna leo, faucibus vel lobortis vitae, congue et elit. Donec viverra purus ut elit sodales, quis feugiat nibh blandit. Praesent pellentesque molestie sem, ut feugiat diam aliquam vitae. Fusce dui nibh, condimentum sed quam eget, malesuada rhoncus massa. Suspendisse sapien urna, hendrerit nec tristique a, feugiat sed nibh. </p> <p class="paragraph">Curabitur ultricies tortor leo. Nullam eu leo vestibulum, dapibus nisl vitae, pellentesque leo. Vivamus sem nibh, placerat ut metus eu, tincidunt imperdiet leo. Cras tincidunt varius turpis sit amet vulputate. Vestibulum pretium velit eu viverra aliquet. Nullam sapien purus, venenatis id maximus vel, molestie ut mauris. Etiam commodo sem at luctus posuere. </p> <p class="paragraph">Suspendisse in lacus vel massa vulputate ornare. Ut sit amet auctor ex. Nulla quis nibh posuere, pulvinar enim eu, sagittis eros. Sed vehicula consequat ipsum quis ornare. Suspendisse est eros, lobortis sit amet eleifend vitae, mattis vel velit. Proin porta magna nec magna euismod faucibus. Nam vitae dolor eget purus cursus volutpat. Donec bibendum eget libero id tristique. Nam luctus tincidunt nisl ac rhoncus. </p> <p class="paragraph">Nullam fringilla sollicitudin facilisis. Donec velit nunc, aliquam vitae suscipit at, vestibulum sit amet metus. Aenean eu odio dui. Sed non erat nulla. Pellentesque tempus mauris in ultrices rutrum. Maecenas id lorem sit amet enim euismod ultricies at non orci. Quisque tristique interdum dictum. Sed ut condimentum dolor. Morbi vel vulputate elit. </p> <p class="paragraph">Pellentesque suscipit leo vitae venenatis congue. Pellentesque feugiat augue nisl, vitae aliquet ex accumsan quis. Duis quam sapien, volutpat quis dui at, porta luctus quam. In sodales, ipsum id tempor suscipit, urna ligula iaculis nulla, nec sollicitudin sapien odio quis justo. Mauris scelerisque, dui nec cursus iaculis, tortor nisi ullamcorper arcu, nec efficitur dui arcu tincidunt neque. Nam at enim consectetur, facilisis nisl vitae, hendrerit orci. </p>'
};

const info = {
  content: '<p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p><p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p><p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>'
};

const Data = {slides, articles, article, info};

export default Data;

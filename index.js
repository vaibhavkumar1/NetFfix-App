import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css';

ReactDOM.render(
  <>
  <h1 className="headingstyle">List of top 5 Netflix Series in 2020</h1>
  <Card imgsrc="http://wallpapercave.com/wp/wp4056410.jpg"
    title="A Neltfix Original Series"
    sname="DARK"
    links="https://www.netflix.com/in/title/80100172"
  />
  <Card imgsrc="http://www.hitc.com/static/uploads/hitcn/1816/extracurricular_netflix_780_1544944.jpg"
    title="A Neltfix Original Series"
    sname="Extracurricular"
    links="https://www.netflix.com/in/title/80990668?source=35"
  />
  <Card imgsrc="https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/little-things-2_750X500.jpg?itok=OvpKrdZS"
    title="A Neltfix Original Series"
    sname="Little Things"
    links="https://www.netflix.com/in/title/81011159"
  />
  <Card imgsrc="http://wallpapercave.com/wp/wp1917154.jpg"
    title="A Neltfix Original Series"
    sname="Stranger Things"
    links="https://www.netflix.com/in/title/80057281"
  />
  <Card imgsrc="https://th.thgim.com/entertainment/movies/8ppnca/article31415443.ece/ALTERNATES/FREE_960/crash"
    title="A Neltfix Original Series"
    sname="Crash Landing On You "
    links="https://www.netflix.com/in/title/81159258"
  />
  <Card imgsrc="https://tse3.mm.bing.net/th?id=OIP.SkMzcKZ1wJgbyYwrXBsG_AHaEK&pid=Api&P=0&w=287&h=162"
    title="A Neltfix Original Series"
    sname="Never Have I Ever"
    links="https://www.netflix.com/in/title/80179190"
  />
  </>,
  document.getElementById('root')
);
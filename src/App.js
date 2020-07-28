import React from 'react';
import Avatar from './components/Avatar/Avatar';
import CardCourses from './components/CardCourses/CardCourses';
import InfoStudent from './components/InfoStudent/InfoStudent';
import './App.css';

function App() {

  // let avatar = 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg'
  // let fullName = 'Angga Prasetya'
  // let status = 'Bootcamp Student'
  // let bio = 'Tampan, setia dan rajin menabung'

  let data = {
    avatar:  'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
    fullName: 'Angga Prasetya',
    status: 'Bootcamp Student',
    bio: 'Saya tampan, tidak selingkuh dan rajin menabung'
  }

  let content = [{
    images: 'https://cdn.pixabay.com/photo/2019/09/21/23/12/highway-4494907_960_720.jpg',
    url: 'https://www.youtube.com/watch?v=TCx4KAtinkQ',
    titleCourse: 'Cara Investor Dapat Cuan, Meski Startup Masih Rugi',
    descriptionCourse: 'Dengan masifnya investasi yang didapat, startup cenderung melakukan budaya bakar duit, lalu kapan untungnya?'
  },
  {
    images: 'https://cdn.pixabay.com/photo/2020/07/05/05/12/sunset-5371719_960_720.jpg',
    url: 'https://www.youtube.com/watch?v=QJJ7Oqxn01s',
    titleCourse: 'COPYWRITING - Seni menjual lewat tulisan',
    descriptionCourse: 'Hanya merubah kata, Anda dapat merubah hasil akhir-nya. Itulah Copywriting'
  }]

  return (
    <div className="container">
      <div className="rowTop">
        <div className="colAvatar">
          <Avatar avatar={data.avatar}/>
        </div>
        <div className = "colInfo">
          <InfoStudent infoName={data.fullName} infoStatus={data.status} infoBio={data.bio}/>
        </div>
      </div>

      <div className="rowBottom">
        <h2>MY COURSES</h2>
        <div className="contentCourses">
          <CardCourses courses={content}/>
        </div>
      </div>
    </div>
  );
}

export default App;

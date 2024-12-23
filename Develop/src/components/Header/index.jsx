import coverImage from '../../assets/cover/cover-image.jpg';
//update image in line 9 description too

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Lernantino</h1>
      <img src={coverImage} alt="wooden background"></img>
      {props.children}
    </header>
  );
}

export default Header;

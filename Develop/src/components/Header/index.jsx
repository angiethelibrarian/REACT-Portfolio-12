import coverImage from '../../assets/cover/cover-image-2.png';
//update image in line 9 description too

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>My REACT Portfolio</h1>
      <img src={coverImage} alt="wrinkly document"></img>
      {props.children}
    </header>
  );
}

export default Header;

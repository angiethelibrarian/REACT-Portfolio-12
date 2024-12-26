import * as projects from '../../assets';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5" style={{maxWidth:"200px"}}>
        <img className='img-thumbnail' style={{borderRadius:"10rem"}}src={projects["profilePic"]}></img>
        </div>
        <p>
        Angelica Mora is a knowledgable and versatile professional with a unique blend of skills as both a novelist and a full-stack web developer with over 6 years of experience in the tech industry. Beginning her career as a Quality Assurance Engineer, Angelica honed her eye for detail and a commitment to delivering high-quality software.
        </p>
        <p>
        Transitioning into full-stack development, she has gained extensive experience with technologies like HTML, CSS, JavaScript, TypeScript, Node.js, and Express, among other front-end and back-end JavaScript frameworks. Her technical expertise spans across creating dynamic, user-friendly web applications and robust back-end systems, reflecting her passion for crafting seamless digital experiences.</p>
            <p>Angelica is now seeking new opportunities to leverage her development expertise, aiming to contribute to innovative projects that align with her commitment to quality and creativity.
        </p>
      </div>
    </section>
  );
}

export default About;

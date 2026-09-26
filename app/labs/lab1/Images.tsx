export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />

      <h4>My Image</h4>
      <img id ="wd-your-image" src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" 
      height="200px"
      width="200px"
      alt="cat" 
      />

      <h4>AI Image</h4>
      <br />
Loading another remote image:
<br />

<img
  id="wd-ai-image"
  src="https://solarsystem.nasa.gov/images/casJPGFullS98/W00105735.jpg"
  width="200px"
  alt="NASA space image"
/>
</div>    
  );
}
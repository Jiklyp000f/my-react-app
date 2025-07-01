export default function FullWidthImage() {
  return (
    <div className="container-fluid p-0 mt-5 position-relative">
      <div className="image-container">
        <img 
          src="src/assets/images/clown.jpg" 
          className="img-fluid w-100" 
          alt="Изображение на весь контейнер" 
        />
        
        <div className="content-overlay d-flex flex-column">
          <div className="text-block">
            <div className="text4">Don’t just read the story. Be the story.</div>
          </div>
          <div className="details-block">
            <p className="tyu">With Story Time you can bring your children’s favorite stories to life with music, animation and AR effects.</p>
            <p className="tyu2">Discover</p>
            <p className="tyu3">Put a smile on your face with AR masks.</p>
            <p className="tyu4">A photo frame that’s picture-perfect</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function PromotionBanner() {
  return (
    <div className="container-fluid p-0">
      <div className="independent-block">
        <img src="src/assets/images/microCOMP.png" alt="Эмблема" />
        <div>
          <a href="#" className="text-muted">Buy any 2 and save $50*</a>
          <p className="red">Ship to multiple addresses at no extra cost.</p>
        </div>
      </div>
    </div>
  );
}
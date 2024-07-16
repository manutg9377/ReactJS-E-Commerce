export default function HeaderTasty() {
  return (
    <header>
      <div>
        <img src={logoImg} alt="A restaurant"></img>
        <h1>Tasty Food</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  );
}

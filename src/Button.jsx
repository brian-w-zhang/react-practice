function Button() {
  const handleClick = (e) => (e.target.textContent = 'OUCH!');

  return (
    <button onDoubleClick={(e) => handleClick(e)} className="button">
      Click me
    </button>
  );
}
export default Button;

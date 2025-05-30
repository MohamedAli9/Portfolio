const HeroSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-6xl border border-black">
        <div className="h-100 w-100"></div>
        <img src="./assets/pic.png" alt="" className="h-100 w-100" />
        <div>
          <p>Hi, I'm</p>
          <h1>Mohamed Ali</h1>
          <h2>Software Engineer</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

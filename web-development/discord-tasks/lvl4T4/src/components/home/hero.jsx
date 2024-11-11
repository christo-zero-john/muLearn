function Hero() {
  return (
    <div>
      <div>
        <div className="p-10 h-screen flex flex-col justify-center">
          <div className="pb-10">
            <p className="text-4xl">
              Hi, I am <span>Christo John</span>
            </p>
          </div>
          <div className="text-2xl">
            <p>
              I am someone who love to{" "}
              <span className="italic text-violet-400 underline">code</span> and{" "}
              <br /> try out new things!
            </p>
          </div>
          <div className="flex flex-col items-center absolute bottom-5 left-0 right-0 mx-auto">
            <div className="border-2 border-gray-500 p-2 rounded-md hover:bg-gray-600 hover:cursor-pointer">
              <p>
                <a href="#contact">Connect with me</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

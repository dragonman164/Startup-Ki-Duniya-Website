import CarouselItem from "../Carouseltem";
const Carouselelem = [
  <div className="container  text-dark my-5">
    <h2>Portal Features for Candidates:</h2>
    <ol className="h4 font-weight-light">
      <li>Search for well established startups and apply for them.</li>
      <li>Make up your Resume and get it reviewed from Experts</li>
      <li>
        Check your Application Status in whichever companies you have applied
        for.
      </li>
      <li>Get Suggestions from Experts for Improvement</li>
      <li>Enjoy your Life !! Earn and Live!!!</li>
    </ol>
  </div>,
  <div className="container  text-dark my-5">
    <h2>Portal Features for Startups:</h2>
    <ol className="h4 font-weight-light">
      <li>Search for Potential Candidates for your Startups</li>
      <li>Get Recommendations from expert for candidate Hiring</li>
      <li>Prepare a well versed document for your startup</li>
      <li>Get Suggestions from Experts for Improvement</li>
      <li>Enjoy your Life !! Earn and Live!!!</li>
    </ol>
  </div>,
];

const HomeCompany = () => {
  return (
    <>
      <div className="container shadow-lg text-dark text-center my-5">
        <h1 className="my-3"> Welcome to Startup Ki Duniya Portal</h1>
        <h3 className="font-weight-light">
          Are you willing to work for any startup Idea?{" "}
        </h3>
        <h2> Or</h2>
        <h3 className="font-weight-light">
          Are you looking for Potential Candidates for your startup?
        </h3>
        <h3 className="my-3">We can help...</h3>

        <p className="h3 py-5">
          Startup ki Duniya is a Portal which aims to provide a platform for
          both candidates or people with startup Ideas. Candidates who are
          looking a suitable startup to work upon or people who have a well
          established sartup and are looking for potential candidates for
          themselves can use this portal
        </p>
      </div>

      <div className="shadow-lg my-5 mx-5">
        <CarouselItem Carouselelem={Carouselelem} />
      </div>
    </>
  );
};

export default HomeCompany;

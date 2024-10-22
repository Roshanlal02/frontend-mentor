import "./spinner.css";

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh]">
    <div className="hourglassBackground">
      <div className="hourglassContainer">
        <div className="hourglassCurves"></div>
        <div className="hourglassCapTop"></div>
        <div className="hourglassGlassTop"></div>
        <div className="hourglassSand"></div>
        <div className="hourglassSandStream"></div>
        <div className="hourglassCapBottom"></div>
        <div className="hourglassGlass"></div>
      </div>
    </div>
    </div>
  );
};

export default Spinner;

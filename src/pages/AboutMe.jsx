import Frame3 from "../pages/img/Frame3.jpg";
export function AboutMe() {
  return (
    <>
      <div className="flex justify-center mt-20 ">
        <div className=" w-1/5 mr-20 mt-5 ">
          <h1>Мої навики</h1>
          <div className="my-10">
            <span className="text-sm">HTML</span>
            <div className="h-1 bg-[#C4C4C4] relative  ">
              <div className="h-full bg-[#34547A] w-9/12"></div>
            </div>
          </div>
          <div className="my-10">
            <span className="text-sm">CSS</span>
            <div className="h-1 bg-[#C4C4C4] relative ">
              <div className="h-full bg-[#34547A] w-8/12"></div>
            </div>
          </div>
          <div className="my-10">
            <span className="text-sm">Java</span>
            <div className="h-1 bg-[#C4C4C4] relative ">
              <div className="h-full bg-[#34547A] w-6/12"></div>
            </div>
          </div>
          <div className="my-10">
            <span className="text-sm">React</span>
            <div className="h-1 bg-[#C4C4C4] relative ">
              <div className="h-full bg-[#34547A] w-4/12"></div>
            </div>
          </div>
          <div className="my-10">
            <span className="text-sm">Tailwind CSS</span>
            <div className="h-1 bg-[#C4C4C4] relative ">
              <div className="h-full bg-[#34547A] w-8/12"></div>
            </div>
          </div>
          <div className="my-10">
            <span className="text-sm">Git</span>
            <div className="h-1 bg-[#C4C4C4] relative ">
              <div className="h-full bg-[#34547A] w-6/12"></div>
            </div>
          </div>
        </div>
        <img className="w-96 h-96 mt-28 rounded-lg" src={Frame3} alt="" />
      </div>
    </>
  );
}

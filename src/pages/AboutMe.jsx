import Frame3 from "../pages/img/IMG_6926 2.jpg";
import { Container } from "../components/Container";
import { Slider } from "../components/Slider";

export function AboutMe() {
  return (
    <>
    
      <Container>  
        <div className="flex justify- mt-10 mx-1"> 
          <img
            className="w-[380px] h-[450px] mt-5 rounded-lg shadow-2xl"
            src={Frame3}
            alt=""
          />
          <div className=" w-1/5 ml-10">
            <h1>Мої навики</h1>
            <div className="my-10">
              <span className="text-sm">HTML</span>
              <div className="h-1 bg-[#C4C4C4] relative w-96 ">
                <div className="h-full bg-[#34547A] w-9/12"></div>
              </div>
            </div>
            <div className="my-10">
              <span className="text-sm">CSS</span>
              <div className="h-1 bg-[#C4C4C4] relative w-96 ">
                <div className="h-full bg-[#34547A] w-8/12"></div>
              </div>
            </div>
            <div className="my-10">
              <span className="text-sm">Java</span>
              <div className="h-1 bg-[#C4C4C4] relative w-96 ">
                <div className="h-full bg-[#34547A] w-6/12"></div>
              </div>
            </div>
            <div className="my-10">
              <span className="text-sm">React</span>
              <div className="h-1 bg-[#C4C4C4] relative w-96 ">
                <div className="h-full bg-[#34547A] w-4/12"></div>
              </div>
            </div>
            <div className="my-10">
              <span className="text-sm">PHP</span>
              <div className="h-1 bg-[#C4C4C4] relative w-96 ">
                <div className="h-full bg-[#34547A] w-8/12"></div>
              </div>
            </div>
            <div className="my-10">
              <span className="text-sm">Git</span>
              <div className="h-1 bg-[#C4C4C4] relative w-96 ">
                <div className="h-full bg-[#34547A] w-6/12"></div>
              </div>
            </div>
          </div>
        </div>
        <Slider />
     </Container>
   </>
  );
}

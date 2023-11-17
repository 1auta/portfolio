import logo from "./img/Frame.png";

export function Home() {
  return (
    <section className=" mt-32">
      <div className="flex justify-center h-900 ">
        <img src={logo} alt="" />
        <div className="mx-20">
          <h1 className="my-5">Верстка</h1>
          <p className="w-96">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            voluptates, cum, quibusdam doloribus sequi sed laborum iste nostrum
            omnis optio quae. Tempore perferendis pariatur deserunt vitae
            voluptates consequuntur doloribus necessitatibus.
          </p>
          <a href="https://t.me/serogagagag">
            <button className=" mt-5 bg-[#34547A] py-2 px-4 text-white	">
              Напишіть мені
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

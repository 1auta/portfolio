import { Container } from "../components/Container";
import GmailIcon from "../pages/img/free-icon-gmail-732200.png";
import TelegramIcon from "../pages/img/free-icon-paper-12868810.png";
import InstagramIcon from "../pages/img/free-icon-instagram-2111463.png";

export function Contacts() {
  return (
    <Container>
      <div>
        <div>
          <p className="text-3xl text-center my-10">Звязок зі мною</p>
          <div className="flex flex-col gap-10">
            <span className="flex justify-center">
              <a href="mailto:sergijvaskiv58@gmail.com">
                <img src={GmailIcon} className="w-10" alt="" />
              </a>
              <p className="pt-2 pl-2 w-14">Gmail</p>
            </span>
            <span className="flex justify-center">
              <a href="https://t.me/serogagagag">
                <img src={TelegramIcon} alt="" className="w-10" />
              </a>
              <p className="pt-2 pl-2 w-14">Telegram</p>
            </span>
            <span className="flex justify-center">
              <a href="https://www.instagram.com/s_e_r_o_ja/">
                <img src={InstagramIcon} alt="" className="w-10" />
              </a>
              <p className="pt-2 pl-2 w-14">Instagram</p>
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}

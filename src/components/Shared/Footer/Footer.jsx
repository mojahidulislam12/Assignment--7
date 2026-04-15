import img from "../../../assets/KeenKeeper.png";
import img2 from "../../../assets/instagram.png";
import img3 from "../../../assets/facebook.png";
import img4 from "../../../assets/twitter.png";
const Footer = () => {
  return (
    <div className="bg-[#244D3F]">
      <div className=" pt-20 footer footer-horizontal footer-center  text-primary-content p-10">
        <aside>
          <p className="font-bold">
            <img src={img} alt="" />
            <br />
          </p>
          <p>
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </aside>
        <nav>
          <h1>Social Links</h1>
          <div className="grid grid-flow-col gap-4">
            <a>
              <img src={img2} alt="" />
            </a>
            <a>
              <img src={img3} alt="" />
            </a>
            <a>
              <img src={img4} alt="" />
            </a>
          </div>
        </nav>
      </div>
      <div className="divider bg-[#1A8862] h-0 max-w-277.5 mx-auto"></div>
      <div className="">
        <div className="pb-7.5 max-w-277.5 mx-auto flex justify-between footer sm:footer-horizontal footer-center  text-base-content p-4">
          <p className="font-normal text-[16px] text-[#1A8862]">
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="font-normal text-[16px] text-[#1A8862] flex justify-between">
            <p className="mr-4">Privacy Policy</p>
            <p className="mr-4">Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

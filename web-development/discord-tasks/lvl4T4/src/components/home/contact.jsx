import wwwImg from "../../assets/www.png";
import instaImg from "../../assets/instagram.png";
import mailImg from "../../assets/"
import muImg from "../../assets"
import 

export default function Contact() {
  let contacts = [
    {
      platform: "",
      link: "",
      icon: "",
    },
  ];
  return (
    <div className="flex flex-col items-center" id="contact">
      <div className="w-screen px-60 flex flex-col gap-10">
        <div className="flex justify-around w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="top-2">
              Name
            </label>
            <input
              className="bg-inherit border-2 border-gray-400 rounded-md focus:border-none"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Email" className="top-2">
              Email
            </label>
            <input
              className="bg-inherit border-2 border-gray-400 rounded-md focus:border-none"
              type="text"
              name="email"
            />
          </div>
        </div>
        <div className="flex justify-around w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="top-2">
              Subject
            </label>
            <input
              className="bg-inherit border-2 border-gray-400 rounded-md focus:border-none"
              type="text"
              name="subject"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="top-2">
              Message
            </label>
            <input
              className="bg-inherit border-2 border-gray-400 rounded-md focus:border-none"
              type="text"
              name="message"
            />
          </div>
        </div>
      </div>
      <button className="px-5 py-2 border border-gray-400 w-fit rounded-md my-10 hover:bg-gray-500">
        Send
      </button>
    </div>
  );
}

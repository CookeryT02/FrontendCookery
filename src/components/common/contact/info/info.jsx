import { BiHeadphone } from "react-icons/bi";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import { constants } from "../../../../constants";
import "./info.scss"


const {
  website: { address, phone, email, mapUrl } } = constants;

const contactInfoItems = [
  {
    direct: mapUrl,
    icon: <HiLocationMarker />,
    text: address
  },
  {
    direct: `tel:${phone}`,
    icon: <BiHeadphone />,
    text: phone
  },
  {
    direct: `mailto:${email}`,
    icon: <HiOutlineMail />,
    text: email
  }
]

const ContactInfo = () => {
  return (
    <ul className="contact-info">
      {contactInfoItems.map((item) => (
        <li key={item.text} className="icons">
          <a href={item.direct}
            target="_blank"
            rel="noreferrer noopener"

          >{item.icon}{item.text}</a>
        </li>
      ))}
    </ul>
  )
};

export default ContactInfo;
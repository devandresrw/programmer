import Link from "next/link"
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";



export const TextAbout = () => {
    return (
      <div className="text-white">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam natus
          id fugit libero aperiam nihil cupiditate numquam eveniet quae
          assumenda quam fuga, ipsam nostrum eligendi. Ipsum architecto maiores
          odit libero!
        </p>
        <ul>
          <li>
            <Link href={""} target="_blank">
              <FaLinkedin fill="#f2f2f2" />
            </Link>
          </li>
          <li>
            <Link href={""} target="_blank">
              <FaInstagram fill="#f2f2f2" />
            </Link>
          </li>
          <li>
            <Link href={""} target="_blank">
              <FaXTwitter fill="#f2f2f2" />
            </Link>
          </li>
        </ul>
      </div>
    );
}
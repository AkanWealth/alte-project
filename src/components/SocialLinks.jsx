import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = ({ relativeStyles }) => {
  return (
    <ul
      className={`${relativeStyles} flex flex-row gap-3 text-pry-900 *:grid *:size-10 *:place-content-center *:rounded-full *:bg-sec-500 xl:gap-4`}
    >
      <li>
        <FontAwesomeIcon icon={faTwitter} />
      </li>
      <li>
        <FontAwesomeIcon icon={faFacebookF} />
      </li>
      <li>
        <FontAwesomeIcon icon={faInstagram} />
      </li>
    </ul>
  );
};

export default SocialLinks;

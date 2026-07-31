import logo from "../assets/logo.svg";
import search_icon from "../assets/search_icon.svg";
import user_icon from "../assets/user_icon.svg";
import cart_icon from "../assets/cart_icon.svg";
import add_icon from "../assets/add_icon.svg";
import order_icon from "../assets/order_icon.svg";
import instagram_icon from "../assets/instagram_icon.svg";
import facebook_icon from "../assets/facebook_icon.svg";
import twitter_icon from "../assets/twitter_icon.svg";
import box_icon from "../assets/box_icon.svg";
import product_list_icon from "../assets/product_list_icon.svg";
import menu_icon from "../assets/menu_icon.svg";
import arrow_icon from "../assets/arrow_icon.svg";
import increase_arrow from "../assets/increase_arrow.svg";
import decrease_arrow from "../assets/decrease_arrow.svg";
import arrow_right_icon_colored from "../assets/arrow_right_icon_colored.svg";
import my_location_image from "../assets/my_location_image.svg";
import arrow_icon_white from "../assets/arrow_icon_white.svg";
import heart_icon from "../assets/heart_icon.svg";
import star_icon from "../assets/star_icon.svg";
import redirect_icon from "../assets/redirect_icon.svg";
import star_dull_icon from "../assets/star_dull_icon.svg";
import header_headphone_image from "../assets/header_headphone_image.webp";
import header_playstation_image from "../assets/header_playstation_image.webp";
import header_macbook_image from "../assets/header_macbook_image.webp";
import macbook_image from "../assets/macbook_image.webp";
import bose_headphone_image from "../assets/bose_headphone_image.webp";
import apple_earphone_image from "../assets/apple_earphone_image.webp";
import samsung_s23phone_image from "../assets/samsung_s23phone_image.webp";
import venu_watch_image from "../assets/venu_watch_image.webp";
import upload_area from "../assets/upload_area.webp";
import cannon_camera_image from "../assets/cannon_camera_image.webp";
import sony_airbuds_image from "../assets/sony_airbuds_image.webp";
import asus_laptop_image from "../assets/asus_laptop_image.webp";
import projector_image from "../assets/projector_image.webp";
import playstation_image from "../assets/playstation_image.webp";
import girl_with_headphone_image from "../assets/girl_with_headphone_image.webp";
import girl_with_earphone_image from "../assets/girl_with_earphone_image.webp";
import md_controller_image from "../assets/md_controller_image.webp";
import sm_controller_image from "../assets/sm_controller_image.webp";
import jbl_soundbox_image from "../assets/jbl_soundbox_image.webp";
import boy_with_laptop_image from "../assets/boy_with_laptop_image.webp";
import checkmark from "../assets/checkmark.webp";
import product_details_page_apple_earphone_image1 from "../assets/product_details_page_apple_earphone_image1.webp";
import product_details_page_apple_earphone_image2 from "../assets/product_details_page_apple_earphone_image2.webp";
import product_details_page_apple_earphone_image3 from "../assets/product_details_page_apple_earphone_image3.webp";
import product_details_page_apple_earphone_image4 from "../assets/product_details_page_apple_earphone_image4.webp";
import product_details_page_apple_earphone_image5 from "../assets/product_details_page_apple_earphone_image5.webp";

export const assets = {
  logo,
  search_icon,
  user_icon,
  cart_icon,
  add_icon,
  order_icon,
  instagram_icon,
  facebook_icon,
  twitter_icon,
  box_icon,
  product_list_icon,
  menu_icon,
  arrow_icon,
  increase_arrow,
  decrease_arrow,
  arrow_right_icon_colored,
  my_location_image,
  arrow_icon_white,
  heart_icon,
  star_icon,
  redirect_icon,
  star_dull_icon,
  header_headphone_image,
  header_playstation_image,
  header_macbook_image,
  macbook_image,
  bose_headphone_image,
  apple_earphone_image,
  samsung_s23phone_image,
  venu_watch_image,
  upload_area,
  cannon_camera_image,
  sony_airbuds_image,
  asus_laptop_image,
  projector_image,
  playstation_image,
  girl_with_headphone_image,
  girl_with_earphone_image,
  md_controller_image,
  sm_controller_image,
  jbl_soundbox_image,
  boy_with_laptop_image,
  product_details_page_apple_earphone_image1,
  product_details_page_apple_earphone_image2,
  product_details_page_apple_earphone_image3,
  product_details_page_apple_earphone_image4,
  product_details_page_apple_earphone_image5,
  checkmark,
};

export const BagIcon = () => {
  return (
    <svg
      className="w-5 h-5 text-gray-800"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
      />
    </svg>
  );
};

export const CartIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5M7.5 15.75C7.5 16.1642 7.16421 16.5 6.75 16.5C6.33579 16.5 6 16.1642 6 15.75C6 15.3358 6.33579 15 6.75 15C7.16421 15 7.5 15.3358 7.5 15.75ZM15.75 15.75C15.75 16.1642 15.4142 16.5 15 16.5C14.5858 16.5 14.25 16.1642 14.25 15.75C14.25 15.3358 14.5858 15 15 15C15.4142 15 15.75 15.3358 15.75 15.75Z"
        stroke="#4b5563"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <rect width="18" height="18" fill="white" />
      </defs>
    </svg>
  );
};

export const BoxIcon = () => (
  <svg
    className="w-5 h-5 text-gray-800"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z"
    />
  </svg>
);

export const HomeIcon = () => (
  <svg
    className="w-5 h-5 text-gray-800"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
    />
  </svg>
);

export const CallIcon = () => (
  <svg
    className="w-5 h-5 text-gray-800"
    fill="none"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
    />
  </svg>
);

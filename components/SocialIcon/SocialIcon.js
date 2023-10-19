import Link from "next/link";
// import { animated, useSpring } from "@react-spring/web";

export function SocialIcon(props) {
  const { data } = props;
  const { icon, label, source } = data;

  return (
    <Link href={source}  target="_blank"
    className="cursor-pointer hover:shadow-sm border border-gray-300 h-[36px] w-[36px] mr-[16px] flex justify-center items-center rounded-[4px]" >
       
        {icon}
      </Link>
  );
}

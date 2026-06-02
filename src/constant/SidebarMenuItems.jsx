import SvgApp from "../icons/SvgApp";
import SvgDashboard from "../icons/SvgDashboard";
import SvgMap from "../icons/SvgMap";
import SvgSettings from "../icons/SvgSettings";
import SvgTools from "../icons/SvgTools";

export const SIDEBAR_MENU = [
    {
      title: "داشبورد", icon: <SvgDashboard />,
      path:"/p/dashboard",
      subMenu: [
        { title: "صفحه اول", path: "/" },
        { title: "صفحه دوم", path: "/" },
      ]
    },
    {
      title: "اپلیکیشن", icon: <SvgApp />,
      subMenu: [
        { title: "صفحه اول", path: "/" },
        { title: "صفحه دوم", path: "/" },
      ]
    },
    {
      title: "ابزارها", icon: <SvgTools />,
      subMenu: [
        { title: "صفحه اول", path: "/" },
        { title: "صفحه دوم", path: "/" },
      ]
    },
    {
      title: "نقشه سایت", icon: <SvgMap />,
      subMenu: [
        { title: "صفحه اول", path: "/" },
        { title: "صفحه دوم", path: "/" },
      ]
    },
    {
      title: "تنظیمات", icon: <SvgSettings />,
      subMenu: [
        { title: "صفحه اول", path: "/" },
        { title: "صفحه دوم", path: "/" },
      ]
    },
  ]
import SvgApp from "../icons/SvgApp";
import SvgDashboard from "../icons/SvgDashboard";
import SvgMap from "../icons/SvgMap";
import SvgSettings from "../icons/SvgSettings";
import SvgTools from "../icons/SvgTools";

export const NAV_LINKS = [
    {
      title: "داشبورد", icon: <SvgDashboard />,
      path:"/p/dashboard",
    },
    {
      title: "اپلیکیشن", icon: <SvgApp />,
      subMenu: [
        { title: "مدیریت اپلیکیشن", path: "/p/application/management" },
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
      path:"/p/sitemap",
    },
    {
      title: "تنظیمات", icon: <SvgSettings />,
      path:"/p/settings",
    },
  ]
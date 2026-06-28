import React, { useEffect } from 'react'
import { useLayoutStore } from '../store/LayoutStore'
import SvgTools from '../icons/SvgTools'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import SvgUser from '../icons/SvgUser'




function DashboardChart() {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };


  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];


  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 2',
        data: [68, 29, 47, 36, 14, 45, 50],
        borderColor: '#bff747',
      },
    ],
  };

  return <Line options={options} data={data} />
}


function DashboardOrder() {
  const fakeData = [
    {
      name: "مریم حیدری",
      profit: "23.65",
    },
    {
      name: "علی رضایی",
      profit: "18.42",
    },
    {
      name: "سارا محمدی",
      profit: "31.90",
    },
    {
      name: "حسین کریمی",
      profit: "15.78",
    },
    {
      name: "زهرا احمدی",
      profit: "42.13",
    },
    {
      name: "محمد حسینی",
      profit: "27.56",
    },
    {
      name: "نگار شریفی",
      profit: "19.84",
    },
    {
      name: "رضا موسوی",
      profit: "35.21",
    },
  ]
  return (
    <ul className="flex flex-col gap-4">
      {fakeData.map((item, index) => {
        return (
          <li className="flex justify-between items-center w-full">
            <div className="flex gap-2">
              <div className="size-10 rounded-full bg-br flex justify-center">
                <SvgUser className="stroke-light/70! w-6" />
              </div>
              <div className="flex flex-col gap-1">
                <span>{item?.name}</span>
                <small className="text-xs text-light/50">۲۳ اردیبهشت</small>
              </div>
            </div>
            <span className="text-accent items-center">{item?.profit}</span>
          </li>
        )
      })}
    </ul>
  )
}


function DashboardBlog() {
  return (
    <>
    </>
  )
}


export default function Dashboard() {
  const { setPageTitle } = useLayoutStore()

  useEffect(() => {
    setPageTitle("داشبورد")
  }, [])

  return (
    <div className="w-full h-200 flex p-2 gap-7">
      <div className=" min-h-full w-9/12 flex flex-col gap-7">
        <div className="flex-1/5! grid grid-cols-4 gap-7 text-center">
          {[0, 0, 0, 0].map((item, index) => {
            return <div key={index} className="border border-br rounded-lg flex flex-col justify-between items-start p-4">
              <div className="bg-accent size-12 rounded-2xl flex justify-center items-center">
                <SvgTools className="stroke-black!" />
              </div>
              <div className="flex flex-col gap-1 items-start">
                <span className="text-light/50 text-sm">میزان فروش</span>
                <p className="text-light/80 text-xs">
                  <span className="text-2xl me-1">۱۲۰۰۰۰</span>تومان
                </p>
                <span className="text-accent text-xs">
                  +2.5%
                </span>
              </div>
            </div>
          })}
        </div>
        <div className="flex-3! grid grid-cols-2 gap-7">
          <div className="border border-br rounded-2xl p-4 flex items-end">
            <DashboardChart />
          </div>
          <div className="border border-br rounded-2xl p-4">
            <DashboardOrder />
          </div>
        </div>
      </div>
      <div className="w-3/12 bg-purple-800 border border-br rounded-2xl p-4">
        <div className="flex flex-col bg-purple-900 rounded-2xl">
          <img className="rounded-t-2xl max-h-60 min-h-50 object-cover" src="/images/blog.jpg" alt="" />
          <div className="flex flex-col gap-2 px-4 py-6">
            <h4 className="text-xl text-light">عنوان پست های آزمایشی در این قسمت</h4>
            <p className="text-light/70 text-sm leading-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

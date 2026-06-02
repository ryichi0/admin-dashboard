import Button from './Button'
import SvgEmail from '../../../icons/SvgEmail'
import SvgPassword from '../../../icons/SvgPassword'
import SvgUser from '../../../icons/SvgUser'



export default function InputBox({ icon, inputType, placeholder }) {
  return (
    <label htmlFor="" className={`w-full h-10 flex gap-1 items-start justify-center border border-br rounded-curve`}>
      <div className="w-10 p-2.5 self-center">{icon}</div>
      <input
        placeholder={placeholder}
        type={inputType}
        className="w-full h-full placeholder:text-purple-200 placeholder:text-sm" />
    </label>
  )
}


export function LoginForm() {
  return (
    <form action="" className="w-full flex flex-col gap-4">
      <InputBox icon={<SvgEmail />} inputType={'text'} placeholder={"ایمیل را وارد کنید"} />
      <InputBox icon={<SvgPassword />} inputType={'text'} placeholder={"رمز عبور"} />
      <Button className="w-full! bg-accent text-purple-900">ورود</Button>
    </form>
  )
}


export function RegisterForm() {
  return (
    <form action="" className="w-full flex flex-col gap-4">
      <InputBox icon={<SvgUser />} inputType={'text'} placeholder={"نام خود را وارد کنید"} />
      <InputBox icon={<SvgEmail />} inputType={'text'} placeholder={"ایمیل را وارد کنید"} />
      <InputBox icon={<SvgPassword />} inputType={'text'} placeholder={"رمز عبور"} />
      <Button className="w-full! bg-accent text-purple-900">ثبت نام</Button>
    </form>
  )
}

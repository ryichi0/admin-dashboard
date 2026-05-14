import { useState } from 'react'
import { AnimatedBorder } from '../../components/animatedBorder/Index'
import SvgLogo from '../../icons/SvgLogo'
import Button from './_components/Button'
import './Auth.css'
import { LoginForm, RegisterForm } from './_components/AuthForm'
import SvgAuthFooter from '../../icons/SvgAuthFooter'



export default function Auth() {
  const [formtype, setFormtype] = useState("login")

  return (
    <div className="w-full min-h-screen bg-purple-900 flex flex-col justify-center items-center text-light">
      <AnimatedBorder>
        <div className="w-120 flex flex-col gap-7 items-center py-7.5 px-8">
          <SvgLogo className="w-15 " />
          <div className="w-full h-px bg-linear-to-l from-transparent via-accent to-transparent"></div>
          <div className="w-8/12 p-0.75 border border-br flex gap-5 rounded-xl">
            <Button
              className={formtype === "login" && "bg-accent text-purple-900!"}
              onClick={() => setFormtype("login")}>
              ورود
            </Button>
            <Button
              className={formtype === "register" && "bg-accent text-purple-900!"}
              onClick={() => setFormtype("register")}>
              ثبت نام
            </Button>
          </div>
          {formtype === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </AnimatedBorder>
      {/* <SvgAuthFooter className="w-screen absolute bottom-4" /> */}
    </div>
  )
}

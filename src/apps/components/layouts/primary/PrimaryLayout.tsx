import { type ApplicationComponent } from "../../../types/application.d"
import { FooterLayout } from "../footer"
import { HeaderLayout } from "../header"

const PrimaryLayout: ApplicationComponent = ({ children }) => {
  return (
    <>
      <HeaderLayout />
      {children}
      <FooterLayout />
    </>
  )
}

export default PrimaryLayout

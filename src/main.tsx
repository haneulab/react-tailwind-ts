import { HeroCard } from "./apps/components/core"
import { PrimaryLayout } from "./apps/components/layouts"
import { type ApplicationComponent } from "./apps/types/application.d"

const Main: ApplicationComponent = () => {
  return (
    <PrimaryLayout>
      <HeroCard />
    </PrimaryLayout>
  )
}

export default Main

import Footer from "@/components/Footer";
import StakingHero from "@/components/staking/Hero";
import MyStats from "@/components/staking/MyStats";
import StakeNow from "@/components/staking/StakeNow";
import Stats from "@/components/staking/Stats";
import { FunctionComponent } from "react";

const Staking: FunctionComponent = () => {
  return (
    <>
      <StakingHero />
      <Stats />
      <StakeNow />
      <MyStats />
      <div className="w-full mt-[100px]">
        <Footer />
      </div>
    </>
  );
};

export default Staking;

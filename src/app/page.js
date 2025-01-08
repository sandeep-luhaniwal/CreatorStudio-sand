import Footer from "@/components/common/Footer";
import RequestCall from "@/components/homepage/RequestCall";
import Header from "@/components/common/Header";
import Details from "@/components/common/Details";
import StepsToPartner from "@/components/homepage/StepsToPartner";
import PeopleCheck from "@/components/homepage/PeopleCheck";
import HerePartners from "@/components/homepage/HerePartners";
import WhyJoin from "@/components/homepage/WhyJoin";

export default function Home() {
  return (
    <>
      <Header />
      <Details />
      <WhyJoin />
      <StepsToPartner />
      <PeopleCheck />
      <HerePartners />
      <RequestCall />
      <Footer />
    </>
  );
}
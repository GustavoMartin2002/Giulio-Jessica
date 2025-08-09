import AttendanceForm from "./components/AttendanceForm";
import Details from "./components/Details";
import GiftList from "./components/GiftList";
import Hero from "./components/Hero";
import Separator from "./components/Separator";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <>
      <Hero/>
      <main>
        <Separator/>
        <Welcome/>
        <Details/>
        <GiftList/>
        <Separator/>
        <AttendanceForm/>
      </main>
    </>
  );
}

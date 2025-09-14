import Hero from "./components/Hero";
import Separator from "./components/Separator";
import Welcome from "./components/Welcome";
import Details from "./components/Details";
import GiftList from "./components/GiftList";
import AttendanceForm from "./components/AttendanceForm";

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

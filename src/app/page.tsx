// import Card from "../../components/Card";
import PropsTest from "../../components/PropsTest";
import Navbar from "../../components/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>BILAL</h1>

      {/* <Card /> */}
      <PropsTest name="Bilal" cast="Jutt" />
      <PropsTest name="akmal" cast="Jutt" />
      <PropsTest name="nabeel" cast="Jutt" />
      <PropsTest name="muzammil" cast="khan" />
    </div>
  );
}

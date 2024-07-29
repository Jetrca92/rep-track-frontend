import { FC } from "react";
import Layout from "../components/ui/Layout";

const Home: FC = () => {
  return (
    <Layout>
      <div className="p-2 mb-4">
        <div className="container-fluid py-4">
          <h1 className="display-5 fw-bold">RepTrack</h1>
          <p className="col-md-8 fs-4">
            This app helps you to keep track of your Reps. The input is designed to be simple to use 
            from any modern mobile device, but gives you full power on your home pc to chart and analyze 
            your workouts over time.
          </p>
          <p className="col-md-8 fs-4">

          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Home

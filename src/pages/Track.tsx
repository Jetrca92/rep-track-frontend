import { FC } from "react"
import Layout from "../components/ui/Layout"
import TrackForm from "../components/TrackForm"

const Track: FC = () => {
  return (
    <Layout>
      <div className="p-2 mb-4">
        <div className="container-fluid py-4">
          <h1 className="display-5 fw-bold">Track</h1>
          <TrackForm />

          
        </div>
      </div>
    </Layout>
  )
}

export default Track

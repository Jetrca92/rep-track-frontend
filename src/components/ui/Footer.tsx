import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="container-xxl d-flex justify-content-between align-items-center p-4">
      <img src="/images/logo.png" alt="RepTrack" width={100} />
      <p className="mb-0">&copy; 2024</p>
    </footer>
  )
}

export default Footer

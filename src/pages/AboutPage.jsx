import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return <Card>
    <div>
      About
      <p>
        <Link to="/">Back To Home Page</Link>
      </p>
    </div>
  </Card>
}

export default AboutPage

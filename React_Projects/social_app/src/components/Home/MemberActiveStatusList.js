import { Col, Badge, ListGroup } from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa'

const MemberActiveStatusList = ({posts}) => {
  return (
    <Col md={4}>
      <ListGroup as="ul">
        {posts.map((post) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start member-list-item"
            key={post.id}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold"><FaUserCircle />{' '}{post.author}</div>
            </div>
            {Math.ceil(Math.random()*2) % 2 === 0 ? (<Badge bg="success" pill>
              Active
            </Badge>) :  (<Badge bg="secondary" pill>
              Not Active
            </Badge>)}
          </ListGroup.Item>
        ))}

      </ListGroup>
    </Col>
  )
}

export default MemberActiveStatusList
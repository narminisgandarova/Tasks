import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const Home = () => {
  return (
  <>
 <div className="px-4 py-5 my-5 text-center">
  <img className="d-block mx-auto mb-4" src="https://www.durhamnc.gov/ImageRepository/Document?documentId=42407" alt="err" width={72} height={57} />
  <h1 className="display-5 fw-bold">About Our Site</h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">This site helps you to register ID cards and store them in the database.You can add, update and delete information only after logging in. enjoy our site</p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <LinkContainer to='/login'>
      <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Sign in</button>
      </LinkContainer>
    </div>
  </div>
</div>
  </>
  )
}

export default Home
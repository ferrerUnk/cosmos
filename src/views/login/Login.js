import Button from '@restart/ui/esm/Button'
import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import MainContainer from '../../components/layouts/MainContainer'
export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const urlParams = new URLSearchParams(window.location.search);
  const message = urlParams.get('message');

  let history = useHistory()

  const login = async(e) => {
    e.preventDefault()
    setLoading(true)
    history.replace("/classes")
    setLoading(false)
  }
  
  return (
    <MainContainer headerVisible={false} loading={loading}>
      <div className="auth-container">
        <div className="login-container">
          <h1 className="title">Log In Portal</h1>
          <p className="subtitle text-danger">{message}</p>
          <div className="mt-5">
            <Row>
              <Col size="md" >
                <Form onSubmit={login}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="custom-label">E-mail / Username</Form.Label>
                    <Form.Control 
                      className="custom-input" 
                      size="lg" 
                      value={username}
                      type="text" 
                      placeholder="Enter e-mail or username here"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="custom-label">Password</Form.Label>
                    <Form.Control 
                      className="custom-input" 
                      size="lg" 
                      value={password}
                      type="password" 
                      placeholder="Enter password here"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Link className="link-orange font-24 d-none" to="/forgot_password" >Forgot Password</Link>
                  <Button className="btn btn-lg btn-primary btn-auth w-100 d-block mt-5 mb-4" size="lg" variant="primary" type="submit">Log In</Button>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </MainContainer>
  )
}

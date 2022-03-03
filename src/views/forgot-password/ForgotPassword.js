import Button from '@restart/ui/esm/Button'
import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import MainContainer from '../../components/layouts/MainContainer'

import ontraqLogo from '../../assets/images/ontraq-logo.png'
import parentlineLogo from '../../assets/images/parentline-logo.png'

export default function ForgotPassword() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const urlParams = new URLSearchParams(window.location.search);
  const message = urlParams.get('message');

  let history = useHistory()

  const login = async(e) => {
    e.preventDefault()
    setLoading(true)
    history.replace("/login?message=Password reset successfully")
    setLoading(false)
  }
  return (
    <MainContainer sidebarVisible={false} loading={loading}>
    <div className="auth-container">
      <div className="login-container">
        <img src={parentlineLogo} alt="logo" className="logo parentline-logo"/>
        <h1 className="title text-center">Reset Password</h1>
        <p className="subtitle text-danger text-center">{message}</p>
        <div className="">
          <Row>
            <Col size="md" >
              <Form onSubmit={login}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="custom-label">E-mail or Username</Form.Label>
                  <Form.Control 
                    className="custom-input" 
                    value={username}
                    type="text" 
                    placeholder="Enter your E-mail or username here"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                
                <Button className="btn btn-ontraq btn-lg btn-primary btn-auth w-100 d-block " size="lg" variant="primary" type="submit">RECOVER PASSWORD</Button>
                <Link className="mt-3 parentline-link text-decoration-none d-block text-center sign-in-link" to="/login" >Sign in</Link>
              </Form>
            </Col>
          </Row>
        </div>
        <img src={ontraqLogo} alt="logo" className="logo ontraq-logo"/>
      </div>

    </div>
  </MainContainer>
  )
}
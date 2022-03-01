import React from 'react'
import ontraqLogo from '../../../assets/images/ontraq-logo.png'
import parentlineLogo from '../../../assets/images/parentline-logo.png'
import { VERSION_NAME, ENV, ENV_LIST } from '../../../config/env'

export default function DevelopmentFooter() {
  return (
    <div class="footer text-dark">
      <img src={ontraqLogo} alt="logo"/>
      <img src={parentlineLogo} alt="logo"/>
      <p className="m-0">
        {ENV !== ENV_LIST.PRODUCTION ? `${ENV} BUILD` : ''}  
      </p>
      <p>
        Version: {VERSION_NAME}
      </p>
    </div>
  )
}

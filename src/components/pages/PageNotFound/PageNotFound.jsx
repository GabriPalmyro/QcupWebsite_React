import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function PageNotFound() {
  return (
    <div className="error_container">
     <div className="column align-items-center ">
      <h1>Página não encontrada - Erro 404</h1>
        <h5>Acesse o site clicando <Link to='/' target='_blank'>aqui</Link></h5>
     </div>
    </div>
  )
}

export default PageNotFound
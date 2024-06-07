import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <div className="mt-4 align-middle">
      <div className="card mb-2">
        <div className="card-body mx-auto">
          <h5 className="card-title">Vacantes en proceso: 2</h5>
          <h5 className="card-text mb-2">Vacantes en candidato ofertado: 2</h5>
          <h5 className="card-text">Vacantes en proceso de ingreso a la empresa: 2</h5>
          <h5 className="card-text">Vacantes en onbording mind teams: 2</h5>
          <h5 className="card-text">Vacantes en cuenta: 2</h5>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body mx-auto">
          <h5 className="card-title">Vacantes JR: 0</h5>
          <h5 className="card-text mb-2">Vacantes MID: 2</h5>
          <h5 className="card-text">Vacantes SR: 0</h5>
          <a href="#" className="card-link"></a>
          <a href="#" className="card-link"></a>
        </div>
      </div>
      <div className="card">
        <div className="card-body mx-auto">
          <h5 className="card-title">Tecnología principal más usada: JavaScript</h5>
          <h5 className="card-text mb-2">Tecnología secundaria más usada: Python</h5>
          <p className="card-text"></p>
          <a href="#" className="card-link"></a>
          <a href="#" className="card-link"></a>
        </div>
      </div>
    </div>
  )
}

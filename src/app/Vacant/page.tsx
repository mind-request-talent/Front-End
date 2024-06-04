"use client"
import Image from "next/image";
import styles from "../page.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";


export default function Home() {
  const [showMe, setShowMe] = useState(false);
      function toggle(){
      setShowMe(!showMe);
      }

  return (
    <div className="container mt-4">
      <div className="card mb-4">
        <div className="card-header">
          <div style={{display: showMe?"none":"block"}}> 
            <button type="button" className="btn btn-success col-2">En proceso</button>
          </div>
          <div className="form-group" style={{display: showMe?"block":"none"}}>
            <label>Cambiar estatus</label>
            <select className="form-control col-md-2 mb-3" defaultValue={"Status"} id="exampleFormControlSelect2">
              <option>En proceso</option>
              <option>Candidato ofertado</option>
              <option>En proceso de ingreso a la empresa</option>
              <option>En onbording mind teams</option>
              <option>En cuenta</option>
            </select>
          </div>
        </div>
        <div className="card-body">
          <blockquote className="blockquote">
            <div className="d-flex">
              <p className="col-4">◇ Rol: Po.</p>
              <p className="col-4">◇ Nivel de experiencia: Mid.</p>
              <p className="col-4">◇ Fecha de creacion: 04/06/2024</p>
            </div>
            <div className="d-flex">
              <p className="col-5">◇ Tecnologia principal: JavaScript.</p>
              <p className="col-5">Años usada: 2</p>
            </div>
            <div className="d-flex">
              <p className="col-5">◇ Tecnologia Secundaria: Python.</p>
              <p className="col-5">Años usada: 1</p>
            </div>
            <p>◇ Notas generales: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </blockquote>
        </div>
      </div>


      <div className="card mb-4">
        <div className="card-header">
          <div style={{display: showMe?"none":"block"}}> 
            <button type="button" className="btn btn-success col-2">En proceso</button>
          </div>
          <div className="form-group" style={{display: showMe?"block":"none"}}>
            <label>Cambiar estatus</label>
            <select className="form-control col-md-2 mb-3" defaultValue={"Status"} id="exampleFormControlSelect2">
              <option>En proceso</option>
              <option>Candidato ofertado</option>
              <option>En proceso de ingreso a la empresa</option>
              <option>En onbording mind teams</option>
              <option>En cuenta</option>
            </select>
          </div>
        </div>
        <div className="card-body">
          <blockquote className="blockquote">
            <div className="d-flex">
              <p className="col-4">◇ Rol: Po.</p>
              <p className="col-4">◇ Nivel de experiencia: Mid.</p>
              <p className="col-4">◇ Fecha de creacion: 04/06/2024</p>
            </div>
            <div className="d-flex">
              <p className="col-5">◇ Tecnologia principal: JavaScript.</p>
              <p className="col-5">Años usada: 2</p>
            </div>
            <div className="d-flex">
              <p className="col-5">◇ Tecnologia Secundaria: Python.</p>
              <p className="col-5">Años usada: 1</p>
            </div>
            <p>◇ Notas generales: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </blockquote>
        </div>
      </div>
      
          <div className="d-flex justify-content-center">
            <button type="submit" onClick={toggle} className="btn btn-dark mt-3 mb-3 mx-2">Editar</button>
            <button type="submit" style={{display: showMe?"block":"none"}} className="btn btn-dark mt-3 mb-3 mx-2">Guardar</button>
            </div>
    </div>
  );
}

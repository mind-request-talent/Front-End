"use client"
import Image from "next/image";
import styles from "../page.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

export default function Home() {

  const [Data, setdata] = useState();
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }

  useEffect(() => {
    ObtainData();
    Data
  } , []);

  async function ObtainData(){
    const response = await axios.get("http://localhost:3001/vacancies/")
    const responseData = response.data;
    setdata(responseData);
  }

  async function SendData(e: any){
    e.preventDefault();

    const data = {
      vacancy_status: String(e.target.vacancy_status.value),
      id: String(e.target.id.value)
    }

    console.log(data.vacancy_status);
    console.log(data.id);
      
   /*  try {
      const response = await axios.put(`http://localhost:3001/vacancies/${data.id}`, {
        vacancy_status: data.vacancy_status
      })
      console.log(response)
    } catch (error) {
      alert(error);
    } */
    
  }

  return (
    <div onSubmit={SendData} className="container mt-4">
      {Data?.map((data) => (
      <div key={data.id} id="id" className="card mb-4">
        <div className="card-header">
          <div style={{display: showMe?"none":"block"}}> 
            <button type="button" className="btn btn-success col-2">{data.vacancy_status}</button>
          </div>
          <div className="form-group" style={{display: showMe?"block":"none"}}>
            <label>Cambiar estatus</label>
            <select className="form-control col-md-2 mb-3" id="vacancy_status" required>
              <option>IN_PROCESS</option>
              <option>AVAILABLE</option>
              <option>TAKEN</option>
            </select>
          </div>
        </div>
        <div className="card-body">
          <blockquote className="blockquote">
            <div className="d-flex">
              <p className="col-4">◇ Nombre: {data.vacancy_name}.</p>
              <p className="col-4">◇ Precio: {data.sale_rate}.</p>
            </div>
            <div className="d-flex">
              <p className="col-4">◇ Rol: {data.role}.</p>
              <p className="col-4">◇ Nivel de experiencia: {data.experience_level}.</p>
              <p className="col-4">◇ Fecha de creacion: {data.start_date}</p>
            </div>
            <div className="d-flex">
              <p className="col-5">◇ Tecnologia principal: {data.main_tech}.</p>
              <p className="col-5">Años usada: {data.experience_required_for_main_tech}</p>
            </div>
            <div className="d-flex">
              <p className="col-5">◇ Tecnologia Secundaria: {data.second_tech}.</p>
              <p className="col-5">Años usada: {data.experience_required_for_second_tech}</p>
            </div>
            <p>◇ Notas generales: {data.notes}</p>
          </blockquote>
        </div>
      </div>
  ))}
      
          <div className="d-flex justify-content-center">
            <button type="submit" onClick={toggle} className="btn btn-dark mt-3 mb-3 mx-2">Editar</button>
            <button type="submit" onClick={SendData} style={{display: showMe?"block":"none"}} className="btn btn-dark mt-3 mb-3 mx-2">Guardar</button>
            </div>
    </div>
  );
}

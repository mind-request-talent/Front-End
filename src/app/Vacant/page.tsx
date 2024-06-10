"use client"
import Image from "next/image";
import styles from "../page.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Home() {

  const [Data, setdata] = useState();
  const [ID, setID] = useState();
  const [show, setShow] = useState(false);
  const [Page, setPage] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    ObtainData();
    Data
  } , []);

  async function ObtainData(){
    const response = await axios.post("http://localhost:3001/vacancies/obtainData")
    const responseData = response.data;
    
    setdata(responseData);
  }

  async function handleId(id: any){
    handleShow()
    setID(id)

  }

  async function SendData(e: any){
    e.preventDefault();

    const vacancy_Status = document.getElementById("vacancy_status") as HTMLInputElement;
    const vacancy_status = vacancy_Status.value;
      
    try {
      const response = await axios.put(`http://localhost:3001/vacancies/${ID}`, {
        vacancy_status: vacancy_status
      })
      window.location.reload();
    } catch (error) {
      alert(error);
    }
    
  }

  async function next(){
    setPage(Page + 2)
    let skip = Page
    if(Page != 0){
      const response = await axios.post("http://localhost:3001/vacancies/obtainData", { skip: skip })
      if(response.data.length == 0){
        setPage(Page - 2)
        const response = await axios.post("http://localhost:3001/vacancies/obtainData", { skip: skip })
        const responseData = response.data;
        setdata(responseData);
        window.scrollTo({ top: 0, behavior: 'instant' });
        }else{
        const responseData = response.data;
        setdata(responseData);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
  }

  async function previous(){
    if(Page != 0){
      setPage(Page - 2)
      let skip = Page
      const response = await axios.post("http://localhost:3001/vacancies/obtainData", { skip: skip })
      const responseData = response.data;
      setdata(responseData);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }else{
      let skip = 0
      const response = await axios.post("http://localhost:3001/vacancies/obtainData", { skip: skip })
      const responseData = response.data;
      setdata(responseData);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    
  }

  return (
    <div className="container mt-4">
      {Data?.map((data) => (
      <div key={data.id} id="id" className="card mb-4">
        <div className="card-header">
          <div onClick={() => handleId(data.id)}> 
            <button type="button" className="btn btn-success col-2">{data.vacancy_status}</button>
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
              <p className="col-4">◇ Fecha de creacion: {data.start_date.slice(0,-14)}</p>
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
      <Modal className="mt-5" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Elija el estatus de la vacante</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form id="SendData" onSubmit={SendData}>
          <div className="form-group">
            <label>Cambiar estatus</label>
            <select className="form-control col-md-2 mb-3" id="vacancy_status" required>
              <option>IN_PROCESS</option>
              <option>AVAILABLE</option>
              <option>TAKEN</option>
            </select>
          </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" type="submit" form="SendData" onClick={handleClose}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
      
          <div className="d-flex justify-content-center">
            <button type="submit" onClick={previous} className="btn btn-dark mt-3 mb-3 mx-2">Anterior</button>
            <button type="submit" onClick={next} className="btn btn-dark mt-3 mb-3 mx-2">Siguiente</button>
            </div>
    </div>
  );
}

'use client';
import Image from "next/image";
import styles from "../page.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Home() {
  const router = useRouter();

  async function SendData(e: any){
    e.preventDefault();

    const data = {
      vacancy_name: String(e.target.vacancy_name.value),
      role: String(e.target.role.value),
      experience_level: String(e.target.Experience_level.value),
      main_tech: String(e.target.Principal_tech.value),
      experience_required_for_main_tech: Number(e.target.Principal_tech_use_time.value),
      second_tech: String(e.target.Secondary_tech.value),
      experience_required_for_second_tech: Number(e.target.Secondary_tech_use_time.value),
      client: String(e.target.Client.value),
      client_id: String(e.target.Client_id.value),
      sale_rate: Number(e.target.Sale_rate.value),
      start_date: String(e.target.Date.value),
      vacancy_status: String(e.target.vacancy_status.value),
      General_notes: String(e.target.General_notes.value)
    }

    try {
      const response = await axios.post('http://localhost:3001/vacancies/', {
        vacancy_name: data.vacancy_name, role: data.role, experience_level: data.experience_level,
        main_tech: data.main_tech, experience_required_for_main_tech: data.experience_required_for_main_tech,
        second_tech: data.second_tech, experience_required_for_second_tech: data.experience_required_for_second_tech,
        client: data.client, client_id: data.client_id, sale_rate: data.sale_rate, start_date: data.start_date,
        vacancy_status: data.vacancy_status, notes: data.General_notes
      })
      console.log(response)
      window.location.reload();
    } catch (error) {
      alert(error);
    }
    
  }




  return (
    <form onSubmit={SendData} className="container col-6 text-center mt-4 bg-light">
      <div className="form-group">
        <div className="form-group mb-3">
          <label>Nombre del vacante</label>
          <input type="text" className="form-control" id="vacancy_name" required aria-describedby="emailHelp " />
        </div>
        <label>Rol</label>
        <select className="form-control mb-3" id="role" required>
          <option>PO</option>
          <option>SM</option>
          <option>TL</option>
          <option>Dev</option>
          <option>QA</option>
          <option>DevOps</option>
          <option>UIUX</option>
        </select>
      </div>
      <div className="form-group">
        <label>El nivel de experiencia</label>
        <select className="form-control col-md-2 mb-3" id="Experience_level" required>
          <option>JR</option>
          <option>MID</option>
          <option>SR</option>
        </select>
      </div>
      <div className="form-group mb-3">
        <label>Tecnologia principal</label>
        <input type="text" className="form-control" id="Principal_tech" required aria-describedby="emailHelp " />
      </div>
      <div className="form-group mb-3">
        <label>Años de experiencia requeridas para tecnologia pricipal</label>
        <input type="text" className="form-control" id="Principal_tech_use_time" required/>
      </div>
      <div className="form-group mb-3">
        <label>Tecnologia Secundaria</label>
        <input type="text" className="form-control" id="Secondary_tech" required/>
      </div>
      <div className="form-group mb-3">
        <label>Años de experiencia para tecnologia secundaria</label>
        <input type="text" className="form-control" id="Secondary_tech_use_time" required />
      </div>
      <div className="form-group mb-3">
        <label>Cliente que solicito el perfil</label>
        <input type="text" className="form-control" id="Client" required />
      </div>
      <div className="form-group mb-3">
        <label>Id del cliente</label>
        <input type="text" className="form-control" id="Client_id" required />
      </div>
      <div className="form-group mb-3">
        <label>El rate de venta</label>
        <input type="text" className="form-control" id="Sale_rate" required />
      </div>
      <div className="form-group">
        <label>Estado de la vacante</label>
        <select className="form-control col-md-2 mb-3" id="vacancy_status" required>
          <option>AVAILABLE</option>
          <option>TAKEN</option>
          <option>IN_PROCESS</option>
        </select>
      </div>
      <div className="form-group mb-3">
        <label>Fecha de creacion de la solicitud</label>
        <input type="text" className="form-control" placeholder="2024/04/14" id="Date" required />
      </div>
      <div className="form-group">
        <label>Notas generales</label>
        <textarea className="form-control" id="General_notes" required></textarea>
      </div>
      <button type="submit" className="btn btn-primary mt-3 mb-3 mx-auto d-block">Submit</button>
    </form>
  );
}

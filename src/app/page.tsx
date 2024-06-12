"use client"
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useEffect, useState } from "react";
const APIURL = process.env.NEXT_PUBLIC_API_URL

export default function Home() {

  const [taken, setTaken] = useState(0);
  const [available, setAvailable] = useState(0);
  const [inProcess, setInProcess] = useState(0);
  const [jr, setJr] = useState(0);
  const [mid, setMid] = useState(0);
  const [sr, setSr] = useState(0);
  const [mainTech, setMainTech] = useState();
  const [secondTech, setSecondTech] = useState();

  useEffect(() => {
    ObtainAllData()
    inProcess
    available
    taken
    jr
    mid
    sr
    mainTech
    secondTech
  } , []);


  async function ObtainAllData(){
    const response = await axios.get(`${APIURL}/vacancies/specs`)

    setAvailable(response.data.available_vacancies)
    setInProcess(response.data.in_process_vacancies)
    setTaken(response.data.taken_vacancies)
    setJr(response.data.jr_vacancies)
    setMid(response.data.mid_vacancies)
    setSr(response.data.sr_vacancies)
    setMainTech(response.data.most_frequent_main_tech)
    setSecondTech(response.data.most_frequent_second_tech)
    
  }

  return (
    <div className="mt-4 align-middle">
      <div className="card mb-2">
        <div className="card-body mx-auto">
          <h5 className="card-title">Vacantes en proceso: {inProcess}</h5>
          <h5 className="card-text mb-2">Vacantes actualmente elegidos: {taken}</h5>
          <h5 className="card-text">Vacantes disponibles: {available}</h5>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body mx-auto">
          <h5 className="card-title">Vacantes JR: {jr}</h5>
          <h5 className="card-text mb-2">Vacantes MID: {mid}</h5>
          <h5 className="card-text">Vacantes SR: {sr}</h5>
          <a href="#" className="card-link"></a>
          <a href="#" className="card-link"></a>
        </div>
      </div>
      <div className="card">
        <div className="card-body mx-auto">
          <h5 className="card-title">Tecnología principal más usada: {mainTech}</h5>
          <h5 className="card-text mb-2">Tecnología secundaria más usada: {secondTech}</h5>
          <p className="card-text"></p>
          <a href="#" className="card-link"></a>
          <a href="#" className="card-link"></a>
        </div>
      </div>
    </div>
  )
}

"use client"
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useEffect, useState } from "react";

export default function Home() {

  const [taken, setTaken] = useState(0);
  const [available, setAvailable] = useState(0);
  const [inProcess, setInProcess] = useState(0);
  const [jr, setJr] = useState(0);
  const [mid, setMid] = useState(0);
  const [sr, setSr] = useState(0);

  useEffect(() => {
    ObtainAvailable()
    ObtainInProcess()
    ObtainTaken()
    ObtainJR()
    ObtainMID()
    ObtainSR()
    inProcess
    available
    taken
    jr
    mid
    sr
  } , []);


  async function ObtainAvailable(e: any){
    const response = await axios.get("http://localhost:3001/vacancies/obtainInProcess")
    if(response.data.length == 0){
      setAvailable(0)
    }else{
      setAvailable(response.data)
    }
  }

  async function ObtainInProcess(e: any){
    const response = await axios.get("http://localhost:3001/vacancies/obtainAvailable")
    if(response.data.length == 0){
      setInProcess(0)
    }else{
      setInProcess(response.data)
    }
  }

  async function ObtainTaken(e: any){
    const response = await axios.get("http://localhost:3001/vacancies/obtainTaken")
    if(response.data.length == 0){
      setTaken(0)
    }else{
      setTaken(response.data)
    }
  }

  async function ObtainJR(e: any){
    const response = await axios.get("http://localhost:3001/vacancies/obtainJR")
    if(response.data.length == 0){
      setJr(0)
    }else{
      setJr(response.data)
    }
  }

  async function ObtainMID(e: any){
    const response = await axios.get("http://localhost:3001/vacancies/obtainMID")
    if(response.data.length == 0){
      setMid(0)
    }else{
      setMid(response.data)
    }
  }

  async function ObtainSR(e: any){
    const response = await axios.get("http://localhost:3001/vacancies/obtainSR")
    if(response.data.length == 0){
      setSr(0)
    }else{
      setSr(response.data)
    }
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

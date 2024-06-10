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
    ObtainAvailable()
    ObtainInProcess()
    ObtainTaken()
    ObtainJR()
    ObtainMID()
    ObtainSR()
    main_tech()
    second_tech()
    inProcess
    available
    taken
    jr
    mid
    sr
    mainTech
    secondTech
  } , []);


  async function ObtainAvailable(){
    const response = await axios.get(`${APIURL}/vacancies/obtainInProcess`)
    if(response.data.length == 0){
      setAvailable(0)
    }else{
      setAvailable(response.data)
    }
  }

  async function ObtainInProcess(){
    const response = await axios.get(`${APIURL}/vacancies/obtainAvailable`)
    if(response.data.length == 0){
      setInProcess(0)
    }else{
      setInProcess(response.data)
    }
  }

  async function ObtainTaken(){
    const response = await axios.get(`${APIURL}/vacancies/obtainTaken`)
    if(response.data.length == 0){
      setTaken(0)
    }else{
      setTaken(response.data)
    }
  }

  async function ObtainJR(){
    const response = await axios.get(`${APIURL}/vacancies/obtainJR`)
    if(response.data.length == 0){
      setJr(0)
    }else{
      setJr(response.data)
    }
  }

  async function ObtainMID(){
    const response = await axios.get(`${APIURL}/vacancies/obtainMID`)
    if(response.data.length == 0){
      setMid(0)
    }else{
      setMid(response.data)
    }
  }

  async function ObtainSR(){
    const response = await axios.get(`${APIURL}/vacancies/obtainSR`)
    if(response.data.length == 0){
      setSr(0)
    }else{
      setSr(response.data)
    }
  }

  async function main_tech(){
    const response = await axios.get(`${APIURL}/vacancies/main_tech`)
    setMainTech(response.data)
  }

  async function second_tech(){
    const response = await axios.get(`${APIURL}/vacancies/second_tech`)
    setSecondTech(response.data)
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

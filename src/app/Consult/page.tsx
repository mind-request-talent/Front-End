import Image from "next/image";
import styles from "../page.module.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <form className="container col-6 text-center mt-4 bg-light">
      <div className="form-group">
        <label>Rol</label>
        <select className="form-control mb-3" defaultValue={"Role"} id="exampleFormControlSelect1">
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
        <select className="form-control col-md-2 mb-3" id="exampleFormControlSelect2">
          <option>Jr</option>
          <option>Mid</option>
          <option>Sr</option>
        </select>
      </div>
      <div className="form-group mb-3">
        <label>Tecnologia principal</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp " />
      </div>
      <div className="form-group mb-3">
        <label>Años de experiencia requeridas para tecnologia pricipal</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="form-group mb-3">
        <label>Tecnologia Secundaria</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="form-group mb-3">
        <label>Años de experiencia para tecnologia secundaria</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="form-group mb-3">
        <label>Cliente que solicito el perfil</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="form-group mb-3">
        <label>El rate de venta</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="form-group mb-3">
        <label>Fecha compromiso de  inicio</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="form-group mb-3">
        <label>Fecha de creacion de la solicitud</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="form-group">
        <label>Notas generales</label>
        <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
      </div>
      <button type="submit" className="btn btn-primary mt-3 mb-3 mx-auto d-block">Submit</button>
    </form>
  );
}

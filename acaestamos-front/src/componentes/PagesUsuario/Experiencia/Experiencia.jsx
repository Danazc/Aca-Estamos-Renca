import { useState, useEffect } from "react";
import "./Experiencia.css";
import client from "../../../Utils/axios.Client";
import getUserId from "../../../Utils/getUserId";
import { useNavigate, Link } from "react-router-dom";
import { useAlert } from "../../../Efectos/useAlert";

const Experiencia = () => {
  //Definicion de constantes
  const [perfil, setPerfil] = useState(null);
  const [Cargo, setCargo] = useState("");
  const [TipoEmpleo, setTipoEmpleo] = useState("");
  const [NombredelaEmp, setNombredelaEmp] = useState("");
  const [FechaExpInicio, setFechaExpInicio] = useState("");
  const [FechaExpFin, setFechaExpFin] = useState("");
  const [CheckCargo, setCheckCargo] = useState(false);
  const [DescripcionCargo, setDescripcionCargo] = useState("");

  //Usa el hook useAlert para obtener el estado y la API de alerta
  const [alertState, alertApi] = useAlert("alertsElement");

  //Definicion de funciones
  const showAlert = () => {
    let hasError = true;

    if (
      !Cargo ||
      !TipoEmpleo ||
      !NombredelaEmp ||
      !FechaExpInicio ||
      !FechaExpFin ||
      !DescripcionCargo
    ) {
      alertApi.show(
        "¡No llenaste correctamente los datos solicitados!",
        "error"
      );
      hasError = false;

      return hasError;
    }
  };

  useEffect(() => {
    const obtenerPerfil = async () => {
      try {
        const response = await client.get(`/Obtener-Perfil/${getUserId()}`);
        setPerfil(response?.data);

        if (response?.data?.Cargo) setCargo(response?.data?.Cargo);
        if (response?.data?.TipoEmpleo)
          setTipoEmpleo(response?.data?.TipoEmpleo);
        if (response?.data?.NombredelaEmp)
          setNombredelaEmp(response?.data?.NombredelaEmp);
        if (response?.data?.FechaExpInicio)
          setFechaExpInicio(response?.data?.FechaExpInicio);
        if (response?.data?.FechaExpFin)
          setFechaExpFin(response?.data?.FechaExpFin);
        if (response?.data?.CheckCargo)
          setCheckCargo(response?.data?.CheckCargo);
        if (response?.data?.DescripcionCargo)
          setDescripcionCargo(response?.data?.DescripcionCargo);
      } catch (error) {
        if (error.response) {
          console.error("Error en la respuesta:", error.response.data);
        } else if (error.request) {
          console.error("Error en la solicitud:", error.request);
        } else {
          console.error("Error general:", error.message);
        }
      }
    };

    obtenerPerfil();
  }, []);

  const navigate = useNavigate();

  const GuardarExperiencia = async (e) => {
    e.preventDefault();
    try {
      const userId = getUserId();
      const response = await client.post(
        `http://localhost:3000/Guardar-Experiencia/${userId}`,
        {
          Cargo,
          TipoEmpleo,
          FechaExpInicio,
          NombredelaEmp,
          FechaExpFin,
          CheckCargo,
          DescripcionCargo,
        }
      );

      console.log(response.data);
      navigate("/Actualizar-Cv");
    } catch (error) {
      console.error("Error al guardar el perfil:", error);
    }
  };

  return (
    <>
      <div id="Experiencia" style={{ margin: "50px auto", maxWidth: "800px" }}>
        <div
          className="border p-4"
          style={{
            fontFamily: "Poppins-Regular",
            backgroundColor: "rgba(4, 157, 217, 0.15)",
            borderRadius: "10px",
            borderStyle: "solid",
            borderColor: "black",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <h2 style={{ fontFamily: "Heavitas" }} className="text-center">
            Experiencia Laboral
          </h2>
          <div
            style={{ width: "80%", margin: "auto" }}
            className="form-Experiencia"
          >
            <form onSubmit={GuardarExperiencia}>
              <div className="mb-3">
                <label htmlFor="cargo" className="form-label">
                  Cargo:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cargo"
                  placeholder="Ej. Ingeniero"
                  defaultValue={perfil && perfil.Cargo}
                  onChange={(e) => setCargo(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tipoEmpleo" className="form-label">
                  Tipo de empleo:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tipoEmpleo"
                  placeholder="Part Time"
                  defaultValue={perfil && perfil.TipoEmpleo}
                  onChange={(e) => setTipoEmpleo(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="nombreEmpresa" className="form-label">
                  Nombre de la empresa:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreEmpresa"
                  placeholder="Ej. MQQ"
                  defaultValue={perfil && perfil.NombredelaEmp}
                  onChange={(e) => setNombredelaEmp(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fechaInicio" className="form-label">
                  Fecha Inicio:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="fechaInicio"
                  placeholder="DD/MM/AAAA"
                  defaultValue={perfil && perfil.FechaExpInicio}
                  onChange={(e) => setFechaExpInicio(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fechaFin" className="form-label">
                  Fecha finalización:
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id="actualmenteCargo"
                    defaultValue={perfil && perfil.CheckCargol}
                    onChange={(e) => setCheckCargo(e.target.checked)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="actualmenteCargo"
                  >
                    Actualmente estoy en este cargo
                  </label>
                </div>
                <input
                  disabled={CheckCargo}
                  type="date"
                  className="form-control"
                  id="fechaFin"
                  placeholder="DD/MM/AAAA"
                  defaultValue={perfil && perfil.FechaExpFin}
                  onChange={(e) => setFechaExpFin(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="descripcionCargo" className="form-label">
                  Descripción:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="descripcionCargo"
                  placeholder="Agrega una descripción del cargo"
                  defaultValue={perfil && perfil.DescripcionCargo}
                  onChange={(e) => setDescripcionCargo(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-center">
                <Link
                  to="/Actualizar-Cv"
                  type="button"
                  className="btn btn-secondary btn-lg me-2"
                >
                  Cancelar
                </Link>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  onClick={showAlert}
                >
                  Guardar
                </button>
              </div>
            </form>

            {/* Muestra la alerta si está visible */}
            {alertState.visible && (
              <div id="alertsElement" className={`alert ${alertState.type}`}>
                {alertState.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiencia;

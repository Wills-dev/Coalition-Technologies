import React from "react";

import Navbar from "../components/Navbar";
import Patients from "../components/Patients";
import Analytics from "../components/Analytics";
import AboutPatient from "../components/AboutPatient";
import { useGetAllPatientsData } from "../hooks/useGetAllPatientsData";

const Home = () => {
  const { patientss, selectedPatient, setSelectedPatient, loading } =
    useGetAllPatientsData();
  console.log("patients", patientss);

  return (
    <div className="w-full max-h-full h-full bg-[#F6F7F8] min-h-full p-[18px] flex flex-col gap-6 ">
      <Navbar />
      <div className="flex gap-6 flex-1 h-full max-h-full">
        <Patients
          Patientss={patientss}
          setSelectedPatient={setSelectedPatient}
        />
        <Analytics selectedPatient={selectedPatient} />
        <AboutPatient selectedPatient={selectedPatient} />
      </div>
    </div>
  );
};

export default Home;

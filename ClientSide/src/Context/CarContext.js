import React, { createContext, useState } from "react";

export const CarContextData = createContext();

export default function CarContext({ children }) {
  const [car, setCar] = useState([]);
  const [edit, setEdit] = useState({});
  const [headerData, setHeaderData] = useState({});
  const [carData, setCarData] = useState({});
  const [bookingDetails, setBookingDetails] = useState([]);
  const [bookData, setBookData] = useState([]);
  const [inputData, setInputData] = useState({
    origin: "",
    destination: "",
    startDate: "",
    endDate: "",
    distance: "",
  });
  const [data, setData] = useState({
    name: "",
    type: "",
    model: "",
    mileage: "",
    image: "",
    availableFrom: "",
    availableTill: "",
    perKm: "",
    description: "",
    carDetails: "",
    details: "",
  });
  const [editBookingDetails, setEditBookingDetails] = useState({});
  const [view, setView] = useState("login");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminRegister, setShowAdminRegister] = useState(false);


  return (
    <CarContextData.Provider
      value={{
        car,
        setCar,
        data,
        setData,
        edit,
        setEdit,
        headerData,
        setHeaderData,
        carData,
        setCarData,
        bookingDetails,
        setBookingDetails,
        bookData,
        setBookData,
        editBookingDetails,
        setEditBookingDetails,
        inputData,
        setInputData,
        view,
        setView,
        isAdmin,
        setIsAdmin,
        showAdminRegister,
        setShowAdminRegister
      }}
    >
      {children}
    </CarContextData.Provider>
  );
}

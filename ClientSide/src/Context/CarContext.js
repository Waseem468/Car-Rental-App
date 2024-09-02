import React, { createContext, useState } from "react";

export const CarContextData = createContext();

export default function CarContext({ children }) {
  const [car, setCar] = useState([]);
  const [edit, setEdit] = useState({});

  const [headerData, setheaderData] = useState({});
  const [CarData, setCarData] = useState({});
  const [bookingDetails, setBookingDetails] = useState([]);
  const [Bookdata, setBookData] = useState([]);

  const [inputdata, setInputData] = useState({
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
    milage: "",
    image: "",
    availableFrom: "",
    availableTill: "",
    perKm: "",
    description: "",
    carDetails: "",
    Details: "",
  });
  const [EditBookingDetails, setEditBookingDetails] = useState({});
  return (
    <>
      <CarContextData.Provider
        value={{
          car,
          setCar,
          data,
          setData,
          edit,
          setEdit,
          headerData,
          setheaderData,
          CarData,
          setCarData,
          bookingDetails,
          setBookingDetails,
          Bookdata,
          setBookData,
          EditBookingDetails,
          setEditBookingDetails,
          inputdata,
          setInputData,
        }}
      >
        {children}
      </CarContextData.Provider>
    </>
  );
}

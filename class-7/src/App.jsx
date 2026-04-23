import React, { useState } from "react";
import Card from "../components/Card";

const App = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [data, setdata] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

   setdata([...data, { name, image, role, description }])
    
    setName("");
    setDescription("");
    setImage("");
    setRole("");
      console.log(newdata);
  };

  const deleteHandler = (idx)=>{
    const copyuser = [...data]
    copyuser.splice(idx,1)
    setdata(copyuser)
  }
  return (
    <div className="h-screen w-screen text-white bg-black">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-wrap p-2 justify-center"
      >
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter name"
        />

        <input
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Image URL"
        />

        <input
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Role"
        />

        <input
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Description"
        />

        <button
          type="submit"
          className=" px-5 py-2 text-xl active:scale-99 rounded bg-emerald-700 m-2 w-[92%]"
        >
          Submit
        </button>
      </form>
      <div className="px-4 py-10 gap-4 flex flex-wrap" >
        {data.map(function(elem,idx){
          return <Card idx={idx} elem={elem} deleteHandler={deleteHandler}/>
        })}
      </div>
    </div>
  );
};

export default App;  


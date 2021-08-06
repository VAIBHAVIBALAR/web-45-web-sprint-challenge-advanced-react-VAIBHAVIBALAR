// write your custom hook here to control your checkout form
import React, {useState} from "react";

//Created this useForm custom hook and used the stateful logic required for checkout
const useForm = (init) =>{
    const [values, setValues] = useState(init);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return [values, handleChanges]
}
export default useForm;
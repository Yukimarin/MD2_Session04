// rfce
import React, { useState } from "react";
import Anh from "../asset/1.jpg";
function Register() {
  // BTVN
  //  const [user,setUser]=useState({
  //   userName:"",
  //   email:"",
  //   pass:"",
  //   gender:"",
  //   age:""
  //  })
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, email, pass, gender, age, address);
    // Validate form
    if (!userName || !email || !pass || !gender || !age || !address) {
      setError("Không được để trống, yêu cầu nhập dữ liệu!");
    } else {
      setError(null);
      setSuccess(true);
    }
  };

  return (
    <div>
      <img src={Anh} alt='' />
      <h1>REGISTER FORM</h1>
      {success ? (
        <div style={{ color: "green" }}>Đăng ký thành công</div>
      ) : (
        <div style={{ color: "red" }}>{error}</div>
      )}
      <form action=''>
        <div>
          Username{" "}
          <input
            type='text'
            name='username'
            id='username'
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          Email{" "}
          <input
            type='email'
            name='email'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          Password{" "}
          <input
            type='password'
            name='pass'
            id='pass'
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div>
          Gender: Nam{" "}
          <input
            type='radio'
            name='gender'
            id='male'
            onChange={(e) => setGender(e.target.value)}
          />
          Nữ{" "}
          <input
            type='radio'
            name='gender'
            id='female'
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div>
          Age:{" "}
          <input
            type='number'
            name='age'
            id='age'
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          Address:{" "}
          <select
            name='address'
            id='address'
            onChange={(e) => setAddress(e.target.value)}
          >
            <option value='HN'>Hà Nội</option>
            <option value='HCM'>Hồ Chí Minh</option>
            <option value='JP'>Nhật Bản</option>
          </select>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Register;

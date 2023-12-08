import {Form,Card, Container} from "react-bootstrap"
import {useState} from "react"




const Main = () => {
const [email, setEmail] = useState("")
const [username, setUsername] = useState("")
const [firstname, setFirstname] = useState("")
const [lastname, setLastname] = useState("")
const [password, setPassword] = useState("")
const [image, setImage] = useState("")
const [validEmail, setValidEmail] = useState(false);
const [validPassword, setValidPassword]=useState(false)
const [validurl, setValidUrl]=useState(false)
const [submitted, setSubmitted] = useState(false);
const [buttonVisible, setButtonVisible] = useState(true);


const handleEmailChange=(e)=>{
setEmail(e.target.value)

//+mail doğrulama yani şartlar @işaretinden sonra en az 3 karakter olmalı başta sonda bulunmaması gereken işaretler olmamalı
const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) && e.target.value.includes('@');

setValidEmail(isValid && e.target.value.slice(e.target.value.indexOf('@') + 1).length >= 3);ButtonState();
}
const handlePasswordChange=(e)=>{
  setPassword(e.target.value)
  setValidPassword(e.target.value.trim().length>=8)
  ButtonState();
}

const handleUrlChange=(e)=>{
  setImage(e.target.value)
  setValidUrl(/^(ftp|http|https):\/\/[^ "]+$/.test(e.target.value)) //+chatgpt yardımı
  ButtonState();
}


const ButtonState = () => {
  setButtonVisible(
    !validEmail ||
    !validPassword ||
    !validurl ||
    email.trim() === "" ||
    password.trim() === "" ||
    image.trim() === ""
  );
};


const handleSubmit = (e) => {
  e.preventDefault();
  setSubmitted(true);
  
  
  
};
const handleButtonClick = () => {

  
};


  return (
    <div className="container text-dark border boder-dark   align-items-center justify-content-center">
      
        <Form onSubmit={handleSubmit}>
        <h1 className="text-center text-danger ">FORM CONTROLS</h1>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" 
        placeholder="Enter Your Email" 
        value={email} 
        onChange={handleEmailChange}
        isInvalid={!validEmail} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" 
        placeholder="Enter Username" 
        onChange={(e)=>setUsername(e.target.value)} 
        value={username} 
        required/>


      </Form.Group>
      <Form.Group className="mb-3" controlId="firstname">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" 
        placeholder="Enter First Name" 
        onChange={(e)=>setFirstname(e.target.value)} 
        value={firstname} 
        required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" 
        placeholder="Enter Last Name" 
        onChange={(e)=>setLastname(e.target.value)} 
        value={lastname} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" 
        placeholder="Enter Image URL" 
        onChange={handleUrlChange} 
        value={image}
        isInvalid={!validurl} required 
        />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="password">
        <Form.Label>Password</Form.Label> 
        <Form.Control type="password" 
        placeholder="Enter Password" 
        onChange={handlePasswordChange}
         value={password} 
         isInvalid={!validPassword}
         required />
      
      </Form.Group>

      <button onClick={handleButtonClick} style={{margin:"0 300px", padding:".7rem", fontWeight:"bold", backgroundColor:"blue", color:"white", border:"none", borderRadius:"10px",display: buttonVisible ? 'none' : 'inline-block'}} type="submit" 
      disabled= {buttonVisible}>
        Submit
        </button>
     
    </Form>
    {submitted && (
      <div className="container w-100">
         <Card className="w-50 text-center m-auto mt-3 d-flex align-items-center justify-content-center">
          <Card.Img variant="top" src={image} alt="User Image" />
          <Card.Body>
            <Card.Title>{username}</Card.Title>
            <Card.Text>
              Email: {email}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
       
      )}
    </div>
  )
}

export default Main

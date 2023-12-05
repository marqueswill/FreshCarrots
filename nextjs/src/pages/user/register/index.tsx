import styles from "@/styles/Login.module.css";
import { useState } from "react";

export async function handleUserRegister(props: {
  cpf: string;
  username: string;
  name: string;
  email: string;
  password: string;
  college: string;
  course: string;
  passwordConfirmation: string;
}) {
  const requiredFields = ["cpf", "username", "name", "email", "password", "college", "course"];

  // Verify that password and passwordConfirmation are the same
  if (props.password !== props.passwordConfirmation) {
    alert("Senhas não são iguais");
    return;
  }

  // Verify that CPF is a valid format
  const cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;
  if (!cpfRegex.test(props.cpf)) {
    alert("CPF inválido");
    return;
  }

  // Verify that email is a valid format
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailRegex.test(props.email)) {
    alert("Email inválido");
    return;
  }

  const res = await fetch(`/api/user/register`, {
    method: "POST",
    body: JSON.stringify({
      cpf: props.cpf,
      username: props.username,
      name: props.name,
      email: props.email,
      password: props.password,
      college: props.college,
      course: props.course,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const data = await res.json();
    alert(data.message);
    window.location.href = `/`;
  } else {
    const data = await res.json();
    alert(data.error);
  }
}

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <div className={styles.page}>
      <div className={styles.login_box}>
        <img src="/images/logomark.png" alt="" className={styles.logo} />
        <form action="" className={styles.form}>
          <h1>Dados pessoais</h1>
          <span className={styles.span_input}>
            <label htmlFor="" className={styles.label}>
              Nome:
            </label>
            <input
              onChange={(event) => {
                setName(String(event.target.value));
              }}
              type="text"
              className={styles.input}
              placeholder="Digite aqui"
            />
          </span>
          <span className={styles.span_input}>
            <label htmlFor="" className={styles.label}>
              CPF:
            </label>
            <input
              onChange={(event) => {
                setCpf(String(event.target.value));
              }}
              type="text"
              className={styles.input}
              placeholder="Digite aqui"
            />
          </span>
          <span className={styles.span_input}>
            <label htmlFor="" className={styles.label}>
              Faculdade:
            </label>
            <input
              onChange={(event) => {
                setCollege(String(event.target.value));
              }}
              type="text"
              className={styles.input}
              placeholder="Digite aqui"
            />
          </span>
          <span className={styles.span_input}>
            <label htmlFor="" className={styles.label}>
              Curso:
            </label>
            <input
              onChange={(event) => {
                setCourse(String(event.target.value));
              }}
              type="text"
              className={styles.input}
              placeholder="Digite aqui"
            />
          </span>

          <br />
          <h1>Dados de login</h1>
          <span className={styles.span_input}>
            <label htmlFor="" className={styles.label}>
              Email:
            </label>
            <input
              onChange={(event) => {
                setEmail(String(event.target.value));
              }}
              type="email"
              className={styles.input}
              placeholder="Digite aqui"
            />
          </span>
          <span className={styles.span_input}>
            <label htmlFor="" className={styles.label}>
              Nome de usuário:
            </label>
            <input
              onChange={(event) => {
                setUsername(String(event.target.value));
              }}
              type="text"
              className={styles.input}
              placeholder="Digite aqui"
            />
          </span>
          <span className={styles.span_input}>
            <label htmlFor="" className={styles.label}>
              Senha:
            </label>
            <input
              onChange={(event) => {
                setPassword(String(event.target.value));
              }}
              type="password"
              className={styles.input}
              placeholder="Digite aqui"
            />
          </span>
          <span className={styles.span_input}>
            <label htmlFor="" className={styles.label}>
              Confirme a senha:
            </label>
            <input
              onChange={(event) => {
                setPasswordConfirmation(String(event.target.value));
              }}
              type="password"
              className={styles.input}
              placeholder="Digite aqui"
            />
          </span>
          {/* <span>Continuar com o google</span> */}
          {/* <a href="/user/login" className={styles.a}>
            Já tenho conta
          </a> */}
          <button
            className={styles.button}
            onClick={() => {
              handleUserRegister({
                name: name,
                cpf: cpf,
                college: college,
                course: course,
                email: email,
                username: username,
                password: password,
                passwordConfirmation: passwordConfirmation,
              });
            }}
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}

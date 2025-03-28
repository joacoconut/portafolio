import { useState } from "react";
import styles from "../../styles/contact/form.module.css";

const FormContact: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/mgvwkazr", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail(""); // Resetea el input email
        setMessage(""); // Resetea el textarea
        setTimeout(() => setSubmitted(false), 3000); // Oculta el mensaje tras 3s
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.fieldsContainer}>
        <label className={styles.label}>Tu email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.fieldsContainer}>
        <label className={styles.label}>Mensaje:</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className={styles.textarea}
        />
      </div>

      <button type="submit" className={styles.button}>
        Enviar
      </button>

      {submitted && (
        <p className={styles.success}>¡Mensaje enviado con éxito!</p>
      )}
    </form>
  );
};

export default FormContact;

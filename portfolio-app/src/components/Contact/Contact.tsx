import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import { Socials } from '../Socials';
import { Planet } from '../PlanetCanvas';
import { Alert } from '../Alert';

type ContactForm = {
  name: string;
  company: string;
  email: string;
  message: string;
};

type EmailRequest = {
  from_name: string;
  to_name: string;
  from_email: string;
  message: string;
};

export const Contact = () => {
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (value: string, key: string) => {
    setContactForm({ ...contactForm, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    console.log({ success });

    if (contactForm.company) {
      setContactForm({
        ...contactForm,
        message: `Company: ${contactForm.company}\n\n` + contactForm.message,
      });
    }

    const request: EmailRequest = {
      from_name: contactForm.name,
      to_name: 'Adam Meester',
      from_email: contactForm.email,
      message: contactForm.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        request,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsLoading(false);
          setSuccess(true);
        },
        (error: string) => {
          setIsLoading(false);
          setError(error);
        }
      );
    setSuccess(false);
    setIsLoading(false);
  };

  return (
    <section id='contact' className={`${styles.contact}`}>
      <div className={styles.contactHeader}>
        <h1>Get in Touch</h1>
        <Planet planet='blackTop' />
      </div>
      <div className={`${styles.container}`}>
        <form
          className={`${styles.contactForm}`}
          onSubmit={(e) => handleSubmit(e)}
        >
          <label className={`${styles.formLabel}`}>
            Name
            <input
              type='text'
              name='name'
              value={contactForm.name}
              placeholder='John'
              className={`${styles.formInput}`}
              onChange={(e) => handleChange(e.target.value, 'name')}
              required
            />
          </label>
          <label className={`${styles.formLabel}`}>
            Company (optional)
            <input
              type='text'
              name='company'
              value={contactForm.company}
              placeholder='Amazon'
              className={`${styles.formInput}`}
              onChange={(e) => handleChange(e.target.value, 'company')}
            />
          </label>
          <label className={`${styles.formLabel}`}>
            Email
            <input
              type='email'
              name='email'
              value={contactForm.email}
              placeholder='johnsmith@gmail.com'
              className={`${styles.formInput}`}
              onChange={(e) => handleChange(e.target.value, 'email')}
              required
            />
          </label>
          <label className={`${styles.formLabel}`}>
            Message
            <textarea
              name='message'
              rows={4}
              className={`${styles.formInput} ${styles.textArea}`}
              value={contactForm.message}
              placeholder='Your message...'
              onChange={(e) => handleChange(e.target.value, 'message')}
              required
            />
          </label>
          <button
            type='submit'
            className={`${styles.submitButton}`}
            disabled={isLoading}
            // onFocus={handleFocus}
            // onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        <div className={styles.socialsContainer}>
          <Socials />
        </div>
      </div>
      {success || !!error ? (
        <Alert
          type='success'
          label={
            success ? 'Email sent successfully!' : 'Sorry, an error occurred.'
          }
        />
      ) : null}
    </section>
  );
};

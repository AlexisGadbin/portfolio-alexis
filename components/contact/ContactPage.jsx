'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Title from '../Title'
import TextInput from '../inputs/TextInput'
import TextArea from '../inputs/TextArea'
import Button from '../inputs/Button'

function ContactPage() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'service_7hrdufj',
        'template_i0jnrh4',
        {
          from_name: contact.name,
          from_email: contact.email,
          message: contact.message,
          to_email: 'alexis@gadbin.com',
          to_name: 'Alexis',
        },
        'zJ21q4M9eCy7yhkH-'
      )
      .then(
        () => {
          setLoading(false)
          setContact({
            name: '',
            email: '',
            message: '',
          })
        },
        () => {
          setLoading(false)

          // eslint-disable-next-line no-alert
          alert(
            "Le mail n'a pas pu être envoyé. Rééssayez plus tard ou contactez moi direcement à l'adresse alexis@gadbin.com "
          )
        }
      )
  }

  return (
    <section className="h-screen px-12 md:px-[200px]" id="contact">
      <Title title="Contact" color="dark" />
      <div className="flex justify-center">
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 pt-12 md:gap-14">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-28">
              <TextInput
                required
                placeholder="Votre nom"
                value={contact.name}
                onChange={(event) =>
                  setContact({
                    ...contact,
                    name: event.target.value,
                  })
                }
              />
              <TextInput
                required
                placeholder="Votre e-mail"
                value={contact.email}
                onChange={(event) =>
                  setContact({
                    ...contact,
                    email: event.target.value,
                  })
                }
              />
            </div>
            <TextArea
              required
              placeholder="Votre message"
              value={contact.message}
              onChange={(event) =>
                setContact({
                  ...contact,
                  message: event.target.value,
                })
              }
            />
            <Button submit text={loading ? 'Envoi...' : 'Envoi'} />
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage

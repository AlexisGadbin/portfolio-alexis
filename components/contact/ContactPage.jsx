'use client'

import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Title from '../Title'
import Button from '../inputs/Button'
import TextArea from '../inputs/TextArea'
import TextInput from '../inputs/TextInput'

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
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: contact.name,
          from_email: contact.email,
          message: contact.message,
          to_email: 'alexis@gadbin.com',
          to_name: 'Alexis',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
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
    <section
      className="h-screen px-12 md:px-[75px] lg:px-[100px] xl:px-[200px] 2xl:px-[400px]"
      id="contact"
    >
      <Title title="Contact" color="dark" />
      <motion.div
        className="flex justify-center"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
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
      </motion.div>
    </section>
  )
}

export default ContactPage

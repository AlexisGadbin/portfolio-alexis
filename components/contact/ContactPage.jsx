'use client'

import { useState } from 'react'
import Title from '../Title'
import TextInput from '../inputs/TextInput'
import TextArea from '../inputs/TextArea'

function ContactPage() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  })

  return (
    <section className="h-screen px-[200px]" id="contact">
      <Title title="Contact" color="dark" />
      <div className="flex justify-center">
        <div className="flex flex-col gap-14 pt-12">
          <div className="flex justify-between gap-28">
            <TextInput
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
            placeholder="Votre message"
            value={contact.message}
            onChange={(event) =>
              setContact({
                ...contact,
                message: event.target.value,
              })
            }
          />
        </div>
      </div>
    </section>
  )
}

export default ContactPage

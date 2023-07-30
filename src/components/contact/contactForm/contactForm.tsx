import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import TextField from '@mui/material/TextField'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './contactForm.module.scss'
import classNames from 'classnames'
import { useState, useRef } from 'react'
import { Transition } from 'react-transition-group'
interface FormProps {
  className?: string
}

const duration = 400

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
}

export default function Form({ className }: FormProps) {
  const { register, formState, handleSubmit } = useForm()

  const [submitted, setSubmitted] = useState(false)
  const nodeRef = useRef(null)

  const onSubmit = async (data: Record<string, unknown> | undefined) => {
    toast
      .promise(
        emailjs.send(
          'service_gisb7ri',
          'template_soumy8q',
          data,
          'ElOBDEoEmFlNDQrc3',
        ),
        {
          pending: 'Sending Message... 📧',
          success: 'Message Sent 👌',
          error: 'Message failed to send 😢',
        },
      )
      .then(() => {
        setSubmitted(true)
      })
  }

  console.log(formState.errors)
  return (
    <div className={classNames(className, 'pt-0')}>
      {submitted ? (
        <div className='bg flex h-full flex-col items-center justify-center gap-3 p-10 text-center leading-7 tracking-wide'>
          <h2>Thank you for reaching out!</h2>
          <p>I will get back to you as soon as possible</p>
        </div>
      ) : (
        <div className='bg mt-12 flex h-full w-full flex-col justify-center gap-3 leading-7 tracking-wide'>
          <h2 className='flex w-full justify-center text-xl tracking-wider'>
            Send me a message
          </h2>
          <form className={styles.myForm} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label='Name'
              variant='outlined'
              fullWidth
              style={{
                borderColor: formState.errors.Name ? 'red' : '',
              }}
              {...register('from_name', {
                required: true,
                maxLength: 100,
              })}
              name='from_name'
              error={!!formState.errors.from_name}
              helperText={
                formState.errors.from_name && 'This field is required'
              }
              sx={{ mb: 3 }}
            />

            <TextField
              label='Email'
              variant='outlined'
              fullWidth
              style={{
                borderColor: formState.errors.Email ? 'red' : '',
              }}
              {...register('from_email', {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              name='from_email'
              sx={{ mb: 3 }}
              error={!!formState.errors.from_email}
              helperText={
                formState.errors.from_email
                  ? formState.errors.from_email.type == 'pattern'
                    ? 'Invalid email'
                    : 'This field is required'
                  : ''
              }
            />

            <TextField
              label='Message'
              variant='outlined'
              fullWidth
              multiline
              rows={4}
              {...register('message', { required: true, maxLength: 1000 })}
              name='message'
              error={!!formState.errors.message}
              helperText={
                formState.errors.message
                  ? formState.errors.message.type == 'required'
                    ? 'This field is required'
                    : 'Message is too long, 1000 characters max'
                  : ''
              }
              sx={{ mb: 3 }}
            />
            <div className='flex w-full items-end justify-end'>
              <button disabled={formState.isSubmitting}>Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
